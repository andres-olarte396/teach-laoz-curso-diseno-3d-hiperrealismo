# 17.1.1 — Transformación de visualización y exposición

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La gestión de color transforma los valores del render para visualizarlos en pantalla. Exposición cambia el nivel de la imagen, mientras la transformación de visualización controla su presentación. AgX permite manejar una amplia gama tonal, pero no repara geometría ni convierte automáticamente un material en realista.

## Caso resuelto

Caso resuelto: la pantalla blanca de una lámpara pierde textura en una alta luz. Se conserva AgX y el Look mientras se prueba una exposición menor. Si toda la imagen queda demasiado oscura, el problema no se resuelve bajando exposición global: se revisa intensidad y dirección de la fuente que produce esa zona. Una curva suave puede mejorar separación tonal sin cambiar el material. Se compara la pantalla, etiqueta y sombra antes/después; un resultado más contrastado que pierde esas pistas no se aprueba por parecer más dramático.

## Procedimiento en Blender

1. En Render Properties > Color Management identifica la transformación actual; para el recorrido usa AgX y registra el Look elegido, sin cambiarlo entre comparaciones.
2. Conserva el render y elige un área de altas luces y otra de sombra donde debería existir detalle. Evita evaluar solo el promedio general.
3. Modifica Exposure en pasos pequeños y compara qué detalles recuperas o pierdes. Vuelve al valor inicial para reconocer su efecto.
4. Si una superficie está demasiado brillante por material o luz, corrige esa causa en la escena en vez de apagar toda la imagen con exposición.
5. Guarda dos capturas de comparación con el mismo tamaño. Registra View Transform, Look y Exposure para poder reproducir la versión elegida.

## Qué debe observarse

Imagen con separación entre zonas claras y oscuras y ajustes de visualización identificados. La comparación conserva el mismo contexto.

## Error, diagnóstico y corrección

Si el color parece distinto en otra aplicación, revisa cómo exportaste y si se aplicó la transformación de visualización. No cambies el color del material para compensar una diferencia de visualización sin investigar primero.

## Prueba de comprensión

¿Qué debe permanecer constante al comparar dos valores de Exposure?

**Respuesta razonada:** El render, transformación de visualización, Look y condiciones de observación. De esa manera se reconoce el efecto de exposición sin atribuirle cambios de otras variables.

## Evidencia y referencia

Conserva una comparación que muestre «Antes y después con ajustes documentados». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/color_management.html). [Fuentes del tema](../../REFERENCIAS.md).
