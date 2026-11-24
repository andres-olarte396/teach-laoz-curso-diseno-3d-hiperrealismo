# Práctica elegible — Oclusión y continuidad de bordes

Se elige **una** variante; no se hacen las tres. La tercera sesión reserva 12 min de ejercicio y 5 min de corrección. Los resultados anteriores sirven de punto de inicio.

## Básica: reproducción guiada

Realiza una oclusión sencilla o explica por qué no es necesaria en el fondo vacío elegido. La evaluación incluye identificar una oclusión incorrecta en una comparación.

**Solución paso a paso:**

1. Elige un elemento sencillo de la foto que deba quedar delante del producto, como el borde de un pequeño objeto. Si el fondo está vacío, usa una comparación didáctica separada.
2. Abre Movie Clip Editor, carga la fotografía y cambia su modo de Tracking a Mask. Crea una máscara nueva con New; con Ctrl más clic izquierdo coloca los puntos alrededor del elemento que debe quedar delante y usa Mask > Toggle Cyclic, Alt+C, para cerrar la spline. Ajusta sus puntos al contorno.
3. En Compositing añade Input > Mask y elige esa máscara. Tras la mezcla inicial añade otro Alpha Over: la composición previa entra en la primera Image, la fotografía original en la segunda y Mask en Fac. La zona blanca debe recuperar el elemento frontal; si se invierte, corrige la máscara antes de continuar.
4. Comprueba que el producto no atraviese el elemento ni desaparezca en una zona que debería estar delante. Revisa también la relación de sus sombras.
5. Guarda un recorte ampliado y una vista general para demostrar que la solución funciona en ambos tamaños.

**Verificación:** Orden visual de profundidad coherente y borde de máscara integrado. La oclusión debe seguir la forma del elemento del fondo.

## Intermedia: diagnosticar un fallo

**Caso:** El producto atraviesa un objeto que debería estar delante. Recupera una copia, identifica la causa y realiza la corrección dentro del mismo producto.

**Solución:** Crea Mask sobre la foto; segundo Alpha Over recibe mezcla detrás y foto delante, con Mask en Fac; ajusta contorno.

## Avanzada: resolver una restricción

**Condición:** El fondo elegido no requiere oclusión. Sustituye la práctica guiada por esta comparación y conserva una evidencia del criterio.

**Solución orientativa:** No añadas una máscara artificial; demuestra con la composición vacía por qué nada cruza el producto y diagnostica aparte un caso de orden incorrecto.

No se puntúa por añadir objetos ni por la resolución máxima: el criterio es que la evidencia permita observar Orden visual de profundidad coherente y borde de máscara integrado. La oclusión debe seguir la forma del elemento del fondo.
