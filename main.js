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