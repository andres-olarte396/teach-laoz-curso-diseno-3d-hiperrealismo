# 24.1.1 — Materiales finales y etiqueta

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

Los materiales finales representan superficies concretas, no nombres decorativos. Su lectura se comprueba bajo una luz estable y desde la cámara de entrega. El detalle debe corresponder al tamaño físico del producto y no saturar toda la superficie.

## Caso resuelto

Caso resuelto: plástico y metal parecen demasiado similares en una prueba. Se mantiene la luz y se revisan metalicidad, rugosidad y asignación de material. Después se ajusta una fuente para que el metal refleje una forma reconocible; son comprobaciones separadas. La cámara de catálogo debe mostrar la característica principal y dejar margen. La profundidad de campo se mantiene moderada si una etiqueta es relevante. Antes del render final se guarda una prueba pequeña y una nota de decisión sobre material y otra sobre cámara o luz, aprovechando comparaciones ya realizadas.

## Procedimiento en Blender

1. Abre la escena aprobada y asigna a cada componente el material previsto en la ficha. Usa nombres descriptivos como plastico_mate o metal_pintado.
2. Revisa color, metalicidad y rugosidad comparándolos con la referencia. No ajustes todas las propiedades al mismo tiempo.
3. Comprueba escala de microtextura y etiqueta. Desde la cámara, el detalle no debe parecer mayor que una pieza completa.
4. Realiza una prueba pequeña con iluminación constante y revisa plástico y metal por separado. Anota qué propiedad causa cada cambio visible.
5. Guarda la versión de materiales y conserva una prueba de control para comparar cuando ajustes el estudio.

## Qué debe observarse

Materiales diferenciables y coherentes con las referencias, con textura a escala y sin variaciones arbitrarias entre componentes.

## Error, diagnóstico y corrección

Si cada pieza parece un material diferente aunque debería ser la misma, comprueba asignaciones y copias del material. No corrijas una inconsistencia de asignación cambiando todas las luces.

## Prueba de comprensión

¿Cómo distingues un problema de material de un reflejo producido por la luz?

**Respuesta razonada:** Comparo la misma superficie bajo iluminación constante y reviso la fuente del reflejo. Cambio una propiedad o una luz por vez para reconocer la causa.

## Evidencia y referencia

Conserva una comparación que muestre «Escena final y prueba de baja resolución». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/shader_nodes/shader/principled.html). [Fuentes del tema](../../REFERENCIAS.md).
