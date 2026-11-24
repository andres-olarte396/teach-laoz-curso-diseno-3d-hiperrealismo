# 24.1.2 — Cámara, estudio y prueba de iluminación

Blender 4.5 LTS. Días 4, 5, 6: tres sesiones de veinte minutos. Lee concepto y pasos 1–2 en la primera; practica pasos 3–4 en la segunda; completa paso 5 y una variante del ejercicio en la tercera. Los cálculos largos de render son tiempo de máquina aparte.

## Concepto

La cámara final comunica el producto y establece qué detalles necesitarán calidad. La luz se ajusta para ese encuadre, pero sin convertir la escena en una ilusión que se rompe en otra vista razonable. La prueba de baja resolución detecta problemas antes del render definitivo.

## Caso resuelto

Caso resuelto: plástico y metal parecen demasiado similares en una prueba. Se mantiene la luz y se revisan metalicidad, rugosidad y asignación de material. Después se ajusta una fuente para que el metal refleje una forma reconocible; son comprobaciones separadas. La cámara de catálogo debe mostrar la característica principal y dejar margen. La profundidad de campo se mantiene moderada si una etiqueta es relevante. Antes del render final se guarda una prueba pequeña y una nota de decisión sobre material y otra sobre cámara o luz, aprovechando comparaciones ya realizadas.

## Procedimiento en Blender

1. Elige el encuadre de estudio aprobado y bloquea temporalmente la cámara para no moverla accidentalmente durante ajustes.
2. Revisa margen, dirección del producto y lectura de la etiqueta. Evita profundidad de campo que borre la característica principal en esta primera entrega.
3. Ajusta principal y relleno con sus funciones documentadas. Comprueba reflejos en metal y contacto con la base.
4. Renderiza una prueba de baja resolución y evalúa silueta, material y fondo. Escribe una sola prioridad de corrección.
5. Corrige esa prioridad, guarda ajustes y prepara el render de catálogo. El tiempo de máquina largo se realiza fuera de los minutos de estudio activo.

## Qué debe observarse

Cámara y estudio preparados con una prueba aprobada, sin defectos grandes que se descubran recién al exportar.

## Error, diagnóstico y corrección

Si el producto no se distingue, aumentar muestras no corregirá un encuadre o contraste incorrecto. Resuelve forma, luz y fondo antes de gastar tiempo de render.

## Prueba de comprensión

¿Qué problemas debería detectar una prueba pequeña antes del render final?

**Respuesta razonada:** Encuadre, silueta, contacto, reflejos principales, lectura del material y contraste con el fondo. Esos problemas no se resuelven simplemente aumentando muestras.

## Evidencia y referencia

Conserva una comparación que muestre «Escena final y prueba de baja resolución». Comprueba el cambio descrito, sin exigir un valor universal que dependa del producto o el equipo. [Manual de Blender 4.5](https://docs.blender.org/manual/en/4.5/render/shader_nodes/shader/principled.html). [Fuentes del tema](../../REFERENCIAS.md).
