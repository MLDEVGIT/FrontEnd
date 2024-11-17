// Ejercicio 1: Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Solución 1:");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaRectangulo(10, 2)); // Resultado: 20
console.log(calcularAreaRectangulo(8, 4)); // Resultado: 32
console.log("///////////////////////////////");

/*
Proceso: 
Pensé en cómo se calcula el área de un rectángulo: multiplicando longitud por ancho. 
La función simplemente toma esos dos parámetros y retorna el resultado de la multiplicación.
*/

// Ejercicio 2: Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.split(" ").length;
}

console.log("Solución 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("Hola mundo")); // Resultado: 2
console.log(contarPalabras("Esto es un texto de prueba")); // Resultado: 6
console.log("///////////////////////////////");

/*
Proceso:
Decidí dividir la cadena en palabras utilizando el método `split(" ")`, que separa el texto por espacios. 
Luego, conté la cantidad de elementos resultantes en el array.
*/

// Ejercicio 3: Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("Solución 3:");
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("mundo")); // Resultado: "odnum"
console.log(invertirCadena("JavaScript")); // Resultado: "tpircSavaJ"
console.log("///////////////////////////////");

/*
Proceso:
Para invertir una cadena, primero la dividí en caracteres individuales con `split("")`, luego la invertí con `reverse()`
y volví a unir los caracteres con `join("")`.
*/

// Ejercicio 4: Encontrar el palíndromo
function esPalindromo(cadena) {
    let cadenaInvertida = cadena.split("").reverse().join("");
    return cadena === cadenaInvertida;
}

console.log("Solución 4:");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("hola")); // false
console.log("///////////////////////////////");

/*
Proceso:
Comprobé si la cadena original es igual a su versión invertida. Si son iguales, significa que la palabra es un palíndromo.
*/

// Ejercicio 5: Convertir la edad de un perro a años humanos
function edadCanina(edadPerro) {
    let edadHumana = edadPerro * 7;
    console.log(`Tu perro tiene ${edadHumana} años humanos.`);
}

console.log("Solución 5:");
edadCanina(7); // Resultado: Tu perro tiene 49 años humanos.
edadCanina(3); // Resultado: Tu perro tiene 21 años humanos.
edadCanina(10); // Resultado: Tu perro tiene 70 años humanos.
console.log("///////////////////////////////");

/*
Proceso:
Multipliqué la edad del perro por 7, que es el factor para convertir la edad canina a años humanos.
En lugar de retornar un valor, mostré el resultado directamente con un `console.log()`.
