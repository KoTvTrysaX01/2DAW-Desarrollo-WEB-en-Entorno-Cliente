function crearContador() {
 let contador = 0;
 return function() {
 contador++;
 return contador;
 };
}
const contar = crearContador();
console.log(contar()); // 1
console.log(contar()); // 2
console.log(contar()); // 3




function crearContador1() {
 let contador = 0;
 return contador++;
}
console.log(crearContador1()); // 0
console.log(crearContador1()); // 0
console.log(crearContador1()); // 0