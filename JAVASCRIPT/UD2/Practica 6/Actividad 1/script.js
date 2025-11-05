
function comprobarDni(campo) {
    var re = /^[XYZ]?\d{5,8}-?[A-Z]$/;
    if (re.test(campo.value)) {
        document.getElementById(campo.name).className = "correcto";
    } else {
        campo.value = "";
        document.getElementById(campo.name).className = "incorrecto";
    }
}

function comprobarNombre(campo) {
    var re = /([a-zA-Záéíóúñ]{4,40}( [a-zA-Záéíóúñ]{4,40})){1,2}/;
    if (re.test(campo.value)) {
        document.getElementById(campo.name).className = "correcto";
    } else {
        campo.value = "";
        document.getElementById(campo.name).className = "incorrecto";
    }
}

function comprobarFecha(campo) {
    if (campo.value != "") {
        document.getElementById(campo.name).className = "correcto";
    } else {
        campo.value = "";
        document.getElementById(campo.name).className = "incorrecto";
    }
}

function comprobarNum(campo) {
    if (campo.value >= 0 && campo.value < 11) {
        document.getElementById(campo.name).className = "correcto";
    } else {
        campo.value = "";
        document.getElementById(campo.name).className = "incorrecto";
    }
}

function comprobarEmail(campo) {
    var re = /^[a-z]*[@]{1}[a-z]*[\.]{1}[a-z]{2,3}$/;
    if (re.test(campo.value)) {
        document.getElementById(campo.name).className = "correcto";
    } else {
        campo.value = "";
        document.getElementById(campo.name).className = "incorrecto";
    }
}

function comprobarWeb(campo) {
    var re = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (re.test(campo.value)) {
        document.getElementById(campo.name).className = "correcto";
    } else {
        campo.value = "";
        document.getElementById(campo.name).className = "incorrecto";
    }
}

function comprobarContrasena(campo) {
    if (campo.value.length > 7 && campo.value.length < 11) {
        document.getElementById(campo.name).className = "correcto";
    } else {
        campo.value = "";
        document.getElementById(campo.name).className = "incorrecto";
    }
}