# Catálogo y Análisis de Archivos: UNELLEZ Pensums (Actualizado)

> [!IMPORTANT]
> **Actualización por deducción algorítmica:** Mediante análisis de lotes temporales (*Batch Fuzzing*), hemos descubierto **199 archivos activos adicionales** que nunca antes habían sido indexados. El catálogo cuenta ahora con **493 archivos activos descargables**.

## 1. ¿Por qué no se puede hacer un bucle de 1 a 16 mil millones?

El identificador del archivo no es un contador simple ($1, 2, 3, \dots$). Está compuesto por:

$$\text{Nombre} = \underbrace{\text{XXXXXXXXXX}}_{\text{Timestamp Unix (10 dígitos)}} + \underbrace{\text{Y}}_{\text{Sufijo (1 dígito)}} + \text{.pdf}$$

Un barrido secuencial desde `1.pdf` hasta `16521016062.pdf` implicaría realizar **más de 16.500 millones de solicitudes HTTP**:
- A una velocidad agresiva de 100 consultas por segundo, tomaría **5.2 años ininterrumpidos**.
- El servidor web de la universidad colapsaría o bloquearía tu dirección IP en menos de un minuto.
- Los timestamps previos a julio de 2019 (inferiores a `1562222272`) ni siquiera existían en este servidor.

## 2. El método inteligente: Reconstrucción de Lotes

Los docentes o administradores suben los programas académicos por lotes semestrales (de 5 a 8 materias simultáneas) en el mismo segundo o minuto:
Al tomar cada marca de tiempo confirmada y probar los sufijos del `1` al `9`, hemos recuperado los programas completos de los semestres de casi todas las carreras.

Por ejemplo, tu archivo original **`16510735984.pdf`** era solo una materia de su lote. Al aplicar esta técnica, aparecieron inmediatamente sus compañeras:
- `16510735982.pdf`: Psicología en Salud (21 págs)
- `16510735983.pdf`: Estadística Básica y Medios Tecnológicos (14 págs)
- **`16510735984.pdf`**: *Investigación y Acción Participativa (Tu enlace original)*
- `16510735985.pdf`: Educación Física, Cultura y Deporte (16 págs)
- `16510735986.pdf`: Vivencial I. Contexto Socio Profesional del Enfermero (22 págs)
- `16510735987.pdf`: Práctica Profesional de Enfermería (21 págs)

---

## 3. Directorio Completo (493 Archivos Activos)

