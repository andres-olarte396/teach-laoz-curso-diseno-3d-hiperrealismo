# 12.1.2 — Desgaste e imperfecciones justificadas

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

El desgaste plausible tiene causas y ubicación: una base roza la mesa, un borde recibe golpes, una zona de agarre cambia brillo. Añadir manchas aleatorias a toda la superficie no demuestra uso. Se necesita una máscara que decida dónde actúa la variación y un efecto suficientemente leve para mantener la forma y material reconocibles. Para evitar una sesión de pintura compleja, esta práctica usa una pieza separada de apoyo y variaciones de material controladas. La textura pintada es una alternativa para quien ya domina el flujo.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

En una copia del producto selecciona Base o crea una pieza auxiliar de apoyo de 130×90×2 mm, centro Z=-0.001 m si su cara superior toca Z=0. Nómbrala Apoyo Uso y aplica Scale. Crea material Gris Usado separado del plástico del cuerpo, con Metallic 0 y Roughness 0.5. Copia Base Color del material original con una variación muy pequeña, no negro puro. Compara con la misma pieza nueva Roughness 0.35. El apoyo se justifica porque contacta la mesa; no afirmes que la caja es vieja sólo por oscurecerla.

## Sesión 5 — Comparación controlada

Añade Noise y Color Ramp al material de apoyo para variación local suave de Roughness, por ejemplo rango 0.45–0.6. Usa coordenadas Object con escala aplicada y una frecuencia que produzca variaciones de unos pocos milímetros observados, no montañas. Si se usa Bump, mantén Distance 0.00002 y Strength 0.1 como ensayo tenue. Conserva la forma geométrica. No repitas el ruido intenso en la cara frontal de la etiqueta. Guarda semana12_uso.blend y anota causa, zona y efecto de cada detalle.

## Sesión 6 — Transferencia y comprobación

Para segunda imperfección, elige una sola: ligera variación de Roughness en la tapa donde se manipula, o un pequeño cambio de material en su borde. Crea un slot de material adicional y asigna sólo caras seleccionadas si el modelo tiene región adecuada; no se exige pintar una máscara compleja. En Edit Mode Face selecciona la región, Material Properties elige el slot y Assign. Conserva valores moderados y revisa desde lejos que el producto siga pareciendo el mismo. Guarda antes/después con la misma vista; el ejercicio termina al justificar dos detalles, no al ensuciar todas las piezas.

## Ejemplo razonado

Caso resuelto: un organizador recién comprado puede tener micrograno de fabricación pero no golpes ni polvo. Tras uso frecuente, su apoyo puede cambiar de rugosidad y el área de agarre mostrar brillo distinto. Son historias diferentes. La variación 0.45–0.6 en el apoyo es una representación inicial, no una medición de envejecimiento. La forma principal debe seguir siendo reconocible y la etiqueta legible. Si un supuesto desgaste domina el contorno o añade relieve grueso, quizá represente daño físico que exige geometría, no sólo un material. Documentar causa ayuda a seleccionar la herramienta adecuada.

## Errores y recuperación

Si todos los materiales se modifican, duplica el datablock antes de editar. Si Assign colorea toda la pieza, revisa caras seleccionadas. Si la mancha parece agujero, reduce contraste y relieve. Si el detalle ocupa lugares sin contacto ni exposición, justifica otra causa o elimínalo. Si la base queda flotando, revisa su centro y media altura; la apariencia de desgaste no arregla el apoyo geométrico.

## Decisiones y conexión con el siguiente paso

Realismo no significa suciedad obligatoria. Un producto de catálogo puede mostrarse limpio y conservar imperfecciones de fabricación mínimas. La rúbrica valora coherencia de dos detalles con su uso, no cantidad de nodos. Guarda el estado nuevo para comparar y para adaptar la presentación final. En la siguiente semana cámara y composición cambian qué detalles se ven. Tendrás que revisar si este trabajo aporta a la imagen prevista o si consume recursos y distrae sin ser visible.

## Evidencia verificable

- Dos detalles con causa, zona y efecto anotados
- Material usado independiente
- Forma y etiqueta siguen legibles

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Desgaste e imperfecciones justificadas](https://docs.blender.org/manual/en/4.5/render/materials/assignment.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

