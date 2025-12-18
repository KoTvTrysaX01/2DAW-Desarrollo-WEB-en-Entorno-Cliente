function convalidacion(data) {
    return data ? "Aprobado" : "Reprobado";
}
console.log(convalidacion(false));
console.log(convalidacion(true));

function convalidacionNotas(nota) {
    return nota >= 5 ? true : false;
}
console.log("El resultado de su exam: ".concat(convalidacion(convalidacionNotas(4))));
