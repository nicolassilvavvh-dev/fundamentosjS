console.log("conexion con correcta con Js...");

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
    let nombre = "Nicolas";
    alert(`Bienvenido ${nombre}`)
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
    let numero = 10;
    let numero2 = 5;
    alert(`El resultado de: ${numero} + ${numero2} es ${numero + numero2}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
    let num1 = 18;
    let num2 = 6;
    alert(`La resta de: ${num1} ${num2} es ${num1 - num2}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
    let mul1 = 12;
    let mul2 = 2;
    alert(`La multip;licaion de: ${mul1} ${mul2} es ${mul1 * mul2}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
    let salsa = 6.0;
    let salsa2 = 5.7;
    let salsa3 = 5.7;
    let promedio = salsa + salsa2 + salsa3 / 3
    alert(`El promedio es; ${promedio}`);
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
    let edad = 18;
    if(edad >= 18){
        alert(`eres mayor de edad`);
    }else{
        alert(`Es menor de edad`);
    }
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numer = 18;
    if(numer % 2 == 0){
        alert(`El numero es par`);
    }else{
        alert(`Es impar`);
    }
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
    let nota = 6.5;
    if (nota >= 4.0){
        alert(`Estudiante aprobado`);
    }else{
        alert(`Estudiante reprobado`);
    }
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
    let producto = 500000;;
    let descuento = producto * 0.4;
    alert(`El producto vale: ${producto}
        \nel descuento es: ${descuento}
        \nel precio final es: ${producto - descuento}`);
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
    let numero1 = 10;
    let numero2 = 5;
    if( numero1 > numero2){
    alert(`El numero mayor es: ${numero1}`);
    } else {
    alert(`El numero mayor es: ${numero2}`);
    }
}
