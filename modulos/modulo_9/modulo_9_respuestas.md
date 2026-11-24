# Solucionario — Semana 9: Coordenadas UV

## Pregunta 1

No. Marca cortes para coordenadas UV. La conectividad geométrica de la caja se conserva.

**Por qué falla la confusión habitual:** Si Unwrap no aparece, confirma Edit Mode y una malla seleccionada. Si UV Editor queda vacío, selecciona caras o activa opciones de sincronización conscientemente. Si costuras abren una grieta en 3D, ejecutaste una operación de separación geométrica, no Mark Seam; deshaz. Si las islas se superponen, Pack Islands ayuda, pero revisa la selección. Si una cara tiene proporción falsa, aplica Scale y vuelve a desplegar antes de estirar UV a ojo.

## Pregunta 2

No. Pueden tener mucha densidad pero estar estirados. Hay que comprobar proporción y cantidad de cuadros por medida real.

**Por qué falla la confusión habitual:** Si el objeto está gris, comprueba Material Preview y conexión Image Texture. Si los cuadros se estiran, revisa Scale aplicada y proporción de la isla. Si la imagen se repite, observa UV fuera del rango y Extension Repeat del nodo. Si se mueven varias islas, deshaz y revisa selección. Si Pack cambia la distribución, compara otra vez la región de interés. Una UV deformada no se corrige descargando una imagen de mayor resolución.

## Pregunta 3 — Demostración

**Subtema 1:** Costuras marcadas sin abrir geometría; Islas UV visibles y no solapadas involuntariamente; Cara frontal identificada. Recuperación: Si Unwrap no aparece, confirma Edit Mode y una malla seleccionada. Si UV Editor queda vacío, selecciona caras o activa opciones de sincronización conscientemente. Si costuras abren una grieta en 3D, ejecutaste una operación de separación geométrica, no Mark Seam; deshaz. Si las islas se superponen, Pack Islands ayuda, pero revisa la selección. Si una cara tiene proporción falsa, aplica Scale y vuelve a desplegar antes de estirar UV a ojo.

**Subtema 2:** UV Grid conectada a Base Color y visible; Cuadros aproximadamente cuadrados en la cara frontal; Deformación experimental deshecha y densidad comparada. Recuperación: Si el objeto está gris, comprueba Material Preview y conexión Image Texture. Si los cuadros se estiran, revisa Scale aplicada y proporción de la isla. Si la imagen se repite, observa UV fuera del rango y Extension Repeat del nodo. Si se mueven varias islas, deshaz y revisa selección. Si Pack cambia la distribución, compara otra vez la región de interés. Una UV deformada no se corrige descargando una imagen de mayor resolución.

**Comprobar:** el archivo abre, los valores/conexiones corresponden a la variante escogida y la explicación distingue operación y resultado. No se valora el número de herramientas usadas. Consulta los apartados “Ejemplo razonado” y “Errores y recuperación” de cada lección para corregir la causa.
