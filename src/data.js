import ghibli from './data/ghibli/ghibli.js';
export function ordenarMasNueva() {
  const copiaGhibli = [...ghibli.films]
  copiaGhibli.sort(function (a, b) {
    if (parseInt(a.release_date) > parseInt(b.release_date)) {
      return -1;
    }
    if (parseInt(a.release_date) < parseInt(b.release_date)) {
      return 1;
    }
    return 0;
  });
  return copiaGhibli
}

export function ordenarMasVieja() {
  const copiaGhibli = [...ghibli.films]
  copiaGhibli.sort(function (a, b) {
    if (parseInt(a.release_date) > parseInt(b.release_date)) {
      return 1;
    }
    if (parseInt(a.release_date) < parseInt(b.release_date)) {
      return -1;
    }
    return 0;
  });
  return copiaGhibli
}
console.log(ordenarMasVieja())

export function ordenarPuntuacionMayor() {
  const copiaGhibli = [...ghibli.films]
  copiaGhibli.sort((a, b) => { 
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return -1;
    }
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
      return 1;
    }
    return 0;
  });
  return copiaGhibli
}

export function ordenarPuntuacionMenor() {
 
  const copiaGhibli = [...ghibli.films]
  
  copiaGhibli.sort((a,b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
      return 1;
    }
    if (a.rt_score < b.rt_score) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return copiaGhibli
  
}
console.log(ordenarPuntuacionMenor())



