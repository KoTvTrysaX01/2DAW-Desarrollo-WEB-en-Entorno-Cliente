var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 0] = "Admin";
    Rol[Rol["Usuario"] = 1] = "Usuario";
    Rol[Rol["Invitado"] = 2] = "Invitado";
})(Rol || (Rol = {}));
;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, rol) {
        this.nombre = nombre;
        this.edad = edad;
        this.rol = rol;
    }
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    Usuario.prototype.getEdad = function () {
        return this.edad;
    };
    Usuario.prototype.getRol = function () {
        return Rol[this.rol];
    };
    return Usuario;
}());
var usuarios = [];
function anadirUsuario(usuario) {
    usuarios.push(usuario);
}
;
function buscarUsuario(nombre) {
    return usuarios.filter(function (usuario) { return usuario.getNombre() == nombre; })[0]; // devuelve un array filtrado. Tomamos el primer resultado [0] 
}
;
function mostrarUssuarios() {
    usuarios.map(function (usuario) { return console.log("".concat(usuario.getNombre(), " - ").concat(usuario.getEdad(), " - ").concat(usuario.getRol())); });
}
anadirUsuario(new Usuario("Vadim", 24, Rol.Admin));
anadirUsuario(new Usuario("Kristina", 25, Rol.Invitado));
anadirUsuario(new Usuario("Saba", 23, Rol.Usuario));
anadirUsuario(new Usuario("Saba", 232131231, Rol.Invitado));
console.log(buscarUsuario("Saba"));
mostrarUssuarios();
