# Universo Ghibli

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

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

Como entregable final  tenemos una página web que permite **visualizar la data, donde 
filtramos por productor , ordenamos por puntuacion de RT, por fecha de lanzamiento de cada pelicula
y calculamos la cantidad de personajes por pelicula.

## 3. Resultados de investigacion de usuario.

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



## 4. Historias de usuario
* A partir de la investigacion llegamos a 4 historias de usuario.
 <img width="8491" alt="historias de usuario" src="https://user-images.githubusercontent.com/122368809/222306874-0e86faea-e587-4081-bbe7-fc5939dd9bea.png">

* Estas historias las hicimos para definir las 4 funciones que son mencionadas en el Readme del proyecto, las cuales son visualizar, ordenar, filtrar y calcular. Las ideamos pensando en hacerlas en ese orden cronológico,pero cambio en el camino y esto paso por lo siguiente.
    - Cuando llegamos al momento de hacer a funcio de filtrado, nos dimos cuenta que finalmente no estariamos cumpliendo con el objetivo de aprendizaje por el formato de nuestra data, por lo que ahi decidimos hacer un reordenamiento de las historias dejandolas finalmente como se muestra en la siguiente imagen.

<img width="8235" alt="historias de usuario (2)" src="https://user-images.githubusercontent.com/122368809/222311634-8f8fe129-a31c-40eb-b4c5-2325aa278334.png">
    -Aca tambien ya teniamos mas conocimiento de lo que queriamos plantear y lo ordenamos.


## 5. Proceso de diseño de interfaz de usuario
* Esta fue la primera intención que tuvimos de mostrar de que manera queríamos ir ordenando nuestras ideas, lo hicimos en una hoja con lápiz.
![Bosquejo 1 ](https://user-images.githubusercontent.com/122368809/222309698-375c5c69-6a73-444d-bec1-d180bd80834e.png)

* Este fue nuestro protototipo de baja, lo hicimos en paint.
![prototipo de baja](https://user-images.githubusercontent.com/122368809/222309762-07880e92-1443-4c47-a857-383912fcae26.png)

* Este fue el primer prototipo de alta, lo hicimos en key note
![prototipo_de_alta_propuesta_corregida_sin_paleta_definitiva (7) 001](https://user-images.githubusercontent.com/122368809/222309786-99f72b12-2e0c-4c18-913a-65966798afc8.png)

* Este fue el segundo prototipo de alta, dirigido a telefonos, lo hicimos porque nos dimos cuenta que debiamos tenerlo para poder hacer las correcciones al momento de hacer diseño responsive.
![prototipo_alta_celular 001](https://user-images.githubusercontent.com/122368809/222309749-f39da327-5f5a-4b11-9c74-6ecbe5db40eb.png)



#### Testeos de usabilidad 
*problemas identificados 
  1.Teníamos iconos enformato imagen que eran dificiles de entender.
  -cambiamos iconos por botones desplegables, de manera que fuera mas intuitivo el uso.
  2.Teníamos una paleta con mucha igualdad de colores y hacia que la pagina fuera muy plana.
  -cambiamos el contraste de la paleta para que fuese acorde al tema
  3.Teníamos palabras que eran poco explicativas de que hacia el boton de la funcion de ordenar.
  -cambiamos a palabras que hacian el botón más comprensible
  4.Teníamos una imagen de fondo trasparente que era muy grande y   plana y difícil de manipular 
  -cambiamos la imagen del banner, a una que le diera mas color y diversidad a la pagina.
  5.En nuestra data venían algunas imagenes caídas
  -Las reemplazamos por una imagen genérica, acorde al tema, para que no quedara incongruente con la pagina.




### Implementación de la Interfaz de Usuario (HTML/CSS/JS)
***fotos del codigo y fotos de responsive en cada formato


### Pruebas unitarias
*Aplicamos test sobre la funcion filter y sort, la cuales nos dan un 81% de statement 
![Captura de Pantalla 2023-03-02 a la(s) 13 18 09](https://user-images.githubusercontent.com/122368809/222487489-56f78ade-a24a-43ca-a590-11d8f8720690.png)





