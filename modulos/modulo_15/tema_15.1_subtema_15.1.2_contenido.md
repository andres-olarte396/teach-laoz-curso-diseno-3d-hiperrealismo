# 15.1.2 — Entorno y control de reflejos

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

Un reflejo muestra el entorno y también ayuda a describir curvatura y material. Un metal sin entorno legible puede parecer oscuro; una superficie reflectante no se arregla siempre cambiando su color. El estudio debe controlar qué formas y luces aparecen reflejadas.

## Caso resuelto

Caso resuelto: una base metálica parece negra en el estudio aunque el metal está configurado correctamente. Se mantiene el material y se mueve una Area amplia hasta que su reflejo describe la curvatura. La base vuelve a ser legible sin cambiar su color. El fondo gris mate evita confundir un reflejo con un dibujo de fondo. Si la franja tapa una etiqueta, se cambia la posición o tamaño de la fuente antes de aumentar rugosidad: esa propiedad describe el material y no debe usarse como borrador de cualquier reflejo.

## Procedimiento en Blender

1. Conserva el estudio y observa el producto en una prueba de render pequeña. Identifica qué luz produce cada franja o punto brillante visible.
2. Si tienes metal, coloca una Area amplia para producir una franja clara que recorra la superficie. Ajusta primero posición y tamaño, sin alterar el material simultáneamente.
3. En World Properties prueba un color de entorno neutro con intensidad moderada. Compara con el entorno inicial y registra si mejora la lectura del volumen.
4. Si usas una imagen de entorno, verifica procedencia y orientación; no descargues recursos innecesarios para completar la práctica. El entorno de color simple es suficiente.
5. Elimina reflejos que distraigan moviendo las fuentes o elementos fuera del campo reflejado. Confirma que el metal sigue diferenciándose del plástico.

## Qué debe observarse

Reflejos que ayudan a leer la superficie sin ocultar etiqueta, bordes o detalles de diseño. La escena tiene una intención clara de catálogo.

## Error, diagnóstico y corrección

Si aumentas mucho rugosidad para borrar un reflejo molesto, puedes cambiar el material representado. Primero modifica la fuente o el entorno; después ajusta rugosidad solo si la referencia física lo exige.

## Prueba de comprensión

¿Por qué un objeto metálico puede verse casi negro sin que su material sea negro?

**Respuesta razonada:** Porque un metal refleja su entorno y puede estar mostrando zonas oscuras. Es necesario revisar iluminación y entorno antes de atribuir todo el resultado al color del material.

## Evidencia y referencia

Conserva una comparación que muestre «Escena de catálogo preparada». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/lights/light_object.html). [Fuentes del tema](../../REFERENCIAS.md).
