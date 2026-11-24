# 3.1.1 — Vértices, aristas, caras y normales

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una malla conecta vértices mediante aristas y forma superficies con caras. Tres puntos no colineales pueden definir una cara triangular; cuatro puntos coplanares pueden definir un cuadrilátero. Una cara tiene una dirección normal, perpendicular a su superficie, que distingue exterior e interior. Las normales participan en el sombreado y en operaciones como dar espesor. Una forma que parece sólida puede tener una cara invertida o faltar por detrás. Inspeccionar conectividad y orientación permite descubrir defectos que una vista agradable oculta.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Añade un plano en el origen. Tab > Edit Mode; alterna los tres botones de selección del encabezado: Vertex, Edge y Face. Selecciona una esquina, luego una arista y luego la cara. Con Vertex seleccionado usa A y observa los cuatro puntos. Vuelve a Face y selecciona la cara. N > Item muestra información de la selección, no una lista de todos los vértices. Activa Viewport Overlays > Face Orientation. En la configuración predeterminada, el exterior se muestra azul y el reverso rojo; confirma que el overlay está visible y mira el plano desde ambos lados. Un plano abierto tiene reverso accesible.

## Sesión 2 — Comparación controlada

Con la cara seleccionada usa E, Z,0.05, Enter para crear una caja abierta por debajo a partir del plano desplazado, o usa un cubo nuevo para el ensayo cerrado. En el cubo, entra en Edit Mode, selecciona una sola cara y utiliza Mesh > Normals > Flip. La cara ahora aparece orientada al revés respecto a las restantes. Selecciona todo y Mesh > Normals > Recalculate Outside, equivalente Shift+N. Comprueba el resultado desde fuera del cubo. Este procedimiento tiene sentido con una superficie cerrada simple; en una lámina abierta “fuera” puede no representar la dirección que tú necesitas.

## Sesión 3 — Transferencia y comprobación

Vuelve a Vertex en una copia del cubo. Selecciona un vértice y muévelo con G, Z,0.02, Enter. Observa cómo las caras incidentes cambian juntas: la malla está conectada. Deshaz. Selecciona una cara y bórrala con X > Only Faces. Ahora hay un hueco, pero las aristas pueden seguir visibles. En Edge selecciona las cuatro aristas del borde del hueco, sin otras selecciones, y pulsa F para crear la cara. Selecciona todo, Shift+N y revisa Face Orientation. Guarda caja_inspeccionada.blend; registra qué reparación añadió geometría y cuál cambió sólo orientación.

## Ejemplo razonado

Ejemplo: en una caja de seis caras, borrar la cara superior produce un recipiente sin tapa pero sin espesor físico. Las paredes siguen siendo superficies de grosor cero. Recalculate Outside puede corregir la orientación, pero no reconstruye esa tapa ni añade espesor. Pulsar F sobre el contorno seleccionado sí crea una superficie. Más adelante Solidify añadirá espesor a una superficie abierta adecuada. Estas tres acciones resuelven problemas distintos. Evaluar una malla exige preguntar qué geometría existe, cómo se conecta y hacia dónde miran sus caras, en lugar de atribuir todos los defectos a una luz incorrecta.

## Errores y recuperación

Si F crea una cara cruzada o extraña, has seleccionado puntos de otro contorno; deshaz y aísla el borde. Si Shift+N no arregla una superficie abierta, determina qué lado debe considerarse exterior y usa Flip de forma deliberada. Si una cara no admite selección, puede estar tapada por otra; gira la vista o usa X-Ray temporalmente. Si aparecen puntos superpuestos, Merge by Distance con una distancia pequeña puede unirlos, pero una distancia grande destruirá detalles.

## Decisiones y conexión con el siguiente paso

No confundas normal geométrica y material. Cambiar color no repara caras orientadas al revés, y suavizar no cierra huecos. Una inspección de Face Orientation debe hacerse desde fuera y dentro cuando proceda. Mantén herramientas experimentales en una copia para preservar el modelo de trabajo. Un vértice aislado de la primera semana era una posición; ahora los mismos puntos se convierten en superficie porque has añadido conectividad. Esa transición hace posible renderizar una pieza y controlar sus bordes con técnicas posteriores.

## Evidencia verificable

- Identificar vértice, arista y cara en un cubo
- Invertir y restaurar una cara observando Face Orientation
- Cerrar un hueco con F y recalcular orientación

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Vértices, aristas, caras y normales](https://docs.blender.org/manual/en/4.5/modeling/meshes/editing/mesh/normals.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

