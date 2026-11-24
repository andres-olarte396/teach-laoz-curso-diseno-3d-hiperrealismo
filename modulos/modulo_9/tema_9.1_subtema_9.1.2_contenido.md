# 9.1.2 — Distorsión y densidad de textura

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una cuadrícula de prueba revela distorsión UV. Cuadrados estirados indican que una dirección ocupa más imagen por unidad de superficie que otra. La densidad de textura expresa cuántos píxeles representan una longitud real; no basta con que una imagen tenga muchos píxeles si una cara recibe pocos de ellos. Dos componentes relacionados deberían usar densidades parecidas salvo una razón visual explícita. El control se hace con una cuadrícula y medidas, antes de cargar materiales elaborados.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Abre el cubo desplegado en UV Editing. En UV Editor, Image > New crea una imagen de 512×512, Generated Type UV Grid, nombre PruebaUV. Para verla en la superficie necesitas un material: en Shading selecciona el cubo y pulsa New. Añade Image Texture, elige PruebaUV y conecta Color a Base Color de Principled BSDF. El shader ya debe estar conectado a Material Output. Activa Material Preview en el Viewport. Una imagen abierta en UV Editor no se muestra automáticamente sobre la geometría. Guarda semana09_cuadricula.blend. La cuadrícula servirá como prueba, no como material final.

## Sesión 5 — Comparación controlada

Observa la cara frontal de 120×60 mm: los cuadros deben verse aproximadamente cuadrados. En UV Editor selecciona sólo su isla. S, X,2, Enter produce una deformación deliberada; mira cómo cambia el patrón y deshaz. Con todas las islas seleccionadas usa UV > Average Islands Scale y UV > Pack Islands. Compara otra vez sus tamaños de cuadros. Si ya tienes cuerpo y tapa desplegados, puedes compararlos en edición de varios objetos, pero no es obligatorio hacerlo en esta sesión. Conservar el cubo sencillo permite identificar una variable cada vez y terminar dentro de 20 minutos.

## Sesión 6 — Transferencia y comprobación

Identifica un borde de 120 mm y estima cuántas celdas ocupa. Registra densidad comparativa, no una medición certificada. Una etiqueta de 300 píxeles sobre 60 mm ofrece 5 píxeles/mm en su ancho si utiliza toda la imagen. Si la isla usa sólo la mitad de ese ancho, recibe menos píxeles. En los overlays del UV Editor activa Display Stretch cuando esté disponible para observar distorsión. Guarda la cuadrícula sin el estiramiento experimental. Comprueba la cara principal, anota qué cambió y conserva una captura propia o el archivo como evidencia.

## Ejemplo razonado

Dos tapas del mismo tamaño muestran cuadros grandes en una y pequeños en otra. Pueden compartir material, pero sus islas ocupan distintas áreas de la imagen. Hay que unificar densidad o justificar más detalle para una toma cercana. Una imagen 1024×1024 no garantiza nitidez si la isla principal ocupa un sector diminuto. Distorsión y densidad son preguntas independientes: muchos cuadros pueden estar estirados; pocos cuadros pueden conservar proporción. Para evaluar ambos aspectos, compara primero la forma de los cuadros y después cuántos corresponden a una longitud real. No ajustes el render antes de corregir esta relación.

## Errores y recuperación

Si el objeto está gris, comprueba Material Preview y conexión Image Texture. Si los cuadros se estiran, revisa Scale aplicada y proporción de la isla. Si la imagen se repite, observa UV fuera del rango y Extension Repeat del nodo. Si se mueven varias islas, deshaz y revisa selección. Si Pack cambia la distribución, compara otra vez la región de interés. Una UV deformada no se corrige descargando una imagen de mayor resolución.

## Decisiones y conexión con el siguiente paso

Revisar ahora evita intentar reparar las texturas durante el render. La evidencia exige una cuadrícula visible y una comparación controlada, además de costuras marcadas. En la siguiente semana colocarás una etiqueta con tamaño físico y usarás mapas de color y datos. Este archivo de prueba permite distinguir si una letra estirada proviene de la imagen, del mapa UV o del ángulo de cámara. Conservar la comparación dentro del proyecto deja una referencia para cambios de geometría posteriores. Si cambias medidas o añades grandes cortes, revisa otra vez el desplegado antes de continuar.

## Evidencia verificable

- UV Grid conectada a Base Color y visible
- Cuadros aproximadamente cuadrados en la cara frontal
- Deformación experimental deshecha y densidad comparada

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Distorsión y densidad de textura](https://docs.blender.org/manual/en/4.5/modeling/meshes/uv/editing.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

