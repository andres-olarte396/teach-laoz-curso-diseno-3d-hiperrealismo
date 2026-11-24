# Solucionario — Semana 8: Curvas y superficies

## Pregunta 1

Aproximadamente 6 mm con perfil circular y escala uniforme: Depth funciona como radio.

**Por qué falla la confusión habitual:** Si la curva es una línea sin volumen, Bevel Depth sigue en cero. Si el extremo está abierto, comprueba Fill Caps. Si el grosor varía o sección es ovalada, revisa Scale. Si al mover un punto aparecen giros inesperados, inspecciona Top y Front y usa coordenadas. Si Convert elimina la edición de manejadores, era su efecto esperado: vuelve a la versión curva para modificar el diseño, no intentes reconstruir todos los manejadores desde la malla.

## Pregunta 2

No. Generan más geometría desde la misma distribución base; debes revisar la topología y soportes.

**Por qué falla la confusión habitual:** Si aparece un pinzamiento, mira la malla base: caras estiradas, polos y N-Gons pueden concentrar la transición. Si el equipo se vuelve lento, baja Levels antes de borrar el objeto. Si crease no actúa, confirma Edge seleccionado y valor de arista, no peso de bisel. Si la caja pierde medidas, recuerda que Subdivision altera la superficie evaluada: compara su contorno con el bloqueo. Si el resultado parece faceteado, inspecciona Shade Smooth después de verificar geometría.

## Pregunta 3 — Demostración

**Subtema 1:** Curva 3D con Depth 3 mm y Fill Caps; Recorrido comprobado en dos vistas; Curva original conservada antes de Convert. Recuperación: Si la curva es una línea sin volumen, Bevel Depth sigue en cero. Si el extremo está abierto, comprueba Fill Caps. Si el grosor varía o sección es ovalada, revisa Scale. Si al mover un punto aparecen giros inesperados, inspecciona Top y Front y usa coordenadas. Si Convert elimina la edición de manejadores, era su efecto esperado: vuelve a la versión curva para modificar el diseño, no intentes reconstruir todos los manejadores desde la malla.

**Subtema 2:** Catmull-Clark comparado contra cubo original; Crease 0,0.7 y 1 diferenciadas; Viewport Levels limitado y base editable. Recuperación: Si aparece un pinzamiento, mira la malla base: caras estiradas, polos y N-Gons pueden concentrar la transición. Si el equipo se vuelve lento, baja Levels antes de borrar el objeto. Si crease no actúa, confirma Edge seleccionado y valor de arista, no peso de bisel. Si la caja pierde medidas, recuerda que Subdivision altera la superficie evaluada: compara su contorno con el bloqueo. Si el resultado parece faceteado, inspecciona Shade Smooth después de verificar geometría.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
