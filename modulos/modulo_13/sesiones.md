# Diario — Semana 13: Cámara y composición

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 13.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre el producto y añade Camera si no existe. Usa una cámara sin padre ni restricciones; fija Location=(0,-0.35,0.03)m y Rotation=(90°,0°,0°). La cámara mira por su eje local-Z hacia Y positivo, con Z global hacia arriba. Object Data > Lens, Type Perspective, Focal Length 50 mm y Clip Start 0.001 m para el objeto pequeño. Numpad 0 o View > Cameras > Active Camera muestra su vista. El cuerpo centrado Z=0.03 m debe verse frontal. Si otra cámara estaba activa, selecciona la nueva y Ctrl+Numpad 0 la hace activa. Guarda semana13_camara.blend. Renombra esta cámara Cam50 para encontrarla en la próxima lección.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Cámara Perspective activa y valores registrados; 50 mm/350 mm comparada con 35 mm/245 mm; Ortográfica distinguida de Perspectiva.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 13.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Duplica la cámara como Cam35 y fija focal 35 mm. Para conservar un encuadre parecido al de 50 mm mueve su Y a aproximadamente-0.245 m: distancia proporcional 35/50 para un objeto alrededor del centro. La aproximación sirve para comparar, no garantiza mismo encuadre de todas las piezas porque tienen profundidad. Activa cada cámara y observa tapa, cuerpo y base. La más cercana exagera diferencias entre elementos próximos y lejanos. Registra focal y distancia, no atribuyas el cambio solamente a un número de Lens.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Cámara Perspective activa y valores registrados; 50 mm/350 mm comparada con 35 mm/245 mm; Ortográfica distinguida de Perspectiva.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 13.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Crea una variante CamOrtho con Type Orthographic y Orthographic Scale 0.18 m como escala de encuadre inicial. Sitúala en la misma dirección frontal. Compara contorno y ausencia de convergencia frente a Perspective. Elige una de las perspectivas para presentación y conserva ortográfica como comprobación. No necesitas render todavía; la vista de cámara permite comparar. Guarda semana13_focales.blend y anota qué opción conserva mejor proporciones de catálogo y cuál enfatiza profundidad. La siguiente sesión trabaja márgenes y foco.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Cámara Perspective activa y valores registrados; 50 mm/350 mm comparada con 35 mm/245 mm; Ortográfica distinguida de Perspectiva.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 13.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Selecciona y activa Cam50 de la lección anterior. En Output Properties fija Resolution 1920×1080 y porcentaje 50 para pruebas. Mantén proporción 16:9. Busca un encuadre sin recortes: cuerpo y base visibles, etiqueta legible y margen. Como objetivo didáctico el producto puede ocupar 60% a 80% de la altura útil. Cambia distancia o focal deliberadamente y anota el valor. En Camera Data > Viewport Display activa Passepartout para oscurecer fuera del marco. Activa guía Thirds si facilita comparación, sin convertir esa regla en obligación. Renombra la cámara CamCatalogo y guarda su posición.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Catálogo sin recortes y etiqueta legible; FocoEtiqueta colocado y asignado; Dos cámaras guardadas con propósito diferente.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 13.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Añade Empty > Plain Axes en(0,-0.0402,0.03)m, centro de etiqueta; nombre FocoEtiqueta. En Camera Data > Depth of Field activa la opción y asigna Focus Object a ese Empty. F-Stop 8 es el primer ensayo. Un valor menor como 2.8 reduce profundidad de campo en condiciones comparables. Guarda ambos estados para comparar después con iluminación. No se exige render final hoy. Si la previsualización es lenta, registra configuración y retoma la comprobación visual durante las prácticas de render; no declares que la imagen fue evaluada si sólo configuraste parámetros.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Catálogo sin recortes y etiqueta legible; FocoEtiqueta colocado y asignado; Dos cámaras guardadas con propósito diferente.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 13.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Duplica la cámara como CamContexto y actívala con Ctrl+Numpad 0; seleccionarla por sí sola no basta. Desde Viewport busca una vista oblicua donde se vea frente y tapa. Usa View > Align View > Align Active Camera to View, o Ctrl+Alt+Numpad 0. Confirma que moviste CamContexto y conservaste CamCatalogo. Comprueba márgenes, lectura de etiqueta y Focus Object. Guarda semana13_encuadres.blend. Escribe una frase sobre propósito de cada cámara y qué parte debe quedar enfocada. La prueba termina con dos encuadres registrados, no con un montaje que aún no estudiaste.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Catálogo sin recortes y etiqueta legible; FocoEtiqueta colocado y asignado; Dos cámaras guardadas con propósito diferente.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Vista de catálogo y vista contextual, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
