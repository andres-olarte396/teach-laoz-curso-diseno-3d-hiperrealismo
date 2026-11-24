# Ejercicios alternativos — Vértices, aristas, caras y normales

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-3.1.1-1 — Ruta Básica

**Reto:** Invertir una cara de un cubo y repararla.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Edit Mode Face; Flip; A; Shift+N. El exterior queda orientado coherentemente.

**Resultado esperado:** Identificar vértice, arista y cara en un cubo. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si F crea una cara cruzada o extraña, has seleccionado puntos de otro contorno; deshaz y aísla el borde. Si Shift+N no arregla una superficie abierta, determina qué lado debe considerarse exterior y usa Flip de forma deliberada. Si una cara no admite selección, puede estar tapada por otra; gira la vista o usa X-Ray temporalmente. Si aparecen puntos superpuestos, Merge by Distance con una distancia pequeña puede unirlos, pero una distancia grande destruirá detalles.

## EJ-3.1.1-2 — Ruta Intermedia

**Reto:** Borrar una cara, reconstruirla y explicar qué cambió.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Only Faces; seleccionar cuatro bordes; F; Shift+N. F añade geometría, recalcular sólo orientación.

**Resultado esperado:** Invertir y restaurar una cara observando Face Orientation. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si F crea una cara cruzada o extraña, has seleccionado puntos de otro contorno; deshaz y aísla el borde. Si Shift+N no arregla una superficie abierta, determina qué lado debe considerarse exterior y usa Flip de forma deliberada. Si una cara no admite selección, puede estar tapada por otra; gira la vista o usa X-Ray temporalmente. Si aparecen puntos superpuestos, Merge by Distance con una distancia pequeña puede unirlos, pero una distancia grande destruirá detalles.

## EJ-3.1.1-3 — Ruta Avanzada

**Reto:** Comparar una lámina abierta y una caja cerrada con normales.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** La lámina ofrece anverso/reverso, la caja define interior/exterior; no afirmar espesor donde no existe.

**Resultado esperado:** Cerrar un hueco con F y recalcular orientación. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si F crea una cara cruzada o extraña, has seleccionado puntos de otro contorno; deshaz y aísla el borde. Si Shift+N no arregla una superficie abierta, determina qué lado debe considerarse exterior y usa Flip de forma deliberada. Si una cara no admite selección, puede estar tapada por otra; gira la vista o usa X-Ray temporalmente. Si aparecen puntos superpuestos, Merge by Distance con una distancia pequeña puede unirlos, pero una distancia grande destruirá detalles.

