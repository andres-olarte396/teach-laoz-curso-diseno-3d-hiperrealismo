# Reporte de producción — D3DH-001

## Parámetros

- Programa confirmado: Blender gratuito.
- Disponibilidad confirmada: 20 minutos diarios.
- Calendario propuesto para el alcance: 26 semanas, 182 sesiones, 3640 minutos (60 h 40 min) activos.
- Versión didáctica: Blender 4.5 LTS, con menús en inglés y explicación en español.
- Enfoque asumido: visualización de productos y escenas pequeñas.

El recorrido enseña coordenadas, transformaciones, malla, modelado, UV, texturas, PBR, cámara, luz, render, color y montaje fotográfico. El resultado esperado es una primera presentación de un producto sencillo en dos imágenes, con archivo editable y decisiones documentadas.

## Estado

Producción documental cerrada el 4 de octubre de 2026: currículo, 52 lecciones, ejercicios, solucionarios, evaluaciones, calendario, recursos, integración y PDF terminados. Queda pendiente probar las prácticas con Blender y realizar un pilotaje con el estudiante.

## Comprobaciones de entrega

- 26 semanas y 182 sesiones de 20 minutos; total de 3640 minutos activos.
- 52 subtemas con preconceptos, explicación, ejercicios y evaluación. Los 156 ejercicios son alternativas: se elige uno por bloque, sin añadir tiempo al calendario.
- Cuestionarios y solucionarios semanales, guías del estudiante e instructor y proyecto final con dos imágenes y archivo editable.
- Validador curricular del proyecto: aprobado, con todos los archivos de navegación presentes.
- Validador del curso: 604 enlaces locales comprobados, sin errores ni advertencias.
- Dos simulaciones HTML locales, cuatro diagramas SVG y recursos de textura propios. Las simulaciones fueron revisadas visual y funcionalmente.
- PDF de 358 páginas con 163 entradas del índice cotejadas con sus páginas físicas. Se revisaron vistas de conjunto de todas las páginas y muestras a tamaño completo; se corrigió un salto que producía una página sin contenido entre el índice y la guía.
- Referencias primarias del manual oficial de Blender y registro local de verificación de enlaces. La comprobación documental no equivale a ejecutar las prácticas en Blender.

Los constructores y verificadores propios permanecen en la carpeta del curso para permitir regenerarlo sin modificar los scripts compartidos ni otros cursos.

## Proceso aplicado

Se siguieron los roles del manager de temario y del manager de curso: estrategia, preconceptos, contenido, ejercicios, evaluación, edición cognitiva, recursos y verificación. El script `scripts/generate_course.js` no existe en este checkout; se utilizaron constructores exclusivos del curso con contenido específico, seguidos por integración y revisión.

El PDF usa el conversor preview local del proyecto, `fix-toc-html.js` y `generate-with-toc-pages.js`, con un mapa de páginas por encabezados. El ejecutable propietario `make-pdf` se sustituye por el conversor existente. Las adaptaciones de paginación y fuentes locales se aplican en memoria, sin editar scripts compartidos.

## Archivos principales

- [Plan curricular](plan_curricular.md)
- [Cronograma](cronograma.md)
- [Índice](INDICE.md)
- [Manual completo](CURSO_COMPLETO.md)
- [Proyecto final](PROYECTO_FINAL.md)
- [Verificación documental y de recursos](REPORTE_VERIFICACION.md)
- [Referencias](REFERENCIAS.md)
- [PDF](../../docs/cursos/diseno-3d/D3DH-001-Diseno-3D-Hiperrealismo.pdf)

## Límites

La documentación y los recursos se revisan; las prácticas no se han ejecutado en Blender durante esta producción. No se dispone de información sobre el computador del estudiante ni de un pilotaje del esfuerzo real de las sesiones. El tiempo de render automático se registra aparte; todas las acciones de estudio, evaluación y corrección permanecen dentro del presupuesto activo.

La bibliografía oficial no declara fecha editorial individual para cada página. Las excepciones de diversidad y actualidad exigidas por el workflow genérico están documentadas en `REFERENCIAS.md`. No hay un documento fuente propio que requiera auditoría del agente 15; el temario se desarrolló a partir del objetivo descrito por el usuario.
