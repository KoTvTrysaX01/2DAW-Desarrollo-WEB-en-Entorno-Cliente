var nombres = ["Vadim", "Kristina", "Bela", "Luis", "Tania", "Saba"];
var numeros = [1, 3, 5, 7, 9];
var numeros_x2 = numeros.map(function (n) { return n * 2; });
console.log(numeros_x2);
var nombres_cortos = nombres.filter(function (nombre) { return nombre.length <= 4; });
console.log(nombres_cortos);
var cont = 0;
var suma = numeros.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, cont);
console.log(suma);
