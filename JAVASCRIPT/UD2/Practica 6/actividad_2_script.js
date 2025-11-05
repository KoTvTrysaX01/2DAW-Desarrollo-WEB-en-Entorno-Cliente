function aMayusculas(campo) {
    campo.value = campo.value.toUpperCase()
}

function comprobar(campo) {
    var re;
    switch (campo.name) {
        case "nombre":
            re = /[a-zA-Záéíóúñ]{5,40}( [a-zA-Záéíóúñ]{5,40})*$/
            break;

        case "apellidos":
            re = /[a-zA-Záéíóúñ]{4,80}( [a-zA-Záéíóúñ]{4,80})*$/
            break;

        case "edad":
            re = /^[1-9][0-9]?$|^10[0-5]$/
            break;

        case "dni":
            re = /^[XYZ]?\d{5,8}[A-Z]$/
            break;

        case "email":
            re = /[a-z]*[@]{1}[a-z]*[\.]{1}[a-z]{2,3}$/
            break;

        case "tel":
            re = /([\+][0-9]{2,3})?[0-9]{9}/
            break;

        case "fecha_nac":
            re = /\d{1,2}[/-]\d{1,2}[\/\-]\d{2,4}/
            break;

        case "horas_visita":
            re = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
            break;

        default:
            console.log("Un error.")

    }
    if (re != null) {
        var p = document.getElementById("errores");
        if (campo.value == "") {
            p.textContent = `ERROR: ${campo.name.toUpperCase()} no puede estar vacía`;
            document.getElementById(campo.name).className = "incorrecto";
            document.getElementById(campo.name).focus();
        } else if (!re.test(campo.value)) {
            p.textContent = `ERROR: ${campo.name.toUpperCase()} está mal`;
            document.getElementById(campo.name).className = "incorrecto";
            document.getElementById(campo.name).focus();
        } else {
            document.getElementById(campo.name).className = "correcto";
            p.textContent = "";
        }
    }
}

const provincias = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias',
    'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria',
     'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona',
     'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Baleares',
     'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
     'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia',
     'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo',
     'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']

function comprobarProvincia(campo) {
    var p = document.getElementById("errores");
    if (campo.value == "") {
        p.textContent = `ERROR: ${campo.name.toUpperCase()} no puede estar vacía`;
        document.getElementById(campo.name).className = "incorrecto";
        document.getElementById(campo.name).focus();
    } else if (!provincias.includes(campo.value)) {
        p.textContent = `ERROR: ${campo.name.toUpperCase()} está mal`;
        document.getElementById(campo.name).className = "incorrecto";
        document.getElementById(campo.name).focus();
    } else {
        document.getElementById(campo.name).className = "correcto";
        p.textContent = "";
    }
}