# Solucionario — Semana 1: Puntos y orientación en el espacio

## Pregunta 1

No. El PNG conserva píxeles; .blend conserva la escena editable. Una captura ayuda a revisar, pero no sustituye el archivo de trabajo.

**Por qué falla la confusión habitual:** Si el atajo no responde, coloca el puntero sobre el Viewport y repite una sola vez. Si desaparece el cubo al alejarte, selecciónalo en Outliner y usa Frame Selected. Si no puedes guardar en una carpeta protegida, elige una carpeta personal con permiso de escritura. Si el nombre termina .blend.blend, revisa la extensión antes de crear otra copia. Una escena vacía no significa necesariamente pérdida: comprueba qué colección está visible.

## Pregunta 2

No. Cambia el marcador; el vértice conserva sus coordenadas. Para cambiar geometría debe seleccionarse y transformarse.

**Por qué falla la confusión habitual:** Si ves una cara, no fusionaste los cuatro vértices: A y M > At Center de nuevo. Si N muestra Location, estás en Object Mode, no leyendo el vértice. Si la coordenada global parece distinta, revisa que el objeto tenga Location cero, Rotation cero y Scale uno. Si el punto no aparece en un render, es el comportamiento esperado: falta superficie. No lo arregles aumentando luces. Si el cursor se movió accidentalmente, Shift+S > Cursor to World Origin lo recupera.

## Pregunta 3 — Demostración

**Subtema 1:** Reabrir semana01_v02.blend y encontrar Ensayo; Identificar Viewport, Outliner y Properties sin leer los nombres; Explicar por qué acercar la vista no cambia Dimensions. Recuperación: Si el atajo no responde, coloca el puntero sobre el Viewport y repite una sola vez. Si desaparece el cubo al alejarte, selecciónalo en Outliner y usa Frame Selected. Si no puedes guardar en una carpeta protegida, elige una carpeta personal con permiso de escritura. Si el nombre termina .blend.blend, revisa la extensión antes de crear otra copia. Una escena vacía no significa necesariamente pérdida: comprueba qué colección está visible.

**Subtema 2:** Un solo vértice seleccionado muestra la terna solicitada; Cursor 3D vuelve a (0,0,0) sin mover Punto; Explicar coincidencia de A y B en Top. Recuperación: Si ves una cara, no fusionaste los cuatro vértices: A y M > At Center de nuevo. Si N muestra Location, estás en Object Mode, no leyendo el vértice. Si la coordenada global parece distinta, revisa que el objeto tenga Location cero, Rotation cero y Scale uno. Si el punto no aparece en un render, es el comportamiento esperado: falta superficie. No lo arregles aumentando luces. Si el cursor se movió accidentalmente, Shift+S > Cursor to World Origin lo recupera.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
