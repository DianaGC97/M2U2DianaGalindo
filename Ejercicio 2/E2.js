// Desarrolle un algoritmo que permita:

// g. El algoritmo debe imprimir cual es el mayor valor
// y cual es el menor valor. Recuerde
// verificar que los cuatro valores introducidos por el teclado sean valores distintos.

// h. Crear un mensaje de alerta en caso que se detecte la introducción de valores iguales.

function numeros() {
    let numeroUno = parseInt(document.getElementById('numeroUno').value)
    let numeroDos = parseInt(document.getElementById('numeroDos').value)
    let numeroTres = parseInt(document.getElementById('numeroTres').value)
    let numeroCuatro = parseInt(document.getElementById('numeroCuatro').value)


    // Valores Iguales
    if (numeroUno == numeroDos || numeroUno == numeroTres || numeroUno == numeroCuatro) {
        alert('Hay números repetidos')
    } else if (numeroDos == numeroTres || numeroDos == numeroCuatro) {
        alert('Hay números repetidos')
    } else if (numeroTres == numeroCuatro) {
        alert('Hay números repetidos')
    }

    let valorMayor = Math.max(numeroUno, numeroDos, numeroTres, numeroCuatro)
    let valorMenor = Math.min(numeroUno, numeroDos, numeroTres, numeroCuatro)
    let resultado = document.getElementById('resultadoMayor', 'resultadoMenor')
    return resultado.innerHTML = `El valor mayor es ${valorMayor} <br> El valor menor es ${valorMenor}`;

}

