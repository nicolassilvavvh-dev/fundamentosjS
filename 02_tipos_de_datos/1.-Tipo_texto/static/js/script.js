console.log("conexion con js correcta...");
/*
Dato: Tipo texto(string)
Concatenacion de texto con el signo +
Podemos unir texto y variables
*/
// Concatenacion: unir texto y/o variables.
const nombre = "Nicolas";
const apellido = "Perinetti";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/*
2.- ver el tipo de dato (typeof)
*/ 
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

// Temple literals (forma moderna para concatenar)
console.log(`Hola, mi nombre es: ${nombre} ${apellido}`);

//Mostrar el lago de un string(texto - contar los caracteres)
// .length --> Para contar caracteres y espacios
let palabra = "paralelepipedo";
console.log(`La palabrea ${palabra} tiene ${palabra.length} letras.`);

// crear una frase y contar sus cararacteres.
let frase = "mi gato ataca al perro del vecino";
console.log(`La frase ${frase} tiene ${frase.length} letras.`);

// metodos comunes en JS para formatear texto
// Transformar texto en Mayucuslas
let texto1 = "JAVasVriPT Es LO mejor";
console.log (texto1.toUpperCase())

//Transformar texro a minusculas .toLowecase()
console.log (texto1.toLowerCase())

// buscar un texto dentro de un string .includes()
let texto2 = "Leche, azucar, pera, huevos, harina";
console.log(texto2.includes("azucar")) //true

//convertir una variable a texto String()
let telefono = 89182920;
let telefono_texto =String(telefono);
console.log(`Mi numero de telefono ${telefono_texto} es de tipo: ${typeof telefono_texto}`)