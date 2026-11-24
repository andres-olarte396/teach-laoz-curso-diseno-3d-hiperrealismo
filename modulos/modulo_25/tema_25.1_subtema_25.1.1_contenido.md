# 25.1.1 — Prueba de calidad y correcciones

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La revisión de calidad usa zonas representativas y un tamaño de entrega acordado. Un render final no necesita el máximo de todas las opciones; necesita conservar lo que comunica el producto. El presupuesto de máquina se decide mediante pruebas observadas en el equipo.

## Caso resuelto

Caso resuelto: el render pequeño tiene un reflejo que borra la etiqueta. Aumentar muestras no resolverá ese defecto; se cambia la fuente y se revisa de nuevo antes de renderizar. La configuración final se toma de pruebas del equipo, sin imponer resolución universal. Cuando la máquina termina, el PNG de estudio se reabre para confirmar dimensiones y contenido. El estudiante registra una decisión de calidad y la relaciona con un recorte observado; no crea una nueva memoria extensa. La versión de escena y la exportación comparten identificación para evitar entregar una prueba antigua.

## Procedimiento en Blender

1. Recupera la prueba de calidad de la semana 16 y compara sus condiciones con la escena final. Si cambió mucho, realiza un recorte pequeño actualizado.
2. Escoge resolución sostenible, muestras o umbral de ruido y reducción de ruido según el detalle de etiqueta, sombra y superficie. Registra la configuración.
3. Inspecciona el recorte con y sin reducción de ruido cuando la textura fina sea importante. Mantén el que preserve la información relevante.
4. Escribe una lista de defectos restantes y separa ruido de iluminación o material incorrectos. Corrige la causa apropiada.
5. Guarda la escena antes de iniciar el render. Si tarda más que la sesión, termina el registro activo y revisa el resultado en la próxima sesión.

## Qué debe observarse

Configuración final defendible, basada en un recorte y un tiempo observado. No se confunde espera de máquina con una actividad adicional obligatoria.

## Error, diagnóstico y corrección

Si el render consume demasiado tiempo, reduce resolución o complejidad de escena antes de fijar una entrega imposible. Conserva la lectura visual del producto y registra la adaptación.

## Prueba de comprensión

¿Qué harías si el equipo no puede producir la resolución inicialmente prevista?

**Respuesta razonada:** Adaptaría resolución o complejidad con una nueva prueba, manteniendo criterios de forma, material y montaje. Documentaría la decisión sin afirmar una capacidad no comprobada.

## Evidencia y referencia

Conserva una comparación que muestre «Imagen de catálogo y ajustes de render». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/cycles/render_settings/sampling.html). [Fuentes del tema](../../REFERENCIAS.md).
