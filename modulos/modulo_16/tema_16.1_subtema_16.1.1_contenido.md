# 16.1.1 — Muestreo, ruido y reducción de ruido

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

El muestreo aproxima la iluminación y puede dejar variaciones visibles llamadas ruido. La reducción de ruido ayuda, pero también puede borrar detalle fino. La calidad se decide examinando zonas difíciles del producto, no suponiendo que un número grande de muestras garantiza una imagen mejor.

## Caso resuelto

Caso resuelto: se compara un recorte de 512 × 512 píxeles con 16 y 64 muestras máximas, con adaptativo desactivado o umbral constante, luces y cámara. La segunda prueba tarda más, pero la etiqueta sigue borrosa con reducción de ruido agresiva. Se compara sin reducción de ruido y se identifica pérdida de detalle, no falta de resolución solamente. Los valores son un ensayo, no calidad final universal. Para un PNG destinado a montaje se comprueba Film Transparent y guardado RGBA sobre un fondo contrastante; una imagen JPG no conserva alfa.

## Procedimiento en Blender

1. En Render Properties elige Render Engine: Cycles y Device: CPU como punto inicial para esta comparación. Guarda una copia y mantén luces, materiales y cámara constantes; no cambies de dispositivo entre pruebas.
2. En Output Properties usa 512 por 512 píxeles al 100 % para un encuadre cuadrado. En Render Properties > Sampling > Render compara 16 y 64 Max Samples. Desactiva Noise Threshold para aislar el límite de muestras si el control permite desactivar adaptativo; si lo mantienes, conserva y registra el mismo umbral. Son valores de arranque, no garantías de calidad.
3. En el 3D Viewport entra a cámara con Numpad0 o View > Cameras > Active Camera. Con el cursor en esa vista pulsa Ctrl+B y arrastra un rectángulo que incluya sombra, borde brillante y etiqueta para definir Render Region; pulsa F12. Registra el tiempo observado.
4. Duplica la prueba con mayor límite o menor umbral de ruido, cambiando una sola decisión. Observa si mejora la zona elegida y cuánto cuesta en tiempo.
5. Evalúa el recorte a tamaño de entrega y selecciona la prueba donde letras y microtextura permanezcan legibles. Si prefieres estudiar Denoise, esa comparación reemplaza la de 16/64 muestras: haz solo dos pruebas con iguales muestras y Denoise activado/desactivado, no otros renders obligatorios. Limpia Render Region con Ctrl+Alt+B en vista de cámara al terminar.

## Qué debe observarse

Tabla de dos pruebas con ajustes, tiempo y defectos observados. Se elige una configuración proporcionada al destino de la imagen y al equipo.

## Error, diagnóstico y corrección

Una imagen aparentemente lisa puede haber perdido letras o relieve por reducción de ruido. Inspecciona un recorte al tamaño de entrega. Si el render no cabe en la sesión, inicia la máquina, registra la configuración y retoma el resultado en la próxima sesión.

## Prueba de comprensión

¿Qué datos necesitas además del máximo de muestras para comparar dos renders adaptativos?

**Respuesta razonada:** El umbral de ruido, resolución, reducción de ruido, escena y tiempo. Si alguno cambia, el máximo de muestras por sí solo no describe el presupuesto de calidad.

## Evidencia y referencia

Conserva una comparación que muestre «Recorte comparativo de calidad y tiempo». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/cycles/render_settings/sampling.html). [Fuentes del tema](../../REFERENCIAS.md).
