# 8.1.2 — Subdivisión y control de forma

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Subdivision Surface genera una superficie más suave a partir de una malla de control. Catmull-Clark subdivide y suaviza; Simple subdivide sin el mismo redondeo. Una caja sin bordes de soporte pierde sus esquinas al suavizarse. Los bucles próximos a un borde o las marcas de crease restringen esa transición. Más niveles no corrigen una mala distribución de caras. La superficie base debe permitir un recorrido claro de aristas, especialmente alrededor de cambios de forma.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

En una escena de ensayo añade Cube, Dimensions(0.08,0.04,0.02)m y Apply Scale. Añade Subdivision Surface con Catmull-Clark, Viewport Levels 1 y Render Levels 2. Observa cómo se redondea y reduce la silueta. Desactiva temporalmente el icono de monitor del modificador para comparar la malla original, y vuelve a activarlo. Guarda semana08_subdivision.blend. No apliques el modificador ni lo añadas a una pieza booleana compleja del producto para este primer ensayo: un cubo permite atribuir el resultado a la distribución de sus aristas.

## Sesión 5 — Comparación controlada

En Edit Mode elige Edge, selecciona todas las aristas y usa Shift+E,0.7, Enter para una crease de prueba. La marca indica cuánto resiste una arista la suavización; no es un radio de fabricación en milímetros. Compara con valor 0 y con 1 sobre una copia. Si necesitas comprobar los valores, usa Sidebar > Item de las aristas seleccionadas y busca Mean Crease. Conserva 0.7 para una transición moderada. Usa Shade Smooth para inspeccionar iluminación, recordando que el contorno lo define Subdivision y no el sombreado. Una pequeña malla puede producir una pieza útil para la tapa.

## Sesión 6 — Transferencia y comprobación

Crea otro cubo de ensayo. En Edit Mode usa Ctrl+R para un bucle central en una dirección y deslízalo hacia un extremo; añade otro hacia el contrario. Repite sólo si cabe en el tiempo para ver cómo los bucles próximos al extremo conservan forma con Subdivision. No se exige modelar una red completa de soportes en 20 minutos. Guarda comparacion_crease_bucle.blend y registra qué método es más fácil de modificar para el caso. Mantén Viewport Levels 1 o 2; niveles altos multiplican caras y pueden sobrecargar el equipo sin mejorar la comprensión.

## Ejemplo razonado

Caso resuelto: el cubo base 80×40×20 mm queda muy redondeado por Catmull-Clark. Una crease 0.7 preserva más los bordes, pero no demuestra un radio exacto. Si se necesita un radio medido en el producto, Bevel con Amount real puede ser más apropiado. Los bucles de soporte distribuyen geometría cerca de una transición; su separación controla cuánto puede suavizarse esa zona. Una cara N-Gon grande junto a un agujero booleano puede producir pinzamientos al subdividirse. Por eso se aprende sobre un cubo limpio antes de transferir la técnica a una pieza más compleja.

## Errores y recuperación

Si aparece un pinzamiento, mira la malla base: caras estiradas, polos y N-Gons pueden concentrar la transición. Si el equipo se vuelve lento, baja Levels antes de borrar el objeto. Si crease no actúa, confirma Edge seleccionado y valor de arista, no peso de bisel. Si la caja pierde medidas, recuerda que Subdivision altera la superficie evaluada: compara su contorno con el bloqueo. Si el resultado parece faceteado, inspecciona Shade Smooth después de verificar geometría.

## Decisiones y conexión con el siguiente paso

La suavidad útil depende de la forma y del destino. Una pieza de catálogo puede necesitar un contorno pulido sin miles de cortes innecesarios. Mantén una versión base legible y aplica modificadores sólo cuando la decisión esté cerrada. Antes de UV conviene decidir la geometría que recibirá la textura; grandes cambios posteriores pueden exigir volver a desplegar. El siguiente módulo abre esa superficie como una envoltura plana para ubicar imágenes y comprobar que los detalles no se estiran.

## Evidencia verificable

- Catmull-Clark comparado contra cubo original
- Crease 0,0.7 y 1 diferenciadas
- Viewport Levels limitado y base editable

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Subdivisión y control de forma](https://docs.blender.org/manual/en/4.5/modeling/modifiers/generate/subdivision_surface.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

