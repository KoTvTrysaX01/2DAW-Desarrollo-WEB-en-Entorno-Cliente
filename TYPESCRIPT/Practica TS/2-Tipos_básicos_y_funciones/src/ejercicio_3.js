function isPrime(num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
}
function contarLetras(palabra) {
    var contador = 0;
    for (var i = 0; i < palabra.length; i++) {
        contador++;
    }
    return contador;
}
function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
console.log(isPrime(13));
console.log(contarLetras("palabra"));
console.log("Vadim", "Elshin");
