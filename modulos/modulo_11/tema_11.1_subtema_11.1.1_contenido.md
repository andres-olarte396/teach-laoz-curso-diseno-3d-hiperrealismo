# 11.1.1 — Color base, metal y rugosidad

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Principled BSDF reúne propiedades de superficie en un shader. Base Color define color; Metallic distingue la respuesta de un conductor frente a un material dieléctrico como plástico. Roughness describe dispersión del reflejo: valores bajos producen reflejos definidos y altos los hacen amplios. Un metal no se demuestra pintando el objeto gris. Necesita un entorno que pueda reflejar. Tampoco el realismo se obtiene poniendo todos los valores al máximo. Una comparación controlada muestra qué propiedad cambia cada aspecto de la imagen.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

En una copia del producto o una escena de ensayo crea dos UV Sphere de diámetro 60 mm, separadas 100 mm entre centros; aplica Scale y Shade Smooth. En Shading crea material Plastico Azul para la primera. Principled BSDF: Base Color azul moderado, Metallic 0, Roughness 0.35. Mantén sus otras propiedades predeterminadas; anota los tres valores. Activa Material Preview con un entorno de estudio y conserva ese entorno durante toda la comparación. Guarda semana11_materiales.blend. La esfera es una prueba de material, no el producto que debes rehacer.

## Sesión 2 — Comparación controlada

Para la segunda esfera crea un material independiente, no un duplicado enlazado del primero. Material Properties > New o copia el material y cambia su nombre a Metal Neutro. Base Color gris claro sin llegar a blanco puro, Metallic 1, Roughness 0.2. Observa reflejos del entorno. Cambia temporalmente Roughness a 0.6 y compara tamaño y nitidez de reflejos; deshaz o devuelve 0.2. Cambia Metallic a 0 y compara, después vuelve a 1. Cambia una variable cada vez. Una captura propia antes/después o una tabla de observaciones permite atribuir las diferencias.

## Sesión 3 — Transferencia y comprobación

Asigna un material plástico coherente al cuerpo y uno distinto a una pieza auxiliar si el diseño requiere metal. No hagas metálica toda la caja sólo porque parece más atractiva. Conserva valores razonados y la misma iluminación de prueba. Guarda semana11_producto_material.blend y escribe dos frases: qué parte es conductora y qué detalle visual apoya la elección; qué parte es dieléctrica y cómo cambia su reflejo. No se exige un render final aquí: Material Preview permite revisar la respuesta antes de estudiar iluminación formalmente.

## Ejemplo razonado

Ejemplo: dos objetos grises pueden representar aluminio y plástico gris. Con Metallic 1, el metal responde principalmente mediante reflejos coloreados por su superficie; con Metallic 0, el plástico mantiene una componente difusa y reflejos dieléctricos. Roughness 0.2 produce reflejos más definidos que 0.6 en ambos casos, aunque no idénticos. Si el entorno es uniforme, el metal puede parecer plano porque carece de formas que reflejar. Cambiar el material a uno brillante no añade bordes geométricos ni arregla normales. La interpretación necesita forma, iluminación y propiedades coherentes.

## Errores y recuperación

Si ambos materiales cambian juntos, compartían el mismo datablock: crea una copia independiente. Si el metal se ve negro, revisa el entorno antes de elevar Base Color. Si el color no aparece, usa Material Preview y confirma material asignado al objeto correcto. Si la superficie parece de cromo cuando buscas plástico, revisa Metallic. Si cambias entorno entre pruebas, repite con el mismo para obtener una comparación válida.

## Decisiones y conexión con el siguiente paso

PBR significa construir una respuesta de material con una aproximación físicamente coherente. No exige que cada parámetro sea un valor medido de laboratorio en esta práctica, pero sí distinguir metal y dieléctrico y evitar ajustes contradictorios. Los números propuestos son ensayos didácticos, no recetas universales de aluminio o ABS. Observa una referencia y documenta la decisión. La siguiente lección añade relieve aparente; comparar primero superficies lisas permite atribuir sus cambios a la normal en lugar de confundirlos con rugosidad.

## Evidencia verificable

- Materiales independientes para plástico y metal
- Metallic 0 frente a 1 comparado con luz constante
- Roughness 0.2 y 0.6 diferenciadas

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

[Observar luz y rugosidad en la simulación](../../simulaciones/luz-rugosidad.html). Su sombreado es empírico, no una simulación física ni una predicción de Cycles.

## Referencia técnica

[Manual Blender 4.5 LTS: Color base, metal y rugosidad](https://docs.blender.org/manual/en/4.5/render/shader_nodes/shader/principled.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

