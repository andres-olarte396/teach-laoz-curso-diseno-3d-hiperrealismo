# Ejercicios alternativos — Curvas y perfiles de producto

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-8.1.1-1 — Ruta Básica

**Reto:** Crear tramo tubular de 6 mm desde Bézier.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Apply Scale; Geometry Bevel Round Depth 0.003 m; Fill Caps.

**Resultado esperado:** Curva 3D con Depth 3 mm y Fill Caps. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si la curva es una línea sin volumen, Bevel Depth sigue en cero. Si el extremo está abierto, comprueba Fill Caps. Si el grosor varía o sección es ovalada, revisa Scale. Si al mover un punto aparecen giros inesperados, inspecciona Top y Front y usa coordenadas. Si Convert elimina la edición de manejadores, era su efecto esperado: vuelve a la versión curva para modificar el diseño, no intentes reconstruir todos los manejadores desde la malla.

## EJ-8.1.1-2 — Ruta Intermedia

**Reto:** Variar grosor a 4 mm sin modificar recorrido.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Depth 0.002 m, mantener puntos de control.

**Resultado esperado:** Recorrido comprobado en dos vistas. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si la curva es una línea sin volumen, Bevel Depth sigue en cero. Si el extremo está abierto, comprueba Fill Caps. Si el grosor varía o sección es ovalada, revisa Scale. Si al mover un punto aparecen giros inesperados, inspecciona Top y Front y usa coordenadas. Si Convert elimina la edición de manejadores, era su efecto esperado: vuelve a la versión curva para modificar el diseño, no intentes reconstruir todos los manejadores desde la malla.

## EJ-8.1.1-3 — Ruta Avanzada

**Reto:** Comparar curva editable con copia convertida.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Convert Mesh sólo copia; original mantiene manejadores y Depth paramétrico.

**Resultado esperado:** Curva original conservada antes de Convert. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si la curva es una línea sin volumen, Bevel Depth sigue en cero. Si el extremo está abierto, comprueba Fill Caps. Si el grosor varía o sección es ovalada, revisa Scale. Si al mover un punto aparecen giros inesperados, inspecciona Top y Front y usa coordenadas. Si Convert elimina la edición de manejadores, era su efecto esperado: vuelve a la versión curva para modificar el diseño, no intentes reconstruir todos los manejadores desde la malla.

