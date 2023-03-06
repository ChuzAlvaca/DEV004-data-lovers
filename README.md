# Universo Ghibli

## Índice

* [1. Preámbulo Studio Ghibli](#1-Preámbulo-Studio-Ghibli)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Resultados de investigacion de usuario](#3-Resultados-de-investigacion-de-usuario)
* [4. Historias de usuario](#4-Historias-de-usuario)
* [5. Proceso de diseño de interfaz de usuario](#5-Proceso-de-diseño-de-interfaz-de-usuario)
* [6. Testeos de usabilidad](#6-Testeos-de-usabilidad)
* [7. Pruebas unitarias.](##7-Pruebas-unitarias)
* [8. Referencias.](##8-Referencias)



***

## 1. Preámbulo Studio Ghibli

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes
animados como **Mi vecino Totoro**, **El viaje de Chihiro** o
**El castillo ambulante**, entre otros grandes éxitos.

Las animaciones tienen gran acogida a nivel mundial y algunas han recibido
varias nominaciones y premios. De todo este fandom hay un grupo que desea poder
interactuar y ver la información de las animaciones y sus personajes.

## 2. Resumen del proyecto

En este proyecto construimos una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúa a nuestra investigación de usuario respecto al Fandom de estudio Ghibli.

Como entregable final  tenemos una página web que permite **visualizar los pósters de cada película donde 
filtramos las peliculas por productor , ordenamos por puntuacion de RT, por fecha de lanzamiento de cada pelicula
y calculamos la cantidad de personajes por pelicula; al calcular los personajes podemos visualizar la imagen de cada uno con su nombre.

## 3. Resultados de investigación de usuario.

Para entender mejor qué información podrían necesitar nuestras usuarias,
hicimos una rápida investigación (research) y estos son algunos de los
hallazgos.
- Studio Ghibli tiene varias animaciones, para nuestras usuarias es importante
  saber cuántas y cuáles son.
- Las animaciones tienen directorxs y productorxs. Estxs son las mentes detrás
  de una gran animación. En Studio Ghibli hay directorxs y productorxs que han
  colaborado en la creación de más de una animación. Por ello, es importante
  para nuestra usuaria poder conocerlos y saber cuántas y cuáles son las
  animaciones a las que dieron “vida”.
- Las animaciones tienen información relevante para nuestras usuarias, como
  descripción, fecha de lanzamiento, peso, director, productor y personajes.
- Cada animación tiene sus personajes, para nuestras usuarias es importante
  saber cuántos y cuáles son
- Los personajes tienen características únicas que la usuaria quiere saber, como
  nombre, edad, género, especie, etc.
- Las animaciones tienen locaciones y vehículos únicos en cada una. Para
  nuestras usuarias es importante saber cuáles son.
- Adicionalmente a esta información, para nuestras usuarias es importante poder
  ver los tipos de especies que hay en cada animación.



## 4. Historias de usuario.
* A partir de la investigación llegamos a 4 historias de usuario.
 <img width="8491" alt="historias de usuario" src="https://user-images.githubusercontent.com/122368809/222306874-0e86faea-e587-4081-bbe7-fc5939dd9bea.png">

* Estas historias las hicimos para definir las 4 funciones que son mencionadas en los objetivos de aprendizaje del proyecto, las cuales son: visualizar, ordenar, filtrar y calcular. Las ideamos pensando en hacerlas en dicho órden cronológico,pero cambió en el camino y esto pasó por lo siguiente.
    - Cuando llegamos al momento de hacer a función de filtrado, nos dimos cuenta que finalmente no estaríamos cumpliendo con el objetivo de aprendizaje por el formato de nuestra data, por lo que ahí decidimos hacer un reordenamiento de las historias, dejándolas finalmente como se muestra en la siguiente imagen:

<img width="8235" alt="historias de usuario (2)" src="https://user-images.githubusercontent.com/122368809/222311634-8f8fe129-a31c-40eb-b4c5-2325aa278334.png">
    -Acá también ya teníamos mas claridad de lo que queríamos plantear y lo reordenamos.


## 5. Proceso de diseño de interfaz de usuario.
* Primer bosquejo de cómo nos planteamos la IU a grandes razgos:
![Bosquejo 1 ](https://user-images.githubusercontent.com/122368809/222309698-375c5c69-6a73-444d-bec1-d180bd80834e.png)

* Primer prototipo de baja:
![prototipo de baja](https://user-images.githubusercontent.com/122368809/222309762-07880e92-1443-4c47-a857-383912fcae26.png)

* Primer prototipo de alta:
![prototipo_de_alta_propuesta_corregida_sin_paleta_definitiva (7) 001](https://user-images.githubusercontent.com/122368809/222309786-99f72b12-2e0c-4c18-913a-65966798afc8.png)

* Segundo prototipo de alta dirigido a teléfonos (lo hicimos posteriormente, al darnos cuenta que es necesario para iniciar el diseño responsive).
![prototipo_alta_celular 001](https://user-images.githubusercontent.com/122368809/222309749-f39da327-5f5a-4b11-9c74-6ecbe5db40eb.png)

## 6. Testeos de usabilidad.
## problemas identificados:

  1.Teníamos iconos en formato imagen que eran dificiles de entender.
  -cambiamos iconos por botones desplegables, de manera que fuera mas intuitivo el uso.
  2.Teníamos una paleta de colores sin alto contraste, y hacia que la pagina fuera muy plana.
  -cambiamos el contraste de la paleta de colores para que fuese acorde al tema.
  3.Teníamos palabras que eran poco explicativas de qué hacia el botón de la función de ordenar.
  -cambiamos a palabras que hicieron el botón más comprensible.
  4.Teníamos una imagen de fondo trasparente que era muy grande,plana y difícil de manipular.
  -cambiamos la imagen del banner, a una que le diera mas color y diversidad a la pagina.
  5.En nuestra data original del proyecto, incluían links de imagenes rotos.
  -Fueron reemplazamos por una imagen genérica, acorde al tema, para que no quedara incongruente con la página.

## 7. Pruebas unitarias.
*Aplicamos test sobre la funcion filter y sort, la cuales nos dan un 95.45% en statement, 87.5% en branch, 100% en function y 95.23 en lines.
![Captura de Pantalla 2023-03-02 a la(s) 13 18 09](https://user-images.githubusercontent.com/122368809/222487489-56f78ade-a24a-43ca-a590-11d8f8720690.png)


## 8.Recursos
 *https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *https://parzibyte.me/
 *https://getbootstrap.com/docs/5.3/layout/breakpoints/
 *https://developer.mozilla.org/es/
 *https://www.youtube.com/watch?v=3C3I1HoGeaU


