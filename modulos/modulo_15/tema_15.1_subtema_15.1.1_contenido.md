# 15.1.1 — Fondo continuo y separación

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

Un estudio de producto organiza fondo, apoyo y fuentes para presentar la forma. El fondo continuo elimina una esquina distraída; su geometría puede ser muy sencilla. El producto conserva dimensiones reales y se separa del fondo por diferencias de tono, iluminación o encuadre.

## Caso resuelto

Caso resuelto: una base metálica parece negra en el estudio aunque el metal está configurado correctamente. Se mantiene el material y se mueve una Area amplia hasta que su reflejo describe la curvatura. La base vuelve a ser legible sin cambiar su color. El fondo gris mate evita confundir un reflejo con un dibujo de fondo. Si la franja tapa una etiqueta, se cambia la posición o tamaño de la fuente antes de aumentar rugosidad: esa propiedad describe el material y no debe usarse como borrador de cualquier reflejo.

## Procedimiento en Blender

1. Duplica el proyecto y mantén cámara, unidades y producto. Crea una superficie de apoyo mayor que el encuadre.
2. Para un fondo sencillo usa un plano y construye una subida posterior con transición curva; también puedes usar un fondo liso sin esquina visible en cámara.
3. Da al fondo un material mate sin textura contrastante. No uses un valor extremadamente brillante que obligue a ocultar el producto con sobreexposición.
4. Ubica el producto separado del fondo y verifica desde la cámara que no aparece el límite de la geometría. Ajusta fondo o encuadre antes de añadir decoración.
5. Haz una prueba pequeña y revisa bordes claros contra fondo claro y bordes oscuros contra fondo oscuro. Corrige con posición de luz o tono del fondo.

## Qué debe observarse

Vista de catálogo sin esquina distractora ni bordes cortados accidentalmente. El producto se distingue y su apoyo permanece comprensible.

## Error, diagnóstico y corrección

Si ves una línea dura detrás del producto, puede ser la esquina del fondo o una sombra. Inspecciona la geometría con iluminación simple antes de suavizar materiales; no confundas un borde geométrico con ruido del render.

## Prueba de comprensión

¿Qué comprobarías si desaparece el contorno de una pieza blanca sobre fondo blanco?

**Respuesta razonada:** Revisaría contraste tonal y dirección de luz en el borde. Cambiaría una de esas variables y observaría el resultado; añadir textura al azar no recupera necesariamente el contorno.

## Evidencia y referencia

Conserva una comparación que muestre «Escena de catálogo preparada». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/lights/light_object.html). [Fuentes del tema](../../REFERENCIAS.md).
