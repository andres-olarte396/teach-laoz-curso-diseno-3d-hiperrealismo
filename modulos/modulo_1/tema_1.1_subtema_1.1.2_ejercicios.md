# Ejercicios alternativos — Origen, ejes, coordenadas y guardado de archivos

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-1.1.2-1 — Ruta Básica

**Reto:** Crear A=(1,2,0) y B=(1,2,1), verificarlos desde Top y Front.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Duplicar el vértice, editar N > Item; Top superpone A/B, Front muestra alturas distintas.

**Resultado esperado:** Un solo vértice seleccionado muestra la terna solicitada. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si ves una cara, no fusionaste los cuatro vértices: A y M > At Center de nuevo. Si N muestra Location, estás en Object Mode, no leyendo el vértice. Si la coordenada global parece distinta, revisa que el objeto tenga Location cero, Rotation cero y Scale uno. Si el punto no aparece en un render, es el comportamiento esperado: falta superficie. No lo arregles aumentando luces. Si el cursor se movió accidentalmente, Shift+S > Cursor to World Origin lo recupera.

## EJ-1.1.2-2 — Ruta Intermedia

**Reto:** Crear cinco puntos dados y registrar su profundidad oculta en cada vista.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Usar coordenadas exactas; Top oculta Z, Front oculta Y, Right oculta X.

**Resultado esperado:** Cursor 3D vuelve a (0,0,0) sin mover Punto. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si ves una cara, no fusionaste los cuatro vértices: A y M > At Center de nuevo. Si N muestra Location, estás en Object Mode, no leyendo el vértice. Si la coordenada global parece distinta, revisa que el objeto tenga Location cero, Rotation cero y Scale uno. Si el punto no aparece en un render, es el comportamiento esperado: falta superficie. No lo arregles aumentando luces. Si el cursor se movió accidentalmente, Shift+S > Cursor to World Origin lo recupera.

## EJ-1.1.2-3 — Ruta Avanzada

**Reto:** Predecir qué pares coinciden antes de abrir cada vista y justificar dos coincidencias.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Comparar las dos coordenadas visibles; coincidencia en una proyección no prueba posición idéntica.

**Resultado esperado:** Explicar coincidencia de A y B en Top. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si ves una cara, no fusionaste los cuatro vértices: A y M > At Center de nuevo. Si N muestra Location, estás en Object Mode, no leyendo el vértice. Si la coordenada global parece distinta, revisa que el objeto tenga Location cero, Rotation cero y Scale uno. Si el punto no aparece en un render, es el comportamiento esperado: falta superficie. No lo arregles aumentando luces. Si el cursor se movió accidentalmente, Shift+S > Cursor to World Origin lo recupera.

