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
La función toma esos dos parámetros y retorna el resultado de la multiplicación.
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
Decidí dividir la cadena en palabras usando la función `split(" ")`, que separa por espacios, y conté los elementos en el array resultante.
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
Para invertir la cadena, primero la convertí en un array de caracteres (`split("")` como en el caso previo), luego la invertí (`reverse()`) 
y finalmente la volví a unir en una cadena con `join("")`.
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
Verifiqué si la cadena es igual a su versión invertida (reutilizando el código ya utilizado en el ejercicio 3). Si son iguales, es un palíndromo.
*/

// Ejercicio 5: Convertir la edad de un perro a años humanos
function edadCanina() {
    let edadPerro = parseInt(prompt("Ingresa la edad de tu perro:"));
    let edadHumana = edadPerro * 7;
    console.log(`Tu perro tiene ${edadHumana} años humanos.`);
}

console.log("Solución 5:");
edadCanina(); // Este ejecutará el `prompt` en el navegador que se este utlizando en la app deployada
console.log("///////////////////////////////");

/*
Proceso:
Tomé la edad del perro desde un `prompt`, la multipliqué por 7 para convertirla a años humanos y mostré el resultado con `console.log()`.
*/
