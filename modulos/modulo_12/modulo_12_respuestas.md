# Solucionario — Semana 12: Imperfecciones y realismo

## Pregunta 1

No. Es una frecuencia procedural; requiere revisar coordenadas, escala y patrón observado.

**Por qué falla la confusión habitual:** Si el detalle parece rocas, aumenta frecuencia o baja amplitud. Si desaparece completamente, revisa escala de salida y luz antes de exagerarlo. Si un objeto estirado tiene grano deformado, revisa Scale y coordenadas. Si la textura cambia al mover la pieza, comprueba qué objeto de referencia se usa en Texture Coordinate. Si Roughness oscila entre 0 y 1 sin razón, limita rango con Color Ramp.

## Pregunta 2

Sí. La microtextura de fabricación y la respuesta de material pueden bastar; el desgaste sólo se añade con una causa.

**Por qué falla la confusión habitual:** Si todos los materiales se modifican, duplica el datablock antes de editar. Si Assign colorea toda la pieza, revisa caras seleccionadas. Si la mancha parece agujero, reduce contraste y relieve. Si el detalle ocupa lugares sin contacto ni exposición, justifica otra causa o elimínalo. Si la base queda flotando, revisa su centro y media altura; la apariencia de desgaste no arregla el apoyo geométrico.

## Pregunta 3 — Demostración

**Subtema 1:** Coordenadas Object y Scale uno; Frecuencia comparada 100/1000/3000; Microvariación Roughness acotada 0.3–0.4. Recuperación: Si el detalle parece rocas, aumenta frecuencia o baja amplitud. Si desaparece completamente, revisa escala de salida y luz antes de exagerarlo. Si un objeto estirado tiene grano deformado, revisa Scale y coordenadas. Si la textura cambia al mover la pieza, comprueba qué objeto de referencia se usa en Texture Coordinate. Si Roughness oscila entre 0 y 1 sin razón, limita rango con Color Ramp.

**Subtema 2:** Dos detalles con causa, zona y efecto anotados; Material usado independiente; Forma y etiqueta siguen legibles. Recuperación: Si todos los materiales se modifican, duplica el datablock antes de editar. Si Assign colorea toda la pieza, revisa caras seleccionadas. Si la mancha parece agujero, reduce contraste y relieve. Si el detalle ocupa lugares sin contacto ni exposición, justifica otra causa o elimínalo. Si la base queda flotando, revisa su centro y media altura; la apariencia de desgaste no arregla el apoyo geométrico.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
