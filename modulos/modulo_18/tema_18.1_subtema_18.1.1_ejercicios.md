# Práctica elegible — Pases, máscaras y transparencia

Se elige **una** variante; no se hacen las tres. La tercera sesión reserva 12 min de ejercicio y 5 min de corrección. Los resultados anteriores sirven de punto de inicio.

## Básica: reproducción guiada

Construye una composición simple con un PNG de prueba y una fotografía propia. En esta sesión importa el flujo de capas; perspectiva y sombras se ajustan en las semanas siguientes.

**Solución paso a paso:**

1. En Compositing activa Use Nodes y localiza Render Layers y Composite. Añade un Viewer si necesitas inspeccionar la imagen durante el trabajo.
2. En Render Properties > Film activa Transparent y renderiza el producto de prueba. En Compositing añade Input > Image para cargar una fotografía propia de una mesa; conserva la proporción y resolución de esa foto en Output Properties.
3. Añade Color > Mix > Alpha Over, deja Fac en 1 y conecta Image de la fotografía a la primera entrada Image; conecta Image de Render Layers a la segunda entrada Image, la inferior. Conecta la salida Image de Alpha Over a Image de Composite y a Viewer.
4. Comprueba que Render Layers tenga alfa transparente. Si importas un PNG, configura Alpha Mode según cómo esté almacenado el archivo. El compositor trabaja normalmente con alfa premultiplicado: deja Convert Premultiplied desactivado salvo que una rama haya sido convertida explícitamente a Straight. No lo actives únicamente porque el PNG original sea Straight. Revisa halos sobre fondo claro y oscuro.
5. Guarda la escena con nodos organizados y nombres que describan render, fondo y mezcla. Comprueba una exportación de prueba fuera del editor.

**Verificación:** Composición con dos fuentes identificables y un producto transparente correctamente situado sobre el fondo. El fondo no sustituye el render por un error de orden.

## Intermedia: diagnosticar un fallo

**Caso:** La fotografía cubre el render porque las entradas se invirtieron. Recupera una copia, identifica la causa y realiza la corrección dentro del mismo producto.

**Solución:** Fondo a primera Image, render a segunda Image inferior, Fac1; salida a Composite/Viewer; comprueba transparencia.

## Avanzada: resolver una restricción

**Condición:** Compara la composición normal con una rama convertida explícitamente a Straight. Sustituye la práctica guiada por esta comparación y conserva una evidencia del criterio.

**Solución orientativa:** Interpreta correctamente Alpha Mode del archivo; el compositor usa premultiplicado normalmente. Si añades Alpha Convert hacia Straight en la rama frontal, activa Convert Premultiplied para esa rama; sin esa conversión déjalo desactivado. Verifica halos sin doble premultiplicación.

No se puntúa por añadir objetos ni por la resolución máxima: el criterio es que la evidencia permita observar Composición con dos fuentes identificables y un producto transparente correctamente situado sobre el fondo. El fondo no sustituye el render por un error de orden.
