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


//Proyección salarial
//Primero buscamos nuestro objeto de estudio
function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
 //A continuación creamos un arreglo donde guardaremos los porcentajes de crecimiento 
    let porcentajesCrecimiento = [];
/*Seguido a esto iteraremos para saber cuáles son los diferentes porcentajes de crecimiento,
empezamos desde la segunda posición*/    
    for (let i = 1; i < trabajos.length; i++) {
      const salarioActual = trabajos[i].salario;
      const salarioPasado = trabajos[i - 1].salario;
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento)
    }
/*Ahora buscamos cuál es la mediana del crecimiento de nuestro caso de estudio
para de esta forma poder dar una proyección del aumento salarial para 2024*/  
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
/*Por último, buscamos el último salario, luego determinamos de cuánto será el aumento,
para finalmente determinar cuál sería el nuevo salario */  
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;
  
    return nuevoSalario;
}

//análisis empresarial
const empresas = {}
for (persona of salarios) {
    for (trabajo of persona.trabajos){
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = []
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}

console.log(empresas)


//Mediana por año
function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
      console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
      console.warn('La empresa no dio salarios ese año');
    } else {
      return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
  }

  function proyeccionPorEmpresa(nombre) {
    if (!empresas[nombre]) {
      console.warn('La empresa no existe');
    } else {
      const empresaYears = Object.keys(empresas[nombre]);
      const listaMedianaYears = empresaYears.map((year) => {
        return medianaEmpresaYear(nombre, year);
      });
      
      let porcentajesCrecimiento = [];
    
      for (let i = 1; i < listaMedianaYears.length; i++) {
        const salarioActual = listaMedianaYears[i];
        const salarioPasado = listaMedianaYears[i - 1];
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
      }
  
      const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
  
      const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
      const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
      const nuevoMediana = ultimaMediana + aumento;
  
      return nuevoMediana;
    }
  }  