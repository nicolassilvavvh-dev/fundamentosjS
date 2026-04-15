console.log("Conexion correcta con js...");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.
const nombre = "Camila";
const edad = "25"
console.log(`su nombre es: ${nombre} y tiene: ${edad} años \ntipo de dato edad es: ${typeof edad}`);
// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas
let comuna = " la de maipú";
let region = "la Metropolitana";
console.log(`la persona vive en la comuna ${comuna} en la region es ${region}.`);
console.log (comuna.toUpperCase())
console.log (region.toLocaleLowerCase())
// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`${lenguaje} tiene ${lenguaje.length} caracteres`);
console.log (lenguaje.toUpperCase());
console.log(`el tipo de dato Python es: ${typeof lenguaje}`);
// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en Javascript";
console.log(`${mensaje} tiene ${mensaje.length} caracteres`);
console.log(mensaje.includes("Javascript"));
console.log (mensaje.toLocaleLowerCase());
// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal";
console.log(compras.includes("aceite"));

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = "456";
let numeroCasaTexto =String(numeroCasa);
console.log(`el numero de casa ${numeroCasa}`);
console.log("Número convertido:", numeroCasaTexto);
console.log(`el tipo de dato de casa es ${numeroCasa}`);
console.log(`${numeroCasa} tiene ${numeroCasa.length} caracteres`);
// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let Nombre = "Diego";
let apellido = "Rojas";
let nombreCompleto = Nombre + " " + apellido;
console.log(`el nombre completo es: ${Nombre} ${apellido}`);
console.log(`${nombreCompleto} tiene ${nombreCompleto.length} caracteres`);
console.log (nombreCompleto.toUpperCase());
// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings";
console.log (frase.toUpperCase());
console.log(frase.includes("strings"));
console.log(`${frase} tiene ${frase.length} caracteres`);
// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto = "Programar es divertido";
console.log(`${texto}`);
console.log (texto.toUpperCase());
console.log (texto.toLowerCase())
console.log(`${texto} tiene ${texto.length} caracteres`);
// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C";
let año = "2026";
let curso_año = curso + " " + año
console.log(`el curso ${curso}`);
console.log(`curso: ${curso} año: ${año}`)
console.log (curso_año.toUpperCase());