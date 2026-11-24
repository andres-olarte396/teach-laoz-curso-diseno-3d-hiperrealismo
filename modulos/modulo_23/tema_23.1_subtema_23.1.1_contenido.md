# 23.1.1 — Dimensiones, componentes y superficies

Blender 4.5 LTS. Días 1, 2, 3: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

El modelo final se aprueba por las vistas que se usarán y por medidas documentadas. La geometría invisible puede ser sencilla, pero no debe producir defectos de sombras o reflejos. Los componentes deben poder revisarse individualmente.

## Caso resuelto

Caso resuelto: la base de una lámpara presenta una discontinuidad que la textura ocultaba. Con material neutro y luz de inspección se identifica un borde de sombreado, se revisan geometría y normales y se compara la corrección desde la cámara. Luego se comprueba etiqueta con cuadrícula UV; una región estirada se corrige antes de aplicar la imagen definitiva. La ficha registra tres dimensiones reales. Se añade una decisión breve a la bitácora: qué defecto se corrigió y por qué. No se inicia una técnica nueva ni se reconstruye el producto completo.

## Procedimiento en Blender

1. Abre el producto ya practicado y compara tres dimensiones con su ficha, sin comenzar un modelo nuevo. Si usas la lámpara básica propuesta: base de diámetro 0,12 m y altura 0,012 m, centro Z = 0,006 m; cuerpo de diámetro 0,018 m y altura 0,20 m, centro Z = 0,112 m; pantalla de altura 0,10 m con centro Z = 0,262 m. Es una guía editable: si tu ficha previa fija otras medidas, conserva las tuyas y comprueba apoyo y continuidad.
2. Inspecciona silueta en frontal, lateral y cámara prevista. Busca huecos, intersecciones y piezas fuera de sitio.
3. Revisa bordes que aparecerán en primer plano. Ajusta biseles y confirma que no cambian de forma incoherente entre piezas.
4. Usa un material neutro e iluminación de inspección para detectar sombreado defectuoso. Corrige su causa geométrica o de normales.
5. Guarda una versión aprobada del modelo y tres capturas de comprobación. Anota defectos aceptados que no afectan la imagen y por qué.

## Qué debe observarse

Modelo consistente con la ficha y sin defectos visibles relevantes en las vistas de entrega. La revisión distingue decisiones de simplificación de errores.

## Error, diagnóstico y corrección

Si intentas esconder una mala superficie con rugosidad o textura, puede reaparecer bajo otra luz. Recupera la inspección neutra y corrige primero geometría o normales.

## Prueba de comprensión

¿Por qué conviene revisar el modelo con material neutro?

**Respuesta razonada:** Porque permite observar forma y sombreado sin que texturas o reflejos complejos oculten la causa de una discontinuidad.

## Evidencia y referencia

Conserva una comparación que muestre «Modelo final y vistas de inspección». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/modeling/meshes/uv/unwrapping/introduction.html). [Fuentes del tema](../../REFERENCIAS.md).
