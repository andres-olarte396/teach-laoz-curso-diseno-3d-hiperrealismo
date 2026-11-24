# 7.1.2 — Normales y sombreado suave

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Shade Smooth interpola cómo se orienta el sombreado entre caras; no añade vértices ni redondea una silueta. Shade Flat muestra la orientación de cada cara. Un cilindro puede parecer suave por su iluminación y seguir mostrando un contorno poligonal. Las normales geométricas definen lados de las caras; las normales usadas para sombrear pueden suavizar la transición visual. Cambiar sombreado no repara huecos, intersecciones o escala. Este subtema separa defectos de iluminación aparente de defectos reales de la malla.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Añade un Cylinder de 16 vértices con tapas N-Gon, diámetro 40 mm y alto 60 mm; Apply Scale. Renómbralo Cilindro 16. En Object Mode clic derecho > Shade Flat y observa bandas laterales. Clicderecho > Shade Smooth y observa la continuidad de iluminación. Mira Top y compara la silueta: sigue teniendo 16 lados. Duplica o añade otro Cylinder de 32 vértices con mismas medidas para comparar el contorno. No aumentes subdivisión todavía. Guarda semana07_sombreado.blend y registra qué cambió geométricamente y qué cambió sólo en la interpretación de la luz.

## Sesión 5 — Comparación controlada

En el cilindro de 32 lados prueba Object > Shade Auto Smooth si aparece en el mapa Blender 4.5; la operación puede crear un modificador de geometría Smooth by Angle. Una alternativa explícita es usar Shade Smooth y en Edit Mode seleccionar los bordes circulares de las tapas, Edge > Mark Sharp, y añadir el recurso Smooth by Angle desde los modificadores disponibles si lo necesitas. No dependas de instrucciones antiguas que buscan una casilla Auto Smooth en Object Data. Conserva un ángulo de 30° como prueba: la tapa debe mantener la separación respecto a la pared mientras el lateral continuo se suaviza.

## Sesión 6 — Transferencia y comprobación

Vuelve al cuerpo con Bevel. Inspecciona grandes caras planas y transiciones redondeadas en Solid Studio Light. Si aparecen ondas sobre una cara plana, compara Shade Flat con Smooth; revisa aristas y normales antes de añadir soluciones automáticas. A y Shift+N en Edit Mode corrigen orientación en una malla cerrada simple, pero no arreglan caras no coplanares. Conserva Shade Smooth by Angle cuando ayude a mantener caras planas y transiciones; documenta la operación elegida y la versión 4.5. Guarda una captura propia o descripción verificable del cilindro desde Top y oblicua.

## Ejemplo razonado

Caso resuelto: un cilindro de 16 lados con Shade Smooth parece redondo desde lejos. En Top se observan segmentos rectos. Cambiar a 32 lados mejora la silueta; Shade Smooth mejora la iluminación entre sus caras. Son dos variables independientes. En una caja, suavizar indiscriminadamente puede hacer que una cara plana parezca abombada porque la interpolación mezcla orientaciones de paredes vecinas. Un límite angular o una separación de normales preserva el cambio brusco entre tapa y lateral. El criterio es que el sombreado represente la forma pretendida, no que siempre parezca suave.

## Errores y recuperación

Si una tapa parece inflada, evita suavizarla con la pared sin un límite apropiado. Si Shift+N no elimina una onda, revisa geometría y coplanaridad. Si tutoriales mencionan una casilla ausente, usa operaciones actuales 4.5 y consulta el manual. Si aumentas muestras y las ondas permanecen, no era ruido. Si la silueta es dentada, se necesita geometría adecuada, no sólo una normal de sombreado distinta.

## Decisiones y conexión con el siguiente paso

El producto debe inspeccionarse con luz lateral porque expone deformaciones que la vista frontal oculta. Las caras planas deben comportarse como planas y los biseles recoger una transición controlada. Guarda una versión antes de nuevos modificadores; la comparación Flat/Smooth permite diagnosticar sin adivinar. En la siguiente semana construirás perfiles curvos y una superficie de subdivisión. Haber separado contorno y sombreado evita añadir miles de vértices cuando lo único incorrecto era la interpolación, o confiar en interpolación cuando sí falta geometría.

## Evidencia verificable

- Comparación Shade Flat/Smooth conservada
- Silueta 16 vs 32 lados explicada
- Tapa conserva separación visual de lateral

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Normales y sombreado suave](https://docs.blender.org/manual/en/4.5/scene_layout/object/editing/shading.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

