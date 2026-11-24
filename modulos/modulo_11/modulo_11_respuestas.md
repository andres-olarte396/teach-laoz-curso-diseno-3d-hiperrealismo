# Solucionario — Semana 11: Materiales PBR

## Pregunta 1

No. Metallic y la respuesta a iluminación distinguen el material; plástico y metal pueden compartir un color parecido.

**Por qué falla la confusión habitual:** Si ambos materiales cambian juntos, compartían el mismo datablock: crea una copia independiente. Si el metal se ve negro, revisa el entorno antes de elevar Base Color. Si el color no aparece, usa Material Preview y confirma material asignado al objeto correcto. Si la superficie parece de cromo cuando buscas plástico, revisa Metallic. Si cambias entorno entre pruebas, repite con el mismo para obtener una comparación válida.

## Pregunta 2

No. Bump altera normales de sombreado. La silueta requiere geometría o displacement adecuado.

**Por qué falla la confusión habitual:** Si todo se tiñe azul, conectaste color de normal a Base Color. Si no ves efecto, comprueba Bump Normal conectado, Strength y luz oblicua. Si la superficie parece derretida, baja Distance y revisa escala de la textura. Si el borde no cambia, es esperado con Bump. Si el efecto se invierte respecto a la referencia, comprueba convención del mapa y no alteres geometría a ciegas.

## Pregunta 3 — Demostración

**Subtema 1:** Materiales independientes para plástico y metal; Metallic 0 frente a 1 comparado con luz constante; Roughness 0.2 y 0.6 diferenciadas. Recuperación: Si ambos materiales cambian juntos, compartían el mismo datablock: crea una copia independiente. Si el metal se ve negro, revisa el entorno antes de elevar Base Color. Si el color no aparece, usa Material Preview y confirma material asignado al objeto correcto. Si la superficie parece de cromo cuando buscas plástico, revisa Metallic. Si cambias entorno entre pruebas, repite con el mismo para obtener una comparación válida.

**Subtema 2:** Noise Fac > Bump Height > Principled Normal; Comparación Strength 0/0.2 con luz constante; Silueta permanece igual y se explica. Recuperación: Si todo se tiñe azul, conectaste color de normal a Base Color. Si no ves efecto, comprueba Bump Normal conectado, Strength y luz oblicua. Si la superficie parece derretida, baja Distance y revisa escala de la textura. Si el borde no cambia, es esperado con Bump. Si el efecto se invierte respecto a la referencia, comprueba convención del mapa y no alteres geometría a ciegas.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
