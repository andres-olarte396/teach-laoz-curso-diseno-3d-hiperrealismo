# 2.1.1 — Traslación y coordenadas globales/locales

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Trasladar es sumar un desplazamiento a una posición. Si un objeto pasa de (0,0,0) a (2,0,0), se ha desplazado dos unidades en X. Las coordenadas globales usan los ejes de toda la escena; los ejes locales acompañan la orientación del objeto. Un objeto girado puede tener su X local apuntando en otra dirección que X global. En Object Mode G mueve el objeto entero. En Edit Mode G mueve la selección de geometría dentro del objeto. Estos niveles sirven para tareas distintas y deben comprobarse antes de introducir una distancia.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Crea una escena nueva General y guarda semana02_v01.blend. Selecciona Cube y activa Object Mode. En N > Item fija Location X=0, Y=0, Z=0 y Rotation en cero. Pulsa G, X,2, Enter; comprueba Location X=2. Pulsa G, Y,-1, Enter y comprueba (2,-1,0). Un número tecleado después de G es un desplazamiento relativo, mientras que escribir Location=2 fija una posición absoluta. Usa Ctrl+Z una vez y observa qué operación deshace. Vuelve a realizarla y guarda. Mantén la orientación Global del desplegable superior para que el primer ensayo no tenga otra variable escondida.

## Sesión 2 — Comparación controlada

Duplica el cubo con Shift+D, botón derecho, y cambia el nombre a Girado. Fija su Location=(0,0,0) y Rotation Z=90 grados en N > Item. Cambia Transform Orientation a Local. Usa la herramienta Move de la barra para mirar los ejes del gizmo: X local giró con el objeto. Con orientación Local seleccionada, G, X,1, Enter restringe al X local con el mapa Blender; compara la Location global resultante. Deshaz. Elige Global y usa G, X,1, Enter. Los desplazamientos producen direcciones diferentes. Registra cuál aumentó Y global y cuál aumentó X global; no deduzcas la dirección por el color sin consultar la orientación seleccionada.

## Sesión 3 — Transferencia y comprobación

Construye tres bloques con Location (0,0,0),(3,0,0),(0,3,0), usando duplicación y campos numéricos. Renómbralos Centro, Este y Norte. Selecciona Centro y entra en Edit Mode; A y G, Z,1, Enter desplazan su malla, mientras la Location del objeto no cambia. Deshaz inmediatamente, vuelve a Object Mode y haz G, Z,1, Enter. Ahora la Location sí cambia. Esta comparación no forma parte del producto final: sirve para comprender dónde quedó registrado el movimiento. Devuelve Centro a cero, guarda y verifica las tres ternas en Object Mode.

## Ejemplo razonado

Ejemplo resuelto: una pieza apunta hacia Y global después de girar 90° alrededor de Z. Deslizarla por su longitud requiere X local, si antes esa longitud estaba en X. Moverla por X global la desplaza lateralmente respecto a sí misma. Para ordenar un conjunto de envases en la mesa suele convenir Global; para mover una tapa en la dirección de una carcasa inclinada puede convenir Local. No hay una orientación siempre correcta. La pregunta útil es si la dirección está definida por la escena o por la pieza. El origen se traslada con el objeto en Object Mode; al editar vértices puede quedarse quieto.

## Errores y recuperación

Si G desplaza la vista y no el objeto, confirma puntero y mapa de teclas. Si el eje parece incorrecto, vuelve a Global y revisa Rotation. Si has movido sólo una esquina, estabas en Edit Mode con una selección parcial; deshaz y usa Object Mode. Si una duplicación quedó superpuesta, lee los nombres en Outliner y fija Location antes de duplicar otra vez. No borres elementos sin verificar cuál es el activo.

## Decisiones y conexión con el siguiente paso

Una disposición reproducible debe poder reconstruirse a partir de sus valores. Guardar la terna de cada pieza es más útil que escribir “un poco a la derecha”. Comprueba también la unidad del desplazamiento, todavía abstracta aquí. Los movimientos encadenados se suman, pero escribir Location reemplaza el valor anterior de ese componente. Mantener pocos objetos y nombres claros hace visible ese efecto. La siguiente lección añade dimensiones métricas y rotación; las coordenadas anteriores seguirán describiendo posiciones, no tamaños.

## Evidencia verificable

- Centro, Este y Norte conservan sus tres posiciones
- Diferenciar desplazamiento relativo G y posición absoluta Location
- Demostrar dos direcciones distintas para X global y X local rotado

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Traslación y coordenadas globales/locales](https://docs.blender.org/manual/en/4.5/scene_layout/object/editing/transform/move.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

