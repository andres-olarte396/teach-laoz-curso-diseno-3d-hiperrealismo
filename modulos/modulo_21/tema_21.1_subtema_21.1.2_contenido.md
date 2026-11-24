# 21.1.2 — Nitidez, grano y revisión por zonas

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

Una fotografía y un render pueden tener distinta nitidez, ruido y distribución tonal. La coherencia se evalúa a tamaño de entrega y en recortes. Añadir grano no corrige perspectiva ni luz: primero se resuelven esas causas y después la continuidad de textura de imagen.

## Caso resuelto

Caso resuelto: la mesa fotografiada es mate, pero el montaje incluye una copia invertida y nítida del producto como reflejo. Se elimina porque contradice el apoyo. Después se revisa color, contraste y nitidez; la etiqueta del render no debe ser exageradamente más nítida que elementos a profundidad semejante. La continuidad de ruido se evalúa al final, con perspectiva y contacto ya resueltos. El grano no tapa una cámara incorrecta. La revisión usa recortes de inspección de las imágenes existentes; no exige exportar nuevas entregas para cada zona.

## Procedimiento en Blender

1. Compara un borde del producto y uno del fondo a profundidad semejante. Observa si uno es mucho más nítido o presenta un halo.
2. Si hace falta, aplica una corrección moderada de nitidez o desenfoque al elemento correspondiente y revisa otra vez a tamaño final.
3. Observa el ruido o grano del fondo en una zona lisa. Mantén el render limpio durante el diagnóstico para no confundir ruido de muestreo con textura fotográfica.
4. Solo si la diferencia lo exige, aplica una cantidad pequeña de textura de imagen compatible. Evita hacer que el producto tenga ruido más grande que el fondo.
5. Revisa cinco zonas: apoyo, borde, etiqueta, alta luz y sombra. Escribe qué ya funciona y qué corregirías en la próxima versión.

## Qué debe observarse

Montaje coherente sin halos notorios, con detalle suficiente y una lista de revisión basada en zonas concretas.

## Error, diagnóstico y corrección

Si toda la imagen parece suave después de intentar ocultar el borde, recupera la copia anterior. Corrige alfa o máscara y ajusta nitidez de forma limitada, en lugar de destruir detalle globalmente.

## Prueba de comprensión

¿Qué debe corregirse antes de intentar igualar el grano de una fotografía?

**Respuesta razonada:** Perspectiva, escala, contacto, iluminación y bordes. El grano no resuelve incoherencias de geometría o luz.

## Evidencia y referencia

Conserva una comparación que muestre «Montaje revisado con recortes de control». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/compositing/introduction.html). [Fuentes del tema](../../REFERENCIAS.md).
