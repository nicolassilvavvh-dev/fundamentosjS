console.log("Conexion correcta con js...");

// tipos de datos numricos
// let --> Palabra clave para crear una variable
//1.- Declaracion de numeros (Creacion de variables numericas)
let edad = 31;
let temperatura = -5;
let pi = 3.1416;
let descuento = 0.25;

//.-Operaciones basicas

let suma = 10 + 5; //15
let resta = 10- 5; //5
let multiplicacion = 10 * 5 //50;
let divicion = 25 / 3;
let modulo = 10 % 3; //--> Resto de la division %
let potencia = 2 ** 3; //8
console.log(`sumar:${suma}, restar:${resta}, multiplicar:${multiplicacion}
dividir:${divicion}, resto(%):${modulo}, potencia.${potencia}.`);

//3.- incremento y decremento (sumo(++) o resta(--) 1)
let number = 10;
number++; //11
number; //9

//4.- numeros con decimales
let promedio = 6.5;
let altura = 1.67;
let peso = 90.3;

//5.- numeros grandes y notacion cientifica
let poblacion = 1e6; //1.000.000
console.log(`numero grande (1e6): ${poblacion}`);
let numero = 5e-3; //0.005
console.log(`numero pequeño (5e-3): ${numero}`)

//6.- operacion combinadas
//calcula de precios
let preioProducto = 1000;
let iva = 0.19;
let total = preioProducto + (preioProducto + iva);
console.log(`el valor final del producto es: ${total}`)

//calculo de valor de hora trabajando
let horas = 40;
let valorHora = 13400;
let sueldo = horas * valorHora
console.log(`el sueldo del producto es:${sueldo}`)

//redondea de numeros
console.log("redondeando 4.6: " + Math.round(4.6)) // 5
console.log("redondeando 4.6: " + Math.floor(4.6)) // 4

//8.- Numeros aleatorios
let aleatorio = Math.random(); // entre 0 y 1
let dado = Math.floor(Math.random()*6)+1;
console.log(`Tirar dados; ${dado}`);

// 9.- Comparaciones numericas
let a = 10;
let b = 5;
console.log(a > b); //true
console.log(b > a); //False
console.log(a === 10); //true (=== estricta igualda)
console.log( b === 3 ); //False