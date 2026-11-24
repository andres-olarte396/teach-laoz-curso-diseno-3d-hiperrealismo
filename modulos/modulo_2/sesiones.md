# Diario — Semana 2: Transformaciones y medidas

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 2.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Crea una escena nueva General y guarda semana02_v01.blend. Selecciona Cube y activa Object Mode. En N > Item fija Location X=0, Y=0, Z=0 y Rotation en cero. Pulsa G, X,2, Enter; comprueba Location X=2. Pulsa G, Y,-1, Enter y comprueba (2,-1,0). Un número tecleado después de G es un desplazamiento relativo, mientras que escribir Location=2 fija una posición absoluta. Usa Ctrl+Z una vez y observa qué operación deshace. Vuelve a realizarla y guarda. Mantén la orientación Global del desplegable superior para que el primer ensayo no tenga otra variable escondida.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Centro, Este y Norte conservan sus tres posiciones; Diferenciar desplazamiento relativo G y posición absoluta Location; Demostrar dos direcciones distintas para X global y X local rotado.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 2.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Duplica el cubo con Shift+D, botón derecho, y cambia el nombre a Girado. Fija su Location=(0,0,0) y Rotation Z=90 grados en N > Item. Cambia Transform Orientation a Local. Usa la herramienta Move de la barra para mirar los ejes del gizmo: X local giró con el objeto. Con orientación Local seleccionada, G, X,1, Enter restringe al X local con el mapa Blender; compara la Location global resultante. Deshaz. Elige Global y usa G, X,1, Enter. Los desplazamientos producen direcciones diferentes. Registra cuál aumentó Y global y cuál aumentó X global; no deduzcas la dirección por el color sin consultar la orientación seleccionada.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Centro, Este y Norte conservan sus tres posiciones; Diferenciar desplazamiento relativo G y posición absoluta Location; Demostrar dos direcciones distintas para X global y X local rotado.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 2.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Construye tres bloques con Location (0,0,0),(3,0,0),(0,3,0), usando duplicación y campos numéricos. Renómbralos Centro, Este y Norte. Selecciona Centro y entra en Edit Mode; A y G, Z,1, Enter desplazan su malla, mientras la Location del objeto no cambia. Deshaz inmediatamente, vuelve a Object Mode y haz G, Z,1, Enter. Ahora la Location sí cambia. Esta comparación no forma parte del producto final: sirve para comprender dónde quedó registrado el movimiento. Devuelve Centro a cero, guarda y verifica las tres ternas en Object Mode.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Centro, Este y Norte conservan sus tres posiciones; Diferenciar desplazamiento relativo G y posición absoluta Location; Demostrar dos direcciones distintas para X global y X local rotado.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 2.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre una escena nueva. Properties > Scene > Units: Unit System Metric, Unit Scale 1 y Length Meters. Esta elección cambia cómo se presentan cantidades; no corrige automáticamente objetos que ya estaban modelados a otro tamaño. Selecciona Cube y en N > Item > Dimensions introduce X=0.20 m, Y=0.10 m, Z=0.04 m. Renombra Base. Fija Location Z=0.02 m para que su base quede en Z=0 si el origen está en su centro. Usa Object > Apply > Scale, o Ctrl+A > Scale. Comprueba Scale=(1,1,1) y Dimensions sin cambios. Guarda semana02_medidas.blend.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Scene Metric con Unit Scale 1; Base 0.20×0.10×0.04 m y Scale uno; Tapa apoyada: centro Z=0.045 m.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 2.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Duplica Base como Base Giratoria y sitúala en X=0.30 m. En el desplegable Pivot Point elige Median Point; usa R, Z,30, Enter. Observa que sus extremos giran alrededor del origen de la pieza. Deshaz. Abre N > View > 3D Cursor y fija su Location X=0.20 m, Y=0, Z=0.02 m. Elige Pivot Point > 3D Cursor y repite R, Z,30, Enter. La misma rotación ahora cambia también la posición de la pieza porque gira alrededor de otro punto. Deshaz y devuelve Pivot a Median Point. No dejes un pivote experimental activo para las siguientes tareas.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Scene Metric con Unit Scale 1; Base 0.20×0.10×0.04 m y Scale uno; Tapa apoyada: centro Z=0.045 m.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 2.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Construye Tapa con Dimensions (0.20,0.10,0.01) m, Rotation cero y Scale aplicada; sitúala en Z=0.045 m para apoyar su cara inferior en la cara superior de Base, que está en 0.04 m. En una vista frontal comprueba la unión. Añade un bloque auxiliar con dimensiones (0.02,0.02,0.02) m y centro Z=0.01 m. Lee las medidas en N > Item. Si necesitas mover todo el conjunto, selecciona sus tres objetos y usa G con un eje. Dimensions usa una caja delimitadora alineada con los ejes locales del objeto; su rotación en Object Mode no transforma esas medidas en una envolvente global. No deduzcas tamaño real de la apariencia en perspectiva.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Scene Metric con Unit Scale 1; Base 0.20×0.10×0.04 m y Scale uno; Tapa apoyada: centro Z=0.045 m.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Composición de tres volúmenes medidos, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
