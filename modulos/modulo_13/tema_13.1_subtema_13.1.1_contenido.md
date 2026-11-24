# 13.1.1 — Perspectiva, focal y posición

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

La perspectiva depende de la posición de la cámara respecto a los objetos. La distancia focal modifica el campo de visión y, si se mantiene encuadre cambiando distancia, produce otra relación aparente de profundidades. Cambiar focal sin mover cámara recorta o amplía la vista pero no cambia esa relación espacial por sí solo. Una cámara ortográfica elimina convergencia por profundidad; sirve para comprobaciones pero no siempre para una fotografía de producto natural. El objetivo es comparar dos decisiones con valores reproducibles.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Abre el producto y añade Camera si no existe. Usa una cámara sin padre ni restricciones; fija Location=(0,-0.35,0.03)m y Rotation=(90°,0°,0°). La cámara mira por su eje local-Z hacia Y positivo, con Z global hacia arriba. Object Data > Lens, Type Perspective, Focal Length 50 mm y Clip Start 0.001 m para el objeto pequeño. Numpad 0 o View > Cameras > Active Camera muestra su vista. El cuerpo centrado Z=0.03 m debe verse frontal. Si otra cámara estaba activa, selecciona la nueva y Ctrl+Numpad 0 la hace activa. Guarda semana13_camara.blend. Renombra esta cámara Cam50 para encontrarla en la próxima lección.

## Sesión 2 — Comparación controlada

Duplica la cámara como Cam35 y fija focal 35 mm. Para conservar un encuadre parecido al de 50 mm mueve su Y a aproximadamente-0.245 m: distancia proporcional 35/50 para un objeto alrededor del centro. La aproximación sirve para comparar, no garantiza mismo encuadre de todas las piezas porque tienen profundidad. Activa cada cámara y observa tapa, cuerpo y base. La más cercana exagera diferencias entre elementos próximos y lejanos. Registra focal y distancia, no atribuyas el cambio solamente a un número de Lens.

## Sesión 3 — Transferencia y comprobación

Crea una variante CamOrtho con Type Orthographic y Orthographic Scale 0.18 m como escala de encuadre inicial. Sitúala en la misma dirección frontal. Compara contorno y ausencia de convergencia frente a Perspective. Elige una de las perspectivas para presentación y conserva ortográfica como comprobación. No necesitas render todavía; la vista de cámara permite comparar. Guarda semana13_focales.blend y anota qué opción conserva mejor proporciones de catálogo y cuál enfatiza profundidad. La siguiente sesión trabaja márgenes y foco.

## Ejemplo razonado

Ejemplo: a 350 mm del centro y 50 mm de focal, la cámara muestra un producto de 120 mm con margen razonable. Con 35 mm sin moverla, aparece más entorno. Con 35 mm acercada a 245 mm vuelve a llenar más el encuadre, pero la cámara cercana acentúa diferencias de profundidad. Por eso decir “el gran angular deforma” sin mencionar posición es incompleto. En una toma frontal de una superficie plana la diferencia puede ser sutil; una caja con tapa y base permite inspeccionar partes a varias distancias. Una vista ortográfica conserva relaciones de tamaño independientemente de profundidad.

## Errores y recuperación

Si no ves el objeto, comprueba orientación de cámara y activa correcta. Si se recorta parte cercana, baja Clip Start razonablemente para objeto métrico; no uses valores extremos sin necesidad. Si cambiar Lens no altera perspectiva relativa, es esperado mientras cámara no se mueve. Si Orbit parece mover la cámara accidentalmente, revisa N > View > Lock Camera To View y desactívalo al finalizar la composición.

## Decisiones y conexión con el siguiente paso

Una cámara reproducible requiere posición, orientación, focal, formato y estado de proyección. Guardar sólo captura no permite reconstruirlos. Aquí el frente controlado evita enseñar navegación de cámara y composición a la vez. La exploración oblicua se realizará después de dominar la vista activa. Esta comparación también prepara el montaje fotográfico: coincidir campo de visión no basta si el punto de vista no corresponde a la foto. Los parámetros se interpretan como sistema y se contrastan con referencias visuales.

## Evidencia verificable

- Cámara Perspective activa y valores registrados
- 50 mm/350 mm comparada con 35 mm/245 mm
- Ortográfica distinguida de Perspectiva

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

[Comparar proyecciones en la simulación offline](../../simulaciones/coordenadas-perspectiva.html).

## Referencia técnica

[Manual Blender 4.5 LTS: Perspectiva, focal y posición](https://docs.blender.org/manual/en/4.5/render/cameras.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

