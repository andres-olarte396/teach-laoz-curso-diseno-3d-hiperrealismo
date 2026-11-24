# Práctica elegible — Composición no destructiva y exportación

Se elige **una** variante; no se hacen las tres. La tercera sesión reserva 12 min de ejercicio y 5 min de corrección. Los resultados anteriores sirven de punto de inicio.

## Básica: reproducción guiada

Cambia una decisión de composición, exporta una segunda versión y compara ambas. Demuestra que la fuente original permanece disponible y que el cambio se puede revertir.

**Solución paso a paso:**

1. Duplica la escena de nodos y comprueba que Image y Render Layers apuntan a los recursos correctos. Usa nombres legibles para saber qué versión se emplea.
2. Añade solo la corrección necesaria antes de Composite. Si usas Viewer para inspección, conecta allí la misma salida que deseas exportar.
3. Haz una prueba en resolución pequeña y comprueba el encuadre completo, no únicamente un recorte ampliado.
4. Guarda el resultado como PNG con un nombre de versión y evita sobrescribir la fotografía original. Verifica dimensiones y que la imagen corresponde al compuesto.
5. Cierra y vuelve a abrir el archivo guardado para confirmar el resultado. Guarda también el .blend para conservar nodos y fuentes.

**Verificación:** Una imagen exportada que coincide con la composición evaluada y un archivo editable que permite modificarla sin rehacer todos los pasos.

## Intermedia: diagnosticar un fallo

**Caso:** Viewer muestra el montaje pero Composite exporta solo el render. Recupera una copia, identifica la causa y realiza la corrección dentro del mismo producto.

**Solución:** Conecta la misma salida mezclada a Composite y Viewer; exporta y reabre el resultado.

## Avanzada: resolver una restricción

**Condición:** Recupera una versión anterior de composición. Sustituye la práctica guiada por esta comparación y conserva una evidencia del criterio.

**Solución orientativa:** Conserva fuentes y nodos, cambia una decisión y guarda dos versiones identificadas; demuestra reversibilidad.

No se puntúa por añadir objetos ni por la resolución máxima: el criterio es que la evidencia permita observar Una imagen exportada que coincide con la composición evaluada y un archivo editable que permite modificarla sin rehacer todos los pasos.
