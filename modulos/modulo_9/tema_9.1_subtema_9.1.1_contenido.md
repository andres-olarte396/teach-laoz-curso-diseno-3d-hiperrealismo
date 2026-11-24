# 9.1.1 — Costuras y desplegado

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Las coordenadas UV relacionan posiciones de una superficie con posiciones en una imagen plana. U y V son sus dos ejes; no sustituyen X, Y, Z del objeto. Desplegar es cortar mentalmente una envoltura y extenderla. Seams marca aristas donde el algoritmo puede separar islas UV. Una costura UV no abre un hueco geométrico: separa coordenadas de textura. Elegir costuras en zonas poco visibles facilita situar etiquetas y evita deformaciones que después serían difíciles de corregir con un material.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Para el primer ensayo usa un cubo sin modificadores, Dimensions(0.12,0.08,0.06)m y Scale aplicada. Cambia al workspace UV Editing. En Edit Mode selecciona todo y usa U > Cube Projection para observar un desplegado inicial. El cubo mantiene su volumen en el Viewport; en UV Editor aparecen coordenadas planas. Selecciona una cara en 3D y localiza su región UV. Esta proyección inicial es una comparación, no la única solución. Guarda semana09_uv_v01.blend. No uses primero el cuerpo hueco complejo: una caja cerrada permite entender claramente seis superficies.

## Sesión 2 — Comparación controlada

Para practicar costuras, marca las aristas que separan las seis caras: Edit Mode Edge, A y Edge > Mark Seam. Para este primer cubo dividir todas las caras es deliberado; no será la solución más continua pero es verificable. Selecciona todo y U > Unwrap > Angle Based, o U > Unwrap Angle Based según cómo se presente el menú 4.5. Las caras se despliegan como islas. En UV Editor A; UV > Average Islands Scale y UV > Pack Islands. Revisa que no se superpongan salvo que tú busques compartir textura de forma deliberada. Conserva un margen entre islas.

## Sesión 3 — Transferencia y comprobación

Duplica el cubo en una copia y quita costuras que permitan unir dos caras laterales. Selecciona esas aristas y Edge > Clear Seam; vuelve a Unwrap. Compara el resultado con la división de seis islas. No se exige una red óptima en esta sesión; identifica cómo cambió la continuidad. Guarda semana09_costuras.blend y anota dónde pondrías una etiqueta frontal sin atravesar una costura. Si el producto usará sólo una etiqueta en una cara, esa región debe tener un espacio UV predecible y una orientación legible.

## Ejemplo razonado

Ejemplo: una caja de cartón cortada por todas sus aristas se divide en seis paneles. Al dejar dos caras conectadas puedes extenderlas como una tira. En UV pasa algo semejante, aunque el modelo 3D conserva sus conexiones geométricas. Dos caras que usan el mismo espacio UV mostrarán el mismo sector de la imagen; esto puede ahorrar píxeles para un material repetitivo, pero es un problema si cada una necesita texto diferente. El curso prioriza una cara frontal sin deformación y separada cuando conviene. La continuidad tiene valor sólo si ayuda al diseño y no aumenta estiramientos innecesarios.

## Errores y recuperación

Si Unwrap no aparece, confirma Edit Mode y una malla seleccionada. Si UV Editor queda vacío, selecciona caras o activa opciones de sincronización conscientemente. Si costuras abren una grieta en 3D, ejecutaste una operación de separación geométrica, no Mark Seam; deshaz. Si las islas se superponen, Pack Islands ayuda, pero revisa la selección. Si una cara tiene proporción falsa, aplica Scale y vuelve a desplegar antes de estirar UV a ojo.

## Decisiones y conexión con el siguiente paso

El mapa UV es parte del archivo editable. Nombra UVMap si más adelante existen varios y conserva el despliegue verificado. No confundas una distribución que llena toda la imagen con una distribución fiel: una cara puede ocupar mucho espacio y estar deformada. El siguiente subtema añade una cuadrícula de prueba para observar esa deformación. Mantener geometría sencilla y escala correcta facilita distinguir errores del desplegado de errores del objeto base. Trabaja con una cara principal clara antes de intentar cubrir toda la caja hueca de una vez.

## Evidencia verificable

- Costuras marcadas sin abrir geometría
- Islas UV visibles y no solapadas involuntariamente
- Cara frontal identificada

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Costuras y desplegado](https://docs.blender.org/manual/en/4.5/modeling/meshes/uv/unwrapping/seams.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

