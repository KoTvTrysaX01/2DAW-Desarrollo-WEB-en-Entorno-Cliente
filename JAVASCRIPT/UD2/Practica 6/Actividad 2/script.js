function aMayusculas(campo) {
    campo.value = campo.value.toUpperCase()
}

function comprobar(campo) {
    var re;
    switch (campo.name) {
        case "nombre":
            // ^ -> El comienzo de la línea
            // $ -> Fin de la línea
            // [a-zA-Záéíóúñ]{5,40} -> Una secuencia de letras cuya longitud varía de 5 al 40
            // [a-zA-Záéíóúñ]{5,40} -> Misma secuencia,  el '*' al final la hace opcional
            re = /[a-zA-Záéíóúñ]{5,40}( [a-zA-Záéíóúñ]{5,40})*$/
            break;

            // [a-zA-Záéíóúñ]{4,40} -> Una secuencia de letras cuya longitud varía de 4 al 40
            // [a-zA-Záéíóúñ]{4,40} -> Misma secuencia,  el '*' al final la hace opcional
        case "apellidos":
            re = /[a-zA-Záéíóúñ]{4,80}( [a-zA-Záéíóúñ]{4,80})*$/
            break;

            // [1-9] -> Una secuencia de números cuya longitud varía de 1 al 9
            // [0-9] -> Una secuencia de números cuya longitud varía de 0 al 9, el '?' al final lo hace opcional
            // '|' -> Es un símbolo de elección. Selecciona la partida anterior o la siguiente.
            // 10[0-5] -> El número 10 y cualquier número del 0 al 5
        case "edad":
            re = /^[1-9][0-9]?$|^10[0-5]$/
            break;

            // [XYZ]? -> Una letra entre X, Y y Z
            // \d{5,8} -> Cualquier número del 0 al 9 que se repita de 5 a 8 veces.
            // [A-Z] -> Cualquier letra mayúscula del alfabeto
        case "dni":
            re = /^[XYZ]?\d{5,8}[A-Z]$/
            break;

            // [a-z]* -> Una secuencia de letras cuya longitud varía de 0 a infinito.
            // [@]{1}[a-z]* -> Un único carácter '@' seguido de la secuencia anterior
            // [\.]{1} -> Un único carácter '.'
            // [a-z]{2,3} -> Una secuencia de letras cuya longitud varía de 2 al 3
        case "email":
            re = /[a-z]*[@]{1}[a-z]*[\.]{1}[a-z]{2,3}$/
            break;

            // () -> Agrupa las secuencias
            // [\+] -> Un único carácter '+'
            // [0-9]2,3} -> Una secuencia de números cuya longitud varía de 2 al 3
            // '?' -> Hace que el grupo anterior sea opcional.
            // [0-9]{9} -> Una secuencia de números de longitud 9
        case "tel":
            re = /([\+][0-9]{2,3})?[0-9]{9}/
            break;

            // \d{1,2} -> Cualquier número del 0 al 9 que se repita de 1 a 2 veces.
            // [/-]\d{1,2} -> Un único carácter '-' seguido de la secuencia anterior
            // [\/\-]\d{2,4} -> Un carácter entre '/' o '-' seguido de una secuencia de cualquier número del 0 al 9 que se repita de 2 a 4 veces.
        case "fecha_nac":
            re = /\d{1,2}[/-]\d{1,2}[\/\-]\d{2,4}/
            break;

            // [0-1]? -> Un número del 0 al 1. Opcional.
            // [0-9] -> Un número del 0 al 9.
            // '|' -> Es un símbolo de elección. Selecciona la partida anterior o la siguiente.
            // 2[0-3] -> El número 2 seguido de un número del 0 al 3
            // : -> Un único carácter ':'
            // [0-5][0-9] -> Dos números. Del 0 al 5 y del 0 al 9.
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
        p.textContent = `ERROR: ${campo.name.toUpperCase()} no es válido`;
        document.getElementById(campo.name).className = "incorrecto";
        document.getElementById(campo.name).focus();
    } else {
        document.getElementById(campo.name).className = "correcto";
        p.textContent = "";
    }
}