# Reporte de verificación documental y de recursos

D3DH-001 · Blender 4.5 LTS · revisión 2026-10-04.

## Estado de revisión

Bibliografía, recursos y conceptos de las 52 fichas revisados documentalmente. Se comprobaron las correcciones de coordenadas locales, medidas, cuerpo sin duplicado, cámaras, alfa y mapa de datos. Se cerró la revisión editorial de semanas 8–13 mediante párrafos reescritos y correcciones exactas, conservando palabras, atajos y nombres de interfaz. Los diarios coinciden con el presupuesto del plan. La revisión documental no constituye certificación práctica en Blender.

## Bibliografía

- 26 temas con tres apoyos cada uno: 78 vínculos de sustento, 37 páginas oficiales distintas.
- Acceso HTTP 200 y título Blender 4.5 LTS comprobados en las fuentes incluidas en `REFERENCIAS.md`.
- Los intentos iniciales fallidos se conservan en `material/referencias_verificadas.json`; no aparecen como fuentes válidas en la bibliografía.
- La fecha editorial individual del manual no está declarada: se usa s. f. El porcentaje de publicaciones posteriores a 2022 no puede establecerse con esa información.
- La exigencia del workflow de máximo dos apoyos del mismo sitio no se cumple: los tres son documentación oficial de la versión seleccionada. Se documenta la excepción y no se inventa diversidad.

## Conceptos contrastados

Se comprobaron fragmentos oficiales de Principled, Image Texture, Normal Map/Bump, gestión de color, Alpha Over y Shadow Catcher. El manual 4.5 sitúa Color Management en Render Properties. Alpha Over distingue imagen de fondo y de frente; su conversión de premultiplicación no debe activarse sin comprobar el estado del frente. Shadow Catcher se usa aquí con Cycles; su pase registra interacciones que el resultado simple aproxima. La transparencia de Film y PNG RGBA cumplen funciones diferentes.

En las 52 fichas se revisaron conceptos, procedimientos, ejemplos, resultados esperados, errores frecuentes y preguntas con respuestas. Se precisaron máscaras y salida de composición sin alterar el presupuesto diario. Los productos finales se presentan como primera producción acotada, sin garantía automática de hiperrealismo ni capacidad de fabricación.

## Correcciones comprobadas y URLs de lecciones

- Con orientación Local se usa G, X una vez; un segundo X alternaría la orientación. Se eliminó la instrucción contradictoria.
- Dimensions informa una caja alineada con ejes locales, no una envolvente global que cambie solo por rotación del objeto.
- El cuerpo de la caja se renombra sin duplicarlo para evitar una pieza superpuesta que tape la cavidad.
- Cam50 se nombra antes de reutilizarla; CamContexto se activa antes de alinear la cámara a la vista.
- El modo Straight de un PNG almacenado no obliga a convertir de nuevo el alfa de su salida en el compositor. La rama premultiplicada no se convierte dos veces.
- El mapa propio `material/rugosidad-050.png` tiene 32 × 32 píxeles, RGB 128 y alfa 255 en todos sus píxeles: como Non-Color representa 128/255 ≈ 0.502. Se compara con ese valor manual, evitando convertir inadvertidamente un color flotante al guardar PNG.
- Se comprobaron los 33 URLs únicos directos de las 52 lecciones: todos HTTP 200 y títulos Blender 4.5. Registro: `material/verificacion_urls_contenido.json`. La unión de estos enlaces con la bibliografía contiene 48 páginas distintas verificadas.

## Recursos funcionales

Dos simulaciones HTML sin dependencias de red: proyección de coordenadas y sombreado ilustrativo de una esfera. Siete pruebas funcionales en Chromium pasaron, sin errores de JavaScript; incluyen 32 combinaciones extremas de coordenadas, distancia y proyección para comprobar que el punto permanece visible. Se revisaron visualmente `material/preview-coordenadas.png` y `material/preview-luz.png`. La segunda simulación explica que su rugosidad es empírica y no equivalente numéricamente a Principled ni a Cycles.

Cuatro esquemas SVG propios ilustran geometría, capas de imagen, nodos PBR y montaje. No son capturas de Blender ni renders hiperrealistas. La etiqueta de práctica `material/etiqueta-laoz.png`, 300 × 150, se rasterizó a partir de un SVG propio y se abrió para revisión visual.

## Guías y tiempos

El diagnóstico ocupa cinco minutos del día 1, dentro de sus veinte. No requiere Blender instalado previamente: puede empezar con carpeta y observación. La preparación activa se distribuye en sesiones 1–3; descargas y render automático se registran aparte. Las guías incluyen interfaz English con explicación española, recuperación que sustituye ejercicios y evaluación dentro del presupuesto de 60 h 40 min.

## Límites y acciones pendientes

1. Limpieza editorial de semanas 8–13 completada: párrafos reescritos, identificadores protegidos y correcciones exactas comprobadas en los archivos generados. Los diarios de semanas 1–13 se alinearon con el reparto del plan; las salidas iniciales se ajustaron al avance real de cada día.
2. Probar ejercicios y escenas finales en la versión de Blender y equipo del estudiante; no se ha ejecutado Blender durante esta auditoría.
3. Realizar piloto de las sesiones para comprobar el ajuste del esfuerzo de un principiante; las duraciones son presupuesto curricular, no medición de una cohorte.
4. La revisión de maquetación, índice y exportación PDF corresponde al integrador y queda fuera de este reporte.


