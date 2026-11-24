# Solucionario — Semana 7: Bordes y sombreado

## Pregunta 1

Sí. La pila se calcula de arriba abajo; Bevel posterior puede actuar sobre aristas creadas por la booleana.

**Por qué falla la confusión habitual:** Si el ancho varía entre ejes, revisa Scale. Si la esquina colapsa, reduce Amount y examina aristas cercanas. Si el hueco no se bisela, revisa orden y Limit Method. Si el modelo se vuelve lento, baja Segments y elimina modificadores de ensayo que no aportan. Si una franja negra aparece, no la atribuyas al material inmediatamente: busca solapamientos, normales incorrectas o caras internas. Guarda antes de aplicar cambios irreversibles.

## Pregunta 2

No. Interpola sombreado. Mejorar una silueta poligonal requiere una distribución geométrica adecuada.

**Por qué falla la confusión habitual:** Si una tapa parece inflada, evita suavizarla con la pared sin un límite apropiado. Si Shift+N no elimina una onda, revisa geometría y coplanaridad. Si tutoriales mencionan una casilla ausente, usa operaciones actuales 4.5 y consulta el manual. Si aumentas muestras y las ondas permanecen, no era ruido. Si la silueta es dentada, se necesita geometría adecuada, no sólo una normal de sombreado distinta.

## Pregunta 3 — Demostración

**Subtema 1:** Scale uno antes del bisel; Bevel 0.5 mm y 3 segments editable; Comparar orden Boolean/Bevel si hay agujero. Recuperación: Si el ancho varía entre ejes, revisa Scale. Si la esquina colapsa, reduce Amount y examina aristas cercanas. Si el hueco no se bisela, revisa orden y Limit Method. Si el modelo se vuelve lento, baja Segments y elimina modificadores de ensayo que no aportan. Si una franja negra aparece, no la atribuyas al material inmediatamente: busca solapamientos, normales incorrectas o caras internas. Guarda antes de aplicar cambios irreversibles.

**Subtema 2:** Comparación Shade Flat/Smooth conservada; Silueta 16 vs 32 lados explicada; Tapa conserva separación visual de lateral. Recuperación: Si una tapa parece inflada, evita suavizarla con la pared sin un límite apropiado. Si Shift+N no elimina una onda, revisa geometría y coplanaridad. Si tutoriales mencionan una casilla ausente, usa operaciones actuales 4.5 y consulta el manual. Si aumentas muestras y las ondas permanecen, no era ruido. Si la silueta es dentada, se necesita geometría adecuada, no sólo una normal de sombreado distinta.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
