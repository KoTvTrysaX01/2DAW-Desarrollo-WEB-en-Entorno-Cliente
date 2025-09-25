const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let contador;

const pedirValores = () => {
    return new Promise((resolve) => {
        rl.question('Valor inicial: ', (inicio) => {
            rl.question('Valor a sumar: ', (paso) => {
                contador = crearContador(parseInt(inicio), parseInt(paso));
                resolve();
            })
        })
    })
}

const iniciarCiclo = () => {
    return new Promise((resolve) => {
        rl.question("Escribe 'salir' para salir: ", function (answer) {
            if (answer == 'salir') {
                rl.close();
                return resolve();
            }
            console.log(`El resultado: ${contador()}`);
            iniciarCiclo();
        });
    })
}

function crearContador(inicio, paso) {
    return function () {
        inicio += paso;
        return inicio;
    }
}

const main = async () => {
    await pedirValores();
    await iniciarCiclo();
}

main()