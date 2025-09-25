const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function crearContador(inicio, paso) {
    return function () {
        inicio += paso;
        return inicio;
    }
}

rl.question('Introduce un inicio: ', (inicio) => {
    rl.question('Introduce un paso: ', (paso) => {
        const contador = crearContador(parseInt(inicio), parseInt(paso))
        console.log("El resultado es: " + contador());
        function preguntar() {
            rl.question("Escribe 'salir' para salir: ", (resp) => {
                if (resp.toLocaleLowerCase() === "no") {
                    rl.close()
                } else {
                    console.log("El resultado es: " + contador());
                    preguntar();
                }
            })
        }
        preguntar();
    })
})