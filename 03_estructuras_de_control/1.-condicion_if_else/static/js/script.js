console.log("conexion con correcta con Js...");

/*
=======================
1. ¿Qué es una condición en JS?
=======================
Una condicion non permite tomar decisiones en el
codigo separando dos caminos el (if) y el no(else).

Estructura basica:( Sintaxis --> Reglas del lenguaje de programacion)

if (condicion) {
    //codigo que se ejecutan si la condicion es verdadera
} else {
    //codigo que se ejecutan si la condicion es falsa.
}
*/

//Ejemplo 1: (numerico)
let edad = 18;

if (edad == 20) { // Condicion si
    console.log("Eres mayor de edad")
}

//Ejemplo 2. Dos caminos posibles
let temperatura = 21;

if (temperatura > 20) { // Condicion Si
    console.log("Hace calor");
} else { // Condicion NO
    console.log("Hace frio")
}

//ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0) {
    console.log("excelente");
} else if (nota >= 4.0) {
    console.log("aprobado")
} else {
    console.log("Reprobado estudia mas!")
}

//Ejemplo 4: Condiciones con STRING
let nombre = "Nicolas";

//Comparacion exacta (===)
if (nombre === "Nicolas"){
    console.log("Hola, " + nombre)
} else {
    console.log("tu no eres Nicolas")
}

/*
OPERADORES DE COMPARACION

> mayor que
< menor que
>= mayor o igual
<= menor o iguala
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
//Ejemplo de distinto
let num = 10;
let num2 = 5
if (num !== num2){ //Comparacion con distinto
    console.log(`El numero: ${num} es distinto que ${num2}`)
} else{
    console.log("Son iguales")
}