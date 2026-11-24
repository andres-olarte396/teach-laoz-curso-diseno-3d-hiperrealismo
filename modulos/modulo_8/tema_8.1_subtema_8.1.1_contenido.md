# 8.1.1 — Curvas y perfiles de producto

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una curva Bézier describe un recorrido mediante puntos de control y manejadores. La curva no necesita estar formada inicialmente por muchas caras. Sus propiedades de Geometry pueden darle un perfil circular mediante Bevel Depth, convirtiendo el recorrido en una forma tubular. Un cable o asa sencilla se presta a este enfoque. El perfil determina grosor; el recorrido determina silueta. Cambiar uno sin controlar el otro produce asas gruesas o curvas que ya no caben en la pieza.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Abre una escena métrica de ensayo y Shift+A > Curve > Bézier. En Object Mode ajusta Dimensions del recorrido de manera aproximada a 80 mm de ancho, y aplica Scale. Tab muestra puntos y manejadores; selecciona todo y en Front observa la curva. En Object Data Properties, icono de curva, comprueba Dimensions 3D. En Geometry > Bevel elige Round y Depth 0.003 m; Resolution 3. Activa Fill Caps para tapar extremos cuando proceda. El resultado es un tubo de diámetro aproximado 6 mm en tramos no deformados. Renombra Asa Curva y guarda semana08_curva.blend.

## Sesión 2 — Comparación controlada

En Edit Mode selecciona un punto de control y usa V > Automatic para manejadores automáticos si quieres transición continua, o Aligned cuando necesites controlar dirección manualmente. Mueve el punto con G y eje, sin arrastrar a ciegas; por ejemplo G, Z,0.02 m eleva 20 mm. Selecciona un extremo y E para extruir otro punto de control; mueve y confirma. No selecciones sólo un manejador por accidente si quieres mover el punto completo. Consulta Top y Front para verificar que la forma quede en el plano previsto. El asa no debe convertirse en un nudo tridimensional accidental.

## Sesión 3 — Transferencia y comprobación

Duplica la curva como prueba y cambia Depth a 0.002 m para comparar diámetro 4 mm. El recorrido permanece editable. Si necesitas una malla para operaciones futuras, Object > Convert > Mesh en una copia hace la conversión; conserva la curva original antes de convertir. No conviertas por obligación. Guarda la versión con dos variantes y anota qué parámetro cambió grosor. Coloca el asa cerca de la caja en una copia del producto sólo si queda tiempo dentro del bloque: el ensayo de curva ya satisface el objetivo de este subtema.

## Ejemplo razonado

Ejemplo: un cable de diámetro 6 mm se obtiene con Depth 3 mm porque Depth representa radio para el perfil circular. Escribir 6 mm produciría diámetro aproximado 12 mm. Si Scale no es uniforme, la sección puede deformarse y dejar de ser circular; aplicar Scale antes de ajustar el perfil vuelve más comprensible la medida. El recorrido puede medir 80 mm entre extremos y tener longitud de arco mayor: su ancho no equivale a la cantidad de cable. Para el curso basta controlar la silueta y grosor visibles; no calculamos una longitud física de fabricación sin medir el recorrido de forma adecuada.

## Errores y recuperación

Si la curva es una línea sin volumen, Bevel Depth sigue en cero. Si el extremo está abierto, comprueba Fill Caps. Si el grosor varía o sección es ovalada, revisa Scale. Si al mover un punto aparecen giros inesperados, inspecciona Top y Front y usa coordenadas. Si Convert elimina la edición de manejadores, era su efecto esperado: vuelve a la versión curva para modificar el diseño, no intentes reconstruir todos los manejadores desde la malla.

## Decisiones y conexión con el siguiente paso

Las curvas ofrecen un modo compacto de editar recorridos suaves. Una malla aporta control de conectividad para otras operaciones; la elección depende de lo que quieras cambiar después. No uses curvas para evitar medir: guarda ancho, altura y Depth del ensayo. Tampoco subas Resolution indiscriminadamente; busca una silueta suficiente para la distancia de cámara prevista. En el próximo subtema controlarás una forma suave mediante una malla de pocos puntos y Subdivision Surface, para comparar dos maneras diferentes de definir superficies curvas.

## Evidencia verificable

- Curva 3D con Depth 3 mm y Fill Caps
- Recorrido comprobado en dos vistas
- Curva original conservada antes de Convert

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Curvas y perfiles de producto](https://docs.blender.org/manual/en/4.5/modeling/curves/properties/geometry.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

