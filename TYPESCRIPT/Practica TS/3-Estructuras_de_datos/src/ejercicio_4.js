var Rol;
(function (Rol) {
    Rol[Rol["User"] = 0] = "User";
    Rol[Rol["Admin"] = 1] = "Admin";
    Rol[Rol["Director"] = 2] = "Director";
})(Rol || (Rol = {}));
function comprobarRol(rol) {
    var permisos = "";
    switch (Rol[rol]) {
        case "User":
            permisos = "leer";
            break;
        case "Admin":
            permisos = "leer-escribir";
            break;
        case "Director":
            permisos = "leer-ejecutar";
            break;
        default:
            return "Un error";
    }
    return Rol[rol] + " tiene permisos de " + permisos;
}
console.log(comprobarRol(Rol.User));
console.log(comprobarRol(Rol.Admin));
console.log(comprobarRol(Rol.Director));
