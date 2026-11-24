# Ejercicios alternativos — Traslación y coordenadas globales/locales

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-2.1.1-1 — Ruta Básica

**Reto:** Colocar tres cubos en las ternas dadas sin arrastrar a ojo.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** N > Item > Location para cada objeto; comprobar X, Y, Z.

**Resultado esperado:** Centro, Este y Norte conservan sus tres posiciones. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si G desplaza la vista y no el objeto, confirma puntero y mapa de teclas. Si el eje parece incorrecto, vuelve a Global y revisa Rotation. Si has movido sólo una esquina, estabas en Edit Mode con una selección parcial; deshaz y usa Object Mode. Si una duplicación quedó superpuesta, lee los nombres en Outliner y fija Location antes de duplicar otra vez. No borres elementos sin verificar cuál es el activo.

## EJ-2.1.1-2 — Ruta Intermedia

**Reto:** Mover Girado una unidad en X local y justificar su nueva Location.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Con Rotation Z=90°, X local coincide con Y global positivo; desplazamiento desde cero a (0,1,0).

**Resultado esperado:** Diferenciar desplazamiento relativo G y posición absoluta Location. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si G desplaza la vista y no el objeto, confirma puntero y mapa de teclas. Si el eje parece incorrecto, vuelve a Global y revisa Rotation. Si has movido sólo una esquina, estabas en Edit Mode con una selección parcial; deshaz y usa Object Mode. Si una duplicación quedó superpuesta, lee los nombres en Outliner y fija Location antes de duplicar otra vez. No borres elementos sin verificar cuál es el activo.

## EJ-2.1.1-3 — Ruta Avanzada

**Reto:** Detectar malla desplazada con Location cero y restaurar ambas referencias.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Editar el objeto, inspeccionar geometría; deshacer el movimiento de vértices o ajustar de manera deliberada, sin cambiar arbitrariamente Location.

**Resultado esperado:** Demostrar dos direcciones distintas para X global y X local rotado. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si G desplaza la vista y no el objeto, confirma puntero y mapa de teclas. Si el eje parece incorrecto, vuelve a Global y revisa Rotation. Si has movido sólo una esquina, estabas en Edit Mode con una selección parcial; deshaz y usa Object Mode. Si una duplicación quedó superpuesta, lee los nombres en Outliner y fija Location antes de duplicar otra vez. No borres elementos sin verificar cuál es el activo.

