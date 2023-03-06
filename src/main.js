
import ghibli from './data/ghibli/ghibli.js';
import {filtrarProductor, ordenarMasVieja, ordenarPuntuacionMayor } from './data.js';
//En el import se borraron las funciones que al final no utilizamos (ordenarMasNueva y ordenarPuntuacionMenor)

const showTitleImage = (arrayGhibli) => { // la fn recibe arreglo como parametro
  const principal = document.getElementById('container');
  principal.innerHTML = '';
  if (principal) {
    for (let i = 0; i <  arrayGhibli.length; i++) {
      const divColumna = document.createElement('div');
      const creaDiv = document.createElement('div');
      const creaimg = document.createElement('img');
      divColumna.setAttribute('class', 'columna');
      creaDiv.innerHTML = arrayGhibli[i].title;
      creaDiv.classList.add("posterTitle");
      creaimg.setAttribute('src', arrayGhibli[i].poster)
      creaimg.classList.add("posterStyle");
      divColumna.appendChild(creaDiv);
      divColumna.appendChild(creaimg);
      principal.appendChild(divColumna);
    }
  }
}
showTitleImage(ghibli.films); // enviamos arreglo como argumento

const ordenar = document.querySelector('#ordenar');
ordenar.addEventListener('change', (event) => {
  if (event.target.value === "menosReciente"){
    document.getElementById("container").innerHTML = "";
    const filmsOrdenadas = ordenarMasVieja(ghibli.films) // [5,4,3].reverser() === [3,4,5]
    showTitleImage(filmsOrdenadas);
 
  }
  if (event.target.value === "masReciente"){
    const filmsOrdenadasReverse = ordenarMasVieja(ghibli.films).reverse()
    showTitleImage(filmsOrdenadasReverse )
   
  }
  if (event.target.value === "mayorRt"){
    document.getElementById("container").innerHTML = "";
    showTitleImage(ordenarPuntuacionMayor(ghibli.films))
   
  }
  if (event.target.value === "menorRt"){
    document.getElementById("container").innerHTML = "";
    const filmsMejorPuntuadasReverse = ordenarPuntuacionMayor(ghibli.films).reverse()
    showTitleImage(filmsMejorPuntuadasReverse) // envias argumento 
  }
  document.getElementById("numero-de-personajes").innerHTML = "";
});
const filtrar = document.querySelector('#filtrar');
filtrar.addEventListener('change', (event) => {
  if (event.target.value === 'Isao Takahata') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Isao Takahata') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Toshio Suzuki') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Toshio Suzuki') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Hayao Miyazaki') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Hayao Miyazaki') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Toru Hara') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Toru Hara') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'Yoshiaki Nishimura') {
    document.getElementById("container").innerHTML = "";
    const filmsFiltradas = filtrarProductor(ghibli.films, 'Yoshiaki Nishimura') 
    showTitleImage(filmsFiltradas);
  }
  if (event.target.value === 'todas') {
    document.getElementById("container").innerHTML = "";
    showTitleImage(ghibli.films);
  }
  document.getElementById("numero-de-personajes").innerHTML = "";
});

// definir funcion 
//input --codigo ---output 
//hacer que el código se vuelva un objeto 
// function printImages (arreglo){
//   console.log(arreglo)
// }
//for tradicional recorre cada pelicula, nos permite acceder a un primer nivel de propiedades .film
function showPersonajes (title) {
  const arrOriginal = ghibli.films;

  for (let i = 0; i < arrOriginal.length; i++){
    const film = arrOriginal[i];{
      
      if (film.title === title){
        // const llamado = ('La pelicula '+ (values[0].title)+ 'tiene '+ (values[0].people))
  
        const totalPersonajes = document.getElementById ("numero-de-personajes");
        // pase esto para aca para poder acceer a todos los datos que requiero, osea el titulo y los personajes.
        totalPersonajes.innerHTML = "En la pelicula "+ film.title + " existen " + film.people.length + " personajes";
        showPersonajes2(film.people);
      }
    }
  }
}


//función que despliega todas las peliculas en el menú desplegable.
// showSelect(ghibli.films) 
const selector = (arrayGhibli) =>{
  const values = (arrayGhibli)
  const $select = document.getElementById("personajes")
  //empty option
  const $option = document.createElement("option")
  $option.value = ""
  $option.innerHTML = "Por Pelicula"
  $select.appendChild($option)
  values.forEach(values => {
    const $option = document.createElement("option")
    $option.value = values.title
    $option.innerHTML = values.title
    $select.appendChild($option)

  })
}
selector(ghibli.films)

//función que conecta el menú desplegable con el container que despliega las imagenes de los personajes.
const $select = document.getElementById("personajes")
$select.addEventListener('change',function(){
  document.getElementById("container").innerHTML = "";
  showPersonajes($select.value)
  // con este inner borramos el parrafo de calculo y lo replico en la funcion de filtar y ordenar para que no salga 
  if ($select.value === "") {
    document.getElementById("container").innerHTML = "";
    // con este inner borramos el parrafo de calculo y lo replico en la funcion de filtar y ordenar para que no salga 
    document.getElementById("numero-de-personajes").innerHTML = "";
    showTitleImage(ghibli.films);
  }
});


// / función que despliega personajes de la data en container. 
const showPersonajes2 = (personajes) => { // la fn recibe arreglo como parametro
  const principal = document.getElementById('container');
  // const totalPersonajes = document.getElementById ("numero-de-personajes");
  // totalPersonajes.innerHTML = "Esta película tiene un total de" + " " + personajes.length + " "+ "personajes";

  if (principal) {
    for (let i = 0; i < personajes.length; i++) {
      const divColumna = document.createElement('div');
      const creaDiv = document.createElement('div');
      const creaimg = document.createElement('img');
      divColumna.setAttribute('class', 'columna');
      creaDiv.innerHTML =personajes[i].name;
      creaDiv.classList.add("posterTitle");
      creaimg.setAttribute('src',personajes[i].img)
      creaimg.classList.add("posterStyle");
      divColumna.appendChild(creaDiv);
      divColumna.appendChild(creaimg);
      principal.appendChild(divColumna);
    }
  }
}





//const arrayPrueba = [];

/*
  film.people.forEach(function (personaje,) {
    // console.log ([film.id,film.title, personaje.name, personaje.img]);
    const nuevoObjeto = {film.id,film.title, personaje.name, personaje.img};
    console.log (nuevoObjeto); 
    arrayPrueba.push(nuevoObjeto)
  });*/




// let greaterTen2 = numbers.filter(number => number > 10 );



//     
//   
// 
// método de iteración map




//forma de acceder, muy rudimentariamente, los datos son string puros.
// console.log(ghibli.films[0].people)

//asi llegas a los datos puros en forma string: 
// ghibli.films.forEach(function (film) {
//   film.people.forEach(function (personaje,) {
//     console.log ([film.title, personaje.name, personaje.img]);
//   });
// });

// const showSelect = (arrayGhibli) => { // la fn recibe arreglo como parametro
//   const select = document.getElementById('personajes');
//   if (select) {
//     for (let i = 0; i <  arrayGhibli.length; i++) {
//       const creaDiv = document.createElement('div');
//       creaDiv.innerHTML = arrayGhibli[i].title;
//       creaDiv.classList.add("movieTitle");
      
      
//     }
//   }
// 
// showSelect(ghibli.films)






