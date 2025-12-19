var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        Usuario.num += 1;
    }
    Usuario.totalUsuarios = function () {
        return this.num;
    };
    Usuario.num = 0;
    return Usuario;
}());
var usr1 = new Usuario("vadim", 24);
var usr2 = new Usuario("person2", 22);
var usr3 = new Usuario("person3", 33);
console.log(Usuario.totalUsuarios());
