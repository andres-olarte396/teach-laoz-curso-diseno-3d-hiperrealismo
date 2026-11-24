# Solucionario — Semana 10: Texturas y etiquetas

## Pregunta 1

No normalmente. Hay que mantenerproporción delplano o corregirdistribución UV segúnel diseño.

**Por qué falla la confusión habitual:** Si parpadea, comprueba separación. Si está rosa, corrige la ruta de imagen y empaqueta recursos. Si el texto se deforma, revisa proporción 2:1 y UV. Si el plano cubre la escena, revisa unidades. Si flota, usa una separación pequeña y positiva. Si las letras están invertidas, comprueba el lado observado antes de girar o reflejar UV. La imagen es material didáctico propio y no requiere recursos externos.

## Pregunta 2

Non-Color: representa datos numéricos, no color aparente. La etiqueta sí utiliza sRGB.

**Por qué falla la confusión habitual:** Si la superficie se vuelve azul, conectaste un mapa normal a Base Color. Si Roughness difiere de lo esperado, revisa Non-Color y canales. Si el material parece negro, comprueba entorno antes de culpar al mapa. Si falta la imagen, corrige Open y Pack Resources. Añadir Normal Map sin una entrada adecuada no demuestra detalle aplicado. Usa el archivo de rugosidad incluido en lugar de exportar una imagen flotante sin revisar su transformación de color.

## Pregunta 3 — Demostración

**Subtema 1:** Plano Etiqueta de 60×30 mm con orientación legible; Image Texture sRGB conectada a Base Color; PNG empaquetada y separación 0.2 mm. Recuperación: Si parpadea, comprueba separación. Si está rosa, corrige la ruta de imagen y empaqueta recursos. Si el texto se deforma, revisa proporción 2:1 y UV. Si el plano cubre la escena, revisa unidades. Si flota, usa una separación pequeña y positiva. Si las letras están invertidas, comprueba el lado observado antes de girar o reflejar UV. La imagen es material didáctico propio y no requiere recursos externos.

**Subtema 2:** Etiqueta interpretada como sRGB; Mapa propio Non-Color conectado a Roughness; Tabla de color y datos con rutas correctas. Recuperación: Si la superficie se vuelve azul, conectaste un mapa normal a Base Color. Si Roughness difiere de lo esperado, revisa Non-Color y canales. Si el material parece negro, comprueba entorno antes de culpar al mapa. Si falta la imagen, corrige Open y Pack Resources. Añadir Normal Map sin una entrada adecuada no demuestra detalle aplicado. Usa el archivo de rugosidad incluido en lugar de exportar una imagen flotante sin revisar su transformación de color.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
