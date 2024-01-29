const PlatziMath = {}
console.log(PlatziMath)


//PROMEDIO
/* En este ejemplo, el método `reduce()` itera sobre el array de números y suma cada elemento 
con el acumulador inicial (`acc`). Luego, el resultado se divide entre la longitud del array 
para calcular el promedio. ¡Listo! */
let edades = [15, 24, 32, 18, 20, 25, 22]

const total = edades.reduce((acc, current) => acc + current, 0)
const promedio = total / edades.length
console.log(promedio)

// Función para calcular el promedio

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    // sumar los elementos del array
    let sumaLista = 0 

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]; 
    }

    let promedioLista = sumaLista / lista.length
    return promedioLista
}

  //Mediana
/* Primero necesitamos conocer si la lista es par o impar para
saber cómo abordar el problema */


PlatziMath.esParOImpar = function esParOImpar(array) {
    if (array.length % 2 === 0) {
        return "La lista es par, mira su mediana: " + PlatziMath.medianaPar(array);
    } else {
        return "La lista es impar, mira su mediana: " + PlatziMath.medianaImpar(array);
    }
}



PlatziMath.medianaPar = function medianaPar(array) {
    let OrdenarLista = array.sort((a, b) => a - b);
    let indexListaParOne = OrdenarLista.length / 2
    let indexListaParTwo = indexListaParOne - 1
    let medianaListaPar = (array[indexListaParOne] + array[indexListaParTwo]) / 2
    return medianaListaPar
}


/* Función para calcular la mediana de una lista impar */
PlatziMath.medianaImpar = function medianaImpar(array) {
    //Primero ordenamos la lista de forma ascedente
    let OrdenarLista = array.sort((a, b) => a - b);
    //Luego buscamos el punto medio de esta lista
    let indexListaImpar = Math.floor(OrdenarLista.length / 2);
    //Finalmente le pedimos a la función que nos retorne la ubicación media
    let medianaListaImpar = array[indexListaImpar];
    console.log({OrdenarLista, indexListaImpar, medianaListaImpar})
    return medianaListaImpar;
}

// calculando la moda
PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {}

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i]

        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1
        }
    }

    const listaArray = Object.entries(listaCount)
    const ordenarListaBi = listaArray.sort((a, b) => a[1] - b[1])
    const listaMaxNumber = ordenarListaBi[ordenarListaBi.length - 1]
    const moda = listaMaxNumber[0]
    return 'La moda es: ' + moda
}


//Reto: calcula otros tipos de promedio
//Media armónica
/* La media armónica se usa para calcular promedios de unidades que dependen de otras,
como velocidades, tiempos o tasas.*/
// Fórmula H = N / ((1/x1)(1/x2)(1/x3)…
/*Tomamos la cantidad de elementos, lista.length, luego con el método .reduce()
buscamos reducir nuestra lista en un solo elemento, entonces, acc es el acumulado
y (1/elem) es igual a (1/x) de nuestra fórmula, de esta forma se hace la división,
ese sería el primer número en acc, a continuación se hace la siguiente división y 
el resultado de esta se suma con el acc para obtener uno nuevo así hasta recorrer
toda nuestra lista y obtener un solo número. Finalmente se divide lista.length entre
el resultado de nuestro lista.reduce()*/
PlatziMath.calcularMediaArmonica = function calcularMediaArmonica(lista) {
    let mediaArmonica = lista.length / lista.reduce((acc, elem) => acc + (1/elem), 0 )
    return "la media armónica es: " + mediaArmonica
    console.log(n)
}

/////

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
      return valorAcumulado - nuevoValor;
    }
    
    // const lista = listaDesordenada.sort((a,b) => a-b);
    const lista = listaDesordenada.sort(ordenarListaSort);
    
    return lista;
}

PlatziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
      return valorAcumulado + nuevoValor;
    }
  
    const sumaLista = lista.reduce(sumarTodosElementos);  
    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);
  
    if (listaEsPar) {
      const indexMitad1ListaPar = (lista.length / 2) - 1;
      const indexMitad2ListaPar = lista.length / 2;
      const listaMitades = [];
      listaMitades.push(lista[indexMitad1ListaPar]);
      listaMitades.push(lista[indexMitad2ListaPar]);
  
      const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
      return medianaListaPar;
    } else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
      console.log(indexMitadListaImpar);
      console.log(medianaListaImpar);
      return medianaListaImpar;
    }
}

