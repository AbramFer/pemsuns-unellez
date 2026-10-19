#!/usr/bin/env python3
"""
Descargador automatizado de PDFs para colaboradores.
Lee catalog.json y descarga los PDFs faltantes en la carpeta local pdf/.
"""
import json
import os
import subprocess
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_PATH = os.path.join(BASE_DIR, "catalog.json")
PDF_DIR = os.path.join(BASE_DIR, "pdf")

def main():
    if not os.path.exists(CATALOG_PATH):
        print(f"❌ No se encontró catalog.json en {CATALOG_PATH}")
        sys.exit(1)

    os.makedirs(PDF_DIR, exist_ok=True)

    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog = json.load(f)

    total = len(catalog)
    print(f"📥 Verificando {total} documentos...")

    downloaded = 0
    already_exist = 0
    failed = 0

    for idx, item in enumerate(catalog, 1):
        fn = item.get("filename")
        url = item.get("url")
        if not fn or not url:
            continue

        target_file = os.path.join(PDF_DIR, fn)
        if os.path.exists(target_file) and os.path.getsize(target_file) > 0:
            already_exist += 1
            continue

        print(f"[{idx}/{total}] Descargando {fn}...")
        cmd = ["curl", "-s", "-f", "-o", target_file, url]
        res = subprocess.run(cmd)

        if res.returncode == 0 and os.path.exists(target_file) and os.path.getsize(target_file) > 0:
            downloaded += 1
        else:
            print(f"⚠️ Falló descarga: {fn}")
            failed += 1

    print("\n-------------------------------------------")
    print(f"✅ Proceso finalizado:")
    print(f"   • Ya existían localmente: {already_exist}")
    print(f"   • Descargados ahora:     {downloaded}")
    print(f"   • Fallidos/No accesibles:{failed}")

if __name__ == "__main__":
    main()
