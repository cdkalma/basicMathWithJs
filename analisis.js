function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda)
}

function medianaPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario
    })

    const medianaSalarios = PlatziMath.calcularMediana(salarios)
    
    return medianaSalarios
}


