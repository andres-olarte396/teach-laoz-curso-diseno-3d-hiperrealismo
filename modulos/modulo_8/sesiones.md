# Diario — Semana 8: Curvas y superficies

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 8.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre una escena métrica de ensayo y Shift+A > Curve > Bézier. En Object Mode ajusta Dimensions del recorrido de manera aproximada a 80 mm de ancho, y aplica Scale. Tab muestra puntos y manejadores; selecciona todo y en Front observa la curva. En Object Data Properties, icono de curva, comprueba Dimensions 3D. En Geometry > Bevel elige Round y Depth 0.003 m; Resolution 3. Activa Fill Caps para tapar extremos cuando proceda. El resultado es un tubo de diámetro aproximado 6 mm en tramos no deformados. Renombra Asa Curva y guarda semana08_curva.blend.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Curva 3D con Depth 3 mm y Fill Caps; Recorrido comprobado en dos vistas; Curva original conservada antes de Convert.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 8.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** En Edit Mode selecciona un punto de control y usa V > Automatic para manejadores automáticos si quieres transición continua, o Aligned cuando necesites controlar dirección manualmente. Mueve el punto con G y eje, sin arrastrar a ciegas; por ejemplo G, Z,0.02 m eleva 20 mm. Selecciona un extremo y E para extruir otro punto de control; mueve y confirma. No selecciones sólo un manejador por accidente si quieres mover el punto completo. Consulta Top y Front para verificar que la forma quede en el plano previsto. El asa no debe convertirse en un nudo tridimensional accidental.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Curva 3D con Depth 3 mm y Fill Caps; Recorrido comprobado en dos vistas; Curva original conservada antes de Convert.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 8.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Duplica la curva como prueba y cambia Depth a 0.002 m para comparar diámetro 4 mm. El recorrido permanece editable. Si necesitas una malla para operaciones futuras, Object > Convert > Mesh en una copia hace la conversión; conserva la curva original antes de convertir. No conviertas por obligación. Guarda la versión con dos variantes y anota qué parámetro cambió grosor. Coloca el asa cerca de la caja en una copia del producto sólo si queda tiempo dentro del bloque: el ensayo de curva ya satisface el objetivo de este subtema.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Curva 3D con Depth 3 mm y Fill Caps; Recorrido comprobado en dos vistas; Curva original conservada antes de Convert.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 8.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** En una escena de ensayo añade Cube, Dimensions(0.08,0.04,0.02)m y Apply Scale. Añade Subdivision Surface con Catmull-Clark, Viewport Levels 1 y Render Levels 2. Observa cómo se redondea y reduce la silueta. Desactiva temporalmente el icono de monitor del modificador para comparar la malla original, y vuelve a activarlo. Guarda semana08_subdivision.blend. No apliques el modificador ni lo añadas a una pieza booleana compleja del producto para este primer ensayo: un cubo permite atribuir el resultado a la distribución de sus aristas.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Catmull-Clark comparado contra cubo original; Crease 0,0.7 y 1 diferenciadas; Viewport Levels limitado y base editable.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 8.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** En Edit Mode elige Edge, selecciona todas las aristas y usa Shift+E,0.7, Enter para una crease de prueba. La marca indica cuánto resiste una arista la suavización; no es un radio de fabricación en milímetros. Compara con valor 0 y con 1 sobre una copia. Si necesitas comprobar los valores, usa Sidebar > Item de las aristas seleccionadas y busca Mean Crease. Conserva 0.7 para una transición moderada. Usa Shade Smooth para inspeccionar iluminación, recordando que el contorno lo define Subdivision y no el sombreado. Una pequeña malla puede producir una pieza útil para la tapa.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Catmull-Clark comparado contra cubo original; Crease 0,0.7 y 1 diferenciadas; Viewport Levels limitado y base editable.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 8.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Crea otro cubo de ensayo. En Edit Mode usa Ctrl+R para un bucle central en una dirección y deslízalo hacia un extremo; añade otro hacia el contrario. Repite sólo si cabe en el tiempo para ver cómo los bucles próximos al extremo conservan forma con Subdivision. No se exige modelar una red completa de soportes en 20 minutos. Guarda comparacion_crease_bucle.blend y registra qué método es más fácil de modificar para el caso. Mantén Viewport Levels 1 o 2; niveles altos multiplican caras y pueden sobrecargar el equipo sin mejorar la comprensión.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Catmull-Clark comparado contra cubo original; Crease 0,0.7 y 1 diferenciadas; Viewport Levels limitado y base editable.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Asa o perfil redondeado, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
