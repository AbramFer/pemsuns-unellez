# 📋 Registro de Cambios (Changelog)

Todos los cambios notables en el proyecto **UNELLEZ Pensums** se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto sigue el esquema de [Versionado Semántico (SemVer)](https://semver.org/lang/es/).

---

## [1.3.0] - 2026-10-21

### 🚀 Novedades y Descubrimientos
- **Ampliación del catálogo a 505 asignaturas:** Descubrimiento algorítmico mediante barrido temporal segundo a segundo en el servidor institucional de la UNELLEZ de **4 nuevos programas analíticos oficiales** previamente no indexados:
  - `15797925463.pdf`: *ADMINISTRACIÓN DE RECURSOS HUMANOS* (Lic. en Administración, Semestre V, Código `LA430120705`, 3 UC, 4 Horas).
  - `16439850686.pdf`: *PROYECTO SOCIOINTEGRADOR: IV-A* (Lic. en Orientación, Semestre VII, Código `PFGLOSVIISP6-PSI-IV-A`, 5 UC, 7 Horas).
  - `16510707925.pdf`: *ANATOMIA HUMANA I* (Lic. en Enfermería, Semestre III, Código `PFGLESIIISP5`, 4 UC, 6 Horas).
  - `16510707926.pdf`: *INGLÉS II* (Lic. en Enfermería, Semestre III, Código `PFGLESIISP6`, 4 UC, 6 Horas).
- **Descarga masiva y disponibilidad local del 98.4%:** Descargados exitosamente **497 archivos PDF** en la carpeta local [`pdf/`](file:///Users/abraham/Herd/unellezpensum/pdf/) con su nomenclatura oficial inalterada, permitiendo la consulta completamente offline sin depender de la estabilidad del servidor universitario.
- **Herramientas de sincronización paralela:** Creación de `scripts/download_all_fast.py` con descarga multihilo (`ThreadPoolExecutor`) que permite descargar cientos de documentos en segundos.
- **Editor Privado Asistido:** Implementación local de herramientas de edición rápida y extracción heurística asistida por IA/PDFKit para acelerar la auditoría curricular de las asignaturas pendientes.

### 🐛 Correcciones de Errores (Bug Fixes)
- **Renderizado de tarjetas en catálogo:** Corregido error de sintaxis en `js/app.js` (cierre de bloque en `getCategoryClass`) que impedía la inicialización del listado en navegadores estrictos.
- **Resiliencia en el visor modal:** Mejorado el manejo de documentos cuando el servidor remoto `unellez.edu.ve` experimenta caídas de red o tiempo de espera agotado.
- **Actualización de asignaturas:** Asignación y normalización de datos curriculares en materias clave (ej. Química, Anatomía, Administración, Contabilidad).

---

## [1.2.0] - 2026-10-20

### 🧹 Limpieza y Optimización
- **Depuración de archivos duplicados:** Eliminación de 93 copias redundantes con nombres no numéricos en `pdf/`, manteniendo únicamente los identificadores oficiales basados en marcas de tiempo.
- **Descargas con nombres amigables:** Configuración dinámica del atributo `download` en los enlaces del visor para que los usuarios descarguen los archivos con el formato legible `[Código] - [Nombre Asignatura].pdf` en lugar del timestamp crudo.
- **Sincronización automática de estado local:** Script `scripts/sync_local_pdfs.py` para verificar existencia física y asignar `has_local` y `local_url` de forma consistente en `catalog.json`.

---

## [1.1.0] - 2026-10-20

### ✨ Mejoras Curriculares
- **Estandarización de esquema de datos:** Normalización de todas las entradas de `catalog.json` bajo la jerarquía oficial universitaria:
  - `vicerrectorado`, `programa`, `subprograma`, `proyecto`, `subproyecto`
  - `codigo`, `semestre`, `uc` / `unidades_creditos`, `horas_semanales`, `prelaciones` / `prelacion`
- **Soporte visual en interfaz:** Visualización de etiquetas de código de barras, unidades de crédito y semestres en las vistas de cuadrícula y tabla.

---

## [1.0.1] - 2026-10-20

### 🛡️ Calidad y Colaboración
- **Validación automatizada:** Creación del script `scripts/validate_catalog.py` para asegurar integridad sintáctica, campos obligatorios y detección de duplicados en futuras contribuciones.
- **Guía completa para colaboradores:** Documentación exhaustiva en `README.md` explicando la estructura JSON, pasos para Pull Requests y normas de calidad.
- **Exclusiones de Git:** Configuración de `.gitignore` para herramientas locales, temporales y entornos de desarrollo.

---

## [1.0.0] - 2026-10-19

### 🎉 Lanzamiento Inicial
- Lanzamiento de la plataforma comunitaria con interfaz Zero-Build (Vanilla HTML5, CSS3 Glassmorphism y JavaScript puro).
- Catálogo indexado con más de 500 documentos oficiales recuperados.
- Búsqueda en tiempo real, filtros por áreas académicas y visor modal embebido.
