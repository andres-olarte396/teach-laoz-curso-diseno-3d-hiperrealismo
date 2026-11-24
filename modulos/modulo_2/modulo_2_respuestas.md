# Solucionario — Semana 2: Transformaciones y medidas

## Pregunta 1

No. La orientación local gira con la pieza. En este caso X local apunta hacia Y global positivo.

**Por qué falla la confusión habitual:** Si G desplaza la vista y no el objeto, confirma puntero y mapa de teclas. Si el eje parece incorrecto, vuelve a Global y revisa Rotation. Si has movido sólo una esquina, estabas en Edit Mode con una selección parcial; deshaz y usa Object Mode. Si una duplicación quedó superpuesta, lee los nombres en Outliner y fija Location antes de duplicar otra vez. No borres elementos sin verificar cuál es el activo.

## Pregunta 2

No. Las unidades afectan la representación de medidas; hay que redimensionar la geometría deliberadamente y comprobar Dimensions.

**Por qué falla la confusión habitual:** Si el bisel futuro sale desigual, revisa Scale no aplicada. Si la pieza cambia de sitio al rotarla, el pivote puede estar en 3D Cursor. Si escribes 20 pensando en centímetros con escena en metros, obtendrás 20 m: usa 0.20 m o escribe 20 cm explícitamente. Si aplicar Scale modifica un conjunto de dependencias complejo, trabaja primero sobre una copia; aquí los objetos aún son simples. Si Location Z es igual al alto total, la pieza puede estar flotando.

## Pregunta 3 — Demostración

**Subtema 1:** Centro, Este y Norte conservan sus tres posiciones; Diferenciar desplazamiento relativo G y posición absoluta Location; Demostrar dos direcciones distintas para X global y X local rotado. Recuperación: Si G desplaza la vista y no el objeto, confirma puntero y mapa de teclas. Si el eje parece incorrecto, vuelve a Global y revisa Rotation. Si has movido sólo una esquina, estabas en Edit Mode con una selección parcial; deshaz y usa Object Mode. Si una duplicación quedó superpuesta, lee los nombres en Outliner y fija Location antes de duplicar otra vez. No borres elementos sin verificar cuál es el activo.

**Subtema 2:** Scene Metric con Unit Scale 1; Base 0.20×0.10×0.04 m y Scale uno; Tapa apoyada: centro Z=0.045 m. Recuperación: Si el bisel futuro sale desigual, revisa Scale no aplicada. Si la pieza cambia de sitio al rotarla, el pivote puede estar en 3D Cursor. Si escribes 20 pensando en centímetros con escena en metros, obtendrás 20 m: usa 0.20 m o escribe 20 cm explícitamente. Si aplicar Scale modifica un conjunto de dependencias complejo, trabaja primero sobre una copia; aquí los objetos aún son simples. Si Location Z es igual al alto total, la pieza puede estar flotando.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
