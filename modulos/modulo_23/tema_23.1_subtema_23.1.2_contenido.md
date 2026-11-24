# 23.1.2 — UV y control de geometría

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

UV y geometría se validan juntas antes de cerrar la escena. Una etiqueta deformada puede venir del desplegado, de la proporción de la imagen o de cambios posteriores de escala. La comprobación usa una cuadrícula y una medida visible.

## Caso resuelto

Caso resuelto: la base de una lámpara presenta una discontinuidad que la textura ocultaba. Con material neutro y luz de inspección se identifica un borde de sombreado, se revisan geometría y normales y se compara la corrección desde la cámara. Luego se comprueba etiqueta con cuadrícula UV; una región estirada se corrige antes de aplicar la imagen definitiva. La ficha registra tres dimensiones reales. Se añade una decisión breve a la bitácora: qué defecto se corrigió y por qué. No se inicia una técnica nueva ni se reconstruye el producto completo.

## Procedimiento en Blender

1. Selecciona la pieza que llevará etiqueta y vuelve a revisar su UV con cuadrícula. Observa estiramiento en la zona que verá la cámara.
2. Comprueba orientación, tamaño y posición de la etiqueta con su medida prevista. Mantén la proporción del diseño.
3. Si cambiaste geometría desde el desplegado inicial, inspecciona de nuevo las zonas editadas. Corrige costuras o distribución cuando haya distorsión.
4. Verifica que las imágenes de textura estén localizadas en la carpeta del proyecto y que se pueden abrir. No confíes únicamente en una vista que quedó cargada en memoria.
5. Guarda el modelo con UV aprobado y realiza una prueba de la etiqueta desde la cámara final.

## Qué debe observarse

Etiqueta proporcionada, textura sin estiramiento visible relevante y recursos identificados para preparar la entrega.

## Error, diagnóstico y corrección

Si faltan texturas al abrir otro archivo, revisa rutas de imagen y los recursos reales. El hecho de que una captura anterior mostrara la etiqueta no prueba que el archivo de imagen esté disponible.

## Prueba de comprensión

¿Qué dos causas revisarías para una etiqueta aplastada?

**Respuesta razonada:** La distorsión del UV y la relación de aspecto de la imagen. También comprobaría cambios de escala o geometría realizados después del desplegado.

## Evidencia y referencia

Conserva una comparación que muestre «Modelo final y vistas de inspección». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/modeling/meshes/uv/unwrapping/introduction.html). [Fuentes del tema](../../REFERENCIAS.md).
