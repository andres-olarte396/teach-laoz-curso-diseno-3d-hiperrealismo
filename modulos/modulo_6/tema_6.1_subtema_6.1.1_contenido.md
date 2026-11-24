# 6.1.1 — Simetría y espesor

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Mirror refleja una malla respecto a los ejes locales de su origen o de otro objeto elegido. Solidify añade espesor a una superficie. Son modificadores: operaciones editables calculadas sobre la geometría base. Su orden puede cambiar el resultado. Una superficie reflejada y después engrosada no siempre equivale a engrosar y después reflejar. Empezaremos con dos ensayos pequeños separados del producto para comprender ejes y grosor sin deteriorar la caja ya construida.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

En una escena métrica nueva deja Cursor 3D en cero y añade Plane. Tab; A; S,0.05, Enter para un plano 100×100 mm. En Edit Mode mueve toda su geometría G, X,0.06, Enter; el origen del objeto sigue en cero. Object Mode > Properties > Modifiers > Add Modifier > Mirror. Activa sólo X. Verás otra lámina al lado opuesto del origen. Si desplazas el objeto en Object Mode, ambas se desplazan juntas; el centro de simetría viaja con el origen. Deshaz el desplazamiento de prueba. Renombra Panel Simetrico y guarda.

## Sesión 2 — Comparación controlada

En el mismo objeto añade Solidify después de Mirror. Thickness 0.002 m, Offset 0 para repartir espesor alrededor de la lámina, y Rim activado para cerrar los bordes. Comprueba Scale=(1,1,1); si no, aplica Scale antes de comparar espesores. En Right y Wireframe observa el grosor. Las normales deben ser coherentes; si el espesor se orienta inesperadamente, vuelve a Edit Mode, A y Shift+N, y determina el lado deseado. La distancia de separación entre paneles es 20 mm porque sus bordes internos están X=±10 mm. No afirmes que se han unido.

## Sesión 3 — Transferencia y comprobación

Duplica el ensayo en otro archivo o variante y reduce el desplazamiento original a 50 mm para que una arista del panel quede en X=0. Activa Merge y Clipping en Mirror; verifica que los vértices de borde realmente estén en el plano de simetría. Clipping evita atravesar ese plano al editar, pero no mueve automáticamente vértices distantes al centro. Conserva los modificadores sin Apply. Cambia Thickness a 3 mm y vuelve a 2 mm para demostrar editabilidad. Guarda semana06_simetria_espesor.blend y anota el orden Mirror > Solidify.

## Ejemplo razonado

Ejemplo: un panel base ocupa X de 10 a 110 mm, con origen en X=0. Mirror genera el panel de-110 a-10 mm. Son dos piezas separadas aunque Merge esté activo, porque ningún vértice se encuentra cerca del centro. Si el panel original ocupa 0 a 100 mm, el borde puede coincidir con su reflejo y Merge resulta pertinente. Solidify de 2 mm con Offset 0 produce aproximadamente 1 mm hacia cada lado de la superficie plana. Con Offset=-1 se orienta hacia un solo lado. Para superficies curvas o esquinas el espesor requiere inspección; el valor nominal por sí solo no demuestra todas las distancias locales.

## Errores y recuperación

Si Mirror superpone el modelo entero, la geometría ya puede estar a ambos lados del origen: usa una mitad o un diseño deliberado con Bisect, no dupliques sin revisar. Si las piezas no se unen, comprueba X=0 y Merge. Si el grosor es desigual, revisa Scale y normales. Si pierdes la edición, quizá aplicaste el modificador; usa la versión anterior. Si añades Solidify a una caja que ya tiene paredes, puedes crear una segunda pared innecesaria.

## Decisiones y conexión con el siguiente paso

Los modificadores no eliminan la necesidad de medir. Su ventaja es conservar una forma base y una lista de parámetros que puedes revisar. No añadas todos al producto por obligación: la caja ya tiene espesor de la extrusión y no necesita otra capa. Usar ensayos permite aprender sin sobrecargar el archivo final. Antes de un Apply guarda copia y decide si necesitas editar todavía el grosor o la simetría. En el próximo subtema una booleana restará volumen mediante otra pieza, también como operación editable.

## Evidencia verificable

- Mirror respecto al origen verificado
- Solidify 2 mm con Scale uno y Rim
- Merge sólo une vértices próximos al plano

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Simetría y espesor](https://docs.blender.org/manual/en/4.5/modeling/modifiers/generate/mirror.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

