# 2.1.2 — Rotación, escala y pivote

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Rotar cambia orientación; escalar multiplica tamaño. El pivote es el punto alrededor del cual opera una rotación o escala, y no tiene por qué coincidir con el centro visual. Dimensions informa la extensión de la caja delimitadora; Scale informa factores de transformación. Es posible tener Dimensions 0.20 m y Scale 0.10 en una pieza derivada de un cubo de 2 m. Apply Scale convierte ese tamaño en la referencia de la malla y devuelve Scale a uno sin cambiar su apariencia. Antes de biseles, espesores y texturas esta diferencia será decisiva.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Abre una escena nueva. Properties > Scene > Units: Unit System Metric, Unit Scale 1 y Length Meters. Esta elección cambia cómo se presentan cantidades; no corrige automáticamente objetos que ya estaban modelados a otro tamaño. Selecciona Cube y en N > Item > Dimensions introduce X=0.20 m, Y=0.10 m, Z=0.04 m. Renombra Base. Fija Location Z=0.02 m para que su base quede en Z=0 si el origen está en su centro. Usa Object > Apply > Scale, o Ctrl+A > Scale. Comprueba Scale=(1,1,1) y Dimensions sin cambios. Guarda semana02_medidas.blend.

## Sesión 5 — Comparación controlada

Duplica Base como Base Giratoria y sitúala en X=0.30 m. En el desplegable Pivot Point elige Median Point; usa R, Z,30, Enter. Observa que sus extremos giran alrededor del origen de la pieza. Deshaz. Abre N > View > 3D Cursor y fija su Location X=0.20 m, Y=0, Z=0.02 m. Elige Pivot Point > 3D Cursor y repite R, Z,30, Enter. La misma rotación ahora cambia también la posición de la pieza porque gira alrededor de otro punto. Deshaz y devuelve Pivot a Median Point. No dejes un pivote experimental activo para las siguientes tareas.

## Sesión 6 — Transferencia y comprobación

Construye Tapa con Dimensions (0.20,0.10,0.01) m, Rotation cero y Scale aplicada; sitúala en Z=0.045 m para apoyar su cara inferior en la cara superior de Base, que está en 0.04 m. En una vista frontal comprueba la unión. Añade un bloque auxiliar con dimensiones (0.02,0.02,0.02) m y centro Z=0.01 m. Lee las medidas en N > Item. Si necesitas mover todo el conjunto, selecciona sus tres objetos y usa G con un eje. Dimensions usa una caja delimitadora alineada con los ejes locales del objeto; su rotación en Object Mode no transforma esas medidas en una envolvente global. No deduzcas tamaño real de la apariencia en perspectiva.

## Ejemplo razonado

Ejemplo: Base mide 200×100×40 mm. Sus semialturas son 20 mm. Con centro Z=20 mm, toca la mesa en Z=0 y llega a Z=40 mm. La tapa de 10 mm tiene semialtura 5 mm: su centro debe estar en 45 mm para tocar la base. Escribir Z=40 mm colocaría el centro de la tapa dentro de la base. El error porcentual se calcula como |medida-observado|/medida×100. Para 200 mm, un error de 2 % permite 4 mm; las instrucciones numéricas deberían alcanzar mucho más precisión que ese margen pedagógico.

## Errores y recuperación

Si el bisel futuro sale desigual, revisa Scale no aplicada. Si la pieza cambia de sitio al rotarla, el pivote puede estar en 3D Cursor. Si escribes 20 pensando en centímetros con escena en metros, obtendrás 20 m: usa 0.20 m o escribe 20 cm explícitamente. Si aplicar Scale modifica un conjunto de dependencias complejo, trabaja primero sobre una copia; aquí los objetos aún son simples. Si Location Z es igual al alto total, la pieza puede estar flotando.

## Decisiones y conexión con el siguiente paso

La escala aplicada no convierte una visualización en un plano técnico certificado. Sí permite comparar dimensiones y construir operaciones con magnitudes coherentes. Conserva un registro en metros y milímetros para no perder el vínculo con objetos reales. Para modificar tamaño, cambia Dimensions y vuelve a aplicar Scale antes de añadir operaciones dependientes del ancho. No apliques todas las transformaciones por rutina: aplicar Location modifica referencias que podrían necesitarse. Aquí se aplica únicamente Scale y se mantiene el origen donde ayuda al ensamblaje.

## Evidencia verificable

- Scene Metric con Unit Scale 1
- Base 0.20×0.10×0.04 m y Scale uno
- Tapa apoyada: centro Z=0.045 m

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Rotación, escala y pivote](https://docs.blender.org/manual/en/4.5/scene_layout/object/editing/apply.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

