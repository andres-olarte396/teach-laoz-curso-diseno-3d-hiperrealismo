# Solucionario — Semana 5: Construcción de piezas

## Pregunta 1

No. Crea un contorno dentro de la cara. Después hay que extruir, borrar o construir según el diseño.

**Por qué falla la confusión habitual:** Si E y Escape dejan caras duplicadas en el mismo sitio, deshaz la extrusión completa con Ctrl+Z antes de intentar otra; cancelar movimiento no siempre elimina la nueva geometría. Si Inset afecta todas las caras, deshaz y selecciona sólo la superior. Si el fondo atraviesa la base, revisa el desplazamiento relativo y unidades. Si el bucle de corte no recorre todo, analiza la topología en lugar de forzarlo con más cortes.

## Pregunta 2

No. Une los objetos en un contenedor, pero puede conservar islas de geometría sin vértices compartidos.

**Por qué falla la confusión habitual:** Si Ctrl+J parece no actuar, confirma que los objetos sean compatibles y estés en Object Mode. Si P separa casi todo, deshaz y verifica la selección. Si L selecciona una pieza equivocada, acerca la vista y coloca el puntero sobre la isla deseada. Si una tapa cambia al editar otra, podrían compartir datos por Duplicate Linked; usa una copia independiente cuando se requiera un cambio aislado. Si pierdes un objeto, revisa colecciones ocultas antes de añadir duplicados.

## Pregunta 3 — Demostración

**Subtema 1:** Exterior 120×80×60 mm conservado; Borde 2 mm y fondo interior Z=2 mm; No extrusiones duplicadas superpuestas. Recuperación: Si E y Escape dejan caras duplicadas en el mismo sitio, deshaz la extrusión completa con Ctrl+Z antes de intentar otra; cancelar movimiento no siempre elimina la nueva geometría. Si Inset afecta todas las caras, deshaz y selecciona sólo la superior. Si el fondo atraviesa la base, revisa el desplazamiento relativo y unidades. Si el bucle de corte no recorre todo, analiza la topología en lugar de forzarlo con más cortes.

**Subtema 2:** Colección Producto con Cuerpo, Tapa, Base; Tapa 126×86×6 mm y cuerpo sin cambios; Explicar diferencia entre Join y soldar. Recuperación: Si Ctrl+J parece no actuar, confirma que los objetos sean compatibles y estés en Object Mode. Si P separa casi todo, deshaz y verifica la selección. Si L selecciona una pieza equivocada, acerca la vista y coloca el puntero sobre la isla deseada. Si una tapa cambia al editar otra, podrían compartir datos por Duplicate Linked; usa una copia independiente cuando se requiera un cambio aislado. Si pierdes un objeto, revisa colecciones ocultas antes de añadir duplicados.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
