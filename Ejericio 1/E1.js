// Ejercicio 1
// Crear un algoritmo que le permita al usuario ingresar:
// a. Nombre de un estudiante,
// b. Cantidad de materias o asignaturas a matricular.
// c. Valor de cada materia o asignatura,
// d. Valor de la papelería: que tiene un costo fijo de $20.000 y el carné con valor de $8.000.
// e. Descuento del 20% sobre el costo de las materias.
// Por medio del algoritmo imprimir el valor total de las materias que matriculó el estudiante con el
// descuento del 20% más los costos fijos.


let arrayMaterias = [];
const valorPapeleria = 20000, valorCarnet = 8000;


function crearNumeroMaterias() {
    const cantidadMaterias = document.getElementById('cantidadMaterias').value
    let materiasDiv = document.getElementById('materias')

    for (let i = 1; i <= cantidadMaterias; i++) {
        arrayMaterias.push(`asignatura${i}`)
        materiasDiv.innerHTML += `<input type="text" class="caja" id="asignatura${i}" placeholder="Ingrese valor Materia ${i}">`;
    }
}

function calcularCostoTotal() {
    const nombreEstudiante = document.getElementById('nombreEstudiante').value;
    let valorTotalMaterias = 0;
    for (let i = 0; i < arrayMaterias.length; i++) {
        const e = arrayMaterias[i];
        valorTotalMaterias += Number(document.getElementById(e).value);
    }

    valorTotalMaterias = (valorTotalMaterias * 80) / 100;
    valorTotalMaterias = valorTotalMaterias + valorPapeleria + valorCarnet;
    let totalDiv = document.getElementById('total')
    totalDiv.innerHTML = `Total de los costos estudiante ${nombreEstudiante} son: ${valorTotalMaterias}`;
}