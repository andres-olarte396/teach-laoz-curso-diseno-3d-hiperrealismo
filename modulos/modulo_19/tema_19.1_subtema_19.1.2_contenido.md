# 19.1.2 — Coincidencia de cámara, escala y apoyo

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La coincidencia de cámara relaciona horizonte, convergencias, altura y tamaño del producto. Cambiar escala del objeto para compensar una cámara equivocada suele producir un montaje incoherente. Primero se ajusta la vista; después se comprueba el tamaño físico sobre el apoyo.

## Caso resuelto

Caso resuelto: la foto de una mesa muestra bastante superficie superior, mientras el producto renderizado se ve casi de frente. Aumentar su tamaño no corrige esa diferencia. Se eleva y orienta la cámara hasta que las direcciones del plano coincidan aproximadamente con la mesa, manteniendo dimensiones del producto. Después se comprueba escala con una medida real anotada al tomar la foto. La coincidencia es una aproximación documentada; sin información de cámara o medidas no se declara una calibración exacta. El fondo permanece sin deformación y conserva su proporción.

## Procedimiento en Blender

1. Configura en Output Properties la misma proporción de imagen que la fotografía. No cambies solo un lado de la imagen de fondo.
2. Usa la fotografía como fondo de cámara o referencia de composición. Añade un plano de apoyo y coloca el producto con sus dimensiones reales.
3. Ajusta posición, orientación y focal de la cámara para que las direcciones del plano 3D coincidan aproximadamente con las de la mesa fotografiada.
4. Comprueba altura de la cámara y cuánto se ve de la superficie superior del producto. Si ambas pistas contradicen el fondo, vuelve a ajustar la cámara.
5. Ajusta la posición del producto sobre la mesa y compara su tamaño con la medida conocida. Guarda una prueba sin sombras para evaluar solo perspectiva y escala.

## Qué debe observarse

Montaje inicial donde el apoyo y las orientaciones del producto son compatibles con las líneas de la fotografía. La escala se explica con una referencia.

## Error, diagnóstico y corrección

Si un producto parece inclinado o enorme, no lo deformes para encajarlo. Revisa focal, altura, orientación y referencia de medida, cambiando una variable por vez.

## Prueba de comprensión

¿Por qué no conviene escalar arbitrariamente el producto para corregir una perspectiva incorrecta?

**Respuesta razonada:** Porque el tamaño puede parecer aceptable mientras las caras y líneas siguen contradiciendo la cámara del fondo. Hay que resolver vista y escala como decisiones relacionadas, pero distintas.

## Evidencia y referencia

Conserva una comparación que muestre «Montaje inicial sobre una mesa». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/cameras.html). [Fuentes del tema](../../REFERENCIAS.md).
