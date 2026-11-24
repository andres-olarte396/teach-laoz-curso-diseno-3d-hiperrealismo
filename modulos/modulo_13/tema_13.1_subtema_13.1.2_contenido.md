# 13.1.2 — Encuadre y profundidad de campo

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

El encuadre decide qué se ve y cuánto espacio recibe. Una vista de catálogo favorece legibilidad; una contextual muestra relación con entorno y uso. Depth of Field representa profundidad de campo: desenfoca distancias alejadas del plano de enfoque. Un f-stop bajo produce profundidad de campo menor en condiciones comparables. El desenfoque no convierte una imagen mediocre en hiperrealista si oculta el producto o etiqueta. Se usa después de fijar cámara, escala y foco.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Selecciona y activa Cam50 de la lección anterior. En Output Properties fija Resolution 1920×1080 y porcentaje 50 para pruebas. Mantén proporción 16:9. Busca un encuadre sin recortes: cuerpo y base visibles, etiqueta legible y margen. Como objetivo didáctico el producto puede ocupar 60% a 80% de la altura útil. Cambia distancia o focal deliberadamente y anota el valor. En Camera Data > Viewport Display activa Passepartout para oscurecer fuera del marco. Activa guía Thirds si facilita comparación, sin convertir esa regla en obligación. Renombra la cámara CamCatalogo y guarda su posición.

## Sesión 5 — Comparación controlada

Añade Empty > Plain Axes en(0,-0.0402,0.03)m, centro de etiqueta; nombre FocoEtiqueta. En Camera Data > Depth of Field activa la opción y asigna Focus Object a ese Empty. F-Stop 8 es el primer ensayo. Un valor menor como 2.8 reduce profundidad de campo en condiciones comparables. Guarda ambos estados para comparar después con iluminación. No se exige render final hoy. Si la previsualización es lenta, registra configuración y retoma la comprobación visual durante las prácticas de render; no declares que la imagen fue evaluada si sólo configuraste parámetros.

## Sesión 6 — Transferencia y comprobación

Duplica la cámara como CamContexto y actívala con Ctrl+Numpad 0; seleccionarla por sí sola no basta. Desde Viewport busca una vista oblicua donde se vea frente y tapa. Usa View > Align View > Align Active Camera to View, o Ctrl+Alt+Numpad 0. Confirma que moviste CamContexto y conservaste CamCatalogo. Comprueba márgenes, lectura de etiqueta y Focus Object. Guarda semana13_encuadres.blend. Escribe una frase sobre propósito de cada cámara y qué parte debe quedar enfocada. La prueba termina con dos encuadres registrados, no con un montaje que aún no estudiaste.

## Ejemplo razonado

Una toma de catálogo debe mostrar la función del producto. Cortar la base dificulta juzgar su apoyo; desenfocar letras reduce su utilidad. CamCatalogo conserva legibilidad. CamContexto puede mostrar más entorno, pero su zona principal también debe entenderse. Mover FocoEtiqueta cambia el plano de enfoque, por lo que su posición se protege y registra. F-Stop 8 es una prueba, no una receta universal. El resultado depende de tamaño, distancia y focal. Se decide comparando una imagen enfocada y otra con desenfoque bajo las mismas luces. Si todavía no se han generado, conserva ambas configuraciones para revisarlas después.

## Errores y recuperación

Si Depth of Field enfoca el fondo, revisa Focus Object y Location. Si una cámara modifica otra, revisa si comparten datos. Si Align mueve la equivocada, activa primero la copia. Si faltan márgenes, modifica el encuadre deliberadamente. Un modo de previsualización puede no evaluar desenfoque: registra los ajustes y compruébalos en render, sin afirmar un resultado no observado. Si la etiqueta queda borrosa, aumenta F-Stop o revisa foco antes de aumentar muestras.

## Decisiones y conexión con el siguiente paso

La composición puede resolverse con pocas acciones si tiene finalidad explícita. Al terminar hay dos cámaras, un foco controlado y decisiones de presentación. Las semanas siguientes desarrollan luces, motor y calidad de imagen. Mantener versiones permite revisar sin perder la cámara original. Distingue configuración de validación visual: la primera se audita mediante valores y conexiones; la segunda exige generar y comparar imágenes en Blender. El tiempo desatendido de render se adapta al equipo. Los clics, la observación y las correcciones quedan dentro de los 20 minutos de cada sesión.

## Evidencia verificable

- Catálogo sin recortes y etiqueta legible
- FocoEtiqueta colocado y asignado
- Dos cámaras guardadas con propósito diferente

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Encuadre y profundidad de campo](https://docs.blender.org/manual/en/4.5/render/cameras.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

