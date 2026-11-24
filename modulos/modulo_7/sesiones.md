# Diario — Semana 7: Bordes y sombreado

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 7.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre una copia de la placa o del cuerpo del producto. Confirma Scene Metric y Scale=(1,1,1); aplica Scale si procede antes del bisel. Añade Bevel en Modifiers con Amount 0.0005 m, Segments 3 y Limit Method Angle. Esta limitación aplica a aristas según su ángulo; no significa que todas las aristas reciban el mismo tratamiento en cualquier geometría. En una caja sencilla observa esquinas externas y borde superior. Guarda semana07_bisel_v01.blend. Para la placa booleana conserva el orden Boolean antes de Bevel si quieres biselar también el nuevo agujero.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Scale uno antes del bisel; Bevel 0.5 mm y 3 segments editable; Comparar orden Boolean/Bevel si hay agujero.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 7.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Duplica un cubo de prueba 120×80×60 mm para comparar dos anchos:0.0005 m y 0.003 m. Aplica Scale a cada uno. Mantén la misma vista y Solid con Studio Light para observar sus reflejos sin configurar un render. El ancho 3 mm cambia más la silueta y puede consumir bordes estrechos. Activa Clamp Overlap para limitar solapamientos si hace falta, pero no lo uses como prueba de que el bisel cumple exactamente el valor nominal en toda la pieza. Lee las zonas donde se reduce. Restablece el producto a 0.5 mm.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Scale uno antes del bisel; Bevel 0.5 mm y 3 segments editable; Comparar orden Boolean/Bevel si hay agujero.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 7.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** En el producto revisa a distancia normal y acercado, sobre todo tapa, esquinas y agujero si existe. Aumenta Segments de 1 a 3 y compara:1 produce un chaflán,3 una transición facetada más suave; no es necesario usar 20 segmentos en cada borde. Conserva el modificador editable y registra Amount, Segments y orden. Guarda semana07_bisel.blend. Si una zona no admite el ancho elegido, reduce Amount o revisa la topología allí antes de aceptar un resultado irregular. El siguiente subtema cambia cómo se interpreta la luz entre esas caras.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Scale uno antes del bisel; Bevel 0.5 mm y 3 segments editable; Comparar orden Boolean/Bevel si hay agujero.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 7.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Añade un Cylinder de 16 vértices con tapas N-Gon, diámetro 40 mm y alto 60 mm; Apply Scale. Renómbralo Cilindro 16. En Object Mode clic derecho > Shade Flat y observa bandas laterales. Clicderecho > Shade Smooth y observa la continuidad de iluminación. Mira Top y compara la silueta: sigue teniendo 16 lados. Duplica o añade otro Cylinder de 32 vértices con mismas medidas para comparar el contorno. No aumentes subdivisión todavía. Guarda semana07_sombreado.blend y registra qué cambió geométricamente y qué cambió sólo en la interpretación de la luz.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Comparación Shade Flat/Smooth conservada; Silueta 16 vs 32 lados explicada; Tapa conserva separación visual de lateral.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 7.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** En el cilindro de 32 lados prueba Object > Shade Auto Smooth si aparece en el mapa Blender 4.5; la operación puede crear un modificador de geometría Smooth by Angle. Una alternativa explícita es usar Shade Smooth y en Edit Mode seleccionar los bordes circulares de las tapas, Edge > Mark Sharp, y añadir el recurso Smooth by Angle desde los modificadores disponibles si lo necesitas. No dependas de instrucciones antiguas que buscan una casilla Auto Smooth en Object Data. Conserva un ángulo de 30° como prueba: la tapa debe mantener la separación respecto a la pared mientras el lateral continuo se suaviza.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Comparación Shade Flat/Smooth conservada; Silueta 16 vs 32 lados explicada; Tapa conserva separación visual de lateral.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 7.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Vuelve al cuerpo con Bevel. Inspecciona grandes caras planas y transiciones redondeadas en Solid Studio Light. Si aparecen ondas sobre una cara plana, compara Shade Flat con Smooth; revisa aristas y normales antes de añadir soluciones automáticas. A y Shift+N en Edit Mode corrigen orientación en una malla cerrada simple, pero no arreglan caras no coplanares. Conserva Shade Smooth by Angle cuando ayude a mantener caras planas y transiciones; documenta la operación elegida y la versión 4.5. Guarda una captura propia o descripción verificable del cilindro desde Top y oblicua.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Comparación Shade Flat/Smooth conservada; Silueta 16 vs 32 lados explicada; Tapa conserva separación visual de lateral.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Comparación de bordes antes y después, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
