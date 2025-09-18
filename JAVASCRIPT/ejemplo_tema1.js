
// =======================================
// Ejemplos de Sintaxis Base y Tipos de Datos en JavaScript
// =======================================

// --- Declaraciones e Instrucciones ---
let nombre = "Ana"; // Declaración con let
nombre = "Carlos"; // Instrucción de asignación

// Bloque de código con if
if (nombre === "Carlos") {
    console.log("Hola Carlos");
    nombre += " García";
}

// --- Comentarios ---
// Esto es un comentario de una línea

/*
   Esto es un comentario
   de múltiples líneas
*/

/**
 * Ejemplo de comentario JSDoc
 * @param {string} name - nombre de usuario
 * @returns {string} saludo
 */
function saludar(name) {
    return `Hola, ${name}`;
}
console.log(saludar("Ana"));

// --- Identificadores válidos e inválidos ---
let user123;
let $precio;
let _contador;
// let 123nombre; // ❌ Inválido
// let mi-variable; // ❌ Inválido

// --- Palabras reservadas ---
// let class = "test"; // ❌ No permitido

// --- Hoisting ---
console.log(x); // undefined (por var)
var x = 10;

// console.log(y); // ReferenceError
let y = 20;

// --- Tipos de Datos Primitivos ---
let cadena = "Hola, mundo";
console.log(cadena.toUpperCase()); // "HOLA, MUNDO"

let numero = 42;
console.log(Number.isInteger(numero)); // true

let big = 9007199254740991n;
console.log(big + 1n); // BigInt

let bool = true;
console.log(!bool); // false

let indefinido;
console.log(indefinido); // undefined

let nulo = null;
console.log(nulo); // null

const id = Symbol("id");
console.log(id);

// --- Objetos ---
let persona = {
    nombre: "Luis",
    edad: 28,
    casado: false
};
console.log(persona.nombre);

// --- Arrays ---
let frutas = ["manzana", "banana", "naranja"];
frutas.push("uva");
console.log(frutas);

// --- Funciones ---
function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 4));

const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 5));

// --- Coerción ---
console.log("5" - 3); // 2
console.log("5" + 3); // "53"
console.log(0 == false); // true
console.log(0 === false); // false

// --- Conversión explícita ---
console.log(Number("42")); // 42
console.log(parseInt("42px")); // 42
console.log(String(100)); // "100"
console.log(Boolean("")); // false
