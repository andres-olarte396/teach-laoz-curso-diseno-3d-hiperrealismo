# Diario — Semana 12: Imperfecciones y realismo

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 12.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre el material con Noise/Bump en una pieza métrica de prueba. Añade Texture Coordinate y conecta salida Object a Noise Vector. Confirma Scale del objeto uno y anota sus dimensiones. En Noise empieza Scale 1000 como frecuencia de ensayo para un objeto de aproximadamente 0.06 m de alto; el ruido no es una cuadrícula exacta, por lo que ese valor no demuestra un tamaño de grano de 1 mm. Mantén Bump Distance 0.00005 y Strength 0.15 para detalle muy tenue. Guarda semana12_microtextura.blend. Conserva el material liso para comparación.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Coordenadas Object y Scale uno; Frecuencia comparada 100/1000/3000; Microvariación Roughness acotada 0.3–0.4.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 12.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Compara Scale 100,1000 y 3000 con la misma vista. Anota si el patrón se lee como manchas grandes, grano o detalle demasiado fino para los píxeles disponibles. No elijas el número mayor automáticamente. Coloca un cubo auxiliar de 1 mm cerca de la pieza, sólo como referencia visual de tamaño; luego escóndelo de render. Revisa el detalle a distancia habitual y acercado. Si el patrón produce aliasing o parpadeo, no aumentes frecuencia indefinidamente: simplifica el detalle o usa su efecto en Roughness.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Coordenadas Object y Scale uno; Frecuencia comparada 100/1000/3000; Microvariación Roughness acotada 0.3–0.4.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 12.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Conecta Noise Fac a un Color Ramp para limitar su salida. En el Color Ramp usa dos grises cercanos, por ejemplo 0.3 y 0.4, y conecta Color a Roughness de un material de copia. Desconecta temporalmente Bump para evaluar solamente microvariación de brillo. Compara con Roughness uniforme 0.35. Guarda las dos variantes y escribe cuál resulta más plausible para un organizador nuevo. La entrega requiere un cambio justificado, no todas las técnicas simultáneamente ni un render lento para probar una diferencia mínima.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Coordenadas Object y Scale uno; Frecuencia comparada 100/1000/3000; Microvariación Roughness acotada 0.3–0.4.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 12.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** En una copia del producto selecciona Base o crea una pieza auxiliar de apoyo de 130×90×2 mm, centro Z=-0.001 m si su cara superior toca Z=0. Nómbrala Apoyo Uso y aplica Scale. Crea material Gris Usado separado del plástico del cuerpo, con Metallic 0 y Roughness 0.5. Copia Base Color del material original con una variación muy pequeña, no negro puro. Compara con la misma pieza nueva Roughness 0.35. El apoyo se justifica porque contacta la mesa; no afirmes que la caja es vieja sólo por oscurecerla.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Dos detalles con causa, zona y efecto anotados; Material usado independiente; Forma y etiqueta siguen legibles.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 12.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Añade Noise y Color Ramp al material de apoyo para variación local suave de Roughness, por ejemplo rango 0.45–0.6. Usa coordenadas Object con escala aplicada y una frecuencia que produzca variaciones de unos pocos milímetros observados, no montañas. Si se usa Bump, mantén Distance 0.00002 y Strength 0.1 como ensayo tenue. Conserva la forma geométrica. No repitas el ruido intenso en la cara frontal de la etiqueta. Guarda semana12_uso.blend y anota causa, zona y efecto de cada detalle.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Dos detalles con causa, zona y efecto anotados; Material usado independiente; Forma y etiqueta siguen legibles.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 12.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Para segunda imperfección, elige una sola: ligera variación de Roughness en la tapa donde se manipula, o un pequeño cambio de material en su borde. Crea un slot de material adicional y asigna sólo caras seleccionadas si el modelo tiene región adecuada; no se exige pintar una máscara compleja. En Edit Mode Face selecciona la región, Material Properties elige el slot y Assign. Conserva valores moderados y revisa desde lejos que el producto siga pareciendo el mismo. Guarda antes/después con la misma vista; el ejercicio termina al justificar dos detalles, no al ensuciar todas las piezas.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Dos detalles con causa, zona y efecto anotados; Material usado independiente; Forma y etiqueta siguen legibles.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Comparación de superficie nueva y usada, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
