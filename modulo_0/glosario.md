# Glosario y conceptos previos

Lee cada entrada cuando aparezca por primera vez. Estas lecturas sustituyen parte de la explicación diaria; no forman un bloque adicional. El orden expresa dependencias: manejo básico → espacio → geometría → imagen.

| Concepto | Definición sencilla | Para qué sirve / ejemplo | Importancia |
|---|---|---|---|
| Archivo y versión | Un archivo guarda un estado; una versión conserva una etapa. | Volver a una escena anterior sin reconstruirla. | 10/10 |
| Número negativo | Cantidad situada al otro lado de cero según un sentido elegido. | Moverse hacia X negativo no hace el objeto “menos real”. | 9/10 |
| Unidad | Referencia con la que se mide una longitud. | Especificar metros o centímetros antes de comparar tamaños. | 9/10 |
| Punto | Posición ideal sin tamaño. | Localizar una esquina mediante (X,Y,Z). | 10/10 |
| Eje y origen | Tres direcciones de referencia; el origen es (0,0,0). | Describir dónde está una pieza. | 10/10 |
| Coordenada | Valor de posición en cada eje. | (2,−1,3) son tres valores, no una longitud única. | 10/10 |
| Vector | Desplazamiento con dirección y longitud. | Pasar de A a B; posición y desplazamiento cumplen papeles distintos. | 8/10 |
| Vista / cámara | La vista ayuda a trabajar; la cámara define un encuadre para renderizar. | Orbitar no necesariamente cambia la cámara final. | 10/10 |
| Perspectiva | Proyección en la que lo lejano parece menor. | Mostrar profundidad; ortográfica conserva tamaño frente a distancia. | 8/10 |
| Objeto | Elemento de la escena con transformación y datos asociados. | Una silla puede ser un objeto con una malla. | 10/10 |
| Malla | Geometría formada por vértices, aristas y caras. | Editar una esquina sin mover todo el objeto. | 10/10 |
| Vértice / arista / cara | Punto geométrico / conexión / superficie delimitada. | Construir forma; un vértice aislado no produce una superficie visible en un render normal. | 10/10 |
| Transformación | Cambiar posición, rotación o escala. | Mover una caja y luego girarla son decisiones distintas. | 10/10 |
| Normal | Dirección perpendicular a una superficie local. | Interpretar sombreado y orientación de caras. | 8/10 |
| Topología | Organización y conexión de la geometría. | Un contorno correcto puede tener conexiones problemáticas. | 8/10 |
| Modificador | Operación configurada sobre un objeto que puede conservarse editable. | Ajustar bisel sin rehacer cada arista. | 8/10 |
| UV | Coordenadas 2D usadas para colocar una textura en una superficie. | Ubicar una etiqueta sin deformarla. | 8/10 |
| Material / textura | Reglas de respuesta visual / información que modula esas reglas. | Rugosidad y color son propiedades diferentes. | 10/10 |
| Rugosidad | Parámetro relacionado con la distribución microscópica de orientaciones. | Cambiar la nitidez del reflejo; no equivale a suciedad. | 9/10 |
| Luz / exposición | Iluminación de la escena / ajuste de presentación de la imagen. | Una imagen clara no prueba que la luz esté bien colocada. | 9/10 |
| Render | Cálculo de una imagen a partir de escena, cámara y configuración. | Separar trabajo activo del tiempo automático. | 10/10 |
| Muestra / ruido | Una contribución estimada / variación visible de una estimación incompleta. | Evaluar muestreo; más muestras no corrigen geometría equivocada. | 8/10 |
| Composición / compositing | Organización visual / tratamiento y combinación de imágenes o pases. | Elegir encuadre y después integrar una fotografía son etapas diferentes. | 8/10 |

## Lección de nivelación

Pon una taza sobre una mesa. Imagina el centro de la mesa como origen y tres ejes perpendiculares. Describe dónde está la taza, mueve solo su altura y observa desde el lado opuesto: cambiar posición y cambiar punto de vista son operaciones distintas. Después describe su forma, su material y la luz. En Blender trabajarás esas capas por separado y las reunirás al renderizar.

Actividad de recuperación: coloca un punto en la [simulación](../simulaciones/coordenadas-perspectiva.html), cambia únicamente Z y explica el resultado. Luego cambia la distancia de cámara sin tocar el punto. Esta actividad sustituye un ejercicio inicial si el diagnóstico señaló dificultad espacial.
