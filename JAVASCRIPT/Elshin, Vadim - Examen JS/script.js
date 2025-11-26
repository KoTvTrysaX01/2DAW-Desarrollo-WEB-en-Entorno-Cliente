// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", iniciar);

/**
 * Inicializa el formulario.
 * Asigna eventos de validación y de selección dinámica.
 */

function iniciar() {
    var button = document.getElementsByTagName("button").onclick = validarFormulario;
}

/**
 * Valida todos los campos del formulario antes de enviarlo.
 * Muestra mensajes de error si hay algún campo incorrecto.
 */
function validarFormulario(e) {
    e.preventDefault();

    let nombre = validarCampo(document.getElementById("nombre"));
    let email = validarEmail(document.getElementById("email").value);
    let tel = validarTelefono(document.getElementById("telefono").value);
    let dni = validarDNI(document.getElementById("dni").value);
    let curso = document.getElementById("curso").value;

    if (!nombre || !email || !tel || !dni || !curso) {
        limpiarFormulario();
        document.getElementById("curso").classList = "error";
        mostrarMensaje("Corrige los errores anted de enviar", "Error");
    } else {
        mostrarMensaje("Todo es correcto", "");
    }
}

/**
 * Valida un campo individual (nombre, DNI, email, teléfono, curso o nivel).
 * Devuelve true si es válido o false en caso contrario.
 */
function validarCampo(campo) {
    var regex = /^([a-zA-Z]{4,10}[\s][a-zA-Z]{4,10})$/;

    if (regex.test(campo.value)) {
        document.getElementById("nombre").classList = "correcto";
        limpiarMensajes();
        return true;
    } else {
        document.getElementById("nombre").classList = "error";
        mostrarMensaje("su nombre es incorrecto.", "Formato no válido")
        return false;
    }
}

/**
 * Comprueba si el formato del correo electrónico es válido.
 */
function validarEmail(valor) {
    var regex = new RegExp("[a-z]*[@]{1}[a-z]*[\.]{1}[a-z]{2,3}$");

    if (regex.test(valor)) {
        document.getElementById("email").classList = "correcto";
        limpiarMensajes();
        return true;

    } else {
        document.getElementById("email").classList = "error";
        mostrarMensaje("su email es incorrecto.", "Formato no válido");
        return false;
    }
}

/**
 * Comprueba si el número de teléfono tiene exactamente 9 dígitos.
 */
function validarTelefono(valor) {
    var regex = new RegExp("([\+]{1}[0-9]{2,3})?[0-9]{9}$");

    if (regex.test(valor)) {
        document.getElementById("telefono").classList = "correcto";
        limpiarMensajes();
        return true;

    } else {
        document.getElementById("telefono").classList = "error";
        mostrarMensaje("su teléfono es incorrecto.", "Formato no válido");
        return false;
    }
}

/**
 * Verifica si el DNI tiene formato correcto (8 números + letra válida).
 */
function validarDNI(valor) {
    var regex = /[XYZ]?\d{5,8}[A-Z]$/;

    if (regex.test(valor)) {
        document.getElementById("dni").classList = "correcto";
        limpiarMensajes();
        return true;

    } else {
        document.getElementById("dni").classList = "error";
        mostrarMensaje("su dni es incorrecto.", "Formato no válido");
        return true;
    }

}

/**
 * Muestra un mensaje informativo (error o éxito) en pantalla.
 */
function mostrarMensaje(texto, tipo) {
    document.getElementById("mensaje").classList = "error";
    document.getElementById("mensaje").innerHTML = `${tipo}: ${texto}`;
}

/**
 * Limpia los mensajes visibles en pantalla.
 */
function limpiarMensajes() {
    document.getElementById("mensaje").innerHTML = "";
}

/**
 * Restablece el formulario tras el envío exitoso.
 */
function limpiarFormulario() {
    document.getElementById("formularioCurso").reset();
}

/**
 * Muestra las opciones de nivel según el curso seleccionado.
 * Ejemplo:
 * - Introducción a JavaScript → Intermedio / Avanzado
 * - Desarrollo React → Full Stack / DevOps / Frontend Senior
 * - Acceso a JSON → Freelancer / Analista Datos
 */
function mostrarOpcionesCurso(cursoSeleccionado) {
    var option = document.createElement("option");
    var nivel = document.getElementById("nivel");

    console.log(cursoSeleccionado);

    switch (cursoSeleccionado) {
        case "introduccion-js":
            let option1 = document.createElement("option");
            option1.textContent = "Intermedio";
            let option2 = document.createElement("option");
            option2.textContent = "Avanzado";
            nivel.appendChild(option1);
            nivel.appendChild(option2);
            break;
        case "desarrollo-react":

            let option3 = document.createElement("option");
            option3.textContent = "Full Stack";
            let option4 = document.createElement("option");
            option4.textContent = "DevOps";
            let option5 = document.createElement("option");
            option5.textContent = "Frontend Senior";
            nivel.appendChild(option3);
            nivel.appendChild(option4);
            nivel.appendChild(option5);
            break;
        case "accesso-json":  
            let option6 = document.createElement("option");
            option6.textContent = "Freelancer";
            let option7 = document.createElement("option");
            option7.textContent = "Analista Dato";
            nivel.appendChild(option6);
            nivel.appendChild(option7);
            break;

    }
}

/**
 * Restablece un select a su estado inicial.
 */
function resetearSelect(id) { }
