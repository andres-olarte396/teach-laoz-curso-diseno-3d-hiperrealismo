# 4.1.2 — Vistas ortográficas y bloqueo

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una vista ortográfica elimina la reducción aparente por distancia: objetos iguales mantienen el mismo tamaño proyectado aunque estén a distintas profundidades. Es útil para verificar proporciones; una cámara perspectiva será necesaria después para imágenes naturales. El bloqueo reúne volúmenes grandes sin detalles. Construir primero caja, tapa y apoyo permite descubrir pronto relaciones equivocadas. Modelar tornillos antes de comprobar el ancho global hace más costoso corregir la forma. Aquí las medidas mandan y las fotografías orientan la interpretación.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Abre Bloque Referencia de la sesión anterior o crea uno con las medidas de ficha. Usa View > Viewpoint > Front y confirma Orthographic en la etiqueta de la vista. Si está en Perspective, View > Perspective/Orthographic o Numpad 5 alterna la proyección. En vista Front comprueba ancho 120 mm y alto 60 mm mediante N > Item, con objeto sin rotación. Right debe mostrar profundidad 80 mm y alto 60 mm; Top,120×80 mm. No agrandes el cubo para llenar la ventana: usa zoom de navegación, que no altera las dimensiones.

## Sesión 5 — Comparación controlada

Duplica el bloque y convierte la copia en Tapa Bloque mediante Dimensions (0.124,0.084,0.008)m. Aplica Scale. Sitúa Location=(0,0,0.064)m: la cara inferior toca la parte superior del bloque original a Z=0.06 m. Añade un cubo Base Bloque con Dimensions (0.13,0.09,0.01)m y centro Z=-0.005 m, de modo que su cara superior quede a Z=0. La base queda bajo el cuerpo. Asigna nombres en Outliner y deja materiales predeterminados. Anota el sobresaliente por lado: tapa 2 mm y base 5 mm en X e Y.

## Sesión 6 — Transferencia y comprobación

Inspecciona Front, Right y Top sin cambiar las piezas. Calcula error relativo para cada medida principal comparando Dimensions contra la ficha. Debe ser menor o igual 5%; con entradas exactas será aproximadamente cero. Toma una captura propia de dos vistas o guarda un breve registro numérico si prefieres no hacer capturas. Guarda semana04_bloqueo.blend. Si necesitas probar otra proporción, Save As una variante: no destruyas el bloqueo verificado. Observa si la tapa y base se distinguen por su silueta antes de añadir biseles o sombreado.

## Ejemplo razonado

Ejemplo: un bloqueo de cuerpo 118×80×60 mm tiene error de ancho|118-120|/120×100=1.67%, dentro del límite 5%. Una profundidad 90 mm frente a 80 mm tiene error 12.5% y exige corrección. Que la perspectiva parezca agradable no lo excusa. La tapa 124 mm sobre cuerpo 120 mm sobresale 2 mm por cada lado cuando están centrados. Si está desplazada X=3 mm, un lado sobresaldrá 5 mm y el otro entrará 1 mm respecto al cuerpo. Revisar Top revela esa asimetría de inmediato. Esta es una razón práctica para inspeccionar proyecciones distintas y no entregar solamente una vista oblicua.

## Errores y recuperación

Si la tapa flota, comprueba su centro y media altura. Si la base atraviesa el cuerpo, vuelve a Z=-0.005 m. Si el texto dice Perspective, cambia la proyección antes de comparar razones. Si una pieza parece mayor después de girarla, distingue apariencia proyectada de Dimensions, que mide su caja local. Si los contornos coinciden y no distingues piezas, revisa sus diferencias numéricas: el contraste de material todavía no forma parte de este ejercicio.

## Decisiones y conexión con el siguiente paso

El bloqueo no es un producto terminado. Su función es confirmar el presupuesto de tamaños y la relación de piezas. Mantenerlo simple deja capacidad de revisar decisiones en 20 minutos. En el siguiente módulo abrirás la caja mediante extrusión e inserción y separarás componentes. Guarda la versión actual porque servirá como referencia de dimensiones después de editar. Las imágenes de referencia son recursos de trabajo; si se añaden a Blender como Reference, no aparecen automáticamente en el render final ni sustituyen la geometría del producto.

## Evidencia verificable

- Tres vistas ortográficas verificadas
- Cuerpo 120×80×60 mm y tapa 124×84×8 mm
- Errores calculados y menores 5%

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Vistas ortográficas y bloqueo](https://docs.blender.org/manual/en/4.5/editors/3dview/navigate/projections.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

