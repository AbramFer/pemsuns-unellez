# 🏛️ Explorador y Catálogo Comunitario de Pensums — UNELLEZ

[![Rama master](https://img.shields.io/badge/branch-master-brightgreen.svg)](https://github.com/AbramFer/pemsuns-unellez/tree/master)
[![Documentos Catalogados](https://img.shields.io/badge/documentos-505%20catalogados-blue.svg)](catalog.json)
[![Licencia](https://img.shields.io/badge/licencia-MIT%20%2F%20Abierta-orange.svg)](LICENSE)
[![Changelog](https://img.shields.io/badge/changelog-v1.3.0-purple.svg)](CHANGELOG.md)
[![Sin dependencias](https://img.shields.io/badge/stack-Vanilla%20HTML%2FCSS%2FJS-yellow.svg)](index.html)
[![Demo en Vivo](https://img.shields.io/badge/demo-GitHub%20Pages-success.svg)](https://abramfer.github.io/pemsuns-unellez/)


> [!TIP]
> 🌐 **Explorador en Vivo Disponible:**  
> Puedes consultar, buscar y visualizar todos los pensums oficiales directamente desde tu navegador sin instalar nada en:  
> 👉 **[https://abramfer.github.io/pemsuns-unellez/](https://abramfer.github.io/pemsuns-unellez/)**

---
Repositorio abierto y colaborativo para la **recuperación, indexación, auditoría y consulta interactiva** de los planes de estudio, mallas curriculares y especificaciones de subproyectos oficiales de la **Universidad Nacional Experimental de los Llanos Occidentales «Ezequiel Zamora» (UNELLEZ — *«La Universidad Que Siembra»*)**.

---

## 📖 Índice

1. [¿De qué trata este proyecto?](#-de-qué-trata-este-proyecto)
2. [Características Principales](#-características-principales)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Cómo Descargar y Ejecutar Localmente](#-cómo-descargar-y-ejecutar-localmente)
5. [Guía de Colaboración (Paso a Paso)](#-guía-de-colaboración-paso-a-paso)
   - [Paso 1: Fork y Clonación](#paso-1-fork-y-clonación)
   - [Paso 2: Crear una rama de trabajo](#paso-2-crear-una-rama-de-trabajo)
   - [Paso 3: Estructura de Datos en `catalog.json`](#paso-3-estructura-de-datos-en-catalogjson)
   - [Paso 4: Validar antes de enviar](#paso-4-validar-antes-de-enviar)
   - [Paso 5: Commit, Push y Pull Request](#paso-5-commit-push-y-pull-request)
6. [Scripts de Utilidad](#-scripts-de-utilidad)
7. [Normas de Calidad de Datos](#-normas-de-calidad-de-datos)
8. [Licencia y Créditos](#-licencia-y-créditos)

---

## 🎯 ¿De qué trata este proyecto?

En el servidor institucional de la universidad (`https://unellez.edu.ve/material/pensums/`), el listado de directorios público se encuentra deshabilitado (Error `403 Forbidden`) y los nombres de los archivos PDF siguen un formato codificado por marcas de tiempo Unix (`timestamp` + sufijo).

Mediante técnicas de ingeniería inversa, minería de Wayback Machine / Archive.org y análisis de metadatos, este proyecto:
1. **Identificó y rescató 505 documentos oficiales** (mallas curriculares completas y especificaciones de subproyectos).
2. **Construyó una base de datos abierta (`catalog.json`)** asociando cada PDF con su Carrera, Código de Asignatura, Semestre, Unidades Crédito (U.C.), Prelaciones y Componentes de Formación.
3. **Desarrolló una interfaz web moderna y ultrarrápida** para que cualquier estudiante o docente pueda buscar y previsualizar sus materias al instante sin depender de la estabilidad del servidor institucional.

---

## ✨ Características Principales

* ⚡ **Búsqueda en Tiempo Real:** Filtra instantáneamente por nombre de materia, código oficial (ej. `EA520130101`, `PFGLAAS...`), carrera, semestre o vicerrectorado.
* 🖥️ **Visor Modal Integrado:** Previsualiza el PDF completo directamente en la web sin obligar a descargas previas.
* 🏷️ **Filtros Rápidos por Categoría:** Ciencias del Agro y del Mar, Ciencias Sociales y Económicas, Educación, Ingeniería, Salud, etc.
* 🗂️ **Enlaces Duales:** Abre el archivo desde el servidor oficial de la UNELLEZ o desde el almacenamiento local si está descargado.
* 🚀 **Zero-Build (Sin Compiladores Pesados):** Desarrollado con **Vanilla HTML5, CSS3 moderno (Glassmorphism & Dark Mode) y JavaScript puro**. No requiere instalar librerías como Node, Webpack o Vite para funcionar.

---

## 📁 Estructura del Proyecto

```text
pemsuns-unellez/
├── index.html                               # Aplicación web y visor interactivo
├── catalog.json                             # Base de datos principal de todas las materias
├── README.md                                # Esta guía colaborativa
├── .gitignore                               # Exclusiones de archivos del sistema y temporales
├── css/
│   └── styles.css                           # Sistema de diseño, tema oscuro y estilos del visor
├── js/
│   └── app.js                              # Lógica de filtrado reactivo, teclado y modal
├── assets/                                  # Logos y elementos gráficos
├── pdf/                                     # Copias locales de los documentos PDF
├── scripts/
│   ├── validate_catalog.py                 # Validador de sintaxis y campos antes de hacer PR
│   ├── download_pdfs.py                    # Descargador masivo de los PDFs del catálogo
│   └── sync_local_pdfs.py                  # Sincronizador de archivos locales con catalog.json
├── catalogo_pensums_unellez.md             # Tabla markdown con los 501 documentos indexados
├── materias_administracion_agropecuaria.md  # Pensum detallado de Administración Agropecuaria
└── materias_economia_agricola.md            # Pensum detallado de Economía Agrícola (Semestres I al IX)
```

---

## 💻 Cómo Descargar y Ejecutar Localmente

### 1. Clonar el repositorio

Asegúrate de clonar la rama principal **`master`**:

```bash
git clone -b master https://github.com/AbramFer/pemsuns-unellez.git
cd pemsuns-unellez
```

### 2. Ejecutar la aplicación ("Compilación" / Servidor Local)

Dado que la aplicación lee el archivo `catalog.json` a través de la API `fetch()`, el navegador requiere que la página se sirva bajo el protocolo HTTP/HTTPS (no abras el archivo directamente con doble clic `file://` para evitar bloqueos de CORS del navegador).

Puedes usar cualquiera de estas opciones:

#### Opción A: Con Python 3 (La más fácil, sin dependencias)
```bash
python3 -m http.server 8080
```
Luego abre en tu navegador: **[http://localhost:8080](http://localhost:8080)**

#### Opción B: Con Laravel Herd (macOS / Windows)
Si utilizas **Laravel Herd**, simplemente mantén la carpeta en tu directorio `~/Herd/unellezpensum/` y visita:
**`http://unellezpensum.test`**

#### Opción C: Con VS Code (Extensión Live Server)
1. Abre la carpeta en Visual Studio Code.
2. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

#### Opción D: Con Node / npx
```bash
npx serve .
```

---

## 🤝 Guía de Colaboración (Paso a Paso)

¡Toda contribución es bienvenida! Puedes colaborar corrigiendo nombres de materias, completando datos de semestres, reportando programas que falten o añadiendo nuevas carreras.

> [!IMPORTANT]
> **La rama oficial para recibir aportes es `master`.** Todos los Pull Requests deben apuntar a esta rama.

### Paso 1: Fork y Clonación
1. Haz clic en el botón **Fork** en la esquina superior derecha del repositorio en GitHub.
2. Clona tu fork localmente:
   ```bash
   git clone -b master https://github.com/TU_USUARIO/pemsuns-unellez.git
   cd pemsuns-unellez
   ```

### Paso 2: Crear una rama de trabajo
Nunca trabajes directamente sobre `master` en tu copia local. Crea una rama descriptiva:
```bash
git checkout -b feature/agregar-turismo-agroecologico
# o para correcciones:
git checkout -b fix/corregir-codigo-derecho
```

### Paso 3: Estructura de Datos en `catalog.json`
El corazón del proyecto es [`catalog.json`](catalog.json). Cada documento se representa como un objeto con el siguiente formato estandarizado:

```json
{
  "filename": "15622222722.pdf",
  "url": "https://unellez.edu.ve/material/pensums/15622222722.pdf",
  "timestamp": 1562222272,
  "date_str": "04 Jul 2019",
  "year": "2019",
  "pages": 1,
  "title": "MATEMÁTICA I (EA520130101) — Semestre I",
  "subproyecto": "MATEMÁTICA I",
  "codigo": "EA520130101",
  "semestre": "I",
  "carrera": "Economía Agrícola",
  "vicerrectorado": "Producción Agrícola (VPA)",
  "category": "Producción Agrícola y Agropecuaria",
  "componente": "Formación General",
  "proyecto": "Métodos Cuantitativos",
  "prelacion": "Ninguna",
  "uc": 4,
  "has_local": true,
  "local_url": "pdf/15622222722.pdf",
  "status": "OK"
}
```

#### Descripción de campos:
* `filename` *(obligatorio)*: Nombre del archivo PDF (ej. `15622222722.pdf`).
* `url` *(obligatorio)*: Enlace original en el servidor UNELLEZ.
* `title` *(obligatorio)*: Título mostrado en las tarjetas del buscador (se recomienda: `NOMBRE (CÓDIGO) — Semestre X`).
* `subproyecto`: Nombre formal del subproyecto o asignatura en mayúsculas.
* `codigo`: Código curricular oficial asignado por la UNELLEZ (ej. `EA520130101`).
* `semestre`: Número romano del semestre al que pertenece (`I`, `II`, `III`, etc.).
* `carrera`: Nombre formal de la carrera (ej. `Economía Agrícola`, `Derecho`, `Ingeniería Informática`).
* `vicerrectorado`: `VPA` (Portuguesa), `VPDS` (Barinas), `VIPI` (Cojedes) o `VPDR` (Apure).
* `category`: Categoría temática para los filtros del encabezado.
* `componente`: Componente de formación (ej. `Formación General`, `Formación Profesional Básica`, etc.).
* `prelacion`: Asignaturas que requiere aprobadas previamente (o `"Ninguna"`).
* `uc`: Número de Unidades Crédito.

### Paso 4: Validar antes de enviar
Antes de guardar y enviar tus cambios, ejecuta el validador automático incluido en el repositorio para asegurarte de que el JSON no contenga errores de sintaxis ni falten campos:

```bash
python3 scripts/validate_catalog.py
```

Si todo está correcto, verás:
```text
🔍 Validando catalog.json...
📊 Total de registros encontrados: 501
✅ ¡Validación exitosa! 501 registros válidos.
```

### Paso 5: Commit, Push y Pull Request

1. Añade los archivos modificados:
   ```bash
   git add catalog.json
   # Si agregaste o renombraste PDFs en pdf/:
   git add pdf/
   ```

2. Haz un commit con un mensaje claro y descriptivo (siguiendo estilo convencional):
   ```bash
   git commit -m "feat(pensum): agregar especificaciones curriculares de Turismo Agroecológico"
   # o:
   git commit -m "fix(metadata): corregir prelación y UC de Subproyecto de Contabilidad"
   ```

3. Sube la rama a tu fork en GitHub:
   ```bash
   git push origin feature/agregar-turismo-agroecologico
   ```

4. Ve a tu repositorio en GitHub y haz clic en **"Compare & pull request"**.
5. Asegúrate de que el destino sea la rama **`master`** del repositorio principal `AbramFer/pemsuns-unellez`.
6. Describe brevemente los cambios realizados y envía el Pull Request.

---

## 🛠️ Scripts de Utilidad

El repositorio incluye herramientas escritas en Python para facilitar la administración:

### 1. `python3 scripts/validate_catalog.py`
Analiza la sintaxis de `catalog.json`, verifica campos obligatorios y detecta duplicados o títulos genéricos pendientes.

### 2. `python3 scripts/download_pdfs.py`
Lee todos los enlaces oficiales registrados en `catalog.json` y descarga de manera secuencial los archivos PDF a la carpeta local `pdf/`. Ideal para quien desee tener una réplica sin conexión de todo el acervo documental.

### 3. `python3 scripts/sync_local_pdfs.py`
Escanea la carpeta local `pdf/` y actualiza automáticamente los atributos `has_local` y `local_url` en `catalog.json` para cada archivo que esté presente en el disco. Úsalo cada vez que descargues o agregues nuevos PDFs para que el catálogo y el visor web reconozcan inmediatamente las copias locales sin depender de la estabilidad del servidor institucional.


---

## 📐 Normas de Calidad de Datos

Para mantener la seriedad y confiabilidad del repositorio:
1. **Fidelidad al documento original:** Toda información (código, horas, prelación, unidades de crédito) debe coincidir con el sello y texto de la Comisión Central de Currículo de la UNELLEZ.
2. **Mayúsculas y acentuación:** Los nombres de los subproyectos deben redactarse en mayúsculas sostenidas oficiales con sus tildes correspondientes (ej. `PLANIFICACIÓN AGRÍCOLA`, `MICROECONOMÍA I`).
3. **Códigos Curriculares:** Los códigos suelen seguir el estándar UNELLEZ (dos letras de carrera + números indicando componente y semestre, ej. `EA520110101`). Respeta la nomenclatura exacta.

---

## 📄 Licencia y Comunidad

Este proyecto es una iniciativa comunitaria, educativa y sin fines de lucro bajo licencia **MIT**. Su único objetivo es facilitar el acceso libre y transparente a la información académica de la universidad para toda la comunidad estudiantil, docente y de egresados.

¡Gracias por sembrar educación y conocimiento libre! 🌱🏛️
