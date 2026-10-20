#!/usr/bin/env python3
"""
Sincronizador automático de archivos locales para catalog.json
Escanea la carpeta pdf/ y actualiza los campos has_local y local_url en catalog.json.
"""
import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_PATH = os.path.join(BASE_DIR, "catalog.json")
PDF_DIR = os.path.join(BASE_DIR, "pdf")

def sync():
    if not os.path.exists(CATALOG_PATH):
        print(f"❌ Error: No se encontró catalog.json en {CATALOG_PATH}")
        sys.exit(1)

    if not os.path.exists(PDF_DIR):
        print(f"❌ Error: No existe la carpeta {PDF_DIR}")
        sys.exit(1)

    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog = json.load(f)

    pdf_files = set(f for f in os.listdir(PDF_DIR) if f.endswith(".pdf"))
    print(f"📁 Total de archivos PDF encontrados en pdf/: {len(pdf_files)}")

    updated_count = 0
    total_local = 0

    for item in catalog:
        fn = item.get("filename")
        if not fn:
            continue

        file_exists = fn in pdf_files and os.path.getsize(os.path.join(PDF_DIR, fn)) > 0

        previous_has_local = item.get("has_local", False)
        item["has_local"] = file_exists
        item["local_url"] = f"pdf/{fn}" if file_exists else None

        if file_exists:
            total_local += 1

        if previous_has_local != file_exists:
            updated_count += 1

    with open(CATALOG_PATH, "w", encoding="utf-8") as f:
        json.dump(catalog, f, ensure_ascii=False, indent=2)

    print("\n-------------------------------------------")
    print(f"✅ Sincronización completada:")
    print(f"   • Total documentos en catálogo: {len(catalog)}")
    print(f"   • Documentos con copia local:  {total_local}")
    print(f"   • Registros actualizados:       {updated_count}")

if __name__ == "__main__":
    sync()
