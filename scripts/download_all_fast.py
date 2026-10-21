#!/usr/bin/env python3
"""
Descargador Rápido Multihilo de PDFs para UNELLEZ Pensums
--------------------------------------------------------
Descarga todos los PDFs faltantes en paralelo usando ThreadPoolExecutor.
No modifica catalog.json para no interferir con las ediciones del usuario.
"""

import os
import sys
import json
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_PATH = os.path.join(BASE_DIR, "catalog.json")
PDF_DIR = os.path.join(BASE_DIR, "pdf")

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def download_file(item):
    fn = item.get("filename")
    url = item.get("url")
    if not fn or not url:
        return {"status": "skipped", "filename": fn}

    target = os.path.join(PDF_DIR, fn)
    if os.path.exists(target) and os.path.getsize(target) > 500:
        return {"status": "exists", "filename": fn, "size": os.path.getsize(target)}

    temp_target = target + ".tmp"
    retries = 2
    for attempt in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
                if len(data) < 100:
                    return {"status": "error", "filename": fn, "error": "Archivo demasiado pequeño o corrupto"}
                with open(temp_target, "wb") as f:
                    f.write(data)
                os.replace(temp_target, target)
                return {"status": "downloaded", "filename": fn, "size": len(data)}
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return {"status": "404", "filename": fn}
            if attempt == retries:
                return {"status": "error", "filename": fn, "error": f"HTTP {e.code}"}
            time.sleep(1)
        except Exception as e:
            if attempt == retries:
                return {"status": "error", "filename": fn, "error": str(e)}
            time.sleep(1)
        finally:
            if os.path.exists(temp_target):
                try:
                    os.remove(temp_target)
                except OSError:
                    pass

    return {"status": "error", "filename": fn, "error": "Fallaron todos los intentos"}

def main():
    if not os.path.exists(CATALOG_PATH):
        print(f"❌ No se encontró catalog.json en {CATALOG_PATH}")
        sys.exit(1)

    os.makedirs(PDF_DIR, exist_ok=True)

    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog = json.load(f)

    total = len(catalog)
    print(f"🚀 Iniciando descarga multihilo para {total} documentos...")

    # Separar los que ya existen
    pending = []
    already_exist = 0
    for item in catalog:
        fn = item.get("filename")
        if not fn:
            continue
        p = os.path.join(PDF_DIR, fn)
        if os.path.exists(p) and os.path.getsize(p) > 500:
            already_exist += 1
        else:
            pending.append(item)

    print(f"📦 Existentes en pdf/: {already_exist} | Pendientes por descargar: {len(pending)}")
    if not pending:
        print("✅ ¡Todos los PDFs ya están descargados localmente!")
        return

    downloaded = 0
    not_found = 0
    errors = 0

    t_start = time.time()
    # Usar 8 hilos concurrentes para velocidad óptima
    with ThreadPoolExecutor(max_workers=8) as executor:
        future_to_fn = {executor.submit(download_file, item): item.get("filename") for item in pending}
        
        count = 0
        for future in as_completed(future_to_fn):
            count += 1
            res = future.result()
            fn = res.get("filename")
            st = res.get("status")

            if st == "downloaded":
                downloaded += 1
                size_kb = res.get("size", 0) // 1024
                print(f"[{count}/{len(pending)}] ✓ {fn} ({size_kb} KB)")
            elif st == "404":
                not_found += 1
                print(f"[{count}/{len(pending)}] ⚠️ 404 No encontrado en servidor: {fn}")
            elif st == "error":
                errors += 1
                print(f"[{count}/{len(pending)}] ❌ Error en {fn}: {res.get('error')}")

    elapsed = time.time() - t_start
    print("\n" + "=" * 50)
    print(f"🎉 Descarga completada en {elapsed:.1f} segundos:")
    print(f"   • Ya existían:           {already_exist}")
    print(f"   • Descargados ahora:     {downloaded}")
    print(f"   • 404 (No en servidor):  {not_found}")
    print(f"   • Errores de conexión:   {errors}")
    print(f"   • Total en disco en pdf/: {len(os.listdir(PDF_DIR))}")
    print("=" * 50)

if __name__ == "__main__":
    main()
