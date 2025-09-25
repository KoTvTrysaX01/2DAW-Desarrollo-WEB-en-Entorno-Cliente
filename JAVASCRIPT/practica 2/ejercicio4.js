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

function agregarTareas() { //Solicita una descripción y crea una tarea.
    rl.question("La descripción de la tarea: ", description => {
        let tarea = {
            id: Date.now(),
            descripcion: description.slice(),
            completada: false
        }
        tareas.push(tarea);
        console.log(`Se creó una tarea con el código - ${tarea.id}`);
        mostrarMenu();
    })
}

function listarTareas() { // Muestra la lista detallada de tareas.
    if (tareas.length === 0) { // Si no hay tareas en la lista, se muestra un comentario
        console.log("No se encontraron tareas");
        mostrarMenu();
    } else {
        tareas.forEach((tarea, index) => {
            const estado = tarea.completada ? "COMPLETADA" : "PENDIENTE";
            console.log(`${index + 1}: \tid: ${tarea.id}\n\tdescripción: ${tarea.descripcion}\n\testado: ${estado}\n`);
        });
        mostrarMenu();
    }
}

function marcarTareas() { // Pregunta qué tarea se ha completado y cambia la propiedad completeada a true
    if (tareas.length === 0) { // Si no hay tareas en la lista, se muestra un comentario
        console.log("No se encontraron tareas");
        mostrarMenu();
    } else {
        console.log("Last tareas pendientes:\n");
        tareas.forEach((tarea) => { // Muestra una lista corta de tareas.
            if (!tarea.completada) {
                console.log(`id: ${tarea.id} Descripción: ${tarea.descripcion}\n`);
            }
        });
        console.log("----------------------------------");
        rl.question("¿Qué tarea completaste? ", (res) => {
            let tareaEncontrado = false;
            tareas.forEach((tarea) => { // La propiedad cambia de valor solo si la descripción coincide, completada == false y si no hubo coincidencias anteriores
                if (res.slice() === tarea.descripcion && !tarea.completada && !tareaEncontrado) {
                    tarea.completada = true;
                    tareaEncontrado = true;
                    console.log(`La tarea '${tarea.descripcion}' está completada`);
                }
            })
            if (!tareaEncontrado) { // Si no hay coincidencias, el usuario ve el comentario.
                console.log("No se pudo encontrar la tarea: " + res);
            }
            mostrarMenu();
        })
    }
}

function eliminarTareas() { // Elimina la tarea especificada de la lista.
    if (tareas.length === 0) { // Si no hay tareas en la lista, se muestra un comentario
        console.log("No se encontraron tareas");
        mostrarMenu();
    } else {
        console.log("Last tareas disponibles:\n"); // Muestra una lista corta de tareas.
        tareas.forEach((tarea) => {
            console.log(`id: ${tarea.id} Descripción: ${tarea.descripcion}\n`);
        });
        console.log("----------------------------------");
        rl.question("¿Qué tarea quieres eliminar? ", (res) => {
            let tareaEliminada = false;
            tareas.forEach((tarea, index) => { // La tarea se elimina si la descripción es adecuada y no hubo coincidencias anteriores.
                if (res.slice() === tarea.descripcion && !tareaEliminada) {
                    tareaEliminada = true;
                    console.log(`La tarea '${tarea.descripcion}' está eliminada`);
                    tareas.splice(index, 1);
                }
            })
            if (!tareaEliminada) { // // Si no hay coincidencias, el usuario ve el comentario.
                console.log("No se pudo encontrar la tarea: " + res);
            }
            mostrarMenu();
        })
    }
}

function mostrarMenu() { // Muestra un menú con opciones.
    console.log("----------------------------------")
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
                marcarTareas();
                break;
            case "4":
                console.log("----------------------------------")
                console.log("Eliminar tareas");
                console.log("----------------------------------")
                eliminarTareas();
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

//Inicio del programa
mostrarMenu();
