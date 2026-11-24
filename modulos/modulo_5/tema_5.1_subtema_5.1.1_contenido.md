# 5.1.1 — Extrusión, inserción y cortes

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Extrude crea geometría conectada a una selección. Inset Faces crea un contorno interior dentro de una cara; no abre por sí solo un hueco. Loop Cut añade un bucle de aristas para controlar distribución o forma. Estas operaciones no son intercambiables: una cambia extensión, otra genera un borde interior y otra divide una superficie. Usaremos un cubo medido para producir una caja de pared 2 mm sin multiplicar herramientas. Trabajar con una sola cara seleccionada permite predecir dónde se generarán nuevas caras.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Haz Save As del bloqueo y renombra su cuerpo a Caja Trabajo, sin duplicarlo; oculta temporalmente la tapa y base en Outliner mediante el ojo. Selecciona sólo Caja Trabajo, Apply Scale si no está en uno. En Edit Mode activa selección Face, deselecciona todo y elige su cara superior desde Top. Pulsa I,0.002, Enter para insertar un contorno a 2 mm del borde. Verifica en Top que el nuevo rectángulo interno corresponde aproximadamente 116×76 mm. La cara interna sigue tapando el objeto: aún no tienes un recipiente. Guarda una versión antes de extruir.

## Sesión 2 — Comparación controlada

Con la cara interna seleccionada usa E, Z,-0.058, Enter para bajar el fondo 58 mm desde Z=60 mm a Z=2 mm. Se crean paredes interiores y un fondo que deja 2 mm de base. No vuelvas a extruir si el resultado ya existe. En Front con Wireframe comprueba el nivel del fondo y después vuelve a Solid. La dimensión exterior se conserva 120×80×60 mm. Selecciona todo y Shift+N. Inspecciona desde arriba: deben verse borde, interior y fondo. Esta construcción representa una caja abierta con volumen de paredes, no una superficie sin espesor.

## Sesión 3 — Transferencia y comprobación

En una copia de prueba añade un Loop Cut con Ctrl+R sobre una pared adecuada, rueda para dejar un corte y botón derecho después del primer clic para centrarlo. Este ensayo no es obligatorio conservarlo en la caja: muestra cómo un bucle atraviesa una tira de cuadriláteros y dónde se detiene. Si no aparece, el recorrido puede encontrar un N-Gon. Deshaz el corte de ensayo y conserva la caja limpia. Guarda semana05_caja.blend. Elige una variante del ejercicio en el último bloque; la revisión de profundidad y pared sustituye una nueva operación.

## Ejemplo razonado

Caso resuelto: la cara superior está en Z=0.060 m y el fondo interior deseado en Z=0.002 m. El desplazamiento de extrusión es 0.002-0.060=-0.058 m. Es incorrecto teclear-0.002 si se quiere fondo profundo: sólo produciría una hendidura 2 mm. Una pared de 2 mm exige un ancho interior 116 mm frente a 120 mm exterior porque hay dos paredes opuestas. La base no tiene dos descuentos verticales: la caja está abierta arriba. Medir cada dirección ayuda a distinguir ancho interior, altura útil y altura exterior. El procedimiento usa medidas reales para prevenir resultados que sólo parecen razonables.

## Errores y recuperación

Si E y Escape dejan caras duplicadas en el mismo sitio, deshaz la extrusión completa con Ctrl+Z antes de intentar otra; cancelar movimiento no siempre elimina la nueva geometría. Si Inset afecta todas las caras, deshaz y selecciona sólo la superior. Si el fondo atraviesa la base, revisa el desplazamiento relativo y unidades. Si el bucle de corte no recorre todo, analiza la topología en lugar de forzarlo con más cortes.

## Decisiones y conexión con el siguiente paso

La construcción debe seguir siendo editable. No añadas subdivisión para suavizar una caja que todavía requiere medidas: puede redondearla y ocultar errores. Puedes inspeccionar la apertura con vista superior y el espesor mediante Wireframe sin desmontar la pieza. Elegir extrusión frente a Solidify depende de cómo quieras definir paredes y fondo; aquí quedan controlados por una inserción y un desplazamiento. La próxima lección separa tapa y base para que sus medidas cambien independientemente.

## Evidencia verificable

- Exterior 120×80×60 mm conservado
- Borde 2 mm y fondo interior Z=2 mm
- No extrusiones duplicadas superpuestas

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Extrusión, inserción y cortes](https://docs.blender.org/manual/en/4.5/modeling/meshes/editing/face/inset_faces.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

