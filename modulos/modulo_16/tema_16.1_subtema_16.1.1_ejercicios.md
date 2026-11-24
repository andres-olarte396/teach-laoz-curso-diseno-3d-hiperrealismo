# Práctica elegible — Muestreo, ruido y reducción de ruido

Se elige **una** variante; no se hacen las tres. La tercera sesión reserva 12 min de ejercicio y 5 min de corrección. Los resultados anteriores sirven de punto de inicio.

## Básica: reproducción guiada

Compara dos presupuestos de calidad en un recorte de producto. La básica usa una resolución pequeña; avanzada puede justificar umbral adaptativo, sin añadir una tercera prueba obligatoria.

**Solución paso a paso:**

1. En Render Properties elige Render Engine: Cycles y Device: CPU como punto inicial para esta comparación. Guarda una copia y mantén luces, materiales y cámara constantes; no cambies de dispositivo entre pruebas.
2. En Output Properties usa 512 por 512 píxeles al 100 % para un encuadre cuadrado. En Render Properties > Sampling > Render compara 16 y 64 Max Samples. Desactiva Noise Threshold para aislar el límite de muestras si el control permite desactivar adaptativo; si lo mantienes, conserva y registra el mismo umbral. Son valores de arranque, no garantías de calidad.
3. En el 3D Viewport entra a cámara con Numpad0 o View > Cameras > Active Camera. Con el cursor en esa vista pulsa Ctrl+B y arrastra un rectángulo que incluya sombra, borde brillante y etiqueta para definir Render Region; pulsa F12. Registra el tiempo observado.
4. Duplica la prueba con mayor límite o menor umbral de ruido, cambiando una sola decisión. Observa si mejora la zona elegida y cuánto cuesta en tiempo.
5. Evalúa el recorte a tamaño de entrega y selecciona la prueba donde letras y microtextura permanezcan legibles. Si prefieres estudiar Denoise, esa comparación reemplaza la de 16/64 muestras: haz solo dos pruebas con iguales muestras y Denoise activado/desactivado, no otros renders obligatorios. Limpia Render Region con Ctrl+Alt+B en vista de cámara al terminar.

**Verificación:** Tabla de dos pruebas con ajustes, tiempo y defectos observados. Se elige una configuración proporcionada al destino de la imagen y al equipo.

## Intermedia: diagnosticar un fallo

**Caso:** El render con más muestras pierde detalle después de reducir ruido. Recupera una copia, identifica la causa y realiza la corrección dentro del mismo producto.

**Solución:** Compara la misma zona con/sin reducción de ruido y conserva la variante que preserve letras y textura.

## Avanzada: resolver una restricción

**Condición:** Usa un presupuesto de máquina limitado. Sustituye la práctica guiada por esta comparación y conserva una evidencia del criterio.

**Solución orientativa:** Selecciona recorte y configuración mediante tiempo observado; prioriza detalle relevante y documenta resolución/umbral/muestras.

No se puntúa por añadir objetos ni por la resolución máxima: el criterio es que la evidencia permita observar Tabla de dos pruebas con ajustes, tiempo y defectos observados. Se elige una configuración proporcionada al destino de la imagen y al equipo.
