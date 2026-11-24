# Evaluación formativa — Resolución, formatos y transparencia

Preguntas de control y corrección integradas en días 3/6; el día 7 consolida ambos subtemas sin examen adicional.

1. Explica: ¿Por qué activar Film Transparent no basta para guardar transparencia en cualquier archivo?
2. Demuestra: Archivo identificado con dimensiones efectivas y transparencia comprobada. La imagen conserva bordes y detalle suficientes para su tamaño de uso.
3. Diagnostica el caso: Un PNG exportado tiene fondo opaco.

**Clave conceptual:** Porque el formato y los canales de exportación también deben conservar alfa. PNG RGBA puede hacerlo; un JPG no almacena ese canal.

**Corrección esperada:** Activa Film Transparent, renderiza una prueba y guarda PNG RGBA; reabre sobre otro fondo.

|Criterio|Peso|Evidencia observable|
|---|---:|---|
|Concepto|30 %|Porque el formato y los canales de exportación también deben conservar alfa. PNG RGBA puede hacerlo; un JPG no almacena ese canal.|
|Resultado práctico|50 %|Archivo identificado con dimensiones efectivas y transparencia comprobada. La imagen conserva bordes y detalle suficientes para su tamaño de uso.|
|Diagnóstico/corrección|20 %|Activa Film Transparent, renderiza una prueba y guarda PNG RGBA; reabre sobre otro fondo.|

Escala 0–4: 0 sin evidencia; 1 error bloqueante; 2 funcional con defecto visible; 3 coherente con defecto menor; 4 coherente y justificado. Meta 70 % y corregir el bloqueo concreto indicado antes de seguir.
