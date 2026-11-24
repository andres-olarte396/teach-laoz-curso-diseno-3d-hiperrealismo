# 20.1.2 — Oclusión y continuidad de bordes

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La oclusión define qué elemento está delante y cuál detrás. Un producto insertado debe respetar objetos que ya están en la fotografía. El borde de una máscara no puede ser más duro o más suave sin motivo que los bordes fotografiados a esa profundidad.

## Caso resuelto

Caso resuelto: una lámpara integrada parece flotar. Primero se confirma contacto geométrico con la base en vista lateral. En Cycles el plano recibe la marca Shadow Catcher y el mundo se exporta transparente; la prueba combinada se mezcla sobre la foto. La sombra se orienta según una sombra ya presente. Cuando un objeto fotografiado debe quedar delante, una máscara recupera esa zona de la foto por encima de la mezcla. No se añade una oclusión si el fondo está vacío. Un halo exige revisar alfa o máscara antes de difuminar toda la imagen.

## Procedimiento en Blender

1. Elige un elemento sencillo de la foto que deba quedar delante del producto, como el borde de un pequeño objeto. Si el fondo está vacío, usa una comparación didáctica separada.
2. Abre Movie Clip Editor, carga la fotografía y cambia su modo de Tracking a Mask. Crea una máscara nueva con New; con Ctrl más clic izquierdo coloca los puntos alrededor del elemento que debe quedar delante y usa Mask > Toggle Cyclic, Alt+C, para cerrar la spline. Ajusta sus puntos al contorno.
3. En Compositing añade Input > Mask y elige esa máscara. Tras la mezcla inicial añade otro Alpha Over: la composición previa entra en la primera Image, la fotografía original en la segunda y Mask en Fac. La zona blanca debe recuperar el elemento frontal; si se invierte, corrige la máscara antes de continuar.
4. Comprueba que el producto no atraviese el elemento ni desaparezca en una zona que debería estar delante. Revisa también la relación de sus sombras.
5. Guarda un recorte ampliado y una vista general para demostrar que la solución funciona en ambos tamaños.

## Qué debe observarse

Orden visual de profundidad coherente y borde de máscara integrado. La oclusión debe seguir la forma del elemento del fondo.

## Error, diagnóstico y corrección

Un borde brillante o una franja cortada puede indicar máscara mal alineada o alfa mal interpretado. Corrige el contorno y la suavidad; no desenfoques toda la imagen para ocultarlo.

## Prueba de comprensión

¿Qué diferencia hay entre corregir oclusión y simplemente borrar parte del producto?

**Respuesta razonada:** La corrección responde a una relación de profundidad y al contorno de un elemento real del fondo. Borrar sin esa justificación puede cortar el producto arbitrariamente.

## Evidencia y referencia

Conserva una comparación que muestre «Montaje con sombra y oclusión verificadas». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/cycles/object_settings/object_data.html). [Fuentes del tema](../../REFERENCIAS.md).
