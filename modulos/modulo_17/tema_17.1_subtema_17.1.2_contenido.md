# 17.1.2 — Corrección de color y contraste

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La corrección de color debe mejorar la coherencia del producto sin inventar un material diferente. El contraste dirige la lectura, pero puede eliminar detalle. Una corrección global afecta todo; una corrección local necesita una máscara y debe evitar bordes evidentes.

## Caso resuelto

Caso resuelto: la pantalla blanca de una lámpara pierde textura en una alta luz. Se conserva AgX y el Look mientras se prueba una exposición menor. Si toda la imagen queda demasiado oscura, el problema no se resuelve bajando exposición global: se revisa intensidad y dirección de la fuente que produce esa zona. Una curva suave puede mejorar separación tonal sin cambiar el material. Se compara la pantalla, etiqueta y sombra antes/después; un resultado más contrastado que pierde esas pistas no se aprueba por parecer más dramático.

## Procedimiento en Blender

1. Abre Compositing, activa Use Nodes y conserva la conexión de Render Layers hacia Composite. Guarda una versión antes de añadir nodos.
2. Inserta un nodo de corrección sencillo, por ejemplo RGB Curves, entre el origen de imagen y la salida. Haz un cambio pequeño y compara con la imagen original.
3. Observa etiqueta, superficie y fondo por separado. Si solo una zona necesita ajuste, no cambies toda la imagen de forma agresiva.
4. Reduce el cambio cuando desaparezca relieve o textura. Evita curvas extremas que conviertan sombras en bloques sin información.
5. Anota el propósito de la corrección y exporta una prueba. Mantén accesible la versión sin corrección para comparar bajo la misma gestión de color.

## Qué debe observarse

Corrección moderada, reversible y explicada mediante un defecto concreto. La textura del producto continúa visible.

## Error, diagnóstico y corrección

Si el producto adquiere un color que no corresponde a la referencia, revisa saturación, balance y curva. No confundas una imagen más llamativa con una representación más fiel del material.

## Prueba de comprensión

¿Cómo verificarías que el contraste no destruyó información importante?

**Respuesta razonada:** Compararía etiqueta, microtextura, altas luces y sombras antes y después a tamaño de entrega, manteniendo los mismos ajustes de visualización.

## Evidencia y referencia

Conserva una comparación que muestre «Antes y después con ajustes documentados». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/color_management.html). [Fuentes del tema](../../REFERENCIAS.md).
