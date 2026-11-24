# Evaluación formativa — Subdivisión y control de forma

Se hace durante los minutos de comprobación de las tres sesiones, no como examen adicional.

**Pregunta de comprensión:** ¿Más niveles de Subdivision eliminan automáticamente un pinzamiento?

**Respuesta razonada:** No. Generan más geometría desde la misma distribución base; debes revisar la topología y soportes.

**Prueba práctica:** abre tu archivo y demuestra catmull-clark comparado contra cubo original. Explica también viewport levels limitado y base editable.

| Criterio observable | Puntos |
|---|---:|
| Catmull-Clark comparado contra cubo original | 4 |
| Crease 0,0.7 y 1 diferenciadas | 3 |
| Viewport Levels limitado y base editable | 3 |

**Umbral:** 7/10, conservando un archivo que abre. Un archivo perdido no se compensa con una captura; utiliza los minutos de corrección para recuperar o reconstruir sólo el paso fallido.

**Retroalimentación:** Si aparece un pinzamiento, mira la malla base: caras estiradas, polos y N-Gons pueden concentrar la transición. Si el equipo se vuelve lento, baja Levels antes de borrar el objeto. Si crease no actúa, confirma Edge seleccionado y valor de arista, no peso de bisel. Si la caja pierde medidas, recuerda que Subdivision altera la superficie evaluada: compara su contorno con el bloqueo. Si el resultado parece faceteado, inspecciona Shade Smooth después de verificar geometría.

**Transferencia:** explica cuándo elegirías la herramienta o parámetro practicado frente a la alternativa que comparaste en esta lección. Registra una frase en tu bitácora.