| Archivo | Fecha de Subida | Págs | Tipo | Subproyecto / Materia / Carrera | Enlace Directo |
| :--- | :--- | :---: | :--- | :--- | :---: |
| `16510707911.pdf` | 2022-04-27 10:46 | 19 | Contenido (19p) | Bioquímica — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16510707911.pdf) |
| `16510707912.pdf` | 2022-04-27 10:46 | 30 | Contenido (30p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16510707912.pdf) |
| `16510707913.pdf` | 2022-04-27 10:46 | 35 | Contenido (35p) | Vivencial III.PROCEDIMIENTOS EN ENFERMERIA. — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16510707913.pdf) |
| `16480429552.pdf` | 2022-03-23 09:42 | 13 | Contenido (13p) | SEMINARIO IV — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16480429552.pdf) |
| `16480429551.pdf` | 2022-03-23 09:42 | 14 | Contenido (14p) | Universidad Nacional Experimental De los Llanos Occidentales — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16480429551.pdf) |
| `16480429553.pdf` | 2022-03-23 09:42 | 17 | Contenido (17p) | ETNOBOTÁNICA II — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16480429553.pdf) |
| `16480429554.pdf` | 2022-03-23 09:42 | 12 | Contenido (12p) | GENÉTICA VEGETAL — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16480429554.pdf) |
| `16480429555.pdf` | 2022-03-23 09:42 | 14 | Contenido (14p) | LABORATORIO DE MICOLOGÍA | [Descargar PDF](https://unellez.edu.ve/material/pensums/16480429555.pdf) |
| `16480429556.pdf` | 2022-03-23 09:42 | 15 | Contenido (15p) | Universidad Nacional Experimental De los Llanos Occidentales — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16480429556.pdf) |
| `16439850672.pdf` | 2022-02-04 10:31 | 26 | Contenido (26p) | PRÁCTICA III — (DE GRADO O CARRERA) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16439850672.pdf) |
| `16439850673.pdf` | 2022-02-04 10:31 | 19 | Contenido (19p) | Gerencia de las Emociones y Calidad de Vida — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16439850673.pdf) |
| `16439850671.pdf` | 2022-02-04 10:31 | 21 | Contenido (21p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16439850671.pdf) |
| `16439850674.pdf` | 2022-02-04 10:31 | 21 | Contenido (21p) | Universidad Nacional Experimental De los Llanos Occidentales — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16439850674.pdf) |
| `16439850675.pdf` | 2022-02-04 10:31 | 25 | Contenido (25p) | DISEÑO DE TÉCNICAS E INSTRUMENTOS EN ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16439850675.pdf) |
| `16430327205.pdf` | 2022-01-24 09:58 | 17 | Contenido (17p) | PRÁCTICA I | [Descargar PDF](https://unellez.edu.ve/material/pensums/16430327205.pdf) |
| `16430327206.pdf` | 2022-01-24 09:58 | 17 | Contenido (17p) | GRUPO DE ELECTIVAS IV | [Descargar PDF](https://unellez.edu.ve/material/pensums/16430327206.pdf) |
| `16430327207.pdf` | 2022-01-24 09:58 | 28 | Contenido (28p) | PROYECTO SOCIOINTEGRADOR | [Descargar PDF](https://unellez.edu.ve/material/pensums/16430327207.pdf) |
| `16430327201.pdf` | 2022-01-24 09:58 | 24 | Contenido (24p) | Universidad Nacional Experimental De los Llanos Occidentales — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16430327201.pdf) |
| `16430327202.pdf` | 2022-01-24 09:58 | 20 | Contenido (20p) | ORIENTACIÓN VOCACIONAL E INSERCIÓN SOCIO PRODUCTIVO — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16430327202.pdf) |
| `16430327203.pdf` | 2022-01-24 09:58 | 20 | Contenido (20p) | APRENDIZAJE, MÉTODOS DE ESTUDIO Y CONDUCCIÓN DE GRUPOS — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16430327203.pdf) |
| `16430327204.pdf` | 2022-01-24 09:58 | 19 | Contenido (19p) | ORIENTACIÓN Y SEXUALIDAD — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16430327204.pdf) |
| `16426034741.pdf` | 2022-01-19 10:44 | 11 | Contenido (11p) | taller II que configuran el — (S DE ORIENTACIÓN) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16426034741.pdf) |
| `16426034742.pdf` | 2022-01-19 10:44 | 20 | Contenido (20p) | Psicología del Niño, Niña, Adolescente y Adulto — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16426034742.pdf) |
| `16426034743.pdf` | 2022-01-19 10:44 | 13 | Contenido (13p) | ESTADÍSTICA DE INVESTIGACIÓN EN ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16426034743.pdf) |
| `16426034745.pdf` | 2022-01-19 10:44 | 14 | Contenido (14p) | ELECTIVA III — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16426034745.pdf) |
| `16426034744.pdf` | 2022-01-19 10:44 | 13 | Contenido (13p) | s de Taller II y Proyecto Sociointegrador II-B y Diseño de — (Ciencias de la Sal... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16426034744.pdf) |
| `16426034746.pdf` | 2022-01-19 10:44 | 13 | Contenido (13p) | s de vivencial IV y taller II que configuran El — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16426034746.pdf) |
| `16425974972.pdf` | 2022-01-19 09:04 | 29 | Contenido (29p) | SEMINARIOII — (DE GRADO O CARRERA) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16425974972.pdf) |
| `16425974971.pdf` | 2022-01-19 09:04 | 19 | Contenido (19p) | DISEÑO Y DESARROLLO DE MODELOS DE ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16425974971.pdf) |
| `16425974973.pdf` | 2022-01-19 09:04 | 16 | Contenido (16p) | Universidad Nacional Experimental De los Llanos Occidentales — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16425974973.pdf) |
| `16425974974.pdf` | 2022-01-19 09:04 | 12 | Contenido (12p) | PLANIFICACIÓN E INTERVENCIÓN EN ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16425974974.pdf) |
| `16425974976.pdf` | 2022-01-19 09:04 | 19 | Contenido (19p) | s del año y — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16425974976.pdf) |
| `16420003771.pdf` | 2022-01-12 11:12 | 8 | Contenido (8p) | Teoría y Práctica de la comunicación y el Lenguaje — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16420003771.pdf) |
| `16420003774.pdf` | 2022-01-12 11:12 | 17 | Contenido (17p) | INVESTIGACIÓN Y ACCIÓN PARTICIPATIVA — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16420003774.pdf) |
| `16420003775.pdf` | 2022-01-12 11:12 | 15 | Contenido (15p) | Geografía e Historia de Venezuela. — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16420003775.pdf) |
| `16420003777.pdf` | 2022-01-12 11:12 | 23 | Contenido (23p) | PROYECTO SOCIOINTEGRADOR I -A | [Descargar PDF](https://unellez.edu.ve/material/pensums/16420003777.pdf) |
| `16420003772.pdf` | 2022-01-12 11:12 | 8 | Contenido (8p) | MATEMÁTICA GENERAL — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16420003772.pdf) |
| `16420003773.pdf` | 2022-01-12 11:12 | 15 | Contenido (15p) | PSICOLOGÍA DEL DESARROLLO Y EL APRENDIZAJE — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16420003773.pdf) |
| `16420003776.pdf` | 2022-01-12 11:12 | 20 | Contenido (20p) | Universidad Nacional Experimental De los Llanos Occidentales | [Descargar PDF](https://unellez.edu.ve/material/pensums/16420003776.pdf) |
| `16394067071.pdf` | 2021-12-13 10:45 | 20 | Contenido (20p) | TALLER III — (Licenciatura en Orientación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394067071.pdf) |
| `16394067072.pdf` | 2021-12-13 10:45 | 18 | Contenido (18p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394067072.pdf) |
| `16394067073.pdf` | 2021-12-13 10:45 | 18 | Contenido (18p) | MODELOS DE INTERVENCIÓN EN ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394067073.pdf) |
| `16394067074.pdf` | 2021-12-13 10:45 | 17 | Contenido (17p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394067074.pdf) |
| `16394067075.pdf` | 2021-12-13 10:45 | 22 | Contenido (22p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (S E INSTRUMENTOS... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394067075.pdf) |
| `16394038933.pdf` | 2021-12-13 09:58 | 16 | Contenido (16p) | VIVENCIAL III | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394038933.pdf) |
| `16394038935.pdf` | 2021-12-13 09:58 | 12 | Contenido (12p) | ELECTIVAS II | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394038935.pdf) |
| `16394038931.pdf` | 2021-12-13 09:58 | 19 | Contenido (19p) | DISEÑO Y DESARROLLO DE MODELOS DE ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394038931.pdf) |
| `16394038932.pdf` | 2021-12-13 09:58 | 29 | Contenido (29p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394038932.pdf) |
| `16394038934.pdf` | 2021-12-13 09:58 | 12 | Contenido (12p) | PLANIFICACIÓN E INTERVENCIÓN EN ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394038934.pdf) |
| `16394038936.pdf` | 2021-12-13 09:58 | 19 | Contenido (19p) | s del año y — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16394038936.pdf) |
| `16383701944.pdf` | 2021-12-01 10:49 | 15 | Contenido (15p) | Taller I | [Descargar PDF](https://unellez.edu.ve/material/pensums/16383701944.pdf) |
| `16383701945.pdf` | 2021-12-01 10:49 | 8 | Contenido (8p) | VIVENCIAL II | [Descargar PDF](https://unellez.edu.ve/material/pensums/16383701945.pdf) |
| `16383701946.pdf` | 2021-12-01 10:49 | 13 | Contenido (13p) | Ecología y Ambiente — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16383701946.pdf) |
| `16383701941.pdf` | 2021-12-01 10:49 | 12 | Contenido (12p) | s pertenecientes al mismo — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16383701941.pdf) |
| `16383701942.pdf` | 2021-12-01 10:49 | 15 | Contenido (15p) | ACTIVIDAD FÍSICA, CULTURA Y DEPORTE — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16383701942.pdf) |
| `16383701943.pdf` | 2021-12-01 10:49 | 14 | Contenido (14p) | DEONTOLOGÍA Y LEGISLACIÓN EN ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16383701943.pdf) |
| `16383701947.pdf` | 2021-12-01 10:49 | 15 | Contenido (15p) | Unidad curricular — (S DE ORIENTACIÓN EN SALUD.) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16383701947.pdf) |
| `16381953823.pdf` | 2021-11-29 10:16 | 8 | Contenido (8p) | MATEMÁTICA GENERAL ubicado en el primer semestre del — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16381953823.pdf) |
| `16381953821.pdf` | 2021-11-29 10:16 | 23 | Contenido (23p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16381953821.pdf) |
| `16381953822.pdf` | 2021-11-29 10:16 | 8 | Contenido (8p) | TEORIA Y PRÁCTICA DE LA COMUNICACIÓN Y EL LENGUAJE — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16381953822.pdf) |
| `16381953824.pdf` | 2021-11-29 10:16 | 15 | Contenido (15p) | PSICOLOGÍA DEL DESARROLLO Y EL APRENDIZAJE — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16381953824.pdf) |
| `16381953825.pdf` | 2021-11-29 10:16 | 17 | Contenido (17p) | INVESTIGACIÓN Y ACCIÓN PARTICIPATIVA — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16381953825.pdf) |
| `16381953826.pdf` | 2021-11-29 10:16 | 15 | Contenido (15p) | GEOGRAFÍA E HISTORIA DE VENEZUELA — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16381953826.pdf) |
| `16381953827.pdf` | 2021-11-29 10:16 | 20 | Contenido (20p) | Universidad Nacional Experimental De los Llanos Occidentales | [Descargar PDF](https://unellez.edu.ve/material/pensums/16381953827.pdf) |
| `16371559761.pdf` | 2021-11-17 09:32 | 20 | Contenido (20p) | TALLER III — (Licenciatura en Orientación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16371559761.pdf) |
| `16371559762.pdf` | 2021-11-17 09:32 | 18 | Contenido (18p) | PRÁCTICA II — (Licenciatura en Orientación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16371559762.pdf) |
| `16371559763.pdf` | 2021-11-17 09:32 | 18 | Contenido (18p) | Orientación para el emprendimiento — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16371559763.pdf) |
| `16371559764.pdf` | 2021-11-17 09:32 | 18 | Contenido (18p) | MODELOS DE INTERVENCIÓN EN ORIENTACIÓN — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16371559764.pdf) |
| `16371559765.pdf` | 2021-11-17 09:32 | 17 | Contenido (17p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (Ciencias de la S... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16371559765.pdf) |
| `16371559766.pdf` | 2021-11-17 09:32 | 22 | Contenido (22p) | UNELLEZ Universidad Nacional Experimental De los Llanos Occi — (S E INSTRUMENTOS... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16371559766.pdf) |
| `16366377861.pdf` | 2021-11-11 09:36 | 15 | Contenido (15p) | ACTIVIDAD FÍSICA, CULTURA Y DEPORTE — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16366377861.pdf) |
| `16366377862.pdf` | 2021-11-11 09:36 | 14 | Contenido (14p) | Deontología y legislación en Orientación. — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16366377862.pdf) |
| `16366377864.pdf` | 2021-11-11 09:36 | 8 | Contenido (8p) | VIVENCIAL II | [Descargar PDF](https://unellez.edu.ve/material/pensums/16366377864.pdf) |
| `16366377865.pdf` | 2021-11-11 09:36 | 13 | Contenido (13p) | Ecología y Ambiente — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16366377865.pdf) |
| `16366377867.pdf` | 2021-11-11 09:36 | 12 | Contenido (12p) | s pertenecientes al mismo semestre del plan de estudio del — (Ciencias de la Sal... | [Descargar PDF](https://unellez.edu.ve/material/pensums/16366377867.pdf) |
| `16366377863.pdf` | 2021-11-11 09:36 | 15 | Contenido (15p) | TALLER DE INVESTIGACIÓN SOCIAL. — (Ciencias de la Salud) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16366377863.pdf) |
| `16366377866.pdf` | 2021-11-11 09:36 | 15 | Contenido (15p) | Unidad curricular — (S DE ORIENTACIÓN EN SALUD.) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16366377866.pdf) |
| `16297279062.pdf` | 2021-08-23 10:11 | 1 | Malla (Pensum) | UC HT HP — (61) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16297279062.pdf) |
| `16297279063.pdf` | 2021-08-23 10:11 | 1 | Malla (Pensum) | UC HT HP — (61) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16297279063.pdf) |
| `16291299263.pdf` | 2021-08-16 12:05 | 1 | Malla (Pensum) | UC HT HP — (69) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291299263.pdf) |
| `16291295173.pdf` | 2021-08-16 11:58 | 1 | Malla (Pensum) | UC HT HP — (69) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291295173.pdf) |
| `16291290373.pdf` | 2021-08-16 11:50 | 1 | Malla (Pensum) | UC HT HP — (69) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291290373.pdf) |
| `16291252963.pdf` | 2021-08-16 10:48 | 1 | Malla (Pensum) | UC HT HP — (69) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291252963.pdf) |
| `16291250424.pdf` | 2021-08-16 10:44 | 1 | Malla (Pensum) | UC HT HP — (69) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291250424.pdf) |
| `16291246521.pdf` | 2021-08-16 10:37 | 1 | Malla (Pensum) | UC HT HP — (69) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291246521.pdf) |
| `16291220893.pdf` | 2021-08-16 09:54 | 1 | Malla (Pensum) | UC HT HP — (61) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291220893.pdf) |
| `16291217731.pdf` | 2021-08-16 09:49 | 1 | Malla (Pensum) | UC HT HP — (61) | [Descargar PDF](https://unellez.edu.ve/material/pensums/16291217731.pdf) |
| `15820383342.pdf` | 2020-02-18 11:05 | 7 | Contenido (7p) | OFICINA DE PLANIFICACIÓN Y EVALUACIÓN INSTITUCIONAL REPUBLIC | [Descargar PDF](https://unellez.edu.ve/material/pensums/15820383342.pdf) |
| `15820383341.pdf` | 2020-02-18 11:05 | 4 | Contenido (4p) | OFICINA DE PLANIFICACIÓ N Y EVALUACIÓN INSTITUCIONA REPUBLIC | [Descargar PDF](https://unellez.edu.ve/material/pensums/15820383341.pdf) |
| `15820383343.pdf` | 2020-02-18 11:05 | 8 | Contenido (8p) | OFICINA DE PLANIFICACIÓN Y EVALUACIÓN INSTITUCIONAL REPUBLIC | [Descargar PDF](https://unellez.edu.ve/material/pensums/15820383343.pdf) |
| `15819535092.pdf` | 2020-02-17 11:31 | 12 | Contenido (12p) | INVESTIGACIÓN DE OPERACIONES — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819535092.pdf) |
| `15819535091.pdf` | 2020-02-17 11:31 | 9 | Contenido (9p) | ETICA Y DOCENCIA — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819535091.pdf) |
| `15819535093.pdf` | 2020-02-17 11:31 | 6 | Contenido (6p) | PRESUPUESTO EMPRESARIAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819535093.pdf) |
| `15819525591.pdf` | 2020-02-17 11:15 | 19 | Contenido (19p) | PRESUPUESTO — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819525591.pdf) |
| `15819525592.pdf` | 2020-02-17 11:15 | 24 | Contenido (24p) | SISTEMAS ADMINISTRATIVOS Y CONTABLES — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819525592.pdf) |
| `15819525593.pdf` | 2020-02-17 11:15 | 11 | Contenido (11p) | TRIBUTACIÓN II — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819525593.pdf) |
| `15819501621.pdf` | 2020-02-17 10:36 | 8 | Contenido (8p) | DESARROLLO PERSONAL Y PROFESIONAL. — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819501621.pdf) |
| `15819500361.pdf` | 2020-02-17 10:33 | 10 | Contenido (10p) | COMUNICACIÓN, VALORES Y RELACIONES INTERPERSONALES — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15819500361.pdf) |
| `15815214531.pdf` | 2020-02-12 11:30 | 17 | Contenido (17p) | AUDITORIA BÁSICA — (Ciencias de Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15815214531.pdf) |
| `15815181731.pdf` | 2020-02-12 10:36 | 31 | Contenido (31p) | CONTABILIDAD DE COSTOS II — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15815181731.pdf) |
| `15815181733.pdf` | 2020-02-12 10:36 | 18 | Contenido (18p) | DESARROLLO GERENCIAL Barinas, Mayo de 2007 JUSTIFICACIÓN — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15815181733.pdf) |
| `15815181732.pdf` | 2020-02-12 10:36 | 9 | Contenido (9p) | DERECHO LABORAL Y SEGURIDAD SOCIAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15815181732.pdf) |
| `15815181734.pdf` | 2020-02-12 10:36 | 9 | Contenido (9p) | TRIBUTACIÓN I — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15815181734.pdf) |
| `15813493601.pdf` | 2020-02-10 11:42 | 25 | Contenido (25p) | CONTABILIDAD IV — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15813493601.pdf) |
| `15813493602.pdf` | 2020-02-10 11:42 | 40 | Contenido (40p) | CONTABILIDAD DE COSTOS I — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15813493602.pdf) |
| `15813493603.pdf` | 2020-02-10 11:42 | 9 | Contenido (9p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15813493603.pdf) |
| `15809160401.pdf` | 2020-02-05 11:20 | 16 | Contenido (16p) | CONTABILIDAD III — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809160401.pdf) |
| `15809160402.pdf` | 2020-02-05 11:20 | 13 | Contenido (13p) | INFORMÁTICA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809160402.pdf) |
| `15809160403.pdf` | 2020-02-05 11:20 | 21 | Contenido (21p) | MATEMATICA FINANCIERA. — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809160403.pdf) |
| `15809154281.pdf` | 2020-02-05 11:10 | 17 | Contenido (17p) | ESTADÍSTICA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809154281.pdf) |
| `15809154282.pdf` | 2020-02-05 11:10 | 7 | Contenido (7p) | FUNDAMENTOS ECONÓMICOS VICE-RECTORADO — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809154282.pdf) |
| `15809154283.pdf` | 2020-02-05 11:10 | 15 | Contenido (15p) | INGLÉS INSTRUMENTAL — (Ciencias de Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809154283.pdf) |
| `15809154284.pdf` | 2020-02-05 11:10 | 7 | Contenido (7p) | INTRODUCCION A LA ADMINISTRACIÓN — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809154284.pdf) |
| `15809154285.pdf` | 2020-02-05 11:10 | 13 | Contenido (13p) | LEGISLACIÓN MERCANTIL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15809154285.pdf) |
| `15807430942.pdf` | 2020-02-03 11:18 | 17 | Contenido (17p) | INTRODUCCIÓN AL DERECHO — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15807430942.pdf) |
| `15807430944.pdf` | 2020-02-03 11:18 | 8 | Contenido (8p) | MATEMÁTICA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15807430944.pdf) |
| `15807430941.pdf` | 2020-02-03 11:18 | 10 | Contenido (10p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15807430941.pdf) |
| `15807430943.pdf` | 2020-02-03 11:18 | 17 | Contenido (17p) | LENGUAJE Y COMUNICACIÓN — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15807430943.pdf) |
| `15807425681.pdf` | 2020-02-03 11:09 | 23 | Contenido (23p) | CONTABILIDAD I — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15807425681.pdf) |
| `15807425682.pdf` | 2020-02-03 11:09 | 11 | Contenido (11p) | EDUCACIÓN FÍSICA, DEPORTE Y RECREACIÓN — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15807425682.pdf) |
| `15803956771.pdf` | 2020-01-30 10:47 | 23 | Contenido (23p) | FORMULACIÓN, ADMINISTRACIÓN Y EVALUACIÓN DE PROYECTOS VICE-RECTORADO — (Ciencias... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15803956771.pdf) |
| `15803956772.pdf` | 2020-01-30 10:47 | 9 | Contenido (9p) | Sistemas de Información Gerencial — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15803956772.pdf) |
| `15803942161.pdf` | 2020-01-30 10:23 | 16 | Contenido (16p) | DESARROLLO ORGANIZACIONAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15803942161.pdf) |
| `15803942162.pdf` | 2020-01-30 10:23 | 9 | Contenido (9p) | SOFTWARE DE APLICACIÓN ADMINISTRATIVA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15803942162.pdf) |
| `15803942163.pdf` | 2020-01-30 10:23 | 11 | Contenido (11p) | TRIBUTACIÓN — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15803942163.pdf) |
| `15803932851.pdf` | 2020-01-30 10:08 | 21 | Contenido (21p) | MATEMÁTICA FINANCIERA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15803932851.pdf) |
| `15801446412.pdf` | 2020-01-27 13:04 | 5 | Contenido (5p) | Aplicación de conocimientos II | [Descargar PDF](https://unellez.edu.ve/material/pensums/15801446412.pdf) |
| `15801446411.pdf` | 2020-01-27 13:04 | 6 | Contenido (6p) | VICERRECTORADO Producción Agrícola | [Descargar PDF](https://unellez.edu.ve/material/pensums/15801446411.pdf) |
| `15801430903.pdf` | 2020-01-27 12:38 | 5 | Contenido (5p) | Aplicación de conocimientos I | [Descargar PDF](https://unellez.edu.ve/material/pensums/15801430903.pdf) |
| `15801430904.pdf` | 2020-01-27 12:38 | 10 | Contenido (10p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Agrícola Vegetal SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15801430904.pdf) |
| `15801430905.pdf` | 2020-01-27 12:38 | 17 | Contenido (17p) | FITOPATOLOGÍA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15801430905.pdf) |
| `15801430901.pdf` | 2020-01-27 12:38 | 9 | Contenido (9p) | VICERRECTORADO Producción Agrícola | [Descargar PDF](https://unellez.edu.ve/material/pensums/15801430901.pdf) |
| `15801430902.pdf` | 2020-01-27 12:38 | 9 | Contenido (9p) | VICERRECTORADO Producción Agrícola | [Descargar PDF](https://unellez.edu.ve/material/pensums/15801430902.pdf) |
| `15797925451.pdf` | 2020-01-23 11:15 | 10 | Contenido (10p) | ADMINISTRACIÓN PÚBLICA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797925451.pdf) |
| `15797925452.pdf` | 2020-01-23 11:15 | 19 | Contenido (19p) | Investigación Social — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797925452.pdf) |
| `15797915011.pdf` | 2020-01-23 10:58 | 11 | Contenido (11p) | DERECHO LABORAL Y SEGURIDAD SOCIAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797915011.pdf) |
| `15797915012.pdf` | 2020-01-23 10:58 | 12 | Contenido (12p) | ESTADÍSTICA PARA ADMINISTRADORES II — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797915012.pdf) |
| `15797915013.pdf` | 2020-01-23 10:58 | 22 | Contenido (22p) | SISTEMAS Y PROCEDIMIENTOS ADMINISTRATIVOS — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797915013.pdf) |
| `15797909503.pdf` | 2020-01-23 10:49 | 14 | Contenido (14p) | LEGISLACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797909503.pdf) |
| `15797909491.pdf` | 2020-01-23 10:49 | 19 | Contenido (19p) | DISEÑO ORGANIZACIONAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797909491.pdf) |
| `15797909492.pdf` | 2020-01-23 10:49 | 14 | Contenido (14p) | ESTADISTICA PARA ADMINISTRADORES I — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797909492.pdf) |
| `15797886731.pdf` | 2020-01-23 10:11 | 18 | Contenido (18p) | ADMINISTRACIÓN II Barinas, Septiembre de 2006 — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797886731.pdf) |
| `15797886732.pdf` | 2020-01-23 10:11 | 11 | Contenido (11p) | INFORMÁTICA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797886732.pdf) |
| `15797886733.pdf` | 2020-01-23 10:11 | 12 | Contenido (12p) | MATEMÁTICAS PARA ADMINISTRADORES — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797886733.pdf) |
| `15797874621.pdf` | 2020-01-23 09:51 | 8 | Contenido (8p) | ADMINISTRACIÓN I — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797874621.pdf) |
| `15797874623.pdf` | 2020-01-23 09:51 | 11 | Contenido (11p) | EDUCACIÓN FÍSICA, DEPORTE Y RECREACIÓN — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797874623.pdf) |
| `15797874624.pdf` | 2020-01-23 09:51 | 10 | Contenido (10p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797874624.pdf) |
| `15797874625.pdf` | 2020-01-23 09:51 | 16 | Contenido (16p) | INGLES INSTRUMENTAL. Barinas Octubre 2006 — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797874625.pdf) |
| `15797874622.pdf` | 2020-01-23 09:51 | 9 | Contenido (9p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL. — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797874622.pdf) |
| `15797874626.pdf` | 2020-01-23 09:51 | 17 | Contenido (17p) | LENGUAJE Y COMUNICACIÓN — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797874626.pdf) |
| `15797874627.pdf` | 2020-01-23 09:51 | 14 | Contenido (14p) | MATEMÁTICAS — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797874627.pdf) |
| `15797053081.pdf` | 2020-01-22 11:01 | 14 | Contenido (14p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCIÓN AGRÍCOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797053081.pdf) |
| `15797053082.pdf` | 2020-01-22 11:01 | 9 | Contenido (9p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Agrícola vegetal SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797053082.pdf) |
| `15797053083.pdf` | 2020-01-22 11:01 | 7 | Contenido (7p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCIÓN AGRÍCOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797053083.pdf) |
| `15797053084.pdf` | 2020-01-22 11:01 | 13 | Contenido (13p) | VICERRECTORADO PRODUCCION AGRICOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797053084.pdf) |
| `15797053085.pdf` | 2020-01-22 11:01 | 10 | Contenido (10p) | VICERRECTORADO DE PRODUCCIÓN AGRICOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL CARRE... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797053085.pdf) |
| `15797005265.pdf` | 2020-01-22 09:42 | 14 | Contenido (14p) | VICERRECTORADO PRODUCCION AGRICOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797005265.pdf) |
| `15797005264.pdf` | 2020-01-22 09:42 | 8 | Contenido (8p) | VICERRECTORADO Producción Agrícola | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797005264.pdf) |
| `15797005251.pdf` | 2020-01-22 09:42 | 9 | Contenido (9p) | VICERRECTORADO PRODUCCIÓN AGRICOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797005251.pdf) |
| `15797005252.pdf` | 2020-01-22 09:42 | 7 | Contenido (7p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Agrícola Vegetal SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797005252.pdf) |
| `15797005253.pdf` | 2020-01-22 09:42 | 17 | Contenido (17p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Agrícola Vegetal SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15797005253.pdf) |
| `15795390672.pdf` | 2020-01-20 12:51 | 13 | Contenido (13p) | VICERRECTORADO PRODUCCION AGRICOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795390672.pdf) |
| `15795390673.pdf` | 2020-01-20 12:51 | 7 | Contenido (7p) | CULTIVOS PERENNES I — (PRODUCCION AGRICOLA VEGETAL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795390673.pdf) |
| `15795390674.pdf` | 2020-01-20 12:51 | 6 | Contenido (6p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Agrícola Vegetal SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795390674.pdf) |
| `15795390675.pdf` | 2020-01-20 12:51 | 19 | Contenido (19p) | FISIOLOGÍA VEGETAL — (IESPECIALIDADES) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795390675.pdf) |
| `15795390671.pdf` | 2020-01-20 12:51 | 15 | Contenido (15p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795390671.pdf) |
| `15795390676.pdf` | 2020-01-20 12:51 | 7 | Contenido (7p) | VICERRECTORADO PRODUCCIÓN AGRICOLA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795390676.pdf) |
| `15795384482.pdf` | 2020-01-20 12:40 | 9 | Contenido (9p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795384482.pdf) |
| `15795384483.pdf` | 2020-01-20 12:40 | 13 | Contenido (13p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795384483.pdf) |
| `15795384484.pdf` | 2020-01-20 12:40 | 7 | Contenido (7p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795384484.pdf) |
| `15795384485.pdf` | 2020-01-20 12:40 | 10 | Contenido (10p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795384485.pdf) |
| `15795384481.pdf` | 2020-01-20 12:40 | 10 | Contenido (10p) | VICERRECTORADO Producción Agrícola | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795384481.pdf) |
| `15795378234.pdf` | 2020-01-20 12:30 | 10 | Contenido (10p) | abarca en su contenido los cultivos | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795378234.pdf) |
| `15795378235.pdf` | 2020-01-20 12:30 | 10 | Contenido (10p) | BIOQUÍMICA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795378235.pdf) |
| `15795378236.pdf` | 2020-01-20 12:30 | 8 | Contenido (8p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795378236.pdf) |
| `15795378221.pdf` | 2020-01-20 12:30 | 15 | Contenido (15p) | VICERRECTORADO PRODUCCION AGRÌOLA — (PRODUCCION AGRICOLA VEGETAL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795378221.pdf) |
| `15795378222.pdf` | 2020-01-20 12:30 | 9 | Contenido (9p) | VICERRECTORADO PRODUCCIÓN AGRICOLA PROGRAMA PRODUCCIÓN AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795378222.pdf) |
| `15795378223.pdf` | 2020-01-20 12:30 | 12 | Contenido (12p) | Cereales y Leguminosas — (CAMPO) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795378223.pdf) |
| `15795364361.pdf` | 2020-01-20 12:07 | 9 | Contenido (9p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Animal Vegetal SUB-PROGRA... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795364361.pdf) |
| `15795364362.pdf` | 2020-01-20 12:07 | 8 | Contenido (8p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Agrícola Vegetal SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795364362.pdf) |
| `15795364363.pdf` | 2020-01-20 12:07 | 10 | Contenido (10p) | VICERRECTORADO PRODUCCION AGRICOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795364363.pdf) |
| `15795364364.pdf` | 2020-01-20 12:07 | 10 | Contenido (10p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795364364.pdf) |
| `15795364365.pdf` | 2020-01-20 12:07 | 10 | Contenido (10p) | VICERRECTORADO Producción Agrícola PROGRAMA Producción Agrícola Vegetal SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795364365.pdf) |
| `15795364366.pdf` | 2020-01-20 12:07 | 14 | Contenido (14p) | QUÍMICA ORGÁNICA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795364366.pdf) |
| `15795360052.pdf` | 2020-01-20 12:00 | 12 | Contenido (12p) | VICERRECTORADO DE PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-P... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795360052.pdf) |
| `15795360053.pdf` | 2020-01-20 12:00 | 7 | Contenido (7p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCIÓN AGRÍCOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795360053.pdf) |
| `15795360055.pdf` | 2020-01-20 12:00 | 11 | Contenido (11p) | VICERRECTORADO PRODUCCIÓN AGRICOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795360055.pdf) |
| `15795360051.pdf` | 2020-01-20 12:00 | 8 | Contenido (8p) | VICERRECTORADO PRODUCCIÓN AGRICOLA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795360051.pdf) |
| `15795360054.pdf` | 2020-01-20 12:00 | 19 | Contenido (19p) | VICERRECTORADO PRODUCCION AGRICOLA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15795360054.pdf) |
| `15785832131.pdf` | 2020-01-09 11:20 | 9 | Contenido (9p) | PRÁCTICA PROFESIONAL III — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785832131.pdf) |
| `15785832132.pdf` | 2020-01-09 11:20 | 17 | Contenido (17p) | TRABAJO DE GRADO | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785832132.pdf) |
| `15785829262.pdf` | 2020-01-09 11:15 | 10 | Contenido (10p) | Calculo de variables complejas — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785829262.pdf) |
| `15785829261.pdf` | 2020-01-09 11:15 | 8 | Contenido (8p) | PRÁCTICA PROFESIONAL II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785829261.pdf) |
| `15785829263.pdf` | 2020-01-09 11:15 | 9 | Contenido (9p) | Análisis Matemático — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785829263.pdf) |
| `15785829264.pdf` | 2020-01-09 11:15 | 10 | Contenido (10p) | Didáctica de la matemática MENCIÓN Y — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785829264.pdf) |
| `15785825092.pdf` | 2020-01-09 11:08 | 8 | Contenido (8p) | METODOLOGÍA Y RECURSOS PARA EL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785825092.pdf) |
| `15785825093.pdf` | 2020-01-09 11:08 | 11 | Contenido (11p) | INVESTIGACIÓN SOCIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785825093.pdf) |
| `15785825095.pdf` | 2020-01-09 11:08 | 9 | Contenido (9p) | Ecuaciones Diferenciales — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785825095.pdf) |
| `15785825091.pdf` | 2020-01-09 11:08 | 14 | Contenido (14p) | PRÁCTICA PROFESIONAL I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785825091.pdf) |
| `15785825094.pdf` | 2020-01-09 11:08 | 9 | Contenido (9p) | ETICA Y DOCENCIA — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785825094.pdf) |
| `15785825096.pdf` | 2020-01-09 11:08 | 14 | Contenido (14p) | PROBABILIDAD Y ESTADÍSTICA INFERENCIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785825096.pdf) |
| `15785824381.pdf` | 2020-01-09 11:07 | 10 | Contenido (10p) | EPISTEMOLOGIA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785824381.pdf) |
| `15785824382.pdf` | 2020-01-09 11:07 | 9 | Contenido (9p) | PRÁCTICA PROFECIONAL II — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785824382.pdf) |
| `15785824383.pdf` | 2020-01-09 11:07 | 15 | Contenido (15p) | TECNICAS DE INVESTIGACIÓN SOCIAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785824383.pdf) |
| `15785816454.pdf` | 2020-01-09 10:54 | 7 | Contenido (7p) | Cálculo de Variables Múltiples MENCIÓN Y CODIGO — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785816454.pdf) |
| `15785816455.pdf` | 2020-01-09 10:54 | 12 | Contenido (12p) | FÍSICA II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785816455.pdf) |
| `15785816451.pdf` | 2020-01-09 10:54 | 10 | Contenido (10p) | GERENCIA EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785816451.pdf) |
| `15785816452.pdf` | 2020-01-09 10:54 | 9 | Contenido (9p) | Evaluación del Aprendizaje — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785816452.pdf) |
| `15785816453.pdf` | 2020-01-09 10:54 | 8 | Contenido (8p) | METODOLOGÍA DE LA INVESTIGACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785816453.pdf) |
| `15785812941.pdf` | 2020-01-09 10:48 | 9 | Contenido (9p) | ORIENTACIÒN EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785812941.pdf) |
| `15785812946.pdf` | 2020-01-09 10:48 | 13 | Contenido (13p) | FÍSICA I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785812946.pdf) |
| `15785812942.pdf` | 2020-01-09 10:48 | 16 | Contenido (16p) | ESTADISTICA DESCRIPTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785812942.pdf) |
| `15785812943.pdf` | 2020-01-09 10:48 | 8 | Contenido (8p) | PLANIFICACIÓN DE LA ENSEÑANZA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785812943.pdf) |
| `15785812944.pdf` | 2020-01-09 10:48 | 9 | Contenido (9p) | Calculo integral — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785812944.pdf) |
| `15785812945.pdf` | 2020-01-09 10:48 | 7 | Contenido (7p) | Algebra II — (Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785812945.pdf) |
| `15785808241.pdf` | 2020-01-09 10:40 | 9 | Contenido (9p) | Psicología del Aprendizaje — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785808241.pdf) |
| `15785808242.pdf` | 2020-01-09 10:40 | 6 | Contenido (6p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785808242.pdf) |
| `15785808243.pdf` | 2020-01-09 10:40 | 9 | Contenido (9p) | Geometría — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785808243.pdf) |
| `15785808245.pdf` | 2020-01-09 10:40 | 9 | Contenido (9p) | Algebra I — (TICO) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785808245.pdf) |
| `15785808244.pdf` | 2020-01-09 10:40 | 8 | Contenido (8p) | CÁLCULO DIFERENCIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785808244.pdf) |
| `15785804151.pdf` | 2020-01-09 10:33 | 9 | Contenido (9p) | PSICOLOGÍA EVOLUTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785804151.pdf) |
| `15785804154.pdf` | 2020-01-09 10:33 | 7 | Contenido (7p) | LÓGICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785804154.pdf) |
| `15785804156.pdf` | 2020-01-09 10:33 | 7 | Contenido (7p) | FUNDAMENTOS DE TRIGONOMETRÍA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785804156.pdf) |
| `15785804152.pdf` | 2020-01-09 10:33 | 10 | Contenido (10p) | FILOSOFÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785804152.pdf) |
| `15785804153.pdf` | 2020-01-09 10:33 | 6 | Contenido (6p) | SOCIOLOGÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785804153.pdf) |
| `15785804155.pdf` | 2020-01-09 10:33 | 10 | Contenido (10p) | CONTENIDO PROGRAMATICO DEL SUBPROYECTO: INTRODUCCIÓN AL CÁLC | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785804155.pdf) |
| `15785799241.pdf` | 2020-01-09 10:25 | 9 | Contenido (9p) | LENGUAJE Y COMUNICACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785799241.pdf) |
| `15785799242.pdf` | 2020-01-09 10:25 | 8 | Contenido (8p) | INGLÉS INSTRUMENTAL. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785799242.pdf) |
| `15785799245.pdf` | 2020-01-09 10:25 | 9 | Contenido (9p) | INFORMÁTICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785799245.pdf) |
| `15785799246.pdf` | 2020-01-09 10:25 | 10 | Contenido (10p) | MATEMÁTICA GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785799246.pdf) |
| `15785799243.pdf` | 2020-01-09 10:25 | 12 | Contenido (12p) | ENTRENAMIENTO FÍSICO GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785799243.pdf) |
| `15785799244.pdf` | 2020-01-09 10:25 | 13 | Contenido (13p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15785799244.pdf) |
| `15760763702.pdf` | 2019-12-11 10:59 | 10 | Contenido (10p) | Didáctica de la matemática MENCIÓN Y — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15760763702.pdf) |
| `15760763703.pdf` | 2019-12-11 10:59 | 13 | Contenido (13p) | Didáctica y Administración de la Escuela Multigrado — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15760763703.pdf) |
| `15760763701.pdf` | 2019-12-11 10:59 | 8 | Contenido (8p) | PRÁCTICA PROFESIONAL II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15760763701.pdf) |
| `15760763704.pdf` | 2019-12-11 10:59 | 23 | Contenido (23p) | HISTORIA DE VENEZUELA. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15760763704.pdf) |
| `15759944102.pdf` | 2019-12-10 12:13 | 16 | Contenido (16p) | ESTADISTICA DESCRIPTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759944102.pdf) |
| `15759944103.pdf` | 2019-12-10 12:13 | 8 | Contenido (8p) | Planificación de la Enseñanza — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759944103.pdf) |
| `15759944101.pdf` | 2019-12-10 12:13 | 9 | Contenido (9p) | ORIENTACIÒN EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759944101.pdf) |
| `15759944104.pdf` | 2019-12-10 12:13 | 22 | Contenido (22p) | EDUCACIÓN MUSICAL Y ARTES ESCÉNICAS — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759944104.pdf) |
| `15759944105.pdf` | 2019-12-10 12:13 | 13 | Contenido (13p) | CIENCIAS NATURALES I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759944105.pdf) |
| `15759944106.pdf` | 2019-12-10 12:13 | 11 | Contenido (11p) | LITERATURA INFANTIL Y JUVENIL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759944106.pdf) |
| `15759928892.pdf` | 2019-12-10 11:48 | 6 | Contenido (6p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759928892.pdf) |
| `15759928893.pdf` | 2019-12-10 11:48 | 11 | Contenido (11p) | GRAMÁTICA CASTELLANA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759928893.pdf) |
| `15759928891.pdf` | 2019-12-10 11:48 | 9 | Contenido (9p) | PSICOLOGÍA DEL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759928891.pdf) |
| `15759928894.pdf` | 2019-12-10 11:48 | 11 | Contenido (11p) | FORMACIÓN COMUNAL Y CIUDADANA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759928894.pdf) |
| `15759928895.pdf` | 2019-12-10 11:48 | 7 | Contenido (7p) | EDUCACIÓN PARA EL TRABAJO — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759928895.pdf) |
| `15759860621.pdf` | 2019-12-10 09:54 | 9 | Contenido (9p) | LENGUAJE Y COMUNICACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759860621.pdf) |
| `15759860625.pdf` | 2019-12-10 09:54 | 9 | Contenido (9p) | INFORMÁTICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759860625.pdf) |
| `15759860622.pdf` | 2019-12-10 09:54 | 8 | Contenido (8p) | INGLÉS INSTRUMENTAL. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759860622.pdf) |
| `15759860623.pdf` | 2019-12-10 09:54 | 12 | Contenido (12p) | ENTRENAMIENTO FÍSICO GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759860623.pdf) |
| `15759860624.pdf` | 2019-12-10 09:54 | 13 | Contenido (13p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759860624.pdf) |
| `15759860626.pdf` | 2019-12-10 09:54 | 10 | Contenido (10p) | MATEMÁTICA GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15759860626.pdf) |
| `15756453112.pdf` | 2019-12-06 11:15 | 9 | Contenido (9p) | SOCIOLOGÍA DE LA FAMILIA Y LA SALUD — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756453112.pdf) |
| `15756453111.pdf` | 2019-12-06 11:15 | 6 | Contenido (6p) | Gestión y Administración de Servicios Públicos inicia a nivel del VI — (Ciencias... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756453111.pdf) |
| `15756450361.pdf` | 2019-12-06 11:10 | 19 | Contenido (19p) | PLANIFICACIÓN INSTITUCIONAL — (Sociología del Desarrollo) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756450361.pdf) |
| `15756444421.pdf` | 2019-12-06 11:00 | 12 | Contenido (12p) | ÉTICA SOCIAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756444421.pdf) |
| `15756432791.pdf` | 2019-12-06 10:41 | 8 | Contenido (8p) | INVESTIGACIÓN SOCIAL CUALITATIVA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756432791.pdf) |
| `15756429721.pdf` | 2019-12-06 10:36 | 21 | Contenido (21p) | DESARROLLO REGIONAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756429721.pdf) |
| `15756422171.pdf` | 2019-12-06 10:23 | 16 | Contenido (16p) | INVESTIGACIÓN SOCIAL CUANTITATIVA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756422171.pdf) |
| `15756422172.pdf` | 2019-12-06 10:23 | 7 | Contenido (7p) | POBLACION Y DESARROLLO HUMANO — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756422172.pdf) |
| `15756414941.pdf` | 2019-12-06 10:11 | 15 | Contenido (15p) | ANÁLISIS ESTADÍSTICO CON SPSS — (Formación General y Básica) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15756414941.pdf) |
| `15755547861.pdf` | 2019-12-05 10:06 | 10 | Contenido (10p) | PRÁCTICA PROFESIONAL III — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15755547861.pdf) |
| `15755547862.pdf` | 2019-12-05 10:06 | 17 | Contenido (17p) | TRABAJO DE GRADO | [Descargar PDF](https://unellez.edu.ve/material/pensums/15755547862.pdf) |
| `15754734981.pdf` | 2019-12-04 11:31 | 6 | Contenido (6p) | PRÁCTICA PROFESIONAL II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754734981.pdf) |
| `15754734982.pdf` | 2019-12-04 11:31 | 18 | Contenido (18p) | HISTORIA DE AMÉRICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754734982.pdf) |
| `15754734984.pdf` | 2019-12-04 11:31 | 16 | Contenido (16p) | PROBLEMAS GEOHISTÓRICOS DEL MUNDO CONTEMPORÁNEO — (Ciencias de la Educación.) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754734984.pdf) |
| `15754734983.pdf` | 2019-12-04 11:31 | 24 | Contenido (24p) | METODOLOGIA PARA LA ENSEÑANZA GEOGRAFÍA E HISTORIA. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754734983.pdf) |
| `15754709861.pdf` | 2019-12-04 10:49 | 13 | Contenido (13p) | PRÁCTICA PROFESIONAL I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754709861.pdf) |
| `15754709865.pdf` | 2019-12-04 10:49 | 7 | Contenido (7p) | METODOLOGÍA Y RECURSOS PARA EL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754709865.pdf) |
| `15754709862.pdf` | 2019-12-04 10:49 | 7 | Contenido (7p) | METODOLOGÍA Y RECURSOS PARA EL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754709862.pdf) |
| `15754709863.pdf` | 2019-12-04 10:49 | 10 | Contenido (10p) | INVESTIGACIÓN SOCIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754709863.pdf) |
| `15754709864.pdf` | 2019-12-04 10:49 | 8 | Contenido (8p) | ETICA Y DOCENCIA — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754709864.pdf) |
| `15754709866.pdf` | 2019-12-04 10:49 | 16 | Contenido (16p) | CLIMATOLOGÌA Y METEOROLOGIA — (Ciencias Sociales de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754709866.pdf) |
| `15754704513.pdf` | 2019-12-04 10:40 | 11 | Contenido (11p) | TEORÍA SOCIAL CLÁSICA I — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754704513.pdf) |
| `15754704514.pdf` | 2019-12-04 10:40 | 12 | Contenido (12p) | TEORÍAS DEL DESARROLLO Y POLITICAS PÚBLICAS — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754704514.pdf) |
| `15754704512.pdf` | 2019-12-04 10:40 | 10 | Contenido (10p) | METODOLOGIA DE LA INVESTIGACION — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754704512.pdf) |
| `15754704501.pdf` | 2019-12-04 10:40 | 15 | Contenido (15p) | ESTADÍSTICA BÁSICA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15754704501.pdf) |
| `15753869111.pdf` | 2019-12-03 11:28 | 10 | Contenido (10p) | GERENCIA EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753869111.pdf) |
| `15753869112.pdf` | 2019-12-03 11:28 | 8 | Contenido (8p) | EVALUACIÓN DEL APRENDIZAJE MENCIÓN y — (CIENCIAS DE LA EDUCACIÓN) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753869112.pdf) |
| `15753869115.pdf` | 2019-12-03 11:28 | 18 | Contenido (18p) | GEOGRAFÍA DE LA POBLACIÓN — (Ciencias de la Educación.) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753869115.pdf) |
| `15753869113.pdf` | 2019-12-03 11:28 | 7 | Contenido (7p) | METODOLOGÍA DE LA INVESTIGACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753869113.pdf) |
| `15753869114.pdf` | 2019-12-03 11:28 | 15 | Contenido (15p) | HISTORIA DE LAS CIVILIZACIONES II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753869114.pdf) |
| `15753846532.pdf` | 2019-12-03 10:50 | 16 | Contenido (16p) | ESTADISTICA DESCRIPTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753846532.pdf) |
| `15753846533.pdf` | 2019-12-03 10:50 | 7 | Contenido (7p) | Planificación de la Enseñanza — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753846533.pdf) |
| `15753846534.pdf` | 2019-12-03 10:50 | 13 | Contenido (13p) | HISTORIA DE LAS CIVILIZACIONES I | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753846534.pdf) |
| `15753846535.pdf` | 2019-12-03 10:50 | 13 | Contenido (13p) | GEOMORFOLOGÍA APLICADA A VENEZUELA — (Ciencias de la Educación.) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753846535.pdf) |
| `15753846531.pdf` | 2019-12-03 10:50 | 9 | Contenido (9p) | ORIENTACIÒN EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753846531.pdf) |
| `15753846536.pdf` | 2019-12-03 10:50 | 21 | Contenido (21p) | GEOHISTORIA REGIONAL Y LOCAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753846536.pdf) |
| `15753835813.pdf` | 2019-12-03 10:33 | 14 | Contenido (14p) | HISTORIA DE VENEZUELA II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753835813.pdf) |
| `15753835814.pdf` | 2019-12-03 10:33 | 13 | Contenido (13p) | CARTOGRAFIA E INTERPRETACIÓN DE MAPAS VICE-RECTORADO — (Licenciatura en Educació... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753835814.pdf) |
| `15753835811.pdf` | 2019-12-03 10:33 | 8 | Contenido (8p) | PSICOLOGÍA DEL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753835811.pdf) |
| `15753011071.pdf` | 2019-12-02 11:38 | 14 | Contenido (14p) | ANTROPOLOGÍA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753011071.pdf) |
| `15753011072.pdf` | 2019-12-02 11:38 | 10 | Contenido (10p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753011072.pdf) |
| `15753011073.pdf` | 2019-12-02 11:38 | 9 | Contenido (9p) | INFORMÁTICA. — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15753011073.pdf) |
| `15752936622.pdf` | 2019-12-02 09:34 | 12 | Contenido (12p) | HISTORIA ECONÓMICA Y SOCIAL DE VENEZUELA — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15752936622.pdf) |
| `15752936623.pdf` | 2019-12-02 09:34 | 7 | Contenido (7p) | INGLÉS INSTRUMENTAL. — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15752936623.pdf) |
| `15752936624.pdf` | 2019-12-02 09:34 | 8 | Contenido (8p) | LENGUAJE Y COMUNICACIÓN — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15752936624.pdf) |
| `15752936625.pdf` | 2019-12-02 09:34 | 9 | Contenido (9p) | MATEMÁTICA GENERAL. — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15752936625.pdf) |
| `15752936621.pdf` | 2019-12-02 09:34 | 12 | Contenido (12p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15752936621.pdf) |
| `15748751673.pdf` | 2019-11-27 13:19 | 6 | Contenido (6p) | . SOCIOLOGÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748751673.pdf) |
| `15748751674.pdf` | 2019-11-27 13:19 | 5 | Contenido (5p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748751674.pdf) |
| `15748751675.pdf` | 2019-11-27 13:19 | 11 | Contenido (11p) | GEOGRAFIA GENERAL — (Ciencias de la Educación.) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748751675.pdf) |
| `15748751676.pdf` | 2019-11-27 13:19 | 14 | Contenido (14p) | HISTORIA DE VENEZUELA I. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748751676.pdf) |
| `15748751671.pdf` | 2019-11-27 13:19 | 8 | Contenido (8p) | PSICOLOGÍA EVOLUTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748751671.pdf) |
| `15748751672.pdf` | 2019-11-27 13:19 | 8 | Contenido (8p) | FILOSOFÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748751672.pdf) |
| `15748697796.pdf` | 2019-11-27 11:49 | 9 | Contenido (9p) | MATEMÁTICA GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748697796.pdf) |
| `15748697791.pdf` | 2019-11-27 11:49 | 8 | Contenido (8p) | LENGUAJE Y COMUNICACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748697791.pdf) |
| `15748697792.pdf` | 2019-11-27 11:49 | 8 | Contenido (8p) | INGLÉS INSTRUMENTAL. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748697792.pdf) |
| `15748697793.pdf` | 2019-11-27 11:49 | 12 | Contenido (12p) | ENTRENAMIENTO FÍSICO GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748697793.pdf) |
| `15748697794.pdf` | 2019-11-27 11:49 | 12 | Contenido (12p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748697794.pdf) |
| `15748697795.pdf` | 2019-11-27 11:49 | 9 | Contenido (9p) | INFORMÁTICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748697795.pdf) |
| `15748642362.pdf` | 2019-11-27 10:17 | 18 | Contenido (18p) | DIDÁCTICA DE LA EDUCACIÓN FÍSICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748642362.pdf) |
| `15748642363.pdf` | 2019-11-27 10:17 | 11 | Contenido (11p) | FÚTBOL ( M ) Y FÚTBOL SALA ( F ) — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748642363.pdf) |
| `15748642364.pdf` | 2019-11-27 10:17 | 10 | Contenido (10p) | EDUCACIÓN FÍSICA ESPECIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748642364.pdf) |
| `15748642361.pdf` | 2019-11-27 10:17 | 8 | Contenido (8p) | PRÁCTICA PROFESIONAL II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15748642361.pdf) |
| `15743534031.pdf` | 2019-11-21 12:23 | 14 | Contenido (14p) | PRÁCTICA PROFESIONAL I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743534031.pdf) |
| `15743534033.pdf` | 2019-11-21 12:23 | 11 | Contenido (11p) | INVESTIGACIÓN SOCIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743534033.pdf) |
| `15743534034.pdf` | 2019-11-21 12:23 | 9 | Contenido (9p) | ETICA Y DOCENCIA — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743534034.pdf) |
| `15743534035.pdf` | 2019-11-21 12:23 | 9 | Contenido (9p) | MEDICIÓN Y EVALUACIÓN DEL RENDIMIENTO DEPORTIVO — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743534035.pdf) |
| `15743534032.pdf` | 2019-11-21 12:23 | 8 | Contenido (8p) | METODOLOGÍA Y RECURSOS PARA EL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743534032.pdf) |
| `15743534036.pdf` | 2019-11-21 12:23 | 17 | Contenido (17p) | BÉISBOL (M) SOFTBOL ( F ) — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743534036.pdf) |
| `15743463491.pdf` | 2019-11-21 10:25 | 10 | Contenido (10p) | GERENCIA EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743463491.pdf) |
| `15743463492.pdf` | 2019-11-21 10:25 | 9 | Contenido (9p) | Evaluación del Aprendizaje — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743463492.pdf) |
| `15743463493.pdf` | 2019-11-21 10:25 | 8 | Contenido (8p) | METODOLOGÍA DE LA INVESTIGACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743463493.pdf) |
| `15743463495.pdf` | 2019-11-21 10:25 | 8 | Contenido (8p) | BALONCESTO — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743463495.pdf) |
| `15743463494.pdf` | 2019-11-21 10:25 | 8 | Contenido (8p) | PRINCIPIOS CIENTÍFICOS DEL ENTRENAMIENTO DEPORTIVO — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15743463494.pdf) |
| `15741816091.pdf` | 2019-11-19 12:40 | 9 | Contenido (9p) | Psicología del Aprendizaje — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15741816091.pdf) |
| `15741816093.pdf` | 2019-11-19 12:40 | 14 | Contenido (14p) | FISIOLOGÍA DEL EJERCICIO. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15741816093.pdf) |
| `15741816096.pdf` | 2019-11-19 12:40 | 15 | Contenido (15p) | RECREACIÓN Y PRIMEROS AUXILIOS — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15741816096.pdf) |
| `15741816092.pdf` | 2019-11-19 12:40 | 6 | Contenido (6p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15741816092.pdf) |
| `15741816094.pdf` | 2019-11-19 12:40 | 14 | Contenido (14p) | GIMNASIA (FEMENINA) — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15741816094.pdf) |
| `15741816095.pdf` | 2019-11-19 12:40 | 12 | Contenido (12p) | GIMNASIA (MASCULINO) — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15741816095.pdf) |
| `15735759731.pdf` | 2019-11-12 12:26 | 9 | Contenido (9p) | ORIENTACIÒN EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735759731.pdf) |
| `15735759732.pdf` | 2019-11-12 12:26 | 16 | Contenido (16p) | ESTADISTICA DESCRIPTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735759732.pdf) |
| `15735759733.pdf` | 2019-11-12 12:26 | 8 | Contenido (8p) | Planificación de la Enseñanza — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735759733.pdf) |
| `15735759735.pdf` | 2019-11-12 12:26 | 8 | Contenido (8p) | ANÁLISIS INTEGRAL DEL MOVIMIENTO — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735759735.pdf) |
| `15735759736.pdf` | 2019-11-12 12:26 | 12 | Contenido (12p) | ADMINISTRACION DEPORTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735759736.pdf) |
| `15735759734.pdf` | 2019-11-12 12:26 | 14 | Contenido (14p) | VOLEIBOL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735759734.pdf) |
| `15735722802.pdf` | 2019-11-12 11:24 | 10 | Contenido (10p) | FILOSOFÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735722802.pdf) |
| `15735722804.pdf` | 2019-11-12 11:24 | 12 | Contenido (12p) | ANATOMÍA Y FISIOLOGÌA HUMANA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735722804.pdf) |
| `15735722805.pdf` | 2019-11-12 11:24 | 9 | Contenido (9p) | ATLETISMO — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735722805.pdf) |
| `15735722806.pdf` | 2019-11-12 11:24 | 11 | Contenido (11p) | NATACION — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735722806.pdf) |
| `15735722801.pdf` | 2019-11-12 11:24 | 9 | Contenido (9p) | PSICOLOGÍA EVOLUTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735722801.pdf) |
| `15735722803.pdf` | 2019-11-12 11:24 | 6 | Contenido (6p) | SOCIOLOGÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735722803.pdf) |
| `15735705241.pdf` | 2019-11-12 10:55 | 9 | Contenido (9p) | LENGUAJE Y COMUNICACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735705241.pdf) |
| `15735705242.pdf` | 2019-11-12 10:55 | 8 | Contenido (8p) | INGLÉS INSTRUMENTAL. — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735705242.pdf) |
| `15735705245.pdf` | 2019-11-12 10:55 | 9 | Contenido (9p) | INFORMÁTICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735705245.pdf) |
| `15735705243.pdf` | 2019-11-12 10:55 | 12 | Contenido (12p) | ENTRENAMIENTO FÍSICO GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735705243.pdf) |
| `15735705244.pdf` | 2019-11-12 10:55 | 13 | Contenido (13p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735705244.pdf) |
| `15735705246.pdf` | 2019-11-12 10:55 | 10 | Contenido (10p) | MATEMÁTICA GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15735705246.pdf) |
| `15732233781.pdf` | 2019-11-08 10:29 | 8 | Contenido (8p) | CÁLCULO IV — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15732233781.pdf) |
| `15732233782.pdf` | 2019-11-08 10:29 | 11 | Contenido (11p) | ESTRUCTURAS DISCRETAS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15732233782.pdf) |
| `15732233783.pdf` | 2019-11-08 10:29 | 7 | Contenido (7p) | ALGORÍTMOS Y — (CIÓN II) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15732233783.pdf) |
| `15732233785.pdf` | 2019-11-08 10:29 | 9 | Contenido (9p) | ELECTRÓNICA — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15732233785.pdf) |
| `15723647541.pdf` | 2019-10-29 11:59 | 8 | Contenido (8p) | PLANIFICACIÓN DE PROYECTOS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723647541.pdf) |
| `15723647542.pdf` | 2019-10-29 11:59 | 8 | Contenido (8p) | AUDITORÍA DE SISTEMAS INFORMÁTICOS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723647542.pdf) |
| `15723646121.pdf` | 2019-10-29 11:56 | 8 | Contenido (8p) | PLANIFICACIÓN DE PROYECTOS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723646121.pdf) |
| `15723646122.pdf` | 2019-10-29 11:56 | 8 | Contenido (8p) | AUDITORÍA DE SISTEMAS INFORMÁTICOS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723646122.pdf) |
| `15723641542.pdf` | 2019-10-29 11:49 | 9 | Contenido (9p) | REDES Y COMUNICACIONES II — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723641542.pdf) |
| `15723641543.pdf` | 2019-10-29 11:49 | 10 | Contenido (10p) | EDUMÁTICA — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723641543.pdf) |
| `15723641544.pdf` | 2019-10-29 11:49 | 10 | Contenido (10p) | DESARROLLO DE APLICACIONES II — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723641544.pdf) |
| `15723641545.pdf` | 2019-10-29 11:49 | 9 | Contenido (9p) | PROYECTO DE GRADO — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723641545.pdf) |
| `15723641546.pdf` | 2019-10-29 11:49 | 5 | Contenido (5p) | s hasta el VII Semestre — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723641546.pdf) |
| `15723641541.pdf` | 2019-10-29 11:49 | 8 | Contenido (8p) | GERENCIA Y MERCADEO — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723641541.pdf) |
| `15723613692.pdf` | 2019-10-29 11:02 | 10 | Contenido (10p) | METODOLOGIAS DE DESARROLLO DE SOFTWARE — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723613692.pdf) |
| `15723613693.pdf` | 2019-10-29 11:02 | 8 | Contenido (8p) | ELECTIVA II (ADMINISTRACIÓN) — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723613693.pdf) |
| `15723613694.pdf` | 2019-10-29 11:02 | 13 | Contenido (13p) | SISTEMAS OPERATIVOS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723613694.pdf) |
| `15723613691.pdf` | 2019-10-29 11:02 | 10 | Contenido (10p) | ARQUITECTURAS SOFTWARE — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723613691.pdf) |
| `15723613695.pdf` | 2019-10-29 11:02 | 10 | Contenido (10p) | DESARROLLO DE APLICACIONES I — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723613695.pdf) |
| `15723613696.pdf` | 2019-10-29 11:02 | 10 | Contenido (10p) | INVESTIGACIÓN SOCIAL — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723613696.pdf) |
| `15723606344.pdf` | 2019-10-29 10:50 | 9 | Contenido (9p) | MÉTODOS NUMÉRICOS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723606344.pdf) |
| `15723606345.pdf` | 2019-10-29 10:50 | 10 | Contenido (10p) | PRINCIPIOS DE INGENIERÍA DEL SOFTWARE — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723606345.pdf) |
| `15723606333.pdf` | 2019-10-29 10:50 | 13 | Contenido (13p) | SISTEMAS OPERATIVOS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723606333.pdf) |
| `15723606331.pdf` | 2019-10-29 10:50 | 10 | Contenido (10p) | BASES DE DATOS II — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723606331.pdf) |
| `15723606332.pdf` | 2019-10-29 10:50 | 14 | Contenido (14p) | INVESTIGACIÓN DE OPERACIONES — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723606332.pdf) |
| `15723600811.pdf` | 2019-10-29 10:41 | 9 | Contenido (9p) | BASES DE DATOS I — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723600811.pdf) |
| `15723600814.pdf` | 2019-10-29 10:41 | 8 | Contenido (8p) | ARQUITECTURA DEL COMPUTADOR — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723600814.pdf) |
| `15723600815.pdf` | 2019-10-29 10:41 | 10 | Contenido (10p) | METODOLOGÍA DE LA INVESTIGACIÓN — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723600815.pdf) |
| `15723600812.pdf` | 2019-10-29 10:41 | 12 | Contenido (12p) | ORGANIZACIÓN Y SISTEMAS — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723600812.pdf) |
| `15723600813.pdf` | 2019-10-29 10:41 | 8 | Contenido (8p) | ALGORÍTMOS Y — (CIÓN III) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15723600813.pdf) |
| `15722778991.pdf` | 2019-10-28 11:51 | 7 | Contenido (7p) | CÁLCULO III — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722778991.pdf) |
| `15722778992.pdf` | 2019-10-28 11:51 | 10 | Contenido (10p) | FÍSICA — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722778992.pdf) |
| `15722778993.pdf` | 2019-10-28 11:51 | 7 | Contenido (7p) | ALGORÍTMOS Y — (CIÓN I) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722778993.pdf) |
| `15722778994.pdf` | 2019-10-28 11:51 | 10 | Contenido (10p) | ÁLGEBRA — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722778994.pdf) |
| `15722778995.pdf` | 2019-10-28 11:51 | 9 | Contenido (9p) | INFERENCIA Y PROBABILIDADES — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722778995.pdf) |
| `15722773501.pdf` | 2019-10-28 11:42 | 7 | Contenido (7p) | CÁLCULO II — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722773501.pdf) |
| `15722773504.pdf` | 2019-10-28 11:42 | 7 | Contenido (7p) | ESTADÍSTICA DESCRIPTIVA — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722773504.pdf) |
| `15722773505.pdf` | 2019-10-28 11:42 | 13 | Contenido (13p) | INGLÉS INSTRUMENTAL — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722773505.pdf) |
| `15722773506.pdf` | 2019-10-28 11:42 | 13 | Contenido (13p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722773506.pdf) |
| `15722773502.pdf` | 2019-10-28 11:42 | 14 | Contenido (14p) | INTRODUCCIÓN A LA INFORMÁTICA — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722773502.pdf) |
| `15722773503.pdf` | 2019-10-28 11:42 | 14 | Contenido (14p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ingeniería, Arquitectura y Tecnología... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722773503.pdf) |
| `15722767554.pdf` | 2019-10-28 11:32 | 13 | Contenido (13p) | ENTRENAMIENTO FÍSICO GENERAL — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722767554.pdf) |
| `15722767551.pdf` | 2019-10-28 11:32 | 12 | Contenido (12p) | LENGUAJE Y COMUNICACIÓN — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722767551.pdf) |
| `15722767552.pdf` | 2019-10-28 11:32 | 7 | Contenido (7p) | CÁLCULO I — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722767552.pdf) |
| `15722767553.pdf` | 2019-10-28 11:32 | 9 | Contenido (9p) | DESARROLLO PERSONAL Y PROFESIONAL — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722767553.pdf) |
| `15722767555.pdf` | 2019-10-28 11:32 | 8 | Contenido (8p) | LÓGICA — (Ingeniería, Arquitectura y Tecnología) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15722767555.pdf) |
| `15720227781.pdf` | 2019-10-25 12:59 | 9 | Contenido (9p) | PRÁCTICA PROFESIONAL III — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720227781.pdf) |
| `15720227782.pdf` | 2019-10-25 12:59 | 17 | Contenido (17p) | TRABAJO DE GRADO | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720227782.pdf) |
| `15720224801.pdf` | 2019-10-25 12:54 | 7 | Contenido (7p) | PRÁCTICA PROFESIONAL II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720224801.pdf) |
| `15720224802.pdf` | 2019-10-25 12:54 | 10 | Contenido (10p) | DIDÁCTICA DE LA FÍSICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720224802.pdf) |
| `15720224803.pdf` | 2019-10-25 12:54 | 11 | Contenido (11p) | FÍSICA V — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720224803.pdf) |
| `15720224804.pdf` | 2019-10-25 12:54 | 10 | Contenido (10p) | LABORATORIO IV — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720224804.pdf) |
| `15720218901.pdf` | 2019-10-25 12:44 | 12 | Contenido (12p) | PRÁCTICA PROFESIONAL I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720218901.pdf) |
| `15720218902.pdf` | 2019-10-25 12:44 | 7 | Contenido (7p) | METODOLOGÍA Y RECURSOS PARA EL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720218902.pdf) |
| `15720218903.pdf` | 2019-10-25 12:44 | 10 | Contenido (10p) | INVESTIGACIÓN SOCIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720218903.pdf) |
| `15720218904.pdf` | 2019-10-25 12:44 | 8 | Contenido (8p) | ETICA Y DOCENCIA — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720218904.pdf) |
| `15720218905.pdf` | 2019-10-25 12:44 | 12 | Contenido (12p) | FÍSICA IV — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720218905.pdf) |
| `15720218906.pdf` | 2019-10-25 12:44 | 7 | Contenido (7p) | LABORATORIO III — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720218906.pdf) |
| `15720212461.pdf` | 2019-10-25 12:34 | 6 | Contenido (6p) | CONTENIDO PROGRAMATICO DEL SUBPROYECTO: ECUACIONES DIFERNCIA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720212461.pdf) |
| `15720212465.pdf` | 2019-10-25 12:34 | 6 | Contenido (6p) | LABORATORIO II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720212465.pdf) |
| `15720212462.pdf` | 2019-10-25 12:34 | 9 | Contenido (9p) | EVALUACIÓN DEL APRENDIZAJE MENCIÓN y — (EDUCACIÓN) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720212462.pdf) |
| `15720212463.pdf` | 2019-10-25 12:34 | 7 | Contenido (7p) | METODOLOGÍA DE LA INVESTIGACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720212463.pdf) |
| `15720212464.pdf` | 2019-10-25 12:34 | 11 | Contenido (11p) | FÍSICA III — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720212464.pdf) |
| `15720205011.pdf` | 2019-10-25 12:21 | 10 | Contenido (10p) | ORIENTACIÒN EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720205011.pdf) |
| `15720205012.pdf` | 2019-10-25 12:21 | 10 | Contenido (10p) | GERENCIA EDUCATIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720205012.pdf) |
| `15720205013.pdf` | 2019-10-25 12:21 | 7 | Contenido (7p) | PLANIFICACIÓN DE LA ENSEÑANZA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720205013.pdf) |
| `15720205014.pdf` | 2019-10-25 12:21 | 8 | Contenido (8p) | “Cálculo Diferencial”, desarrollado en el — (TICO DEL) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720205014.pdf) |
| `15720205015.pdf` | 2019-10-25 12:21 | 12 | Contenido (12p) | FÍSICA II — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720205015.pdf) |
| `15720205016.pdf` | 2019-10-25 12:21 | 7 | Contenido (7p) | LABORATORIO I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720205016.pdf) |
| `15720191422.pdf` | 2019-10-25 11:59 | 4 | Contenido (4p) | ECOLOGÍA Y EDUCACIÓN AMBIENTAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720191422.pdf) |
| `15720191424.pdf` | 2019-10-25 11:59 | 13 | Contenido (13p) | FÍSICA I — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720191424.pdf) |
| `15720191421.pdf` | 2019-10-25 11:59 | 9 | Contenido (9p) | PSICOLOGÍA DEL APRENDIZAJE — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720191421.pdf) |
| `15720191423.pdf` | 2019-10-25 11:59 | 8 | Contenido (8p) | CÁLCULO DIFERENCIAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720191423.pdf) |
| `15720191425.pdf` | 2019-10-25 11:59 | 17 | Contenido (17p) | ESTADISTICA DESCRIPTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720191425.pdf) |
| `15720184623.pdf` | 2019-10-25 11:47 | 6 | Contenido (6p) | SOCIOLOGÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720184623.pdf) |
| `15720184621.pdf` | 2019-10-25 11:47 | 8 | Contenido (8p) | PSICOLOGÍA EVOLUTIVA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720184621.pdf) |
| `15720184622.pdf` | 2019-10-25 11:47 | 10 | Contenido (10p) | FILOSOFÍA DE LA EDUCACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720184622.pdf) |
| `15720184624.pdf` | 2019-10-25 11:47 | 8 | Contenido (8p) | QUÌMICA GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720184624.pdf) |
| `15720184625.pdf` | 2019-10-25 11:47 | 10 | Contenido (10p) | INTRODUCCIÓN A LA FÍSICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720184625.pdf) |
| `15720184626.pdf` | 2019-10-25 11:47 | 9 | Contenido (9p) | CONTENIDO PROGRAMATICO DEL SUBPROYECTO: INTRODUCCIÓN AL CÁLC | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720184626.pdf) |
| `15720172041.pdf` | 2019-10-25 11:26 | 7 | Contenido (7p) | INGLÉS INSTRUMENTAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720172041.pdf) |
| `15720172042.pdf` | 2019-10-25 11:26 | 11 | Contenido (11p) | ENTRENAMIENTO FÍSICO GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720172042.pdf) |
| `15720172044.pdf` | 2019-10-25 11:26 | 9 | Contenido (9p) | INFORMÁTICA — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720172044.pdf) |
| `15720172045.pdf` | 2019-10-25 11:26 | 8 | Contenido (8p) | MATEMÁTICA GENERAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720172045.pdf) |
| `15720172043.pdf` | 2019-10-25 11:26 | 11 | Contenido (11p) | ESPACIO GEOGRÁFICO E IDENTIDAD NACIONAL — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720172043.pdf) |
| `15720166271.pdf` | 2019-10-25 11:17 | 7 | Contenido (7p) | LENGUAJE Y COMUNICACIÓN — (Ciencias de la Educación) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15720166271.pdf) |
| `15623118781.pdf` | 2019-07-05 03:31 | 7 | Contenido (7p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCIÓN AGRÍCOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623118781.pdf) |
| `15623118782.pdf` | 2019-07-05 03:31 | 11 | Contenido (11p) | INGLÉS I — (CAMPO) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623118782.pdf) |
| `15623118785.pdf` | 2019-07-05 03:31 | 10 | Contenido (10p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA PROGRAMA PRODUCCION AGRICOLA VEGETAL SUB-PROG... | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623118785.pdf) |
| `15623118783.pdf` | 2019-07-05 03:31 | 8 | Contenido (8p) | VICERRECTORADO PRODUCCIÓN AGRÍCOLA — (de Ingeniería.) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623118783.pdf) |
| `15623118784.pdf` | 2019-07-05 03:31 | 7 | Contenido (7p) | VICERRECTORADO PRODUCCIÓN AGRICOLA | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623118784.pdf) |
| `15623080291.pdf` | 2019-07-05 02:27 | 5 | Contenido (5p) | PRÁCTICA PROFESIONAL III — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623080291.pdf) |
| `15623080292.pdf` | 2019-07-05 02:27 | 9 | Contenido (9p) | SEMINARIO DE TESIS II — (Ciencias Sociales) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623080292.pdf) |
| `15623078252.pdf` | 2019-07-05 02:23 | 1 | Malla (Pensum) | TRABAJO DE GRADO — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623078252.pdf) |
| `15623078251.pdf` | 2019-07-05 02:23 | 1 | Malla (Pensum) | PASANTÍAS — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623078251.pdf) |
| `15623074591.pdf` | 2019-07-05 02:17 | 1 | Malla (Pensum) | POLÍTICA Y DESARROLLO AGRÍCOLA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623074591.pdf) |
| `15623074592.pdf` | 2019-07-05 02:17 | 1 | Malla (Pensum) | DINÁMICA ECONÓMICA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623074592.pdf) |
| `15623074596.pdf` | 2019-07-05 02:17 | 1 | Malla (Pensum) | ÉTICA PROFESIONAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623074596.pdf) |
| `15623074593.pdf` | 2019-07-05 02:17 | 1 | Malla (Pensum) | MERCADO DE CAPITALES — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623074593.pdf) |
| `15623074594.pdf` | 2019-07-05 02:17 | 1 | Malla (Pensum) | PRESUPUESTO PÚBLICO — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623074594.pdf) |
| `15623074595.pdf` | 2019-07-05 02:17 | 1 | Malla (Pensum) | FORMULACIÓN Y EVALUACIÓN DE PROYECTOS II — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623074595.pdf) |
| `15623068232.pdf` | 2019-07-05 02:07 | 1 | Malla (Pensum) | TEORÍA Y POLÍTICA FISCAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623068232.pdf) |
| `15623068233.pdf` | 2019-07-05 02:07 | 1 | Malla (Pensum) | COMERCIO Y FINANZAS INTERNACIONALES — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623068233.pdf) |
| `15623068235.pdf` | 2019-07-05 02:07 | 11 | Contenido (11p) | CONTENIDO PROGRAMATICO DEL SUPROYECTO: FORMULACION Y EVALUAC — (Ciencia del Agro y del Mar) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623068235.pdf) |
| `15623068231.pdf` | 2019-07-05 02:07 | 1 | Malla (Pensum) | PLANIFICACIÓN AGRÍCOLA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623068231.pdf) |
| `15623068234.pdf` | 2019-07-05 02:07 | 11 | Contenido (11p) | INVESTIGACIÓN DE OPERACIONES — (Ciencias del Agro y Mar) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623068234.pdf) |
| `15623068236.pdf` | 2019-07-05 02:07 | 1 | Malla (Pensum) | SEMINARIO DE INVESTIGACIÓN — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623068236.pdf) |
| `15623062781.pdf` | 2019-07-05 01:57 | 1 | Malla (Pensum) | PLANIFICACIÓN DE FINCAS — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623062781.pdf) |
| `15623062783.pdf` | 2019-07-05 01:57 | 1 | Malla (Pensum) | TEORÍA Y POLÍTICA MONETARIA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623062783.pdf) |
| `15623062784.pdf` | 2019-07-05 01:57 | 1 | Malla (Pensum) | ECONOMETRÍA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623062784.pdf) |
| `15623062785.pdf` | 2019-07-05 01:57 | 1 | Malla (Pensum) | PRÁCTICA II: VALORACIÓN DE BIENES AGRÍCOLAS — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623062785.pdf) |
| `15623062782.pdf` | 2019-07-05 01:57 | 1 | Malla (Pensum) | DESARROLLO ECONÓMICO — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15623062782.pdf) |
| `15622282321.pdf` | 2019-07-04 04:17 | 1 | Malla (Pensum) | CONTABILIDAD AGROPECUARIA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622282321.pdf) |
| `15622282322.pdf` | 2019-07-04 04:17 | 1 | Malla (Pensum) | MATEMÁTICA FINANCIERA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622282322.pdf) |
| `15622282325.pdf` | 2019-07-04 04:17 | 1 | Malla (Pensum) | ADMINISTRACIÓN DE FINCAS — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622282325.pdf) |
| `15622282326.pdf` | 2019-07-04 04:17 | 1 | Malla (Pensum) | INVESTIGACIÓN SOCIAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622282326.pdf) |
| `15622282323.pdf` | 2019-07-04 04:17 | 6 | Contenido (6p) | MACROECONOMÍA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622282323.pdf) |
| `15622282324.pdf` | 2019-07-04 04:17 | 1 | Malla (Pensum) | INVESTIGACIÓN DE MERCADOS — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622282324.pdf) |
| `15622272051.pdf` | 2019-07-04 04:00 | 1 | Malla (Pensum) | PRODUCCIÓN ANIMAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622272051.pdf) |
| `15622272052.pdf` | 2019-07-04 04:00 | 1 | Malla (Pensum) | MICROECONOMÍA II — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622272052.pdf) |
| `15622272053.pdf` | 2019-07-04 04:00 | 1 | Malla (Pensum) | CONTABILIDAD SOCIAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622272053.pdf) |
| `15622272055.pdf` | 2019-07-04 04:00 | 1 | Malla (Pensum) | COMPUTACIÓN APLICADA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622272055.pdf) |
| `15622272054.pdf` | 2019-07-04 04:00 | 8 | Contenido (8p) | PRÁCTICA I: COMERCIALIZACIÓN DE PRODUCTOS AGRÍCOLAS — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622272054.pdf) |
| `15622261571.pdf` | 2019-07-04 03:42 | 1 | Malla (Pensum) | PRODUCCIÓN VEGETAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622261571.pdf) |
| `15622261573.pdf` | 2019-07-04 03:42 | 10 | Contenido (10p) | MERCADOTECNIA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622261573.pdf) |
| `15622261575.pdf` | 2019-07-04 03:42 | 10 | Contenido (10p) | ESTADÍSTICA INFERENCIAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622261575.pdf) |
| `15622261576.pdf` | 2019-07-04 03:42 | 1 | Malla (Pensum) | METODOLOGÍA DE LA INVESTIGACIÓN — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622261576.pdf) |
| `15622261572.pdf` | 2019-07-04 03:42 | 1 | Malla (Pensum) | MICROECONOMÍA I — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622261572.pdf) |
| `15622261574.pdf` | 2019-07-04 03:42 | 1 | Malla (Pensum) | CONTABILIDAD FINANCIERA II — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622261574.pdf) |
| `15622228421.pdf` | 2019-07-04 02:47 | 1 | Malla (Pensum) | COMPUTACIÓN — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622228421.pdf) |
| `15622228422.pdf` | 2019-07-04 02:47 | 1 | Malla (Pensum) | MATEMÁTICA II — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622228422.pdf) |
| `15622228423.pdf` | 2019-07-04 02:47 | 1 | Malla (Pensum) | PRINCIPIOS DE TEORÍA ECONÓMICA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622228423.pdf) |
| `15622228424.pdf` | 2019-07-04 02:47 | 1 | Malla (Pensum) | CONTABILIDAD FINANCIERA I — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622228424.pdf) |
| `15622228425.pdf` | 2019-07-04 02:47 | 14 | Contenido (14p) | ESTADÍSTICA DESCRIPTIVA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622228425.pdf) |
| `15622228426.pdf` | 2019-07-04 02:47 | 1 | Malla (Pensum) | ORGANIZACIÓN DEPORTIVA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622228426.pdf) |
| `15622222721.pdf` | 2019-07-04 02:37 | 1 | Malla (Pensum) | ECOLOGIA Y AMBIENTE — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622222721.pdf) |
| `15622222724.pdf` | 2019-07-04 02:37 | 1 | Malla (Pensum) | ENTRENAMIENTO FÍSICO GENERAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622222724.pdf) |
| `15622222726.pdf` | 2019-07-04 02:37 | 1 | Malla (Pensum) | HISTORIA ECONÓMICA Y SOCIAL DE VENEZUELA — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622222726.pdf) |
| `15622222727.pdf` | 2019-07-04 02:37 | 10 | Contenido (10p) | ORIENTACIÓN INSTITUCIONAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622222727.pdf) |
| `15622222722.pdf` | 2019-07-04 02:37 | 1 | Malla (Pensum) | MATEMÁTICA I — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622222722.pdf) |
| `15622222723.pdf` | 2019-07-04 02:37 | 1 | Malla (Pensum) | INGLÉS INSTRUMENTAL — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622222723.pdf) |
| `15622222725.pdf` | 2019-07-04 02:37 | 10 | Contenido (10p) | LENGUAJE Y COMUNICACIÓN — (Economía Agrícola) | [Descargar PDF](https://unellez.edu.ve/material/pensums/15622222725.pdf) |