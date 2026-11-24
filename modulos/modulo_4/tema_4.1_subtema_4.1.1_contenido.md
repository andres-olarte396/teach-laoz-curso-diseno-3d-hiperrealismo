# 4.1.1 — Lectura de fotografías y medidas

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una fotografía combina forma, iluminación y perspectiva. No permite leer directamente todas las medidas reales: el lado más cercano puede parecer mayor. Una sombra no es una arista y un reflejo no demuestra un hueco. Una referencia útil separa observaciones verificadas de hipótesis. Para trabajar sin depender de un modelo comprado, usa un organizador sencillo disponible en casa o el objeto didáctico de este curso: caja exterior de 120×80×60 mm. El objetivo es traducir medidas y proporciones en decisiones explícitas, no copiar cada píxel de una fotografía.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Elige un recipiente rectangular sin información personal visible, mídelo con regla y anota ancho X, profundidad Y y alto Z. Si no tienes objeto o regla, adopta la ficha didáctica 120×80×60 mm y declárala como dimensiones de diseño, no medidas observadas. Toma o selecciona una fotografía frontal y otra lateral con permiso de uso; usa una distancia suficiente para reducir exageración de perspectiva. No publiques fotografías de terceros sin comprobar su licencia. Escribe una tabla de tres filas: valor, origen del dato y confianza. Guarda referencias y ficha en la carpeta del proyecto.

## Sesión 2 — Comparación controlada

Observa la foto principal: marca mentalmente contorno exterior, línea de apoyo y posibles bordes interiores. En un editor de imágenes común o en una hoja dibuja un rectángulo envolvente. Compara ancho/alto:120/60=2 en la ficha didáctica. Si la foto muestra otra proporción, no cambies inmediatamente las medidas: comprueba si la cámara está inclinada o si parte del objeto está oculta. Escribe dos observaciones seguras y dos hipótesis. Por ejemplo, “la tapa sobresale” es una observación de silueta; “la pared mide 2 mm” sería hipótesis sin una vista de corte o medición.

## Sesión 3 — Transferencia y comprobación

En Blender crea un cubo con Dimensions (0.12,0.08,0.06)m, aplica Scale y sitúa su centro en Z=0.03 m. Renombra Bloque Referencia. Compara la proporción en View > Viewpoint > Front y Right con la ficha, no con una foto oblicua. En la bitácora calcula ancho/alto=2 y profundidad/alto=1.333. Guarda semana04_referencia.blend. Mantén el cubo sin detalles; todavía no necesitas tapa ni material. Una buena referencia delimita lo que puedes modelar con confianza y lo que requiere decidir o medir después.

## Ejemplo razonado

Caso resuelto: la foto de un envase muestra un ancho de 400 píxeles y alto 250 píxeles, proporción 1.6. La regla indica 120 mm y 60 mm, proporción 2. La discrepancia puede deberse al ángulo, al encuadre o a que mediste otra parte; no se resuelve multiplicando los píxeles por un factor arbitrario. Prioriza medidas verificadas y busca otra vista. Si únicamente existe la foto, el producto será una interpretación proporcional y debe declararse así. Para comparar modelos conviene usar una tabla de dimensiones y vistas coherentes, porque una perspectiva atractiva puede disimular un error de profundidad.

## Errores y recuperación

Si confundes sombra con un corte, cambia de referencia o busca continuidad del contorno. Si la foto contiene mucha perspectiva, evita medir longitudes profundas a partir de píxeles. Si X e Y se intercambian, fija la orientación del producto por escrito. Si no conoces una dimensión, escribe “diseño adoptado” con su valor y razón, no inventes que la mediste. Si dos fotos discrepan, comprueba si corresponden al mismo modelo y tamaño.

## Decisiones y conexión con el siguiente paso

No todas las referencias sirven para la misma pregunta. La frontal ayuda a ancho/alto, la lateral a profundidad/alto y una oblicua a comprender volumen. Un detalle cercano ayuda al material, pero puede ser inútil para tamaño global. La evidencia de esta semana se limita al bloqueo y sus tres medidas. Buscar veinte imágenes consume el tiempo disponible sin necesariamente mejorar la base; dos vistas pertinentes y una ficha clara bastan para iniciar. Los veinte minutos diarios incluyen observar y registrar, por lo que no se añade una tarea de fotografía fuera de la semana.

## Evidencia verificable

- Ficha con tres dimensiones y origen de cada dato
- Dos observaciones separadas de dos hipótesis
- Bloque métrico con Scale uno y proporciones justificadas

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Lectura de fotografías y medidas](https://docs.blender.org/manual/en/4.5/editors/3dview/navigate/viewpoint.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

