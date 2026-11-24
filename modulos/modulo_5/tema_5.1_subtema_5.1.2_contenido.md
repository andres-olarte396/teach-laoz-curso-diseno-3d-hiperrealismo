# 5.1.2 — Componentes y organización editable

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Un objeto puede contener varias islas de geometría, y una colección puede contener varios objetos. Unir con Ctrl+J no equivale a soldar vértices. Separar con P crea objetos desde una selección de malla. Para un producto de caja, tapa y base, componentes independientes permiten cambiar cada pieza sin rehacer la escena. Los nombres y la organización son parte del modelado: un objeto llamado Cube.007 no comunica su función ni ayuda a encontrar qué medir.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Abre semana05_caja.blend y vuelve a mostrar Tapa Bloque y Base Bloque. Renómbralos Tapa y Base; Caja Trabajo pasa a Cuerpo. Selecciona los tres en Outliner y M > New Collection, nombre Producto. Comprueba que Camera y Light no se hayan incluido por accidente. Selecciona Tapa y ajusta Dimensions Z=0.006 m. Aplica Scale y recalcula su centro Z=0.063 m para apoyar sobre Cuerpo a Z=0.060 m. Guarda antes de experimentar. Una tapa centrada y un cuerpo abierto permanecen componentes distintos aunque se toquen.

## Sesión 5 — Comparación controlada

En una copia de escena selecciona Tapa y Cuerpo con Shift y pulsa Ctrl+J en Object Mode. En Outliner aparece un objeto, pero las mallas mantienen sus islas. Tab, deselecciona todo y coloca el puntero sobre la tapa; pulsa L para seleccionar geometría vinculada bajo el puntero. Si selecciona también paredes, la geometría no es la separación que esperabas: revisa la copia usada. P > Selection crea un objeto para la tapa elegida. Vuelve a Object Mode y renombra ambos. Esta prueba demuestra que “un objeto” no prueba continuidad entre sus componentes.

## Sesión 6 — Transferencia y comprobación

Regresa al archivo original o conserva la copia separada si sus medidas están verificadas. Modifica solamente Tapa a Dimensions X=0.126 m, Y=0.086 m, Z=0.006 m y Apply Scale. El cuerpo sigue 120×80×60 mm. Calcula sobresaliente 3 mm por lado. Selecciona Producto en Outliner y organiza su visibilidad sin borrar piezas. Guarda semana05_componentes.blend. Entrega una tabla con nombre, dimensiones y centro Z de cada componente. No añadas biseles todavía: la evidencia importante es cambiar la tapa sin reconstruir el recipiente.

## Ejemplo razonado

Ejemplo: el cliente pide una tapa 2 mm más ancha en cada dimensión total. Si antes era 124×84 mm, ahora 126×86 mm. Como el cuerpo mide 120×80 mm, el sobresaliente aumenta de 2 a 3 mm por cada lado. No se suma 2 mm por lado si la especificación habla de ancho total. La base y el cuerpo permanecen iguales. Esta corrección toma pocos pasos porque cada pieza está separada. Si se hubiera soldado todo sin distinguir grupos, seleccionar solamente la tapa sería más costoso. Una organización clara permite justificar el cambio con números y una vista superior.

## Errores y recuperación

Si Ctrl+J parece no actuar, confirma que los objetos sean compatibles y estés en Object Mode. Si P separa casi todo, deshaz y verifica la selección. Si L selecciona una pieza equivocada, acerca la vista y coloca el puntero sobre la isla deseada. Si una tapa cambia al editar otra, podrían compartir datos por Duplicate Linked; usa una copia independiente cuando se requiera un cambio aislado. Si pierdes un objeto, revisa colecciones ocultas antes de añadir duplicados.

## Decisiones y conexión con el siguiente paso

Agrupar no certifica un ensamblaje físico. Las intersecciones y apoyos deberán comprobarse por separado. Para esta fase basta que cada pieza pueda identificarse, medirse y modificarse. El archivo también sirve como respaldo previo a las operaciones de simetría y booleanas. Conserva una versión con geometría simple; una operación irreversible puede complicar cambios de tamaño posteriores. Dedicar un minuto a nombrar no es una tarea administrativa adicional: forma parte de los veinte minutos y reduce errores en el siguiente bloque.

## Evidencia verificable

- Colección Producto con Cuerpo, Tapa, Base
- Tapa 126×86×6 mm y cuerpo sin cambios
- Explicar diferencia entre Join y soldar

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Componentes y organización editable](https://docs.blender.org/manual/en/4.5/modeling/meshes/editing/mesh/separate.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

