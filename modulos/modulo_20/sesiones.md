# Sesiones — Semana 20: Sombras y oclusión del montaje

7 × 20 min = 140 min. Cada acción corresponde al presupuesto de estudio activo; el cálculo de render desatendido se realiza aparte.

|Día|Distribución|Acción concreta|
|---|---|---|
|1|6 explicar+12 practicar+2 registrar|En Cycles conserva el plano de apoyo y ajusta la fuente según las sombras observadas en la foto. Verifica la posición desde vista lateral y superior. Selecciona el plano y activa Shadow Catcher en Object Properties > Visibility cuando esté disponible para Cycles. El producto no debe recibir esa marca.|
|2|3 recuperar+14 practicar+3 comprobar|Activa Film Transparent para separar el fondo del mundo de la imagen, manteniendo su influencia lumínica cuando corresponda. Renderiza una prueba pequeña y compón sobre la foto. Revisa que la sombra apoye el producto y no se proyecte en dirección incompatible con las existentes.|
|3|3 preguntas+12 ejercicio+5 corregir|Comprueba en el compuesto que el plano ya no tapa la foto y que el contacto siga visible. En esta práctica usa la salida combinada del capturador; el pase Shadow Catcher separado se deja para una ampliación posterior y no es requisito. Integra una sombra de contacto y corrige su dirección usando una referencia de la fotografía. Básica evita superficies reflectantes; avanzada puede usar el pase por separado si lo necesita.|
|4|6 explicar+12 practicar+2 registrar|Elige un elemento sencillo de la foto que deba quedar delante del producto, como el borde de un pequeño objeto. Si el fondo está vacío, usa una comparación didáctica separada. Abre Movie Clip Editor, carga la fotografía y cambia su modo de Tracking a Mask. Crea una máscara nueva con New; con Ctrl más clic izquierdo coloca los puntos alrededor del elemento que debe quedar delante y usa Mask > Toggle Cyclic, Alt+C, para cerrar la spline. Ajusta sus puntos al contorno.|
|5|3 recuperar+14 practicar+3 comprobar|En Compositing añade Input > Mask y elige esa máscara. Tras la mezcla inicial añade otro Alpha Over: la composición previa entra en la primera Image, la fotografía original en la segunda y Mask en Fac. La zona blanca debe recuperar el elemento frontal; si se invierte, corrige la máscara antes de continuar. Comprueba que el producto no atraviese el elemento ni desaparezca en una zona que debería estar delante. Revisa también la relación de sus sombras.|
|6|3 preguntas+12 ejercicio+5 corregir|Guarda un recorte ampliado y una vista general para demostrar que la solución funciona en ambos tamaños. Realiza una oclusión sencilla o explica por qué no es necesaria en el fondo vacío elegido. La evaluación incluye identificar una oclusión incorrecta en una comparación.|
|7|3 recuperar+10 evaluar+5 corregir+2 registrar|Evaluar «Montaje con sombra y oclusión verificadas»,corregir un error y guardar registro|

Si no se termina una acción, conserva su estado y sustituye parte de la práctica de la siguiente sesión; no acumules tres rutas ni trabajo adicional silencioso.
