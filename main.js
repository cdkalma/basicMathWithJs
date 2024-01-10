//CUADRADO: Dos formas de hacer los cálculos
/* Esta primera forma aunque efectiva no permite ingresar nueva información, tendriamos
que hacer nuevas variables lo cual no es efectivo */
const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})

/* Al hacerlo a tavés de una función permitimos que se pueda ingresar nueva información */
function calcularCuadrado(lado) {
    return{
        perimetro: lado * 4,
        area: lado * lado,
    }
}

// TRIÁNGULO: Dos formas de hacer los cálculos
/* Esta primera forma aunque efectiva no permite ingresar nueva información, tendriamos
que hacer nuevas variables lo cual no es efectivo */
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4
const alturaLadoTriangulo = 5.5
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo = (ladoTrianguloBase * alturaLadoTriangulo) / 2

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaLadoTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

/* Al hacerlo a tavés de una función permitimos que se pueda ingresar nueva información */
function calcularTriangulo(lado1, lado2, base, altura) {
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    }
}
//Clase4
//Reto: altura de un triángulo
function calcularAlturaTriangulo(lado, base) {
    if (lado == base) {
        //forma de sacar una alerta en la consola
        console.warn('Este no es un triángulo isosceles')
    } else{
        // formula a traducir a js h=raízcuadrada(a**2 - (b**2)/4)
        //para obtener la raíz cuadrada con Math usamos el método .sqrt
        return Math.sqrt( (Math.pow(lado, 2)-( (Math.pow(base, 2)) / 4)))
        
    }
}
//Reto: Altura de un tríangulo escaleno, todos sus lados diferentes
function aTrianguloEscaleno(ladoa, ladob, ladoc) {
    let semiPerimetro = (ladoa + ladob + ladoc) / 2

    if (ladoa == ladob || ladoa == ladoc || ladob == ladoc) {
        console.warn('Este no es un triángulo escaleno')
    } else {
        return ( (2 / ladoa) * (Math.sqrt(semiPerimetro * (semiPerimetro - ladoa) * (semiPerimetro - ladob) * (semiPerimetro - ladoc) )) )
    }
}


//Clase3
//Círculo
console.group('circle')

const radiocírculo = 3
const diametrocirculo = radiocírculo * 2
const pi = 3.1415
const circunferencia = diametrocirculo * pi
//sintaxis para elevar a la potencia un número
const areaCirculo = (radiocírculo ** 2) * pi 

console.log({
    radiocírculo,
    diametrocirculo,
    pi,
    circunferencia,
    areaCirculo,
})


function calcularCirculo(radio) {
    let diametro = radio * 2
    //potencia con la función Math método .pow
    let radioAlCuadrado = Math.pow(radio, 2)
    return{
        //obtener PI con la función Math método .PI
        //También podemos delimitar el número de decimales que queremos con Math.PI.toFixed(número)
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}
console.groupEnd('circle')