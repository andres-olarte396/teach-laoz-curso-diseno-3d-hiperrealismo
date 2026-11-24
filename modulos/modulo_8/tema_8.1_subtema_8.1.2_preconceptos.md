# Preconceptos — Subdivisión y control de forma

**Dependencia:** 8.1.1. Repasa dentro de los minutos de recuperación; no añade trabajo fuera de sesión.

| Orden | Concepto y comprobación | Por qué se necesita | Importancia |
|---|---|---|---|
| 1 | Archivo recuperable: abrir la última versión y verificar su nombre. | Permite comparar y deshacer experimentos sin perder la evidencia anterior. | 10/10 |
| 2 | Contexto de interfaz: editor bajo el puntero y Object/Edit Mode. | Determina qué datos modifican las operaciones de esta lección. | 10/10 |
| 3 | Catmull-Clark comparado contra cubo original. | Es la condición específica que se construye y verifica en este bloque. | 9/10 |

## Puente de conocimiento

Subdivision Surface genera una superficie más suave a partir de una malla de control. Catmull-Clark subdivide y suaviza; Simple subdivide sin el mismo redondeo. Una caja sin bordes de soporte pierde sus esquinas al suavizarse. Los bucles próximos a un borde o las marcas de crease restringen esa transición. Más niveles no corrigen una mala distribución de caras. La superficie base debe permitir un recorrido claro de aristas, especialmente alrededor de cambios de forma.

**Prueba breve:** responde oralmente: ¿Más niveles de Subdivision eliminan automáticamente un pinzamiento? Revisa la explicación en la lección sólo después de intentarlo. Si aún no puedes responder, dedica los minutos de recuperación del siguiente día a repetir el primer paso; conserva la misma carga de 20 minutos.
