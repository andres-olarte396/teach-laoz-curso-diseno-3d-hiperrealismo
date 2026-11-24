# 20.1.1 — Coincidencia de luz y sombra de contacto

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La sombra debe concordar con la dirección, dureza y color de la iluminación de fondo. El contacto es una pista decisiva de apoyo. Un plano capturador de sombra permite integrar la sombra sin mostrar todo el plano renderizado, pero debe configurarse con el motor que lo admite.

## Caso resuelto

Caso resuelto: una lámpara integrada parece flotar. Primero se confirma contacto geométrico con la base en vista lateral. En Cycles el plano recibe la marca Shadow Catcher y el mundo se exporta transparente; la prueba combinada se mezcla sobre la foto. La sombra se orienta según una sombra ya presente. Cuando un objeto fotografiado debe quedar delante, una máscara recupera esa zona de la foto por encima de la mezcla. No se añade una oclusión si el fondo está vacío. Un halo exige revisar alfa o máscara antes de difuminar toda la imagen.

## Procedimiento en Blender

1. En Cycles conserva el plano de apoyo y ajusta la fuente según las sombras observadas en la foto. Verifica la posición desde vista lateral y superior.
2. Selecciona el plano y activa Shadow Catcher en Object Properties > Visibility cuando esté disponible para Cycles. El producto no debe recibir esa marca.
3. Activa Film Transparent para separar el fondo del mundo de la imagen, manteniendo su influencia lumínica cuando corresponda.
4. Renderiza una prueba pequeña y compón sobre la foto. Revisa que la sombra apoye el producto y no se proyecte en dirección incompatible con las existentes.
5. Comprueba en el compuesto que el plano ya no tapa la foto y que el contacto siga visible. En esta práctica usa la salida combinada del capturador; el pase Shadow Catcher separado se deja para una ampliación posterior y no es requisito.

## Qué debe observarse

Producto apoyado mediante una sombra compatible, sin un rectángulo de plano visible que tape la fotografía. La prueba se revisa junto al fondo, no aislada.

## Error, diagnóstico y corrección

Si aparece un plano opaco, revisa motor, marca de Shadow Catcher y composición. Si no aparece sombra, verifica contacto geométrico, luz y el resultado del pase antes de oscurecer artificialmente el fondo.

## Prueba de comprensión

¿Qué comprobarías antes de pintar una sombra manual para un producto que parece flotar?

**Respuesta razonada:** Contacto real con el plano, dirección de luz, configuración de Shadow Catcher y composición de la prueba. Una sombra pintada sin esas comprobaciones puede esconder una causa geométrica.

## Evidencia y referencia

Conserva una comparación que muestre «Montaje con sombra y oclusión verificadas». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/cycles/object_settings/object_data.html). [Fuentes del tema](../../REFERENCIAS.md).
