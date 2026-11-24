# 14.1.2 — Luz principal, relleno y contacto

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La luz principal establece la forma dominante; el relleno controla cuánto se pierden las zonas oscuras. Las sombras de contacto comunican apoyo. Añadir más luces no asegura realismo: cada fuente debe tener una función reconocible y debe evitar direcciones contradictorias.

## Caso resuelto

Caso resuelto: un producto de 20 cm descansa sobre un plano. Con cámara y potencia constantes, una fuente Area de 10 cm produce un borde más definido que la misma fuente de 50 cm desde la misma distancia. No se concluye que 50 cm sea siempre mejor: se decide por la referencia. Después se agrega relleno con menor contribución y se compara su presencia/ausencia. Si el volumen pierde lectura, se reduce el relleno; si existe un hueco bajo el objeto, primero se corrige su posición. El contacto real y la sombra deben concordar.

## Procedimiento en Blender

1. Conserva la luz principal de la sesión anterior y realiza una prueba sin relleno para reconocer qué zona queda difícil de leer.
2. Añade una segunda Area al lado de las sombras, separada de la principal. Comienza con menor intensidad y examina su efecto antes de añadir otras fuentes.
3. Alterna temporalmente su contribución para comprobar qué cambia: la sombra debe seguir señalando la dirección de la principal, aunque se haga menos oscura.
4. Comprueba que la base y el producto se tocan realmente usando una vista lateral; corrige un hueco geométrico antes de intentar resolverlo con luz.
5. Guarda un recorte del contacto y otro del volumen completo. Anota el papel de la principal y del relleno en una frase cada uno.

## Qué debe observarse

Producto legible tanto en zonas iluminadas como oscuras, con dirección dominante y contacto visible. La prueba conserva los detalles relevantes sin aplanar el volumen.

## Error, diagnóstico y corrección

Un relleno demasiado intenso puede borrar la forma y crear una segunda sombra dominante. Reduce su contribución y revisa la dirección principal. Si el producto flota, revisa posición y base; aumentar oscuridad no elimina un hueco real.

## Prueba de comprensión

¿Cómo distinguirías falta de contacto geométrico de una sombra demasiado suave?

**Respuesta razonada:** Inspeccionaría el objeto y la base en una vista lateral para confirmar si existe un hueco. Solo después evaluaría dureza y dirección de la iluminación.

## Evidencia y referencia

Conserva una comparación que muestre «Pruebas controladas de iluminación». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/lights/light_object.html). [Fuentes del tema](../../REFERENCIAS.md).
