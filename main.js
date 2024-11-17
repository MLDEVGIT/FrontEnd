/// Ejercicio 1: Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

document.write("<h3>Solución 1:</h3>");
document.write(`${calcularAreaRectangulo(5, 3)}<br>`); // Resultado: 15
document.write(`${calcularAreaRectangulo(10, 2)}<br>`); // Resultado: 20
document.write(`${calcularAreaRectangulo(8, 4)}<br>`); // Resultado: 32
document.write("<hr>");

// Ejercicio 2: Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.split(" ").length;
}



document.write("<h3>Solución 2:</h3>");
document.write(`${contarPalabras("Humahuaca es un lugar copado")}<br>`); // Resultado: 5
document.write(`${contarPalabras("Hola mundo")}<br>`); // Resultado: 2
document.write(`${contarPalabras("Esto es un texto de prueba")}<br>`); // Resultado: 6
document.write("<hr>");

// Ejercicio 3: Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

document.write("<h3>Solución 3:</h3>");
document.write(`${invertirCadena("hola")}<br>`); // Resultado: "aloh"
document.write(`${invertirCadena("mundo")}<br>`); // Resultado: "odnum"
document.write(`${invertirCadena("JavaScript")}<br>`); // Resultado: "tpircSavaJ"
document.write("<hr>");

// Ejercicio 4: Encontrar el palíndromo
function esPalindromo(cadena) {
    let cadenaInvertida = cadena.split("").reverse().join("");
    return cadena === cadenaInvertida;
}

document.write("<h3>Solución 4:</h3>");
document.write(`${esPalindromo("neuquen")}<br>`); // true
document.write(`${esPalindromo("reconocer")}<br>`); // true
document.write(`${esPalindromo("hola")}<br>`); // false
document.write("<hr>");

// Ejercicio 5: Convertir la edad de un perro a años humanos
function edadCanina(edadPerro) {
    let edadHumana = edadPerro * 7;
    document.write(`Tu perro tiene ${edadHumana} años humanos.<br>`);
}

document.write("<h3>Solución 5:</h3>");
edadCanina(7); // Resultado: Tu perro tiene 49 años humanos.
edadCanina(3); // Resultado: Tu perro tiene 21 años humanos.
edadCanina(10); // Resultado: Tu perro tiene 70 años humanos.
document.write("<hr>");
