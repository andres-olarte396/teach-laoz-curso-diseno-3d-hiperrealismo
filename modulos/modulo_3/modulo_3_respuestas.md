# Solucionario — Semana 3: De vértices a volúmenes

## Pregunta 1

No. Reorienta normales de las caras existentes; la tapa exige nueva geometría, por ejemplo F sobre el contorno.

**Por qué falla la confusión habitual:** Si F crea una cara cruzada o extraña, has seleccionado puntos de otro contorno; deshaz y aísla el borde. Si Shift+N no arregla una superficie abierta, determina qué lado debe considerarse exterior y usa Flip de forma deliberada. Si una cara no admite selección, puede estar tapada por otra; gira la vista o usa X-Ray temporalmente. Si aparecen puntos superpuestos, Merge by Distance con una distancia pequeña puede unirlos, pero una distancia grande destruirá detalles.

## Pregunta 2

No. N-Gon es una cara con más de cuatro lados. El cierre depende de la conexión entre las caras, no de que todas sean cuadriláteros.

**Por qué falla la confusión habitual:** Si Non-Manifold selecciona el borde superior, aún falta tapa o sus vértices no están unidos. Si selecciona una arista con más de dos caras, revisa caras internas o duplicadas. Si al mover una cara se separa del resto, puede haber vértices duplicados sin conexión; deshaz y considera Merge by Distance con umbral prudente. Si X-Ray dejó de mostrar un sólido claro, apágalo después de seleccionar. Si borraste toda la caja, deshaz antes de añadir otra.

## Pregunta 3 — Demostración

**Subtema 1:** Identificar vértice, arista y cara en un cubo; Invertir y restaurar una cara observando Face Orientation; Cerrar un hueco con F y recalcular orientación. Recuperación: Si F crea una cara cruzada o extraña, has seleccionado puntos de otro contorno; deshaz y aísla el borde. Si Shift+N no arregla una superficie abierta, determina qué lado debe considerarse exterior y usa Flip de forma deliberada. Si una cara no admite selección, puede estar tapada por otra; gira la vista o usa X-Ray temporalmente. Si aparecen puntos superpuestos, Merge by Distance con una distancia pequeña puede unirlos, pero una distancia grande destruirá detalles.

**Subtema 2:** Caja reparada sin bordes abiertos seleccionados; Poste independiente con dimensiones correctas; Distinguir cara N-Gon de hueco. Recuperación: Si Non-Manifold selecciona el borde superior, aún falta tapa o sus vértices no están unidos. Si selecciona una arista con más de dos caras, revisa caras internas o duplicadas. Si al mover una cara se separa del resto, puede haber vértices duplicados sin conexión; deshaz y considera Merge by Distance con umbral prudente. Si X-Ray dejó de mostrar un sólido claro, apágalo después de seleccionar. Si borraste toda la caja, deshaz antes de añadir otra.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
