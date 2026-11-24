# 16.1.2 — Resolución, formatos y transparencia

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La resolución determina cuántos píxeles hay disponibles; no corrige un material o encuadre defectuoso. PNG permite transparencia cuando se guarda con alfa. La transparencia del fondo y la exportación con alfa son decisiones diferentes: ambas deben verificarse si el render se integrará en otra imagen.

## Caso resuelto

Caso resuelto: se compara un recorte de 512 × 512 píxeles con 16 y 64 muestras máximas, con adaptativo desactivado o umbral constante, luces y cámara. La segunda prueba tarda más, pero la etiqueta sigue borrosa con reducción de ruido agresiva. Se compara sin reducción de ruido y se identifica pérdida de detalle, no falta de resolución solamente. Los valores son un ensayo, no calidad final universal. Para un PNG destinado a montaje se comprueba Film Transparent y guardado RGBA sobre un fondo contrastante; una imagen JPG no conserva alfa.

## Procedimiento en Blender

1. Abre Output Properties y escribe una resolución pequeña para la prueba. Anota Resolution Percentage, porque modifica el tamaño efectivo.
2. En Render Properties > Film activa Transparent si necesitas un producto sobre fondo transparente; conserva la iluminación del entorno cuando sea útil.
3. Realiza una prueba y abre el resultado. El patrón de transparencia en la vista no garantiza que cualquier formato conserve alfa.
4. Desde la imagen renderizada usa Image > Save As y selecciona PNG con RGBA para la copia transparente. Guarda en la carpeta renders del proyecto.
5. Reabre ese PNG en una vista de imagen o úsalo sobre un fondo contrastante para comprobar los bordes. Guarda también una copia con fondo visible cuando la entrega lo requiera.

## Qué debe observarse

Archivo identificado con dimensiones efectivas y transparencia comprobada. La imagen conserva bordes y detalle suficientes para su tamaño de uso.

## Error, diagnóstico y corrección

Si el fondo queda negro o blanco al reabrir, revisa RGBA y que Film Transparent estuviera activo. Un JPG no conserva alfa. Si una sombra desaparece, recuerda que no basta con transparentar el mundo para extraer correctamente la sombra de un plano.

## Prueba de comprensión

¿Por qué activar Film Transparent no basta para guardar transparencia en cualquier archivo?

**Respuesta razonada:** Porque el formato y los canales de exportación también deben conservar alfa. PNG RGBA puede hacerlo; un JPG no almacena ese canal.

## Evidencia y referencia

Conserva una comparación que muestre «Recorte comparativo de calidad y tiempo». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/cycles/render_settings/sampling.html). [Fuentes del tema](../../REFERENCIAS.md).
