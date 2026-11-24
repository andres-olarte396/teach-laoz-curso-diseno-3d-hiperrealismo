# 1.1.1 — Diagnóstico, preparación de Blender e interfaz

**Presupuesto:** tres sesiones de 20 minutos, incluidos lectura selectiva, práctica, elección de un ejercicio y comprobación. Blender 4.5 LTS, mapa Blender e interfaz English.

## Lectura breve de la primera sesión

Un archivo .blend guarda la escena: objetos, geometría, materiales y muchas configuraciones. Una imagen final es otra salida y no permite recuperar automáticamente el modelo editable. La interfaz distribuye tareas entre editores. El área grande central es el 3D Viewport; Outliner muestra nombres y jerarquías; Properties contiene ajustes. El puntero determina qué editor recibe un atajo. Esta relación explica por qué una misma tecla puede actuar de manera diferente cuando el ratón está sobre otro panel. Hoy importa poder abrir, seleccionar, guardar y recuperar un proyecto, antes de dibujar formas complejas.

Lee este párrafo y el procedimiento de hoy. Las demás secciones son una referencia para los siguientes días; no leas toda la lección antes de abrir Blender.

## Sesión 1 — Construcción guiada

Si aún no está instalado, usa el instalador de Blender 4.5 LTS obtenido del sitio oficial. La descarga y las esperas pueden continuar fuera del estudio; los clics de instalación y primera apertura ocupan el bloque práctico de hoy. No cambies asociaciones ni preferencias que no comprendas. Si la instalación consume ese bloque, guarda una nota y realiza la primera apertura en la sesión 2, sustituyendo la duplicación de práctica. Selecciona el mapa de teclas Blender, no Industry Compatible. Identifica Viewport, Outliner y Properties. En la escena inicial, pulsa sobre Cube y comprueba el contorno naranja. Escribe qué objeto seleccionaste y qué panel lo confirma. En Edit > Preferences > Interface > Translation selecciona Language English para encontrar los menús con los nombres enseñados; el curso explica su significado en español. No necesitas dominar inglés para usar esos nombres de interfaz.

## Sesión 2 — Comparación controlada

Crea una carpeta D3DH con subcarpetas proyectos, referencias y entregas usando el explorador del sistema. En Blender usa File > Save As; guarda proyectos/semana01_v01.blend. Haz una modificación pequeña: selecciona Cube y cambia su nombre mediante F2 a Ensayo. Guarda con Ctrl+S. Usa File > Open para volver a abrir ese mismo archivo y confirma el nombre Ensayo. En el Outliner prueba seleccionar Camera y después Light sin borrarlos. Regresa al cubo. No confíes en que el último archivo del menú reciente sea la versión correcta: verifica carpeta y nombre antes de trabajar.

## Sesión 3 — Transferencia y comprobación

Abre el archivo guardado y navega sin modificar el cubo. Mantén el botón central para orbitar, Shift más botón central para desplazar la vista y rueda para acercarte. Si tu ratón carece de botón central, usa los controles del gizmo de navegación en la esquina del Viewport; sus iconos de mano y lupa permiten desplazar y acercar. View > Frame Selected centra el objeto seleccionado. Usa File > Save As y crea semana01_v02.blend. Cierra y abre v02. Registra en una línea la diferencia entre v01 y v02; ambas deben continuar disponibles.

## Ejemplo razonado

Ejemplo resuelto: Ana cambia Cube a Ensayo y guarda v01. Después se acerca con la rueda y cree haber agrandado el objeto. Consulta sus dimensiones en N > Item y comprueba que siguen siendo las mismas: navegó por la escena. Guardar v02 permite conservar la nueva vista sin reemplazar el primer ensayo. La evidencia útil es el archivo reabierto y el nombre del objeto, no una captura de pantalla aislada. Si Blender se cierra inesperadamente, File > Recover ofrece opciones de recuperación; una recuperación es una ayuda adicional, no una razón para omitir el guardado regular.

## Errores y recuperación

Si el atajo no responde, coloca el puntero sobre el Viewport y repite una sola vez. Si desaparece el cubo al alejarte, selecciónalo en Outliner y usa Frame Selected. Si no puedes guardar en una carpeta protegida, elige una carpeta personal con permiso de escritura. Si el nombre termina .blend.blend, revisa la extensión antes de crear otra copia. Una escena vacía no significa necesariamente pérdida: comprueba qué colección está visible.

## Decisiones y conexión con el siguiente paso

Trabajarás con versiones deliberadas, no con nombres como final_final. La fecha o número de versión debe permitir decidir cuál continuar. Conserva los archivos de recursos externos dentro del proyecto; en semanas posteriores una imagen enlazada puede desaparecer al mover carpetas. Por ahora no descargues modelos ni instales complementos. Mantener una escena simple permite distinguir un problema de navegación de un problema del contenido. La próxima lección utiliza esta misma recuperación para experimentar con coordenadas sin miedo a perder el punto de partida.

## Evidencia verificable

- Reabrir semana01_v02.blend y encontrar Ensayo
- Identificar Viewport, Outliner y Properties sin leer los nombres
- Explicar por qué acercar la vista no cambia Dimensions

Durante el tercer día elige una sola variante del archivo de ejercicios. El resultado se conserva en el archivo editable y se contrasta con estos criterios; una captura propia es apoyo, no sustituto de la escena.

## Referencia técnica

[Manual Blender 4.5 LTS: Diagnóstico, preparación de Blender e interfaz](https://docs.blender.org/manual/en/4.5/interface/window_system/introduction.html). Las explicaciones y ejemplos del curso son propios. Los procedimientos fueron revisados documentalmente, pero no ejecutados en una instalación de Blender durante esta producción; corresponde comprobar interfaz y resultado al realizar la práctica.

