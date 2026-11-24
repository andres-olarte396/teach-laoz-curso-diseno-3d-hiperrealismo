# Ejercicios alternativos — Simetría y espesor

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-6.1.1-1 — Ruta Básica

**Reto:** Dos paneles reflejados y espesor 2 mm.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Plano desplazado en Edit Mode; Mirror X; Solidify 0.002 m Offset 0.

**Resultado esperado:** Mirror respecto al origen verificado. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si Mirror superpone el modelo entero, la geometría ya puede estar a ambos lados del origen: usa una mitad o un diseño deliberado con Bisect, no dupliques sin revisar. Si las piezas no se unen, comprueba X=0 y Merge. Si el grosor es desigual, revisa Scale y normales. Si pierdes la edición, quizá aplicaste el modificador; usa la versión anterior. Si añades Solidify a una caja que ya tiene paredes, puedes crear una segunda pared innecesaria.

## EJ-6.1.1-2 — Ruta Intermedia

**Reto:** Hacer coincidir borde en X=0 y activar Merge/Clipping.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Editar vértices al plano; revisar unión sin separación visible.

**Resultado esperado:** Solidify 2 mm con Scale uno y Rim. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si Mirror superpone el modelo entero, la geometría ya puede estar a ambos lados del origen: usa una mitad o un diseño deliberado con Bisect, no dupliques sin revisar. Si las piezas no se unen, comprueba X=0 y Merge. Si el grosor es desigual, revisa Scale y normales. Si pierdes la edición, quizá aplicaste el modificador; usa la versión anterior. Si añades Solidify a una caja que ya tiene paredes, puedes crear una segunda pared innecesaria.

## EJ-6.1.1-3 — Ruta Avanzada

**Reto:** Comparar Offset 0 y-1 sin confundir tamaño exterior y espesor.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Guardar dos variantes; medir desplazamiento de las caras y justificar la elección.

**Resultado esperado:** Merge sólo une vértices próximos al plano. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si Mirror superpone el modelo entero, la geometría ya puede estar a ambos lados del origen: usa una mitad o un diseño deliberado con Bisect, no dupliques sin revisar. Si las piezas no se unen, comprueba X=0 y Merge. Si el grosor es desigual, revisa Scale y normales. Si pierdes la edición, quizá aplicaste el modificador; usa la versión anterior. Si añades Solidify a una caja que ya tiene paredes, puedes crear una segunda pared innecesaria.

