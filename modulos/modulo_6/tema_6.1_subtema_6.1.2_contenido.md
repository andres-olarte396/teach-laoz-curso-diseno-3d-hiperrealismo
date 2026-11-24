# 6.1.2 — Booleanas y diagnóstico de artefactos

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una booleana combina volúmenes: Difference resta el cortador, Union suma e Intersect conserva la parte común. Para ensayos previsibles se usan mallas cerradas y una intersección real, evitando caras apenas coincidentes. El modificador permite mantener el cortador para ajustar el hueco. Ocultarlo visualmente no siempre equivale a excluirlo del render; la gestión del cortador debe comprobarse. La operación puede producir caras alargadas o sombreado problemático, por lo que un hueco visible no demuestra automáticamente una malla preparada para subdivisión.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

Crea un cubo Placa de Dimensions(0.12,0.08,0.01)m, centro Z=0.005 m y Scale aplicada. Añade Cylinder Cortador con 32 vértices, Dimensions(0.02,0.02,0.03)m, centro Z=0.005 m y Apply Scale. El cortador atraviesa completamente la placa por arriba y abajo. Selecciona Placa y añade Boolean; Operation Difference, Solver Exact y Object Cortador. Inspecciona desde Top. Todavía ves el cilindro que llena el hueco; selecciona Cortador y en Object Properties > Viewport Display > Display As elige Wire para observar el resultado de la placa.

## Sesión 5 — Comparación controlada

Sin aplicar la booleana, mueve Cortador X=0.02 m. El hueco cambia de posición. Cambia diámetro a 0.03 m, aplica Scale al cortador y observa el diámetro aproximado 30 mm. Devuelve a 0.02 m para la variante base. Crea una colección Cortadores y mueve allí el objeto. Si vas a renderizar el ensayo, muestra la columna de restricción de render en Outliner desde su filtro y desactiva el icono cámara del cortador. Verifica también su estado en el Viewport. No borres el cortador mientras siga siendo la entrada de un modificador no aplicado.

## Sesión 6 — Transferencia y comprobación

Haz Save As una copia para probar Apply de la booleana desde su menú en Object Mode. Después de aplicar, el hueco se vuelve geometría permanente y puedes eliminar el cortador de esa copia. En Edit Mode inspecciona aristas alrededor del agujero, recalcula normales y revisa caras internas o finas. Conserva también la versión editable. Guarda semana06_boolean_editable.blend y semana06_boolean_aplicada.blend. No apliques Subdivision Surface para corregir el agujero: podría deformar el resultado si la distribución de caras no es adecuada.

## Ejemplo razonado

Ejemplo: una placa de 10 mm necesita un cortador más alto que 10 mm para atravesarla por completo. Un cilindro de 30 mm centrado igual deja 10 mm sobresalientes arriba y abajo. Si sólo toca la cara superior, no define una resta volumétrica robusta. Al mover su centro X=20 mm, el agujero se desplaza 20 mm sin editar vértices de la placa. Después de Apply esa relación deja de existir. Conservar la versión editable es útil si el cliente cambia diámetro; conservar una copia aplicada ayuda a examinar la topología resultante. Las dos versiones responden a necesidades distintas.

## Errores y recuperación

Si no aparece el agujero, el cortador puede no atravesar o aún estar tapándolo. Si falla con caras coplanares, alarga el cortador y evita contacto tangencial. Si el render muestra el cilindro, desactiva su cámara. Si aparece sombreado irregular, inspecciona geometría y normales antes de aumentar muestras de render. Si el modificador perdió Object, revisa si borraste o renombraste de modo incompatible la entrada; volver a seleccionarla suele recuperar la relación.

## Decisiones y conexión con el siguiente paso

Difference es adecuada para un agujero simple, pero no sustituye todas las técnicas de modelado. Una superficie destinada a subdividirse suele requerir distribución controlada de aristas. En un producto de visualización puedes conservar la booleana y evaluar la silueta bajo iluminación; para fabricación hay controles adicionales. Esta semana tu evidencia es operación editable, un cambio de posición y una revisión básica. El siguiente módulo trata el borde del hueco y el sombreado para que no parezca una intersección matemática perfectamente afilada.

## Evidencia verificable

- Placa con agujero 20 mm y cortador atravesante
- Cortador invisible en render previsto
- Versiones editable y aplicada conservadas

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Booleanas y diagnóstico de artefactos](https://docs.blender.org/manual/en/4.5/modeling/modifiers/generate/booleans.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

