# Diario — Semana 6: Operaciones de modelado

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 6.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** En una escena métrica nueva deja Cursor 3D en cero y añade Plane. Tab; A; S,0.05, Enter para un plano 100×100 mm. En Edit Mode mueve toda su geometría G, X,0.06, Enter; el origen del objeto sigue en cero. Object Mode > Properties > Modifiers > Add Modifier > Mirror. Activa sólo X. Verás otra lámina al lado opuesto del origen. Si desplazas el objeto en Object Mode, ambas se desplazan juntas; el centro de simetría viaja con el origen. Deshaz el desplazamiento de prueba. Renombra Panel Simetrico y guarda.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Mirror respecto al origen verificado; Solidify 2 mm con Scale uno y Rim; Merge sólo une vértices próximos al plano.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 6.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** En el mismo objeto añade Solidify después de Mirror. Thickness 0.002 m, Offset 0 para repartir espesor alrededor de la lámina, y Rim activado para cerrar los bordes. Comprueba Scale=(1,1,1); si no, aplica Scale antes de comparar espesores. En Right y Wireframe observa el grosor. Las normales deben ser coherentes; si el espesor se orienta inesperadamente, vuelve a Edit Mode, A y Shift+N, y determina el lado deseado. La distancia de separación entre paneles es 20 mm porque sus bordes internos están X=±10 mm. No afirmes que se han unido.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Mirror respecto al origen verificado; Solidify 2 mm con Scale uno y Rim; Merge sólo une vértices próximos al plano.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 6.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Duplica el ensayo en otro archivo o variante y reduce el desplazamiento original a 50 mm para que una arista del panel quede en X=0. Activa Merge y Clipping en Mirror; verifica que los vértices de borde realmente estén en el plano de simetría. Clipping evita atravesar ese plano al editar, pero no mueve automáticamente vértices distantes al centro. Conserva los modificadores sin Apply. Cambia Thickness a 3 mm y vuelve a 2 mm para demostrar editabilidad. Guarda semana06_simetria_espesor.blend y anota el orden Mirror > Solidify.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Mirror respecto al origen verificado; Solidify 2 mm con Scale uno y Rim; Merge sólo une vértices próximos al plano.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 6.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Crea un cubo Placa de Dimensions(0.12,0.08,0.01)m, centro Z=0.005 m y Scale aplicada. Añade Cylinder Cortador con 32 vértices, Dimensions(0.02,0.02,0.03)m, centro Z=0.005 m y Apply Scale. El cortador atraviesa completamente la placa por arriba y abajo. Selecciona Placa y añade Boolean; Operation Difference, Solver Exact y Object Cortador. Inspecciona desde Top. Todavía ves el cilindro que llena el hueco; selecciona Cortador y en Object Properties > Viewport Display > Display As elige Wire para observar el resultado de la placa.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Placa con agujero 20 mm y cortador atravesante; Cortador invisible en render previsto; Versiones editable y aplicada conservadas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 6.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Sin aplicar la booleana, mueve Cortador X=0.02 m. El hueco cambia de posición. Cambia diámetro a 0.03 m, aplica Scale al cortador y observa el diámetro aproximado 30 mm. Devuelve a 0.02 m para la variante base. Crea una colección Cortadores y mueve allí el objeto. Si vas a renderizar el ensayo, muestra la columna de restricción de render en Outliner desde su filtro y desactiva el icono cámara del cortador. Verifica también su estado en el Viewport. No borres el cortador mientras siga siendo la entrada de un modificador no aplicado.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Placa con agujero 20 mm y cortador atravesante; Cortador invisible en render previsto; Versiones editable y aplicada conservadas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 6.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Haz Save As una copia para probar Apply de la booleana desde su menú en Object Mode. Después de aplicar, el hueco se vuelve geometría permanente y puedes eliminar el cortador de esa copia. En Edit Mode inspecciona aristas alrededor del agujero, recalcula normales y revisa caras internas o finas. Conserva también la versión editable. Guarda semana06_boolean_editable.blend y semana06_boolean_aplicada.blend. No apliques Subdivision Surface para corregir el agujero: podría deformar el resultado si la distribución de caras no es adecuada.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Placa con agujero 20 mm y cortador atravesante; Cortador invisible en render previsto; Versiones editable y aplicada conservadas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Pieza simétrica con abertura, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
