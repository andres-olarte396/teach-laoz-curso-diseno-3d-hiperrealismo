# 7.1.1 — Biseles y lectura de bordes

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Un borde real suele tener una pequeña transición redondeada o achaflanada. Bevel sustituye una arista ideal por una banda de caras. Esa banda recoge reflejos y hace legible el contorno. Width define el ancho del bisel según su modo; Segments controla la cantidad de caras de la transición. Un bisel grande puede cambiar la identidad de un producto. Se empieza por una medida pequeña coherente con el tamaño de la pieza y se observa la silueta, sin depender de que el material sea brillante.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Abre una copia de la placa o del cuerpo del producto. Confirma Scene Metric y Scale=(1,1,1); aplica Scale si procede antes del bisel. Añade Bevel en Modifiers con Amount 0.0005 m, Segments 3 y Limit Method Angle. Esta limitación aplica a aristas según su ángulo; no significa que todas las aristas reciban el mismo tratamiento en cualquier geometría. En una caja sencilla observa esquinas externas y borde superior. Guarda semana07_bisel_v01.blend. Para la placa booleana conserva el orden Boolean antes de Bevel si quieres biselar también el nuevo agujero.

## Sesión 2 — Comparación controlada

Duplica un cubo de prueba 120×80×60 mm para comparar dos anchos:0.0005 m y 0.003 m. Aplica Scale a cada uno. Mantén la misma vista y Solid con Studio Light para observar sus reflejos sin configurar un render. El ancho 3 mm cambia más la silueta y puede consumir bordes estrechos. Activa Clamp Overlap para limitar solapamientos si hace falta, pero no lo uses como prueba de que el bisel cumple exactamente el valor nominal en toda la pieza. Lee las zonas donde se reduce. Restablece el producto a 0.5 mm.

## Sesión 3 — Transferencia y comprobación

En el producto revisa a distancia normal y acercado, sobre todo tapa, esquinas y agujero si existe. Aumenta Segments de 1 a 3 y compara:1 produce un chaflán,3 una transición facetada más suave; no es necesario usar 20 segmentos en cada borde. Conserva el modificador editable y registra Amount, Segments y orden. Guarda semana07_bisel.blend. Si una zona no admite el ancho elegido, reduce Amount o revisa la topología allí antes de aceptar un resultado irregular. El siguiente subtema cambia cómo se interpreta la luz entre esas caras.

## Ejemplo razonado

Ejemplo: una pared de 2 mm no admite un redondeo arbitrario de 5 mm sin alterar profundamente su geometría. Un bisel de 0.5 mm sirve como ensayo inicial, no como norma universal para todo producto. El borde pequeño puede producir una franja luminosa que separa una superficie del fondo. Si no hay esa transición geométrica, un material metálico no la inventa. En la placa con agujero, Boolean > Bevel permite que el bisel vea las nuevas aristas del hueco. Bevel > Boolean puede dejar el agujero recién creado con borde afilado. La pila se calcula de arriba abajo.

## Errores y recuperación

Si el ancho varía entre ejes, revisa Scale. Si la esquina colapsa, reduce Amount y examina aristas cercanas. Si el hueco no se bisela, revisa orden y Limit Method. Si el modelo se vuelve lento, baja Segments y elimina modificadores de ensayo que no aportan. Si una franja negra aparece, no la atribuyas al material inmediatamente: busca solapamientos, normales incorrectas o caras internas. Guarda antes de aplicar cambios irreversibles.

## Decisiones y conexión con el siguiente paso

Controlar bordes significa elegir qué comunica la forma. Un envase plástico puede requerir radios mayores que una chapa; una tapa cortada puede tener chaflán en lugar de radio. Observa una referencia cercana y registra la decisión, pero no afirmes un radio físico que no has medido. Mantener Amount en unidades reales permite transferir la lógica a una pieza de otro tamaño. Tu evidencia combina una medida, una comparación de silueta y un archivo editable. Una imagen bonita por sí sola no demuestra que la escala esté aplicada ni que el ancho pueda revisarse.

## Evidencia verificable

- Scale uno antes del bisel
- Bevel 0.5 mm y 3 segments editable
- Comparar orden Boolean/Bevel si hay agujero

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Biseles y lectura de bordes](https://docs.blender.org/manual/en/4.5/modeling/modifiers/generate/bevel.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

