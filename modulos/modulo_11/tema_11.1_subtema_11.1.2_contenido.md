# 11.1.2 — Relieve, normal y respuesta a la luz

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Bump cambia la normal de sombreado a partir de una altura; Normal Map interpreta una dirección codificada en una imagen. Ambos pueden crear relieve aparente sin modificar la silueta. Displacement sí puede desplazar geometría cuando el flujo y motor lo admiten, pero no forma parte de la práctica inicial. Separar estas tres rutas evita conectar mapas incorrectamente o esperar un borde ondulado de un nodo que sólo cambia la iluminación de la superficie.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Abre el plástico de ensayo y añade Noise Texture, Bump y conserva Principled BSDF. Noise Fac se conecta a Bump Height; Bump Normal a Principled Normal. En Bump deja Strength 0.2 y Distance 0.0002 como ensayo inicial sobre un objeto medido. En Noise usa Scale 30 para observar cambios visibles al principio. Material Preview permite girar alrededor y observar cómo reaccionan reflejos. Guarda semana11_bump.blend. Si el efecto es demasiado grande, baja Distance; los valores no representan una medición del material, sólo una comparación pedagógica.

## Sesión 5 — Comparación controlada

Alterna Bump Strength 0 y 0.2 sin cambiar cámara, entorno o Roughness. Mira la superficie oblicua y luego la silueta desde Top. La iluminación cambia, el borde geométrico permanece. Prueba Invert en Bump y observa cómo cambia la percepción de alturas; devuelve el estado inicial. Un relieve pequeño puede perderse bajo luz frontal uniforme, por eso se revisa oblicuamente. No aumentes toda la fuerza para compensar la falta de contraste de iluminación. Desconectar Bump Normal también recupera el material base para una comparación limpia.

## Sesión 6 — Transferencia y comprobación

Crea una copia del material para dibujar la ruta alternativa: Image Texture con mapa normal de tangente verificado > Normal Map Color > Principled Normal; Image Texture debe usar Non-Color. No conectes la etiqueta LAOZ como si fuera un mapa normal ni inventes un resultado. Si no tienes un mapa normal propio, conserva sólo el diagrama y practica con Noise/Bump. Guarda la variante ejecutada y anota que la normal cambia la respuesta a luz, mientras el contorno sigue siendo el mismo. Empaqueta cualquier imagen real usada.

## Ejemplo razonado

Caso resuelto: una textura de grano en una esfera genera pequeñas luces y sombras aparentes mediante Bump. Al acercarse al borde, el contorno sigue perfectamente liso. Si el proyecto final necesita una grieta que rompa la silueta, habrá que modelarla o estudiar displacement, no subir Strength. Un mapa normal azul convencional contiene direcciones, no alturas; requiere su nodo Normal Map. Una textura gris de altura alimenta Height de Bump. Mezclar las rutas puede dar iluminación absurda aunque los nodos estén conectados y el archivo abra sin errores.

## Errores y recuperación

Si todo se tiñe azul, conectaste color de normal a Base Color. Si no ves efecto, comprueba Bump Normal conectado, Strength y luz oblicua. Si la superficie parece derretida, baja Distance y revisa escala de la textura. Si el borde no cambia, es esperado con Bump. Si el efecto se invierte respecto a la referencia, comprueba convención del mapa y no alteres geometría a ciegas.

## Decisiones y conexión con el siguiente paso

La respuesta a luz se evalúa bajo condiciones constantes. Las curvas del objeto, biseles y normales geométricas siguen siendo la base; Bump añade detalle aparente encima. Guardar el material liso permite revisar el aporte de cada capa. No es obligatorio descargar mapas para demostrar la competencia: una textura procedural produce una prueba reproducible. En el próximo módulo se ajusta la escala física del patrón para que el microdetalle no parezca una piel de naranja enorme sobre un producto pequeño.

## Evidencia verificable

- Noise Fac > Bump Height > Principled Normal
- Comparación Strength 0/0.2 con luz constante
- Silueta permanece igual y se explica

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Relieve, normal y respuesta a la luz](https://docs.blender.org/manual/en/4.5/render/shader_nodes/vector/bump.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

