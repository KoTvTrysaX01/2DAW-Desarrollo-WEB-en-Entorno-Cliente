let nombres: string[] = ["Vadim", "Kristina", "Bela", "Luis", "Tania", "Saba"];
let numeros: number[] = [1, 3, 5, 7, 9];

let numeros_x2: number[] = numeros.map((n) => n * 2);
console.log(numeros_x2);

let nombres_cortos: string[] = nombres.filter((nombre) => nombre.length <= 4);
console.log(nombres_cortos);


const cont = 0;
const suma = numeros.reduce((accumulator, currentValue) => accumulator + currentValue, cont,);
console.log(suma);
