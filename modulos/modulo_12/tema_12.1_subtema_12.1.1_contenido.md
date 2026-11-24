# 12.1.1 — Microtextura a escala

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Una microtextura debe corresponder al tamaño del producto y a la distancia de observación. Un patrón que cubre una caja 60 mm de alto con sólo tres manchas se percibe como irregularidad grande, no como grano fino de plástico. Las coordenadas de textura determinan cómo se distribuye el patrón. Generated normaliza el objeto a una caja de referencia; Object permite una referencia de coordenadas ligada al objeto. Mantener escala aplicada y observar con una referencia métrica ayuda a evitar una frecuencia arbitraria.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Abre el material con Noise/Bump en una pieza métrica de prueba. Añade Texture Coordinate y conecta salida Object a Noise Vector. Confirma Scale del objeto uno y anota sus dimensiones. En Noise empieza Scale 1000 como frecuencia de ensayo para un objeto de aproximadamente 0.06 m de alto; el ruido no es una cuadrícula exacta, por lo que ese valor no demuestra un tamaño de grano de 1 mm. Mantén Bump Distance 0.00005 y Strength 0.15 para detalle muy tenue. Guarda semana12_microtextura.blend. Conserva el material liso para comparación.

## Sesión 2 — Comparación controlada

Compara Scale 100,1000 y 3000 con la misma vista. Anota si el patrón se lee como manchas grandes, grano o detalle demasiado fino para los píxeles disponibles. No elijas el número mayor automáticamente. Coloca un cubo auxiliar de 1 mm cerca de la pieza, sólo como referencia visual de tamaño; luego escóndelo de render. Revisa el detalle a distancia habitual y acercado. Si el patrón produce aliasing o parpadeo, no aumentes frecuencia indefinidamente: simplifica el detalle o usa su efecto en Roughness.

## Sesión 3 — Transferencia y comprobación

Conecta Noise Fac a un Color Ramp para limitar su salida. En el Color Ramp usa dos grises cercanos, por ejemplo 0.3 y 0.4, y conecta Color a Roughness de un material de copia. Desconecta temporalmente Bump para evaluar solamente microvariación de brillo. Compara con Roughness uniforme 0.35. Guarda las dos variantes y escribe cuál resulta más plausible para un organizador nuevo. La entrega requiere un cambio justificado, no todas las técnicas simultáneamente ni un render lento para probar una diferencia mínima.

## Ejemplo razonado

Ejemplo: la caja 60 mm vista con 100 píxeles de altura representa 0.6 mm por píxel. Un grano mucho menor no puede describirse con formas independientes en esa salida; puede contribuir a dispersión de reflejos. En una toma cercana con 1000 píxeles de altura el mismo objeto ocupa 0.06 mm por píxel y permite más detalle. Por eso la textura debe juzgarse en la imagen prevista. Scale de Noise es una frecuencia procedural, no una etiqueta física garantizada. Se estima por comparación, se conserva el valor y se revisa con cámara antes de aprobar el material.

## Errores y recuperación

Si el detalle parece rocas, aumenta frecuencia o baja amplitud. Si desaparece completamente, revisa escala de salida y luz antes de exagerarlo. Si un objeto estirado tiene grano deformado, revisa Scale y coordenadas. Si la textura cambia al mover la pieza, comprueba qué objeto de referencia se usa en Texture Coordinate. Si Roughness oscila entre 0 y 1 sin razón, limita rango con Color Ramp.

## Decisiones y conexión con el siguiente paso

La imperfección útil describe un proceso real: plástico moldeado, pintura pulverizada o metal cepillado. Aquí se practica una variación genérica controlada y se declara como tal; no se etiqueta material industrial exacto sin referencia. Dos valores cercanos suelen comunicar mejor una superficie nueva que una textura de alto contraste. El próximo subtema añade desgaste localizado por contacto y uso. Primero deja una microtextura base sobria para distinguir desgaste de ruido distribuido por toda la pieza.

## Evidencia verificable

- Coordenadas Object y Scale uno
- Frecuencia comparada 100/1000/3000
- Microvariación Roughness acotada 0.3–0.4

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Microtextura a escala](https://docs.blender.org/manual/en/4.5/render/shader_nodes/textures/noise.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

