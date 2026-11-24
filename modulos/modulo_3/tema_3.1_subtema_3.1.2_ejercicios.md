# Ejercicios alternativos — Primitivas, selección y malla cerrada

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-3.1.2-1 — Ruta Básica

**Reto:** Abrir y cerrar la tapa de un cubo conservando sus bordes.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Only Faces; cuatro aristas; F; Shift+N; inspección Non-Manifold.

**Resultado esperado:** Caja reparada sin bordes abiertos seleccionados. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si Non-Manifold selecciona el borde superior, aún falta tapa o sus vértices no están unidos. Si selecciona una arista con más de dos caras, revisa caras internas o duplicadas. Si al mover una cara se separa del resto, puede haber vértices duplicados sin conexión; deshaz y considera Merge by Distance con umbral prudente. Si X-Ray dejó de mostrar un sólido claro, apágalo después de seleccionar. Si borraste toda la caja, deshaz antes de añadir otra.

## EJ-3.1.2-2 — Ruta Intermedia

**Reto:** Comparar una caja cerrada y un cilindro tapado de 16 lados.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Ambos pueden estar cerrados; el cilindro usa N-Gon en tapas.

**Resultado esperado:** Poste independiente con dimensiones correctas. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si Non-Manifold selecciona el borde superior, aún falta tapa o sus vértices no están unidos. Si selecciona una arista con más de dos caras, revisa caras internas o duplicadas. Si al mover una cara se separa del resto, puede haber vértices duplicados sin conexión; deshaz y considera Merge by Distance con umbral prudente. Si X-Ray dejó de mostrar un sólido claro, apágalo después de seleccionar. Si borraste toda la caja, deshaz antes de añadir otra.

## EJ-3.1.2-3 — Ruta Avanzada

**Reto:** Dejar intencionalmente un hueco y diagnosticarlo sin rellenar otros bordes.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Deselect; Non-Manifold; confirmar el perímetro seleccionado y rellenar solamente ese bucle.

**Resultado esperado:** Distinguir cara N-Gon de hueco. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si Non-Manifold selecciona el borde superior, aún falta tapa o sus vértices no están unidos. Si selecciona una arista con más de dos caras, revisa caras internas o duplicadas. Si al mover una cara se separa del resto, puede haber vértices duplicados sin conexión; deshaz y considera Merge by Distance con umbral prudente. Si X-Ray dejó de mostrar un sólido claro, apágalo después de seleccionar. Si borraste toda la caja, deshaz antes de añadir otra.

