var Persona2 = /** @class */ (function () {
    function Persona2(nombre, edad, direccion, esStudent) {
        if (nombre === void 0) { nombre = "persona"; }
        if (edad === void 0) { edad = 18; }
        if (direccion === void 0) { direccion = "Calle QWERTY"; }
        if (esStudent === void 0) { esStudent = true; }
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.esStudent = esStudent;
    }
    Persona2.prototype.hablar = function () {
        return "Me llamo " + this.nombre;
    };
    return Persona2;
}());
;
var persona2 = new Persona2();
console.log(persona2.hablar());
