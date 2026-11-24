# Práctica elegible — Corrección de color y contraste

Se elige **una** variante; no se hacen las tres. La tercera sesión reserva 12 min de ejercicio y 5 min de corrección. Los resultados anteriores sirven de punto de inicio.

## Básica: reproducción guiada

Corrige un único problema tonal y entrega antes/después con explicación. La avanzada puede delimitar una corrección local, sin sumar varios efectos obligatorios.

**Solución paso a paso:**

1. Abre Compositing, activa Use Nodes y conserva la conexión de Render Layers hacia Composite. Guarda una versión antes de añadir nodos.
2. Inserta un nodo de corrección sencillo, por ejemplo RGB Curves, entre el origen de imagen y la salida. Haz un cambio pequeño y compara con la imagen original.
3. Observa etiqueta, superficie y fondo por separado. Si solo una zona necesita ajuste, no cambies toda la imagen de forma agresiva.
4. Reduce el cambio cuando desaparezca relieve o textura. Evita curvas extremas que conviertan sombras en bloques sin información.
5. Anota el propósito de la corrección y exporta una prueba. Mantén accesible la versión sin corrección para comparar bajo la misma gestión de color.

**Verificación:** Corrección moderada, reversible y explicada mediante un defecto concreto. La textura del producto continúa visible.

## Intermedia: diagnosticar un fallo

**Caso:** Una curva aumenta contraste pero borra microtextura. Recupera una copia, identifica la causa y realiza la corrección dentro del mismo producto.

**Solución:** Reduce la modificación y verifica textura, etiqueta y sombra antes/después.

## Avanzada: resolver una restricción

**Condición:** Corrige una región sin alterar el fondo. Sustituye la práctica guiada por esta comparación y conserva una evidencia del criterio.

**Solución orientativa:** Usa una máscara delimitada o una rama separada de composición; conserva el fondo y muestra la zona corregida.

No se puntúa por añadir objetos ni por la resolución máxima: el criterio es que la evidencia permita observar Corrección moderada, reversible y explicada mediante un defecto concreto. La textura del producto continúa visible.
