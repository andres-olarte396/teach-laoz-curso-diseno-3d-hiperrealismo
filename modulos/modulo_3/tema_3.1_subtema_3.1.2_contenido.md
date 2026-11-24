# 3.1.2 — Primitivas, selección y malla cerrada

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Las primitivas son formas iniciales: cubo, cilindro, esfera y plano. Ahorran construir sus vértices uno por uno, pero no garantizan que cualquier edición posterior conserve una malla cerrada. Seleccionar controla qué cambia; una selección incompleta es una causa frecuente de deformaciones. Una malla cerrada simple tiene cada arista compartida por dos caras y carece de agujeros. Esto describe conectividad, no tolerancias de fabricación. Una pieza visualmente aceptable todavía puede autointersectarse o necesitar revisión especializada para impresión 3D.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 4 — Construcción guiada

En escena métrica añade Mesh > Cube. Dimensions (0.12,0.08,0.06) m; Apply Scale. Guarda caja_base.blend. Tab entra en Edit Mode, elige Face y deselecciona con Alt+A. Selecciona sólo la cara superior desde arriba. Usa X > Only Faces. Orbita para confirmar el hueco y cambia temporalmente a Wireframe con Z > Wireframe si necesitas ver el contorno. El cubo ya no está cerrado aunque todavía conserve su silueta desde abajo. No borres vértices del borde: necesitarás ese perímetro para reconstruir la tapa.

## Sesión 5 — Comparación controlada

Activa Edge y deselecciona todo. Selecciona una arista del hueco y después las otras tres con Shift. Pulsa F. Cambia a Solid, selecciona todo y Shift+N. Para revisar límites usa Select > Select All by Trait > Non-Manifold en modo de selección de vértices o aristas; antes deselecciona todo. En un cubo cerrado sencillo no deberían seleccionarse aristas de borde. Si aparece selección, examina dónde está y no concluyas que el modelo está listo sólo porque el menú no muestra advertencias. Guarda caja_reparada.blend separada de la versión con hueco.

## Sesión 6 — Transferencia y comprobación

Añade un cilindro independiente. En Adjust Last Operation configura 16 vértices y tapas N-Gon, si el panel aún está disponible; si no, deshaz y vuelve a añadirlo. Ajusta Dimensions a (0.04,0.04,0.06) m y Apply Scale. Nómbralo Poste. El cubo y el cilindro son dos objetos aunque sus superficies puedan interpenetrarse. Selecciónalos en Outliner uno por uno. Compara el borde de la tapa del cilindro con una arista lateral: la tapa puede ser una cara de muchos lados. Conserva esa geometría simple; no subdividas por rutina para hacerla parecer más avanzada.

## Ejemplo razonado

Ejemplo: una caja reparada tiene ocho vértices, doce aristas y seis caras si no se han añadido cortes. El cilindro de 16 lados tiene dos tapas de 16 lados y 16 caras laterales cuando se genera con tapas N-Gon. No es un error por sí mismo que sus tapas no sean cuadriláteros. Los cortes y la subdivisión posteriores exigirán decidir si esa distribución es adecuada. Para el producto inicial una geometría mínima y comprensible permite editar medidas sin perderse. El recuento sirve para detectar duplicados o operaciones inesperadas, no como indicador universal de calidad.

## Errores y recuperación

Si Non-Manifold selecciona el borde superior, aún falta tapa o sus vértices no están unidos. Si selecciona una arista con más de dos caras, revisa caras internas o duplicadas. Si al mover una cara se separa del resto, puede haber vértices duplicados sin conexión; deshaz y considera Merge by Distance con umbral prudente. Si X-Ray dejó de mostrar un sólido claro, apágalo después de seleccionar. Si borraste toda la caja, deshaz antes de añadir otra.

## Decisiones y conexión con el siguiente paso

No necesitas una topología perfecta para practicar selección, pero debes conocer el estado de tu pieza. Una caja abierta para un organizador puede ser deliberada; una caja que se afirma cerrada debe demostrarlo. Mantén el nombre del archivo vinculado a su estado para no entregar la versión con hueco por accidente. Las primitivas se ajustan a las proporciones reales en la siguiente semana. Verificar su cierre ahora evita construir materiales, etiquetas y luces sobre una base que luego tendrás que rehacer.

## Evidencia verificable

- Caja reparada sin bordes abiertos seleccionados
- Poste independiente con dimensiones correctas
- Distinguir cara N-Gon de hueco

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Primitivas, selección y malla cerrada](https://docs.blender.org/manual/en/4.5/modeling/meshes/selecting/introduction.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

