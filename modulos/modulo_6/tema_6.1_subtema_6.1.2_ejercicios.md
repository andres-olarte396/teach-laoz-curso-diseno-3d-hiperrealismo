# Ejercicios alternativos — Booleanas y diagnóstico de artefactos

**Tiempo:** los minutos de práctica de la tercera sesión. Elige una sola ruta, no las tres. Todas comprueban el mismo objetivo; el apoyo cambia y no se agregan horas.

## EJ-6.1.2-1 — Ruta Básica

**Reto:** Restar agujero central de 20 mm a placa 10 mm.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Boolean Difference Exact con cilindro 30 mm alto; inspección Wire.

**Resultado esperado:** Placa con agujero 20 mm y cortador atravesante. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si no aparece el agujero, el cortador puede no atravesar o aún estar tapándolo. Si falla con caras coplanares, alarga el cortador y evita contacto tangencial. Si el render muestra el cilindro, desactiva su cámara. Si aparece sombreado irregular, inspecciona geometría y normales antes de aumentar muestras de render. Si el modificador perdió Object, revisa si borraste o renombraste de modo incompatible la entrada; volver a seleccionarla suele recuperar la relación.

## EJ-6.1.2-2 — Ruta Intermedia

**Reto:** Desplazar agujero 20 mm sin editar placa.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Mover Cortador Location X0.02 m; modificador conserva relación.

**Resultado esperado:** Cortador invisible en render previsto. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si no aparece el agujero, el cortador puede no atravesar o aún estar tapándolo. Si falla con caras coplanares, alarga el cortador y evita contacto tangencial. Si el render muestra el cilindro, desactiva su cámara. Si aparece sombreado irregular, inspecciona geometría y normales antes de aumentar muestras de render. Si el modificador perdió Object, revisa si borraste o renombraste de modo incompatible la entrada; volver a seleccionarla suele recuperar la relación.

## EJ-6.1.2-3 — Ruta Avanzada

**Reto:** Diagnosticar contacto coplanar y comparar antes/después.

**Punto de partida:** archivo guardado al final de la segunda sesión; conserva una copia antes de experimentar. Usa las herramientas explicadas en este subtema.

**Procedimiento y solución razonada:** Alargar cortador; verificar intersección; conservar copia antes de Apply.

**Resultado esperado:** Versiones editable y aplicada conservadas. Conserva datos numéricos o conexión de nodos según corresponda, además de una comparación visual propia.

**Criterios:** 4 puntos por ejecutar la variante sin modificar piezas ajenas; 4 por mostrar su comprobación específica; 2 por explicar la decisión. Se acepta una solución distinta si produce el mismo resultado y puede verificarse.

**Diagnóstico si falla:** Si no aparece el agujero, el cortador puede no atravesar o aún estar tapándolo. Si falla con caras coplanares, alarga el cortador y evita contacto tangencial. Si el render muestra el cilindro, desactiva su cámara. Si aparece sombreado irregular, inspecciona geometría y normales antes de aumentar muestras de render. Si el modificador perdió Object, revisa si borraste o renombraste de modo incompatible la entrada; volver a seleccionarla suele recuperar la relación.

