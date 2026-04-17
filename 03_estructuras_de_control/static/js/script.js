console.log("Conexion correcta con js...");

// tipos de datos numricos

//1.- Declaracion de numeros (Creacion de variables numericas)
let edad = 31;
let temperatura = -5;
let pi = 3.1416;
let descuento = 0.25;

//.-Operaciones basicas

let suma = 10 + 5;
let resta = 10- 5;
let multiplicacion = 10 * 5;
let divicion = 25 / 3;
let modulo = 10 % 3;
let potencia = 2 ** 3;
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