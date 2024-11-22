//1. Calcular el área de un rectángulo

function calcularAreaRectangulo(largo, ancho) {
    return largo * ancho;
}

console.log("///////////////");
console.log("Solución 1:");
console.log(calcularAreaRectangulo(8, 1)); // Resultado: 8
console.log(calcularAreaRectangulo(10, 2)); // Resultado: 20
console.log(calcularAreaRectangulo(7, 4)); // Resultado: 28

/* 
Sabiendo que el área de un rectángulo se calcula multiplicando el largo por el ancho del mismo, implementé una función que, recibiendo ambos valores, realiza el cálculo correspondiente y lo devuelve utilizando un 'return'
*/


//2. Contar palabras en una cadena

function contarPalabras(cadena) {
    return cadena.split(" ").length;
}

console.log("///////////////");
console.log("Solución 2:");
console.log(contarPalabras("Hola mundo")); // Resultado: 2
console.log(contarPalabras("Esta es otra prueba")); // Resultado: 4
console.log(contarPalabras("Había una vez un barco chiquito")); // Resultado: 6


/* 
Al estar las palabras separadas por espacios, se puede usar la función split de los elementos de tipo string pasándole el espacio " " como parámetro, para convertirla en un array de strings donde cada elemento del array corresponde a cada una de las palabras.
Luego se devuelve, utilizando el return, la longitud del array
*/


//3. Invertir una cadena

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("///////////////");
console.log("Solución 3:");
console.log(invertirCadena("Hola")); // Resultado: "aloH"
console.log(invertirCadena("Mauricio")); // Resultado: "oiciruaM"
console.log(invertirCadena("Programación")); // Resultado: "nóicamargorP"

/* 
Utilizando la función split de manera diferente que en el ejercicio anterior, se puede separar el string en un array de caracteres individuales. 
Posteriormente, utilicé la funcion reverse de los array para invertir el órden de los elementos, y por último, la función join para que el array vuelva a ser un solo elemento de tipo string y devolverlo con el return
*/


//4. Encontrar el palíndromo

function esPalindromo(cadena) {
    let invertida = cadena.split("").reverse().join("");
    return cadena === invertida;
}

console.log("///////////////");
console.log("Solución 4:");
console.log(esPalindromo("neuquen")); // true
console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("hola")); // false

/*
En este caso utilicé las funciones split, reverse y join exactamente igual que en el ejercicio anterior, para obtener una versión invertida de cada string.
Posteriormente comparo la cadena original con la cadena invertida y, si es un palíndromo, es decir, que se lee igual al derecho que al revés, devuelve el valor true, en caso contrario, devuelve false
*/


//5. Crear un programa para convertir la edad de un perro a años humanos

function edadCanina(edadPerro) {
    let edadHumana = edadPerro * 7;
    console.log("///////////////");
    console.log("Solución 5:");
    console.log(`Tu perro tiene ${edadHumana} años humanos.`);
}

for (var i=0; i<3; i++){
    let edadPerro = prompt("Introduce la edad de tu perro:");
    edadCanina(edadPerro);
}


/* 
Utilizando el prompt para que el usuario pueda ingresar un número, esta función toma ese valor y lo multiplica por 7, para así mostrar por consola el resultado correspondiente a dicho cáculo
*/