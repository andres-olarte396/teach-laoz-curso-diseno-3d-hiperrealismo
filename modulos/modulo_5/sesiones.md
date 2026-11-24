# Diario — Semana 5: Construcción de piezas

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 5.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Haz Save As del bloqueo y renombra su cuerpo a Caja Trabajo, sin duplicarlo; oculta temporalmente la tapa y base en Outliner mediante el ojo. Selecciona sólo Caja Trabajo, Apply Scale si no está en uno. En Edit Mode activa selección Face, deselecciona todo y elige su cara superior desde Top. Pulsa I,0.002, Enter para insertar un contorno a 2 mm del borde. Verifica en Top que el nuevo rectángulo interno corresponde aproximadamente 116×76 mm. La cara interna sigue tapando el objeto: aún no tienes un recipiente. Guarda una versión antes de extruir.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Exterior 120×80×60 mm conservado; Borde 2 mm y fondo interior Z=2 mm; No extrusiones duplicadas superpuestas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 5.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Con la cara interna seleccionada usa E, Z,-0.058, Enter para bajar el fondo 58 mm desde Z=60 mm a Z=2 mm. Se crean paredes interiores y un fondo que deja 2 mm de base. No vuelvas a extruir si el resultado ya existe. En Front con Wireframe comprueba el nivel del fondo y después vuelve a Solid. La dimensión exterior se conserva 120×80×60 mm. Selecciona todo y Shift+N. Inspecciona desde arriba: deben verse borde, interior y fondo. Esta construcción representa una caja abierta con volumen de paredes, no una superficie sin espesor.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Exterior 120×80×60 mm conservado; Borde 2 mm y fondo interior Z=2 mm; No extrusiones duplicadas superpuestas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 5.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** En una copia de prueba añade un Loop Cut con Ctrl+R sobre una pared adecuada, rueda para dejar un corte y botón derecho después del primer clic para centrarlo. Este ensayo no es obligatorio conservarlo en la caja: muestra cómo un bucle atraviesa una tira de cuadriláteros y dónde se detiene. Si no aparece, el recorrido puede encontrar un N-Gon. Deshaz el corte de ensayo y conserva la caja limpia. Guarda semana05_caja.blend. Elige una variante del ejercicio en el último bloque; la revisión de profundidad y pared sustituye una nueva operación.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Exterior 120×80×60 mm conservado; Borde 2 mm y fondo interior Z=2 mm; No extrusiones duplicadas superpuestas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 5.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre semana05_caja.blend y vuelve a mostrar Tapa Bloque y Base Bloque. Renómbralos Tapa y Base; Caja Trabajo pasa a Cuerpo. Selecciona los tres en Outliner y M > New Collection, nombre Producto. Comprueba que Camera y Light no se hayan incluido por accidente. Selecciona Tapa y ajusta Dimensions Z=0.006 m. Aplica Scale y recalcula su centro Z=0.063 m para apoyar sobre Cuerpo a Z=0.060 m. Guarda antes de experimentar. Una tapa centrada y un cuerpo abierto permanecen componentes distintos aunque se toquen.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Colección Producto con Cuerpo, Tapa, Base; Tapa 126×86×6 mm y cuerpo sin cambios; Explicar diferencia entre Join y soldar.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 5.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** En una copia de escena selecciona Tapa y Cuerpo con Shift y pulsa Ctrl+J en Object Mode. En Outliner aparece un objeto, pero las mallas mantienen sus islas. Tab, deselecciona todo y coloca el puntero sobre la tapa; pulsa L para seleccionar geometría vinculada bajo el puntero. Si selecciona también paredes, la geometría no es la separación que esperabas: revisa la copia usada. P > Selection crea un objeto para la tapa elegida. Vuelve a Object Mode y renombra ambos. Esta prueba demuestra que “un objeto” no prueba continuidad entre sus componentes.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Colección Producto con Cuerpo, Tapa, Base; Tapa 126×86×6 mm y cuerpo sin cambios; Explicar diferencia entre Join y soldar.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 5.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Regresa al archivo original o conserva la copia separada si sus medidas están verificadas. Modifica solamente Tapa a Dimensions X=0.126 m, Y=0.086 m, Z=0.006 m y Apply Scale. El cuerpo sigue 120×80×60 mm. Calcula sobresaliente 3 mm por lado. Selecciona Producto en Outliner y organiza su visibilidad sin borrar piezas. Guarda semana05_componentes.blend. Entrega una tabla con nombre, dimensiones y centro Z de cada componente. No añadas biseles todavía: la evidencia importante es cambiar la tapa sin reconstruir el recipiente.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Colección Producto con Cuerpo, Tapa, Base; Tapa 126×86×6 mm y cuerpo sin cambios; Explicar diferencia entre Join y soldar.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Producto con base y tapa, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
