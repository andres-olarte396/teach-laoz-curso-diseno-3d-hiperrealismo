# 21.1.1 — Reflejos y continuidad tonal

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La integración debe compartir iluminación y relaciones tonales con el fondo. Los reflejos solo se añaden cuando la superficie real los exige. Un reflejo decorativo sobre una mesa mate contradice el material y puede hacer el montaje menos creíble.

## Caso resuelto

Caso resuelto: la mesa fotografiada es mate, pero el montaje incluye una copia invertida y nítida del producto como reflejo. Se elimina porque contradice el apoyo. Después se revisa color, contraste y nitidez; la etiqueta del render no debe ser exageradamente más nítida que elementos a profundidad semejante. La continuidad de ruido se evalúa al final, con perspectiva y contacto ya resueltos. El grano no tapa una cámara incorrecta. La revisión usa recortes de inspección de las imágenes existentes; no exige exportar nuevas entregas para cada zona.

## Procedimiento en Blender

1. Observa si la mesa de la fotografía realmente refleja objetos. Decide si necesitas reflejo o únicamente sombra; documenta la evidencia.
2. Revisa el producto junto al fondo y compara temperatura aparente de iluminación, contraste y nivel de sombras. Ajusta primero su iluminación cuando la diferencia sea física.
3. Si existe superficie reflectante, usa una aproximación coherente con su rugosidad y geometría. No copies el producto invertido sin considerar perspectiva y desenfoque.
4. Ajusta la composición en pequeños pasos y conserva un antes/después. Evita cambiar la fotografía hasta que deje de parecerse a su fuente.
5. Verifica que sombra, brillo y reflejo cuentan la misma dirección de luz. Elimina un efecto que no puedas justificar con el fondo.

## Qué debe observarse

Montaje donde el producto comparte relaciones tonales y, cuando corresponde, reflejos compatibles con el material del apoyo.

## Error, diagnóstico y corrección

Un reflejo demasiado nítido en una superficie rugosa o una sombra fría bajo luz cálida puede delatar la integración. Revisa las pistas reales antes de aumentar contraste para hacerlo más vistoso.

## Prueba de comprensión

¿Por qué puede ser correcto no incluir un reflejo del producto?

**Respuesta razonada:** Porque una superficie mate no exige un reflejo reconocible. La decisión depende del material y la fotografía, no de añadir efectos por sistema.

## Evidencia y referencia

Conserva una comparación que muestre «Montaje revisado con recortes de control». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/compositing/introduction.html). [Fuentes del tema](../../REFERENCIAS.md).
