# Diario — Semana 11: Materiales PBR

Cada sesión dura exactamente 20 minutos. Las esperas de descarga y render se registran aparte; las acciones de preparación están dentro del bloque. Si una espera interrumpe la tarea, guarda y retoma sustituyendo práctica.

## Día 1 — 11.1.1: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** En una copia del producto o una escena de ensayo crea dos UV Sphere de diámetro 60 mm, separadas 100 mm entre centros; aplica Scale y Shade Smooth. En Shading crea material Plastico Azul para la primera. Principled BSDF: Base Color azul moderado, Metallic 0, Roughness 0.35. Mantén sus otras propiedades predeterminadas; anota los tres valores. Activa Material Preview con un entorno de estudio y conserva ese entorno durante toda la comparación. Guarda semana11_materiales.blend. La esfera es una prueba de material, no el producto que debes rehacer.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Materiales independientes para plástico y metal; Metallic 0 frente a 1 comparado con luz constante; Roughness 0.2 y 0.6 diferenciadas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 2 — 11.1.1: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Para la segunda esfera crea un material independiente, no un duplicado enlazado del primero. Material Properties > New o copia el material y cambia su nombre a Metal Neutro. Base Color gris claro sin llegar a blanco puro, Metallic 1, Roughness 0.2. Observa reflejos del entorno. Cambia temporalmente Roughness a 0.6 y compara tamaño y nitidez de reflejos; deshaz o devuelve 0.2. Cambia Metallic a 0 y compara, después vuelve a 1. Cambia una variable cada vez. Una captura propia antes/después o una tabla de observaciones permite atribuir las diferencias.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Materiales independientes para plástico y metal; Metallic 0 frente a 1 comparado con luz constante; Roughness 0.2 y 0.6 diferenciadas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 3 — 11.1.1: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Asigna un material plástico coherente al cuerpo y uno distinto a una pieza auxiliar si el diseño requiere metal. No hagas metálica toda la caja sólo porque parece más atractiva. Conserva valores razonados y la misma iluminación de prueba. Guarda semana11_producto_material.blend y escribe dos frases: qué parte es conductora y qué detalle visual apoya la elección; qué parte es dieléctrica y cómo cambia su reflejo. No se exige un render final aquí: Material Preview permite revisar la respuesta antes de estudiar iluminación formalmente.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Materiales independientes para plástico y metal; Metallic 0 frente a 1 comparado con luz constante; Roughness 0.2 y 0.6 diferenciadas.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 4 — 11.1.2: construir

- 6 min lectura selectiva y demostración
- 12 min práctica
- 2 min registrar y guardar

**Acción concreta:** Abre el plástico de ensayo y añade Noise Texture, Bump y conserva Principled BSDF. Noise Fac se conecta a Bump Height; Bump Normal a Principled Normal. En Bump deja Strength 0.2 y Distance 0.0002 como ensayo inicial sobre un objeto medido. En Noise usa Scale 30 para observar cambios visibles al principio. Material Preview permite girar alrededor y observar cómo reaccionan reflejos. Guarda semana11_bump.blend. Si el efecto es demasiado grande, baja Distance; los valores no representan una medición del material, sólo una comparación pedagógica.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Noise Fac > Bump Height > Principled Normal; Comparación Strength 0/0.2 con luz constante; Silueta permanece igual y se explica.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 5 — 11.1.2: comparar

- 3 min recuperar
- 14 min práctica y comparación
- 3 min comprobar y guardar

**Acción concreta:** Alterna Bump Strength 0 y 0.2 sin cambiar cámara, entorno o Roughness. Mira la superficie oblicua y luego la silueta desde Top. La iluminación cambia, el borde geométrico permanece. Prueba Invert en Bump y observa cómo cambia la percepción de alturas; devuelve el estado inicial. Un relieve pequeño puede perderse bajo luz frontal uniforme, por eso se revisa oblicuamente. No aumentes toda la fuerza para compensar la falta de contraste de iluminación. Desconectar Bump Normal también recupera el material base para una comparación limpia.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Noise Fac > Bump Height > Principled Normal; Comparación Strength 0/0.2 con luz constante; Silueta permanece igual y se explica.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 6 — 11.1.2: transferir

- 3 min preguntas de control
- 12 min variante elegida
- 5 min comprobar, corregir y guardar

**Acción concreta:** Crea una copia del material para dibujar la ruta alternativa: Image Texture con mapa normal de tangente verificado > Normal Map Color > Principled Normal; Image Texture debe usar Non-Color. No conectes la etiqueta LAOZ como si fuera un mapa normal ni inventes un resultado. Si no tienes un mapa normal propio, conserva sólo el diagrama y practica con Noise/Bump. Guarda la variante ejecutada y anota que la normal cambia la respuesta a luz, mientras el contorno sigue siendo el mismo. Empaqueta cualquier imagen real usada.

**Salida:** Avance guardado de la acción de hoy; al cerrar el subtema se comprueba: Noise Fac > Bump Height > Principled Normal; Comparación Strength 0/0.2 con luz constante; Silueta permanece igual y se explica.

**Si falla:** corrige una causa y guarda el estado. Si requiere más tiempo, sustituye la práctica de recuperación siguiente.

## Día 7 — Evaluar y corregir

- 3 min recuperar los conceptos y responder las preguntas breves.
- 10 min abrir el archivo y demostrar ambos resultados.
- 5 min revisar el solucionario y corregir un fallo.
- 2 min registrar y guardar la versión.

**Salida:** Comparativa de dos materiales, con anotación de un logro y una corrección.

**Presupuesto semanal:** explicación 12 min, recuperación/preguntas 15 min, práctica/evaluación 86 min, comprobación/corrección/registro 27 min = 140 min. La rúbrica se usa dentro de estos minutos.
