console.log("conexion con correcta con Js...");

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 5.5;

if (nota >= 6.0) {
    alert("Excelente rendimiento");
} else if (nota >= 4.0) {
    alert("Estudiante aprobado");
} else  {
    alert("Estudiante reprobado");
}
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombre = "Nicolas silva";
alert(`El nombre convertido es: ${nombre.toUpperCase()} y tiene ${nombre.length} caracteres`);
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = `SaNsYPApyrPs@gmMil.Co`;
    if (correo.length >= 15) {
        alert(`El correo antes se veia asi: ${correo}
            \nEl correo ahora se ve asi: ${correo.toLowerCase()} y el resultado es: correo valido`)
    } else {
        alert(`El correo antes se veia asi: ${correo}
        \nEl correo ahora se ve asi: ${correo.toLowerCase()} y el resultado es: correo demasiado corto`)
    }

}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let palabra = `Estoy aprendiendo JavaScript`;
    if (palabra.length >= 20) {
        alert(`La frase: ${palabra}  tiene: ${palabra.length} caracteres y corresponde a una frase larga`)
    } else if (palabra.length >= 11) {
        alert(`La frase: ${palabra}  tiene: ${palabra.length} caracteres y corresponde a una frase mediana`)
    } else{
        alert(`La frase: ${palabra}  tiene: ${palabra.length} caracteres y corresponde a una frase mediana`)
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado";
    let precio = 70000;
    let descuento = precio * 0.2;
    alert(`El producto: ${producto.toUpperCase()} tiene un precio final de: ${precio - descuento}`);
}
