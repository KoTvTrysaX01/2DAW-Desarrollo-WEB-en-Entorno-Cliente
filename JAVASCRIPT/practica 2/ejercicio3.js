const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function crearContador(inicio, paso) {
    let cont = inicio;
    return function () {
        cont += paso;
        return cont;
    }
}

rl.question("Introduce el inicio: ", (inicio) => {
    rl.question("Introduce el paso: ", (paso) => {
        const contador = crearContador(inicio, paso);
    })
});
