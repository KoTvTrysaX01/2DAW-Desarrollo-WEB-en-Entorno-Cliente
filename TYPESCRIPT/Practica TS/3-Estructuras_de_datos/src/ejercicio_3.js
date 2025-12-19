var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 0] = "Admin";
    Rol[Rol["User"] = 1] = "User";
    Rol[Rol["Director"] = 2] = "Director";
})(Rol || (Rol = {}));
;
var Estado;
(function (Estado) {
    Estado[Estado["trabaja"] = 0] = "trabaja";
    Estado[Estado["descansa"] = 1] = "descansa";
    Estado[Estado["se_va_de_vaccaciones"] = 2] = "se_va_de_vaccaciones";
})(Estado || (Estado = {}));
function rol_estado(rol, estado) {
    return Rol[rol] + " " + Estado[estado];
}
console.log(rol_estado(Rol.Admin, Estado.trabaja));
console.log(rol_estado(Rol.User, Estado.descansa));
console.log(rol_estado(Rol.Director, Estado.se_va_de_vaccaciones));
