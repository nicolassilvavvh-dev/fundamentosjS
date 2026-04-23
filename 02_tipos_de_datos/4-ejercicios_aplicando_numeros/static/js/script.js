console.log("Conexion correcta con js...");

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendre: ${edad + 5}
        \nHace 10 años tenia: ${edad - 10}`)
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado
function compraDescuento(){
    let producto = 25000;
    alert(`El producto vale: ${producto}
        \nEl descuento es: ${producto * 0.2}
        \nPero con el descuento es: ${producto - (producto * 0.2)}`);
};


// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas(){
    let nota = 3.9;
    let nota2 = 4.9;
    let nota3 = 2.9;
    let division = 3
    let promedio = nota + nota2 + nota3 / division
    alert("redodeando promedio: " + Math.round(promedio))
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
    let temperatura = 30
    let temperaturaSans = temperatura + 3
    let temperaturaGaster = temperaturaSans - 5
    alert(`la temperatura total: ${temperaturaGaster}`)
};

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo(){
    let sueldo = 8000;
    let horas = 45;
    let horaextra = horas + 5;
    let nuevoSueldo = sueldo * horaextra;
    alert(`el sueldo antigup era: ${sueldo * horas}
        \n el nuevo suelo es: ${nuevoSueldo}`)
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola
function divisionyresto(){
    let num = 50;
    let num2 = 30;
    let division = num / num2
    let modulo = num % num2
    alert(`La division es: ${division}
        \nEl modulo es: ${modulo}
        \nEl resultado se da ya que el modulo y la division le quitan parte al numero`)
}
// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10
function comparacionnumeros(){
    let numero = 10;
    let numero2 = 5;
    alert( numero > numero2);
    alert(numero === 10)
    alert(numero2 === 10)
}
// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado
function cienciaaplicada(){
    let  poblacion= 2e6;
    alert(`la poblacion es de: ${poblacion}
        \nSe dividiran en grupos de 4
        \nEl resultado es de: ${poblacion / 4} en 4`)
}
// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final
function potenciacalculo(){
    let elevado = 3 ** 4;
    let multiplicacion = elevado * 2;
    let resta = multiplicacion - 2;
    alert(`el calculo primero se eleva a: ${elevado}
        \nLuego se se multiplica: ${multiplicacion}
        \ny despues se resta: ${resta}
        \nEl resultado es: ${resta}`)
}
// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function lanzardado(){
    let aleatorio = Math.random();
    let dado = Math.floor(Math.random()*6)+1;
    alert(`Tirar dado: ${dado}
        \nEs mayor que 4: ${dado > 4}`);
}