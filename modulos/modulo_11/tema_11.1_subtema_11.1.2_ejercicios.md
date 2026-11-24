# Ejercicios alternativos — Relieve, normal y respuesta a la luz

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-11.1.2-1 — Ruta Básica

**Reto:** Crear relieve procedural suave y compararlo con material liso.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Noise a Height, Bump a Normal; alternar Strength 0/0.2.

**Resultado esperado:** Noise Fac > Bump Height > Principled Normal. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si todo se tiñe azul, conectaste color de normal a Base Color. Si no ves efecto, comprueba Bump Normal conectado, Strength y luz oblicua. Si la superficie parece derretida, baja Distance y revisa escala de la textura. Si el borde no cambia, es esperado con Bump. Si el efecto se invierte respecto a la referencia, comprueba convención del mapa y no alteres geometría a ciegas.

## EJ-11.1.2-2 — Ruta Intermedia

**Reto:** Invertir prueba de Bump y restaurar respuesta.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Activar Invert, observar y registrar; desactivar para entrega.

**Resultado esperado:** Comparación Strength 0/0.2 con luz constante. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si todo se tiñe azul, conectaste color de normal a Base Color. Si no ves efecto, comprueba Bump Normal conectado, Strength y luz oblicua. Si la superficie parece derretida, baja Distance y revisa escala de la textura. Si el borde no cambia, es esperado con Bump. Si el efecto se invierte respecto a la referencia, comprueba convención del mapa y no alteres geometría a ciegas.

## EJ-11.1.2-3 — Ruta Avanzada

**Reto:** Explicar cuándo una ruptura de silueta requiere geometría.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Bump no cambia vértices; modelar detalle o estudiar displacement después.

**Resultado esperado:** Silueta permanece igual y se explica. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si todo se tiñe azul, conectaste color de normal a Base Color. Si no ves efecto, comprueba Bump Normal conectado, Strength y luz oblicua. Si la superficie parece derretida, baja Distance y revisa escala de la textura. Si el borde no cambia, es esperado con Bump. Si el efecto se invierte respecto a la referencia, comprueba convención del mapa y no alteres geometría a ciegas.

