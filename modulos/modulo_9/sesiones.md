# Diario — Semana 9: Coordenadas UV

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 9.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Para el primer ensayo usa un cubo sin modificadores, Dimensions(0.12,0.08,0.06)m y Scale aplicada. Cambia al workspace UV Editing. En Edit Mode selecciona todo y usa U > Cube Projection para observar un desplegado inicial. El cubo mantiene su volumen en el Viewport; en UV Editor aparecen coordenadas planas. Selecciona una cara en 3D y localiza su región UV. Esta proyección inicial es una comparación, no la única solución. Guarda semana09_uv_v01.blend. No uses primero el cuerpo hueco complejo: una caja cerrada permite entender claramente seis superficies.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Costuras marcadas sin abrir geometría; Islas UV visibles y no solapadas involuntariamente; Cara frontal identificada.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 9.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Para practicar costuras, marca las aristas que separan las seis caras: Edit Mode Edge, A y Edge > Mark Seam. Para este primer cubo dividir todas las caras es deliberado; no será la solución más continua pero es verificable. Selecciona todo y U > Unwrap > Angle Based, o U > Unwrap Angle Based según cómo se presente el menú 4.5. Las caras se despliegan como islas. En UV Editor A; UV > Average Islands Scale y UV > Pack Islands. Revisa que no se superpongan salvo que tú busques compartir textura de forma deliberada. Conserva un margen entre islas.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Costuras marcadas sin abrir geometría; Islas UV visibles y no solapadas involuntariamente; Cara frontal identificada.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 9.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Duplica el cubo en una copia y quita costuras que permitan unir dos caras laterales. Selecciona esas aristas y Edge > Clear Seam; vuelve a Unwrap. Compara el resultado con la división de seis islas. No se exige una red óptima en esta sesión; identifica cómo cambió la continuidad. Guarda semana09_costuras.blend y anota dónde pondrías una etiqueta frontal sin atravesar una costura. Si el producto usará sólo una etiqueta en una cara, esa región debe tener un espacio UV predecible y una orientación legible.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Costuras marcadas sin abrir geometría; Islas UV visibles y no solapadas involuntariamente; Cara frontal identificada.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 9.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre el cubo desplegado en UV Editing. En UV Editor, Image > New crea una imagen de 512×512, Generated Type UV Grid, nombre PruebaUV. Para verla en la superficie necesitas un material: en Shading selecciona el cubo y pulsa New. Añade Image Texture, elige PruebaUV y conecta Color a Base Color de Principled BSDF. El shader ya debe estar conectado a Material Output. Activa Material Preview en el Viewport. Una imagen abierta en UV Editor no se muestra automáticamente sobre la geometría. Guarda semana09_cuadricula.blend. La cuadrícula servirá como prueba, no como material final.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: UV Grid conectada a Base Color y visible; Cuadros aproximadamente cuadrados en la cara frontal; Deformación experimental deshecha y densidad comparada.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 9.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Observa la cara frontal de 120×60 mm: los cuadros deben verse aproximadamente cuadrados. En UV Editor selecciona sólo su isla. S, X,2, Enter produce una deformación deliberada; mira cómo cambia el patrón y deshaz. Con todas las islas seleccionadas usa UV > Average Islands Scale y UV > Pack Islands. Compara otra vez sus tamaños de cuadros. Si ya tienes cuerpo y tapa desplegados, puedes compararlos en edición de varios objetos, pero no es obligatorio hacerlo en esta sesión. Conservar el cubo sencillo permite identificar una variable cada vez y terminar dentro de 20 minutos.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: UV Grid conectada a Base Color y visible; Cuadros aproximadamente cuadrados en la cara frontal; Deformación experimental deshecha y densidad comparada.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 9.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Identifica un borde de 120 mm y estima cuántas celdas ocupa. Registra densidad comparativa, no una medición certificada. Una etiqueta de 300 píxeles sobre 60 mm ofrece 5 píxeles/mm en su ancho si utiliza toda la imagen. Si la isla usa sólo la mitad de ese ancho, recibe menos píxeles. En los overlays del UV Editor activa Display Stretch cuando esté disponible para observar distorsión. Guarda la cuadrícula sin el estiramiento experimental. Comprueba la cara principal, anota qué cambió y conserva una captura propia o el archivo como evidencia.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: UV Grid conectada a Base Color y visible; Cuadros aproximadamente cuadrados en la cara frontal; Deformación experimental deshecha y densidad comparada.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** UV con cuadrícula de comprobación, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
