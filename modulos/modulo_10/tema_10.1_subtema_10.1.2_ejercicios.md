# Ejercicios alternativos — Mapas y espacios de color

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-10.1.2-1 — Ruta Básica

**Reto:** Auditar etiqueta y Roughness en un material.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Image Texture de color: sRGB a Base Color; datos: Non-Color a Roughness.

**Resultado esperado:** Etiqueta interpretada como sRGB. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si la superficie se vuelve azul, conectaste un mapa normal a Base Color. Si Roughness difiere de lo esperado, revisa Non-Color y canales. Si el material parece negro, comprueba entorno antes de culpar al mapa. Si falta la imagen, corrige Open y Pack Resources. Añadir Normal Map sin una entrada adecuada no demuestra detalle aplicado. Usa el archivo de rugosidad incluido en lugar de exportar una imagen flotante sin revisar su transformación de color.

## EJ-10.1.2-2 — Ruta Intermedia

**Reto:** Comparar el gris propio RGB 128 con Roughness manual 0.502.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Open material/rugosidad-050.png; Color Space Non-Color; conectar a Roughness y comparar con 128/255=0.50196 bajo la misma iluminación.

**Resultado esperado:** Mapa propio Non-Color conectado a Roughness. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si la superficie se vuelve azul, conectaste un mapa normal a Base Color. Si Roughness difiere de lo esperado, revisa Non-Color y canales. Si el material parece negro, comprueba entorno antes de culpar al mapa. Si falta la imagen, corrige Open y Pack Resources. Añadir Normal Map sin una entrada adecuada no demuestra detalle aplicado. Usa el archivo de rugosidad incluido en lugar de exportar una imagen flotante sin revisar su transformación de color.

## EJ-10.1.2-3 — Ruta Avanzada

**Reto:** Diagnosticar mapa normal azul aplicado como Base Color.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Usar Non-Color >Normal Map >Normal; conservar Base Color del material.

**Resultado esperado:** Tabla de color y datos con rutas correctas. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si la superficie se vuelve azul, conectaste un mapa normal a Base Color. Si Roughness difiere de lo esperado, revisa Non-Color y canales. Si el material parece negro, comprueba entorno antes de culpar al mapa. Si falta la imagen, corrige Open y Pack Resources. Añadir Normal Map sin una entrada adecuada no demuestra detalle aplicado. Usa el archivo de rugosidad incluido en lugar de exportar una imagen flotante sin revisar su transformación de color.

