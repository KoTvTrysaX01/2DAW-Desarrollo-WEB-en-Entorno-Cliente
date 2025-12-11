function sumar(a, b) {
    return a + b;
}
function filtrarMayoures(arr, limite) {
    return arr.filter(function (item) { return item > limite; });
}
function obtenerPropiedad(obj, clave) {
    return obj[clave];
}
console.log(sumar(12, 13));
console.log(filtrarMayoures([1, 2, 3, 4, 5], 2));
var obj = ["manzana", "naranja", "plaatano"];
console.log(obtenerPropiedad(obj, 1));
