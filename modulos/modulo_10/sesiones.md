# Diario — Semana 10: Texturas y etiquetas

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 10.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre el producto con cuerpo 120×80×60 mm centrado en X/Y. Lleva el Cursor 3D al origen y añade Mesh > Plane. Antes de girarlo, fija Dimensions X=0.06 m, Y=0.03 m y aplica Scale. Después R, X,90, Enter orienta su normal hacia Y negativo. Location=(0,-0.0402,0.03)m lo coloca 0.2 mm delante de la pared frontal Y=-40 mm. Renombra Etiqueta. Mantén el cuerpo en sus medidas originales. El plano es una lámina para visualización: no demuestra por sí mismo espesor de adhesivo ni un procedimiento industrial. Guarda antes de añadir el material.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Plano Etiqueta de 60×30 mm con orientación legible; Image Texture sRGB conectada a Base Color; PNG empaquetada y separación 0.2 mm.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 10.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** En Shading selecciona Etiqueta y crea material PapelEtiqueta. Añade Image Texture; Open material/etiqueta-laoz.png. Conecta Color a Base Color de Principled BSDF. Usa Material Preview. El plano recién creado tiene UV básica; si se modificó, Edit Mode, A y U > Reset sobre su única cara restaura una región completa. La etiqueta debe ser legible desde el frente, en Y negativo. Usa View > Viewpoint > Front para comprobar orientación. Si el texto está invertido, inspecciona UV y el lado observado antes de modificar las normales de todo el producto.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Plano Etiqueta de 60×30 mm con orientación legible; Image Texture sRGB conectada a Base Color; PNG empaquetada y separación 0.2 mm.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 10.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** En UV Editing selecciona los cuatro vértices UV de la cara. R,90, Enter gira el texto sin girar el plano; observa y deshaz. S, X,2, Enter cambia proporción del mapa; observa y deshaz. Guarda semana10_etiqueta.blend con texto horizontal y dimensiones 60×30 mm. File > External Data > Pack Resources incluye la imagen; guarda otra vez. Conserva también la PNG original en material. Reabre la escena para confirmar que sigue visible. Esta recuperación sustituye una prueba adicional: no se añaden minutos fuera del bloque para repetir todas las variantes.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Plano Etiqueta de 60×30 mm con orientación legible; Image Texture sRGB conectada a Base Color; PNG empaquetada y separación 0.2 mm.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 10.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre Etiqueta en Shading y selecciona Image Texture. Comprueba Color Space=sRGB y conexión a Base Color. Duplica el nodo como ejemplo desconectado: un mapa destinado a Roughness usaría Non-Color. No cambies LAOZ a Non-Color para hacerla más realista; su información es color visible. Localiza Roughness y Normal en Principled BSDF y explica qué tipo de entrada recibe cada una. Guarda semana10_mapas.blend. Mantén una sola variable de comparación y el entorno de Material Preview. No necesitas descargar paquetes PBR para aprender a leer estas conexiones.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Etiqueta interpretada como sRGB; Mapa propio Non-Color conectado a Roughness; Tabla de color y datos con rutas correctas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 10.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Abre el mapa propio del curso material/rugosidad-050.png, de 32×32 píxeles con RGB 128. En Shading añade Image Texture, Open ese archivo, Color Space Non-Color, y conecta Color a Roughness del material de un cubo de ensayo. Un gris uniforme produce un valor uniforme, no relieve. Su valor raw es 128/255=0.50196, aproximadamente 0.502. Compara con Roughness manual 0.502 desconectando el nodo y después con 0.2. Mantén el entorno de Material Preview idéntico para atribuir cambios a la propiedad. No crees esta imagen con un color flotante 0.5 y la guardes sin revisar el flujo: una conversión sRGB al exportar podría cambiar los bytes.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Etiqueta interpretada como sRGB; Mapa propio Non-Color conectado a Roughness; Tabla de color y datos con rutas correctas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 10.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** En una copia del material añade Normal Map sin imagen. Identifica entrada Color y salida Normal. Un mapa de tangente verificado usaría Image Texture Non-Color > Normal Map Color > Principled Normal. No uses LAOZ como normal. Un mapa Height usaría Image Texture Non-Color > Bump Height > Principled Normal, que practicarás en semana 11. Empaqueta imágenes usadas y guarda. Registra una tabla: etiqueta/color/sRGB; rugosidad/datos/Non-Color; normal/datos/Non-Color más Normal Map. Un nodo desconectado no cambia el material y no cuenta como efecto ejecutado.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Etiqueta interpretada como sRGB; Mapa propio Non-Color conectado a Roughness; Tabla de color y datos con rutas correctas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Producto etiquetado con referencias de tamaño, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
