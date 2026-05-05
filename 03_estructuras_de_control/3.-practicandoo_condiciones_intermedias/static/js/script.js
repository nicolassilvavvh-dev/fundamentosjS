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
        alert(`La frase: ${palabra}  tiene: ${palabra.length} caracteres y corresponde a una frase corto`)
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

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)
// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente
function ejercicio16() {
    let sans = "Sans";
    let producto = "mortadela";
    let precio = 100000;
    if (precio >= 100000){
        alert(`El cliente: ${sans.toUpperCase()} compra una: ${producto.toLowerCase()} que vale: ${precio}
            \nPero como es un cliente premiun el precio final es de: ${precio - (precio * 0.2)}`)
    } else if (precio >= 50000) {
        alert(`El cliente: ${sans.toUpperCase()} compra una: ${producto.toLowerCase()} que vale: ${precio}
            \nPero como es un cliente frecuente el precio final es de: ${precio - (precio * 0.1)}`)
    } else {
        alert(`El cliente: ${sans.toUpperCase()} compra una: ${producto.toLowerCase()} que vale: ${precio}
            \nPero como es un cliente normal no tiene descuento`)
    }
}
// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente
// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación
function ejercicio17() {
    let frase = "Sans estA coMiendo morTadEla lado de su mAsCota ROckY";
    let puntaje = Math.floor(Math.random()*100)+1;
    if (puntaje >= 100) {
        alert(`la frase transformada es: ${frase.toLowerCase()} y tiene: ${frase.length} caracteres 
        \nPuntaje 90 o mas: excelente`)
    } else if (puntaje >= 70) {
        alert(`la frase transformada es: ${frase.toLowerCase()} y tiene: ${frase.length} caracteres 
        \nPuntaje 70 o mas: bueno`)
    } else {
        alert(`la frase transformada es: ${frase.toLowerCase()} y tiene: ${frase.length} caracteres 
        \nPuntaje 70 o menos: insuficiente`)
    }
}
// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado
// Además:
// Contar la cantidad de caracteres del nombre
// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final
function ejercicio18() {
    let nombre = "sans";
    let nota = 1.6;
    let nota2 = 2.9;
    let nota3 = 2.3;
    let promedio = nota + nota2 + nota3 / 3;
    let nombreMayusculas = nombre.toUpperCase();
if (promedio >= 6.0) {
    alert(`Nombre: ${nombreMayusculas} cantidad de caracteres del nombre: ${nombre.length}
    \nPromedio: ${Math.round(promedio)} Destacado`);
} else if (promedio >= 4.0) {
    alert(`Nombre: ${nombreMayusculas} cantidad de caracteres del nombre: ${nombre.length}
    \nPromedio: ${Math.round(promedio)} Aprobado`);
} else  {
    alert(`Nombre: ${nombreMayusculas} cantidad de caracteres del nombre: ${nombre.length}
    \nPromedio: ${Math.round(promedio)} Reprobado`);
}
}

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:
// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente
// Además:
// Mostrar la cantidad de caracteres del nombre
function ejercicio19(){
    let nombre = "Asgore dreemurr";
    let nombreM = nombre.toUpperCase();
    let n1 = 6.6;
    let n2 = 1.2;
    let n3 = 2.1;
    let promedio = n1 + n2 + n3 / 3;
    if (Math.round(promedio) >= 6.5){
        alert(`Nombre del estudiante: ${nombreM}
            \nPromedio: ${Math.round(promedio)} sobresaliente`)
    } else if (Math.round(promedio) >= 6) {
        alert(`Nombre del estudiante: ${nombreM}
            \nPromedio: ${Math.round(promedio)} muy buen redimiento`)
    } else if (Math.round(promedio) >= 5.0) {
        alert(`Nombre del estudiante: ${nombreM}
            \nPromedio: ${Math.round(promedio)} Buen rendimiento`)
    } else if (Math.round(promedio) >= 4.0) {
        alert(`Nombre del estudiante: ${nombreM}
            \nPromedio: ${Math.round(promedio)} Suficiente`) 
    } else {
        alert(`Nombre del estudiante: ${nombreM}
            \nPromedio: ${Math.round(promedio)} Insuficiente`)
    }
}
// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:
// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico
// Además:
// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento
// Mostrar:
// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación
function ejercicio20() {
    let nombre = "Trono";
    let producto = 200000;
    let descuento = producto * 0.15;
    if (producto >= 200000) {
        alert(`El producto es: ${nombre.toLowerCase()} su largo es: ${nombre.length}
            \nEl precio original es de: ${producto}
            \ny su precio final es: ${producto - (descuento)}
            \nEs un producto de lujo con 15% de descuento`);
    } else if (producto >= 100000) {
        alert(`El producto es: ${nombre.toLowerCase()} su largo es: ${nombre.length}
            \nEl precio original es de: ${producto}
            \ny su precio final es: ${producto - (descuento)}
            \nEs un producto de premiun con 15% de descuento`);
    } else if (producto >= 50000) {
        alert(`El producto es: ${nombre.toLowerCase()} su largo es: ${nombre.length}
            \nEl precio original es de: ${producto}
            \ny su precio final es: ${producto - (producto * 0.10)}
            \nEs un producto de estandar con 10% de descuento`);
    } else if (producto >= 20000) {
        alert(`El producto es: ${nombre.toLowerCase()} su largo es: ${nombre.length}
            \nEl precio original es de: ${producto}
            \ny su precio final es: ${producto}
            \nEs un producto economico y no tiene descuento`);
    } else {
        alert(`El producto es: ${nombre.toLowerCase()} su largo es: ${nombre.length}
            \nEl precio original es de: ${producto}
            \ny su precio final es: ${producto}
            \nEs un producto basico y no tiene descuento`);
    }
}
// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:
// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente
// Además:
// Clasificar la frase por tamaño:
// 30 → Muy larga
// 20 → Larga
// 10 → Mediana
// ≤ 10 → Corta
function ejercicio21() {
    let frase = "Papaya";
    let fraseM = frase.toUpperCase();
    let puntaje = Math.floor(Math.random()*100)+1;
    if (puntaje >= 90){
        alert(`La frase es: ${fraseM}
            \nEl puntaje es: ${puntaje}
            \nEl tamaño es: ${frase.length}`)
    }
}