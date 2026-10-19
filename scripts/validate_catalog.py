#!/usr/bin/env python3
"""
Validador de integridad para catalog.json
Verifica formato JSON, campos obligatorios y detecta duplicados antes de enviar un Pull Request.
"""
import json
import os
import sys

CATALOG_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "catalog.json")

def validate():
    if not os.path.exists(CATALOG_PATH):
        print(f"❌ Error: No se encontró catalog.json en {CATALOG_PATH}")
        sys.exit(1)

    print(f"🔍 Validando {CATALOG_PATH}...")
    try:
        with open(CATALOG_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"❌ Error de sintaxis JSON en catalog.json:\n   {e}")
        sys.exit(1)

    if not isinstance(data, list):
        print("❌ Error: catalog.json debe ser una lista de objetos.")
        sys.exit(1)

    print(f"📊 Total de registros encontrados: {len(data)}")

    seen_files = set()
    errors = 0
    warnings = 0

    required_fields = ["filename", "url", "title"]

    for idx, item in enumerate(data):
        fn = item.get("filename")
        if not fn:
            print(f"❌ Registro #{idx}: Falta el campo obligatorio 'filename'")
            errors += 1
            continue

        if fn in seen_files:
            print(f"⚠️ Advertencia: Archivo duplicado '{fn}' en la posición {idx}")
            warnings += 1
        seen_files.add(fn)

        for req in required_fields:
            if not item.get(req):
                print(f"❌ Archivo '{fn}': Falta o está vacío el campo obligatorio '{req}'")
                errors += 1

        title = item.get("title", "")
        if title in ["Malla Curricular Oficial", "o o o o", "o o o"]:
            print(f"⚠️ Advertencia: '{fn}' aún posee un título genérico pendiente por auditar: '{title}'")
            warnings += 1

    print("\n-------------------------------------------")
    if errors == 0:
        print(f"✅ ¡Validación exitosa! {len(data)} registros válidos.")
        if warnings > 0:
            print(f"ℹ️ Se registraron {warnings} advertencias menores que no impiden el commit.")
        sys.exit(0)
    else:
        print(f"❌ Se encontraron {errors} errores que deben corregirse antes de enviar el PR.")
        sys.exit(1)

if __name__ == "__main__":
    validate()
