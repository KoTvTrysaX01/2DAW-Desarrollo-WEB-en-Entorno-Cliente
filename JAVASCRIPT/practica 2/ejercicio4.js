const { resolve } = require('path');
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let tareas = [
    {
        id: 1718234567890,
        descripcion: "Aprender arrays",
        completada: true
    },
    {
        id: 1718234567895,
        descripcion: "Practicar métodos de array",
        completada: false
    },
    {
        id: 1718234567900,
        descripcion: "Hacer ejercicio",
        completada: false
    }
];

const agregarTareas = () => {
    // rl.question("agregar", description => {

    // })
    let tarea = {
        id: 1234567,
        descripcion: "Ejercicios de redes",
        completada: false
    }

    tareas.push(tarea);
    mostrarMenu();
}

const listarTareas = () => {
    tareas.forEach((tarea, index) => {
        const estado = tarea.completada ? "COMPLETADA" : "PENDIENTE";
        console.log(`${index + 1}: \tid: ${tarea.id}\n\tdescripción: ${tarea.descripcion}\n\testado: ${estado}\n----------------------------------`);
    });
    mostrarMenu();
}

const marcarTareas = () => {

}

const eliminarTareas = () => {

}

const mostrarMenu = () => {
    console.log('1. Agregar tareas\n' +
        '2. Listar tareas\n' +
        '3. Marcar tareas como completadas\n' +
        '4. Eliminar tareas\n' +
        '5. Salir del programa\n');
    rl.question("Elige la opcion: ", function (answer) {
        switch (answer) {
            case "1":
                console.log("----------------------------------")
                console.log("Agregar tareas");
                console.log("----------------------------------")
                agregarTareas();
                break;
            case "2":
                console.log("----------------------------------")
                console.log("Listar tareas");
                console.log("----------------------------------")
                listarTareas();
                break;
            case "3":
                console.log("----------------------------------")
                console.log("Marcar tareas como completadas");
                console.log("----------------------------------")
                break;
            case "4":
                console.log("----------------------------------")
                console.log("Eliminar tareas");
                console.log("----------------------------------")
                break;
            case "5":
                console.log("----------------------------------");
                console.log("Salir del programa");
                console.log("----------------------------------")
                rl.close();
                resolve();
                break;
            default:
                console.log("----------------------------------")
                console.log("Opción no correcta");
                console.log("----------------------------------")
                mostrarMenu();
                break;
        }
    });
}


const main = async () => {
    console.log("---------------------------");
    await mostrarMenu();
}

main()