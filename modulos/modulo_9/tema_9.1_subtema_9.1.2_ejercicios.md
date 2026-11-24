# Ejercicios alternativos — Distorsión y densidad de textura

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-9.1.2-1 — Ruta Básica

**Reto:** Mostrar UV Grid y corregir el estiramiento experimental.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Image > New > UV Grid; Image Texture a Base Color; deshacer S, X,2 en UV Editor.

**Resultado esperado:** UV Grid conectada a Base Color y visible. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si el objeto está gris, comprueba Material Preview y conexión Image Texture. Si los cuadros se estiran, revisa Scale aplicada y proporción de la isla. Si la imagen se repite, observa UV fuera del rango y Extension Repeat del nodo. Si se mueven varias islas, deshaz y revisa selección. Si Pack cambia la distribución, compara otra vez la región de interés. Una UV deformada no se corrige descargando una imagen de mayor resolución.

## EJ-9.1.2-2 — Ruta Intermedia

**Reto:** Comparar densidad entre dos caras mediante Average Islands Scale.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Seleccionar islas, Average Islands Scale y Pack Islands; comparar tamaños de celdas.

**Resultado esperado:** Cuadros aproximadamente cuadrados en la cara frontal. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si el objeto está gris, comprueba Material Preview y conexión Image Texture. Si los cuadros se estiran, revisa Scale aplicada y proporción de la isla. Si la imagen se repite, observa UV fuera del rango y Extension Repeat del nodo. Si se mueven varias islas, deshaz y revisa selección. Si Pack cambia la distribución, compara otra vez la región de interés. Una UV deformada no se corrige descargando una imagen de mayor resolución.

## EJ-9.1.2-3 — Ruta Avanzada

**Reto:** Explicar por qué 1024 píxeles no garantizan una etiqueta nítida.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Calcular 300/60=5 píxeles/mm y comprobar qué área ocupa realmente la isla.

**Resultado esperado:** Deformación experimental deshecha y densidad comparada. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si el objeto está gris, comprueba Material Preview y conexión Image Texture. Si los cuadros se estiran, revisa Scale aplicada y proporción de la isla. Si la imagen se repite, observa UV fuera del rango y Extension Repeat del nodo. Si se mueven varias islas, deshaz y revisa selección. Si Pack cambia la distribución, compara otra vez la región de interés. Una UV deformada no se corrige descargando una imagen de mayor resolución.

