# 19.1.1 — Elección de fondo, horizonte y fugas

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

Una fotografía aporta pistas de cámara, pero no siempre contiene medidas ni un horizonte visible. Las líneas paralelas del mundo pueden converger en puntos de fuga. Un fondo apropiado reduce incertidumbre: una mesa fotografiada con bordes visibles y medidas conocidas es más fácil que una escena sin referencias.

## Caso resuelto

Caso resuelto: la foto de una mesa muestra bastante superficie superior, mientras el producto renderizado se ve casi de frente. Aumentar su tamaño no corrige esa diferencia. Se eleva y orienta la cámara hasta que las direcciones del plano coincidan aproximadamente con la mesa, manteniendo dimensiones del producto. Después se comprueba escala con una medida real anotada al tomar la foto. La coincidencia es una aproximación documentada; sin información de cámara o medidas no se declara una calibración exacta. El fondo permanece sin deformación y conserva su proporción.

## Procedimiento en Blender

1. Toma una fotografía propia de una mesa sencilla con iluminación estable. Incluye una medida conocida del plano de apoyo o un objeto de referencia que luego puedas retirar.
2. Guarda una copia y registra orientación, tamaño y dónde debería colocarse el producto. Evita fondos desenfocados o muy recortados para la primera integración.
3. Marca sobre una copia las direcciones de dos bordes de la mesa; prolonga mentalmente su convergencia para estimar la perspectiva.
4. Identifica dirección de la luz usando sombras existentes. Anota también su dureza y si la superficie de apoyo es mate o reflectante.
5. Elige una zona sin objetos complejos delante del producto. Conserva el fondo original sin marcas para la composición final.

## Qué debe observarse

Fotografía propia acompañada por observaciones de perspectiva, escala, apoyo e iluminación. Se reconoce qué información es cierta y qué debe estimarse.

## Error, diagnóstico y corrección

Si el fondo no contiene pistas suficientes, no inventes una calibración exacta. Repite una foto con bordes y medidas conocidas o declara la incertidumbre de la aproximación.

## Prueba de comprensión

¿Qué aporta una medida conocida del plano de apoyo?

**Respuesta razonada:** Permite relacionar el tamaño aparente con la escala del producto y reduce la arbitrariedad del montaje. Por sí sola no resuelve todas las variables de cámara.

[Simulación de coordenadas y perspectiva](../../simulaciones/coordenadas-perspectiva.html): proyección matemática simplificada para comparar vistas, dentro del tiempo de explicación.

## Evidencia y referencia

Conserva una comparación que muestre «Montaje inicial sobre una mesa». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/cameras.html). [Fuentes del tema](../../REFERENCIAS.md).
