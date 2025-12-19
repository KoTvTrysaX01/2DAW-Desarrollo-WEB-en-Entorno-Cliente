enum Rol {
    "Admin",
    "User",
    "Director"
};

enum Estado {
    "trabaja",
    "descansa",
    "se_va_de_vaccaciones"
}

function rol_estado(rol: Rol, estado: Estado): string{
    return Rol[rol] + " " + Estado[estado];
}

console.log(rol_estado(Rol.Admin, Estado.trabaja));
console.log(rol_estado(Rol.User, Estado.descansa));
console.log(rol_estado(Rol.Director, Estado.se_va_de_vaccaciones));


