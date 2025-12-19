var Persona = /** @class */ (function () {
    function Persona(nombre, edad, direccion, esStudent) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.esStudent = esStudent;
    }
    Persona.prototype.hablar = function () {
        return "Me llamo " + this.nombre;
    };
    return Persona;
}());
;
var persona1 = new Persona("Vadim", 24, "qwerty", true);
console.log(persona1.hablar());
