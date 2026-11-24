# Evaluación formativa — Oclusión y continuidad de bordes

Preguntas de control y corrección integradas en días 3/6; el día 7 consolida ambos subtemas sin examen adicional.

1. Explica: ¿Qué diferencia hay entre corregir oclusión y simplemente borrar parte del producto?
2. Demuestra: Orden visual de profundidad coherente y borde de máscara integrado. La oclusión debe seguir la forma del elemento del fondo.
3. Diagnostica el caso: El producto atraviesa un objeto que debería estar delante.

**Clave conceptual:** La corrección responde a una relación de profundidad y al contorno de un elemento real del fondo. Borrar sin esa justificación puede cortar el producto arbitrariamente.

**Corrección esperada:** Crea Mask sobre la foto; segundo Alpha Over recibe mezcla detrás y foto delante, con Mask en Fac; ajusta contorno.

|Criterio|Peso|Evidencia observable|
|---|---:|---|
|Concepto|30 %|La corrección responde a una relación de profundidad y al contorno de un elemento real del fondo. Borrar sin esa justificación puede cortar el producto arbitrariamente.|
|Resultado práctico|50 %|Orden visual de profundidad coherente y borde de máscara integrado. La oclusión debe seguir la forma del elemento del fondo.|
|Diagnóstico/corrección|20 %|Crea Mask sobre la foto; segundo Alpha Over recibe mezcla detrás y foto delante, con Mask en Fac; ajusta contorno.|

Escala 0–4: 0 sin evidencia; 1 error bloqueante; 2 funcional con defecto visible; 3 coherente con defecto menor; 4 coherente y justificado. Meta 70 % y corregir el bloqueo concreto indicado antes de seguir.
