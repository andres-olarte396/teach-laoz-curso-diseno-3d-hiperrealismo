# Diario — Semana 3: De vértices a volúmenes

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 3.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Añade un plano en el origen. Tab > Edit Mode; alterna los tres botones de selección del encabezado: Vertex, Edge y Face. Selecciona una esquina, luego una arista y luego la cara. Con Vertex seleccionado usa A y observa los cuatro puntos. Vuelve a Face y selecciona la cara. N > Item muestra información de la selección, no una lista de todos los vértices. Activa Viewport Overlays > Face Orientation. En la configuración predeterminada, el exterior se muestra azul y el reverso rojo; confirma que el overlay está visible y mira el plano desde ambos lados. Un plano abierto tiene reverso accesible.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Identificar vértice, arista y cara en un cubo; Invertir y restaurar una cara observando Face Orientation; Cerrar un hueco con F y recalcular orientación.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 3.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Con la cara seleccionada usa E, Z,0.05, Enter para crear una caja abierta por debajo a partir del plano desplazado, o usa un cubo nuevo para el ensayo cerrado. En el cubo, entra en Edit Mode, selecciona una sola cara y utiliza Mesh > Normals > Flip. La cara ahora aparece orientada al revés respecto a las restantes. Selecciona todo y Mesh > Normals > Recalculate Outside, equivalente Shift+N. Comprueba el resultado desde fuera del cubo. Este procedimiento tiene sentido con una superficie cerrada simple; en una lámina abierta “fuera” puede no representar la dirección que tú necesitas.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Identificar vértice, arista y cara en un cubo; Invertir y restaurar una cara observando Face Orientation; Cerrar un hueco con F y recalcular orientación.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 3.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Vuelve a Vertex en una copia del cubo. Selecciona un vértice y muévelo con G, Z,0.02, Enter. Observa cómo las caras incidentes cambian juntas: la malla está conectada. Deshaz. Selecciona una cara y bórrala con X > Only Faces. Ahora hay un hueco, pero las aristas pueden seguir visibles. En Edge selecciona las cuatro aristas del borde del hueco, sin otras selecciones, y pulsa F para crear la cara. Selecciona todo, Shift+N y revisa Face Orientation. Guarda caja_inspeccionada.blend; registra qué reparación añadió geometría y cuál cambió sólo orientación.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Identificar vértice, arista y cara en un cubo; Invertir y restaurar una cara observando Face Orientation; Cerrar un hueco con F y recalcular orientación.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 3.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** En escena métrica añade Mesh > Cube. Dimensions (0.12,0.08,0.06) m; Apply Scale. Guarda caja_base.blend. Tab entra en Edit Mode, elige Face y deselecciona con Alt+A. Selecciona sólo la cara superior desde arriba. Usa X > Only Faces. Orbita para confirmar el hueco y cambia temporalmente a Wireframe con Z > Wireframe si necesitas ver el contorno. El cubo ya no está cerrado aunque todavía conserve su silueta desde abajo. No borres vértices del borde: necesitarás ese perímetro para reconstruir la tapa.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Caja reparada sin bordes abiertos seleccionados; Poste independiente con dimensiones correctas; Distinguir cara N-Gon de hueco.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 3.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Activa Edge y deselecciona todo. Selecciona una arista del hueco y después las otras tres con Shift. Pulsa F. Cambia a Solid, selecciona todo y Shift+N. Para revisar límites usa Select > Select All by Trait > Non-Manifold en modo de selección de vértices o aristas; antes deselecciona todo. En un cubo cerrado sencillo no deberían seleccionarse aristas de borde. Si aparece selección, examina dónde está y no concluyas que el modelo está listo sólo porque el menú no muestra advertencias. Guarda caja_reparada.blend separada de la versión con hueco.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Caja reparada sin bordes abiertos seleccionados; Poste independiente con dimensiones correctas; Distinguir cara N-Gon de hueco.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 3.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Añade un cilindro independiente. En Adjust Last Operation configura 16 vértices y tapas N-Gon, si el panel aún está disponible; si no, deshaz y vuelve a añadirlo. Ajusta Dimensions a (0.04,0.04,0.06) m y Apply Scale. Nómbralo Poste. El cubo y el cilindro son dos objetos aunque sus superficies puedan interpenetrarse. Selecciónalos en Outliner uno por uno. Compara el borde de la tapa del cilindro con una arista lateral: la tapa puede ser una cara de muchos lados. Conserva esa geometría simple; no subdividas por rutina para hacerla parecer más avanzada.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Caja reparada sin bordes abiertos seleccionados; Poste independiente con dimensiones correctas; Distinguir cara N-Gon de hueco.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Caja cerrada e inspección de normales, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
