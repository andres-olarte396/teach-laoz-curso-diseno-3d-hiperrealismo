# Ejercicios alternativos — Microtextura a escala

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-12.1.1-1 — Ruta Básica

**Reto:** Comparar ruido grueso y fino sin tocar luz.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Noise Scale 100 vs 1000; conservar frecuencia razonada.

**Resultado esperado:** Coordenadas Object y Scale uno. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si el detalle parece rocas, aumenta frecuencia o baja amplitud. Si desaparece completamente, revisa escala de salida y luz antes de exagerarlo. Si un objeto estirado tiene grano deformado, revisa Scale y coordenadas. Si la textura cambia al mover la pieza, comprueba qué objeto de referencia se usa en Texture Coordinate. Si Roughness oscila entre 0 y 1 sin razón, limita rango con Color Ramp.

## EJ-12.1.1-2 — Ruta Intermedia

**Reto:** Controlar Roughness entre 0.3 y 0.4.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Noise Fac > Color Ramp con grises 0.3/0.4 > Roughness.

**Resultado esperado:** Frecuencia comparada 100/1000/3000. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si el detalle parece rocas, aumenta frecuencia o baja amplitud. Si desaparece completamente, revisa escala de salida y luz antes de exagerarlo. Si un objeto estirado tiene grano deformado, revisa Scale y coordenadas. Si la textura cambia al mover la pieza, comprueba qué objeto de referencia se usa en Texture Coordinate. Si Roughness oscila entre 0 y 1 sin razón, limita rango con Color Ramp.

## EJ-12.1.1-3 — Ruta Avanzada

**Reto:** Decidir qué detalle puede aparecer según píxeles por mm.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** 60 mm/100 px=0.6 mm/px; justificar detalle visible frente a respuesta estadística.

**Resultado esperado:** Microvariación Roughness acotada 0.3–0.4. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si el detalle parece rocas, aumenta frecuencia o baja amplitud. Si desaparece completamente, revisa escala de salida y luz antes de exagerarlo. Si un objeto estirado tiene grano deformado, revisa Scale y coordenadas. Si la textura cambia al mover la pieza, comprueba qué objeto de referencia se usa en Texture Coordinate. Si Roughness oscila entre 0 y 1 sin razón, limita rango con Color Ramp.

