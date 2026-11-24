# 18.1.2 — Composición no destructiva y exportación

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

Una composición no destructiva conserva las fuentes y los ajustes como pasos editables. La salida final debe corresponder a la imagen revisada, no a una vista previa antigua. El nombre y ubicación del archivo evitan confundir pruebas con entregas.

## Caso resuelto

Caso resuelto: se usa la fotografía propia de una mesa como fondo opaco y Render Layers con Film Transparent como producto frontal. Alpha Over tiene Fac = 1: primera entrada Image para el fondo, segunda Image —inferior— para el producto. La salida va a Composite; Viewer permite inspeccionar esa misma salida. Si ambas imágenes se invierten, la fotografía tapa el producto. Se restaura el orden sin alterar materiales. El modo de alfa del archivo debe interpretarse correctamente; el compositor normaliza normalmente a premultiplicado. Convert Premultiplied queda desactivado salvo una rama convertida explícitamente a Straight. El halo se comprueba contra claro y oscuro.

## Procedimiento en Blender

1. Duplica la escena de nodos y comprueba que Image y Render Layers apuntan a los recursos correctos. Usa nombres legibles para saber qué versión se emplea.
2. Añade solo la corrección necesaria antes de Composite. Si usas Viewer para inspección, conecta allí la misma salida que deseas exportar.
3. Haz una prueba en resolución pequeña y comprueba el encuadre completo, no únicamente un recorte ampliado.
4. Guarda el resultado como PNG con un nombre de versión y evita sobrescribir la fotografía original. Verifica dimensiones y que la imagen corresponde al compuesto.
5. Cierra y vuelve a abrir el archivo guardado para confirmar el resultado. Guarda también el .blend para conservar nodos y fuentes.

## Qué debe observarse

Una imagen exportada que coincide con la composición evaluada y un archivo editable que permite modificarla sin rehacer todos los pasos.

## Error, diagnóstico y corrección

Si la exportación muestra el render sin fondo, puede que Composite siga conectado a Render Layers mientras observabas otra rama en Viewer. Revisa la conexión de salida, no solo el aspecto del visor.

## Prueba de comprensión

¿Por qué una vista correcta en Viewer no demuestra que la exportación final será igual?

**Respuesta razonada:** Porque Composite puede recibir una rama diferente. Hay que comprobar qué salida alimenta el nodo de resultado y revisar el archivo exportado.

## Evidencia y referencia

Conserva una comparación que muestre «Composición por capas recuperable». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/compositing/types/color/mix/alpha_over.html). [Fuentes del tema](../../REFERENCIAS.md).
