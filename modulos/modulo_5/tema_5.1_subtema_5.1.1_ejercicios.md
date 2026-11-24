# Ejercicios alternativos — Extrusión, inserción y cortes

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-5.1.1-1 — Ruta Básica

**Reto:** Crear caja abierta con pared y fondo 2 mm.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Inset 0.002 m y Extrude Z-0.058 m; recalcular normales.

**Resultado esperado:** Exterior 120×80×60 mm conservado. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si E y Escape dejan caras duplicadas en el mismo sitio, deshaz la extrusión completa con Ctrl+Z antes de intentar otra; cancelar movimiento no siempre elimina la nueva geometría. Si Inset afecta todas las caras, deshaz y selecciona sólo la superior. Si el fondo atraviesa la base, revisa el desplazamiento relativo y unidades. Si el bucle de corte no recorre todo, analiza la topología en lugar de forzarlo con más cortes.

## EJ-5.1.1-2 — Ruta Intermedia

**Reto:** Construir pared 3 mm y fondo 4 mm sin cambiar exterior.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Inset 0.003 m; extrusión Z-0.056 m desde cara superior 60 mm.

**Resultado esperado:** Borde 2 mm y fondo interior Z=2 mm. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si E y Escape dejan caras duplicadas en el mismo sitio, deshaz la extrusión completa con Ctrl+Z antes de intentar otra; cancelar movimiento no siempre elimina la nueva geometría. Si Inset afecta todas las caras, deshaz y selecciona sólo la superior. Si el fondo atraviesa la base, revisa el desplazamiento relativo y unidades. Si el bucle de corte no recorre todo, analiza la topología en lugar de forzarlo con más cortes.

## EJ-5.1.1-3 — Ruta Avanzada

**Reto:** Reparar un ensayo de extrusión cancelada y comprobar conectividad.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Deshacer operación duplicada; reconstruir una extrusión válida; inspeccionar Wireframe y normales.

**Resultado esperado:** No extrusiones duplicadas superpuestas. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si E y Escape dejan caras duplicadas en el mismo sitio, deshaz la extrusión completa con Ctrl+Z antes de intentar otra; cancelar movimiento no siempre elimina la nueva geometría. Si Inset afecta todas las caras, deshaz y selecciona sólo la superior. Si el fondo atraviesa la base, revisa el desplazamiento relativo y unidades. Si el bucle de corte no recorre todo, analiza la topología en lugar de forzarlo con más cortes.

