# 10.1.1 — Escala, orientación y etiqueta

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una etiqueta tiene posición, orientación y tamaño físico además de píxeles. Colocarla sobre un plano ligeramente separado de la pared ofrece un ejercicio claro sin exigir cubrir todo el producto con un mapa complejo. El plano requiere UV y un material con Image Texture. La imagen propia LAOZ incluida en material mide 300×150 píxeles, proporción 2:1. Un plano 60×30 mm conserva esa proporción. La tipografía permite detectar inversiones, giros y estiramientos con más facilidad que una textura uniforme.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Abre el producto con cuerpo 120×80×60 mm centrado en X/Y. Lleva el Cursor 3D al origen y añade Mesh > Plane. Antes de girarlo, fija Dimensions X=0.06 m, Y=0.03 m y aplica Scale. Después R, X,90, Enter orienta su normal hacia Y negativo. Location=(0,-0.0402,0.03)m lo coloca 0.2 mm delante de la pared frontal Y=-40 mm. Renombra Etiqueta. Mantén el cuerpo en sus medidas originales. El plano es una lámina para visualización: no demuestra por sí mismo espesor de adhesivo ni un procedimiento industrial. Guarda antes de añadir el material.

## Sesión 2 — Comparación controlada

En Shading selecciona Etiqueta y crea material PapelEtiqueta. Añade Image Texture; Open material/etiqueta-laoz.png. Conecta Color a Base Color de Principled BSDF. Usa Material Preview. El plano recién creado tiene UV básica; si se modificó, Edit Mode, A y U > Reset sobre su única cara restaura una región completa. La etiqueta debe ser legible desde el frente, en Y negativo. Usa View > Viewpoint > Front para comprobar orientación. Si el texto está invertido, inspecciona UV y el lado observado antes de modificar las normales de todo el producto.

## Sesión 3 — Transferencia y comprobación

En UV Editing selecciona los cuatro vértices UV de la cara. R,90, Enter gira el texto sin girar el plano; observa y deshaz. S, X,2, Enter cambia proporción del mapa; observa y deshaz. Guarda semana10_etiqueta.blend con texto horizontal y dimensiones 60×30 mm. File > External Data > Pack Resources incluye la imagen; guarda otra vez. Conserva también la PNG original en material. Reabre la escena para confirmar que sigue visible. Esta recuperación sustituye una prueba adicional: no se añaden minutos fuera del bloque para repetir todas las variantes.

## Ejemplo razonado

La imagen 300×150 sobre un plano 60×30 mm usa 5 píxeles/mm en ambas direcciones. Sobre un plano 60×60 mm se estiraría si llena toda la superficie. Corrige proporción de plano o distribución UV según el diseño; no escondas el defecto con una cámara distinta. La separación 0.2 mm evita superficies exactamente coplanares y su parpadeo conocido como z-fighting. Es pequeña respecto al cuerpo de 60 mm, pero una toma de perfil muy cercana podría requerir otra técnica. Este primer ejercicio frontal verifica ubicación, lectura y medida. No afirma que la lámina sea una simulación físicamente completa de papel pegado.

## Errores y recuperación

Si parpadea, comprueba separación. Si está rosa, corrige la ruta de imagen y empaqueta recursos. Si el texto se deforma, revisa proporción 2:1 y UV. Si el plano cubre la escena, revisa unidades. Si flota, usa una separación pequeña y positiva. Si las letras están invertidas, comprueba el lado observado antes de girar o reflejar UV. La imagen es material didáctico propio y no requiere recursos externos.

## Decisiones y conexión con el siguiente paso

Usa la misma imagen para las rutas alternativas y compara tamaño y orientación. La siguiente lección distingue una imagen de color de un mapa de datos; la etiqueta pertenece al primer grupo. Guardar recursos dentro del proyecto permite moverlo y recuperar materiales. Una captura no conserva el tamaño físico ni las conexiones del shader. La evidencia es la escena editable con recursos empaquetados, etiqueta legible y datos métricos verificables. Si sólo cambias el encuadre, conserva los parámetros de la lámina para saber que la apariencia procede de cámara y no de una alteración del diseño.

## Evidencia verificable

- Plano Etiqueta de 60×30 mm con orientación legible
- Image Texture sRGB conectada a Base Color
- PNG empaquetada y separación 0.2 mm

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Escala, orientación y etiqueta](https://docs.blender.org/manual/en/4.5/render/shader_nodes/textures/image.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

