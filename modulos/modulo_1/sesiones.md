# Diario — Semana 1: Puntos y orientación en el espacio

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 1.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

El diagnóstico ocupa los primeros 5 minutos del bloque de 6; quedan 1 minuto de orientación y 12 de preparación/práctica.

**Acción concreta:** Si aún no está instalado, usa el instalador de Blender 4.5 LTS obtenido del sitio oficial. La descarga y las esperas pueden continuar fuera del estudio; los clics de instalación y primera apertura ocupan el bloque práctico de hoy. No cambies asociaciones ni preferencias que no comprendas. Si la instalación consume ese bloque, guarda una nota y realiza la primera apertura en la sesión 2, sustituyendo la duplicación de práctica. Selecciona el mapa de teclas Blender, no Industry Compatible. Identifica Viewport, Outliner y Properties. En la escena inicial, pulsa sobre Cube y comprueba el contorno naranja. Escribe qué objeto seleccionaste y qué panel lo confirma. En Edit > Preferences > Interface > Translation selecciona Language English para encontrar los menús con los nombres enseñados; el curso explica su significado en español. No necesitas dominar inglés para usar esos nombres de interfaz.

**Salida:** Diagnóstico registrado y avance de instalación o apertura guardado en una nota.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 1.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Crea una carpeta D3DH con subcarpetas proyectos, referencias y entregas usando el explorador del sistema. En Blender usa File > Save As; guarda proyectos/semana01_v01.blend. Haz una modificación pequeña: selecciona Cube y cambia su nombre mediante F2 a Ensayo. Guarda con Ctrl+S. Usa File > Open para volver a abrir ese mismo archivo y confirma el nombre Ensayo. En el Outliner prueba seleccionar Camera y después Light sin borrarlos. Regresa al cubo. No confíes en que el último archivo del menú reciente sea la versión correcta: verifica carpeta y nombre antes de trabajar.

**Salida:** Archivo v01 guardado y recuperado; nombre Ensayo comprobado.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 1.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Abre el archivo guardado y navega sin modificar el cubo. Mantén el botón central para orbitar, Shift más botón central para desplazar la vista y rueda para acercarte. Si tu ratón carece de botón central, usa los controles del gizmo de navegación en la esquina del Viewport; sus iconos de mano y lupa permiten desplazar y acercar. View > Frame Selected centra el objeto seleccionado. Usa File > Save As y crea semana01_v02.blend. Cierra y abre v02. Registra en una línea la diferencia entre v01 y v02; ambas deben continuar disponibles.

**Salida:** Archivo v02 reabierto con vista y nombre conservados.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 1.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Guarda una copia de tu escena. En Object Mode selecciona solamente Cube y elimínalo con X > Delete; conserva cámara y luz. Shift+S > Cursor to World Origin coloca el Cursor 3D en cero. Shift+A > Mesh > Plane añade un plano. Tab entra en Edit Mode; A selecciona sus cuatro vértices y M > At Center los fusiona en uno. Renombra el objeto Punto al volver a Object Mode y entra otra vez en Edit Mode. Activa selección de vértices con el botón correspondiente del encabezado. En N > Item escribe X=1, Y=2, Z=0 para el único vértice seleccionado. No cambies la Location del objeto.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Un solo vértice seleccionado muestra la terna solicitada; Cursor 3D vuelve a (0,0,0) sin mover Punto; Explicar coincidencia de A y B en Top.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 1.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Con Punto sin rotación y con escala uno, sus coordenadas locales coinciden con las globales. Lee (1,2,0) en el panel del vértice. Duplica ese vértice con Shift+D; pulsa botón derecho para cancelar solamente el desplazamiento y escribe en N > Item X=-1, Y=2, Z=1. Son dos puntos sin aristas. Vuelve a seleccionar el primero para leer sus valores. Observa que mover el Cursor 3D mediante N > View > 3D Cursor no cambia ninguno de ellos. Restablece el cursor a cero. Una marca en la vista puede estar escondida detrás de otra desde un ángulo particular: cambia de vista antes de concluir que falta un punto.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Un solo vértice seleccionado muestra la terna solicitada; Cursor 3D vuelve a (0,0,0) sin mover Punto; Explicar coincidencia de A y B en Top.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 1.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Usa View > Viewpoint > Front, Right y Top; los equivalentes con teclado numérico son 1,3,7. Front muestra X y Z; Right muestra Y y Z; Top muestra X y Y. En cada vista identifica qué coordenada queda como profundidad y anótala. Duplica vértices hasta construir cinco posiciones: (0,0,0),(1,0,0),(1,1,0),(1,1,1),(-1,1,1). Ajusta N > Item para cada uno recién duplicado. No uses el ratón para estimar los números. Guarda semana01_puntos.blend y comprueba dos posiciones por sus campos numéricos.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Un solo vértice seleccionado muestra la terna solicitada; Cursor 3D vuelve a (0,0,0) sin mover Punto; Explicar coincidencia de A y B en Top.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Recorrido de puntos y carpeta organizada, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
