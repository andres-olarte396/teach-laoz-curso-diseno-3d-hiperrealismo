# Solucionario — Semana 6: Operaciones de modelado

## Pregunta 1

No. Merge actúa sobre vértices cercanos al plano según su umbral. Hay que ubicar el borde en el plano de simetría.

**Por qué falla la confusión habitual:** Si Mirror superpone el modelo entero, la geometría ya puede estar a ambos lados del origen: usa una mitad o un diseño deliberado con Bisect, no dupliques sin revisar. Si las piezas no se unen, comprueba X=0 y Merge. Si el grosor es desigual, revisa Scale y normales. Si pierdes la edición, quizá aplicaste el modificador; usa la versión anterior. Si añades Solidify a una caja que ya tiene paredes, puedes crear una segunda pared innecesaria.

## Pregunta 2

No. El modificador necesita el objeto de entrada. Conserva el cortador oculto o aplica primero sobre una copia.

**Por qué falla la confusión habitual:** Si no aparece el agujero, el cortador puede no atravesar o aún estar tapándolo. Si falla con caras coplanares, alarga el cortador y evita contacto tangencial. Si el render muestra el cilindro, desactiva su cámara. Si aparece sombreado irregular, inspecciona geometría y normales antes de aumentar muestras de render. Si el modificador perdió Object, revisa si borraste o renombraste de modo incompatible la entrada; volver a seleccionarla suele recuperar la relación.

## Pregunta 3 — Demostración

**Subtema 1:** Mirror respecto al origen verificado; Solidify 2 mm con Scale uno y Rim; Merge sólo une vértices próximos al plano. Recuperación: Si Mirror superpone el modelo entero, la geometría ya puede estar a ambos lados del origen: usa una mitad o un diseño deliberado con Bisect, no dupliques sin revisar. Si las piezas no se unen, comprueba X=0 y Merge. Si el grosor es desigual, revisa Scale y normales. Si pierdes la edición, quizá aplicaste el modificador; usa la versión anterior. Si añades Solidify a una caja que ya tiene paredes, puedes crear una segunda pared innecesaria.

**Subtema 2:** Placa con agujero 20 mm y cortador atravesante; Cortador invisible en render previsto; Versiones editable y aplicada conservadas. Recuperación: Si no aparece el agujero, el cortador puede no atravesar o aún estar tapándolo. Si falla con caras coplanares, alarga el cortador y evita contacto tangencial. Si el render muestra el cilindro, desactiva su cámara. Si aparece sombreado irregular, inspecciona geometría y normales antes de aumentar muestras de render. Si el modificador perdió Object, revisa si borraste o renombraste de modo incompatible la entrada; volver a seleccionarla suele recuperar la relación.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
