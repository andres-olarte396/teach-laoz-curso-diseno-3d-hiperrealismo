# Preconceptos — Booleanas y diagnóstico de artefactos

**Dependencia:** 6.1.1. Repasa dentro de los minutos de recuperación; no añade trabajo fuera de sesión.

| Orden | Concepto y comprobación | Por qué se necesita | Importancia |
|---|---|---|---|
| 1 | Archivo recuperable: abrir la última versión y verificar su nombre. | Permite comparar y deshacer experimentos sin perder la evidencia anterior. | 10/10 |
| 2 | Contexto de interfaz: editor bajo el puntero y Object/Edit Mode. | Determina qué datos modifican las operaciones de esta lección. | 10/10 |
| 3 | Placa con agujero 20 mm y cortador atravesante. | Es la condición específica que se construye y verifica en este bloque. | 9/10 |

## Puente de conocimiento

Una booleana combina volúmenes: Difference resta el cortador, Union suma e Intersect conserva la parte común. Para ensayos previsibles se usan mallas cerradas y una intersección real, evitando caras apenas coincidentes. El modificador permite mantener el cortador para ajustar el hueco. Ocultarlo visualmente no siempre equivale a excluirlo del render; la gestión del cortador debe comprobarse. La operación puede producir caras alargadas o sombreado problemático, por lo que un hueco visible no demuestra automáticamente una malla preparada para subdivisión.

**Prueba breve:** responde oralmente: ¿Puedes borrar el cortador antes de aplicar una booleana y conservar su edición paramétrica? Revisa la explicación en la lección sólo después de intentarlo. Si aún no puedes responder, dedica los minutos de recuperación del siguiente día a repetir el primer paso; conserva la misma carga de 20 minutos.
