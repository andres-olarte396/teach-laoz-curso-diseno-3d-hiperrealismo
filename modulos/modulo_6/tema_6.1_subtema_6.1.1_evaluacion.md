# Evaluación formativa — Simetría y espesor

Se hace durante los minutos de comprobación de las tres sesiones, no como examen adicional.

**Pregunta de comprensión:** ¿Activar Merge cierra un hueco de 20 mm entre mitades?

**Respuesta razonada:** No. Merge actúa sobre vértices cercanos al plano según su umbral. Hay que ubicar el borde en el plano de simetría.

**Prueba práctica:** abre tu archivo y demuestra mirror respecto al origen verificado. Explica también merge sólo une vértices próximos al plano.

| Criterio observable | Puntos |
|---|---:|
| Mirror respecto al origen verificado | 4 |
| Solidify 2 mm con Scale uno y Rim | 3 |
| Merge sólo une vértices próximos al plano | 3 |

**Umbral:** 7/10, conservando un archivo que abre. Un archivo perdido no se compensa con una captura; utiliza los minutos de corrección para recuperar o reconstruir sólo el paso fallido.

**Retroalimentación:** Si Mirror superpone el modelo entero, la geometría ya puede estar a ambos lados del origen: usa una mitad o un diseño deliberado con Bisect, no dupliques sin revisar. Si las piezas no se unen, comprueba X=0 y Merge. Si el grosor es desigual, revisa Scale y normales. Si pierdes la edición, quizá aplicaste el modificador; usa la versión anterior. Si añades Solidify a una caja que ya tiene paredes, puedes crear una segunda pared innecesaria.

**Transferencia:** explica cuándo elegirías la herramienta o parámetro practicado frente a la alternativa que comparaste en esta lección. Registra una frase en tu bitácora.
