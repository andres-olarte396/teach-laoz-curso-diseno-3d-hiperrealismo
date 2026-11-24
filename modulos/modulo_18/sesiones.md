# Sesiones — Semana 18: Composición y capas

7 × 20 min = 140 min. Cada acción corresponde al presupuesto de estudio activo; el cálculo de render desatendido se realiza aparte.

|Día|Distribución|Acción concreta|
|---|---|---|
|1|6 explicar+12 practicar+2 registrar|En Compositing activa Use Nodes y localiza Render Layers y Composite. Añade un Viewer si necesitas inspeccionar la imagen durante el trabajo. En Render Properties > Film activa Transparent y renderiza el producto de prueba. En Compositing añade Input > Image para cargar una fotografía propia de una mesa; conserva la proporción y resolución de esa foto en Output Properties.|
|2|3 recuperar+14 practicar+3 comprobar|Añade Color > Mix > Alpha Over, deja Fac en 1 y conecta Image de la fotografía a la primera entrada Image; conecta Image de Render Layers a la segunda entrada Image, la inferior. Conecta la salida Image de Alpha Over a Image de Composite y a Viewer. Comprueba que Render Layers tenga alfa transparente. Si importas un PNG, configura Alpha Mode según cómo esté almacenado el archivo. El compositor trabaja normalmente con alfa premultiplicado: deja Convert Premultiplied desactivado salvo que una rama haya sido convertida explícitamente a Straight. No lo actives únicamente porque el PNG original sea Straight. Revisa halos sobre fondo claro y oscuro.|
|3|3 preguntas+12 ejercicio+5 corregir|Guarda la escena con nodos organizados y nombres que describan render, fondo y mezcla. Comprueba una exportación de prueba fuera del editor. Construye una composición simple con un PNG de prueba y una fotografía propia. En esta sesión importa el flujo de capas; perspectiva y sombras se ajustan en las semanas siguientes.|
|4|6 explicar+12 practicar+2 registrar|Duplica la escena de nodos y comprueba que Image y Render Layers apuntan a los recursos correctos. Usa nombres legibles para saber qué versión se emplea. Añade solo la corrección necesaria antes de Composite. Si usas Viewer para inspección, conecta allí la misma salida que deseas exportar.|
|5|3 recuperar+14 practicar+3 comprobar|Haz una prueba en resolución pequeña y comprueba el encuadre completo, no únicamente un recorte ampliado. Guarda el resultado como PNG con un nombre de versión y evita sobrescribir la fotografía original. Verifica dimensiones y que la imagen corresponde al compuesto.|
|6|3 preguntas+12 ejercicio+5 corregir|Cierra y vuelve a abrir el archivo guardado para confirmar el resultado. Guarda también el .blend para conservar nodos y fuentes. Cambia una decisión de composición, exporta una segunda versión y compara ambas. Demuestra que la fuente original permanece disponible y que el cambio se puede revertir.|
|7|3 recuperar+10 evaluar+5 corregir+2 registrar|Evaluar «Composición por capas recuperable»,corregir un error y guardar registro|

Si no se termina una acción, conserva su estado y sustituye parte de la práctica de la siguiente sesión; no acumules tres rutas ni trabajo adicional silencioso.
