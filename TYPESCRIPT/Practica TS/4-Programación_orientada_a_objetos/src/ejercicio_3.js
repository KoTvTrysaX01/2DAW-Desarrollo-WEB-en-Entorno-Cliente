var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona3 = /** @class */ (function () {
    function Persona3(nombre, edad, direccion, esStudent) {
        if (nombre === void 0) { nombre = "persona"; }
        if (edad === void 0) { edad = 18; }
        if (direccion === void 0) { direccion = "Calle QWERTY"; }
        if (esStudent === void 0) { esStudent = true; }
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.esStudent = esStudent;
    }
    Persona3.prototype.hablar = function () {
        return "Me llamo " + this.nombre;
    };
    Persona3.prototype.hola = function () {
        return "Hola! ";
    };
    return Persona3;
}());
;
var SubPersona = /** @class */ (function (_super) {
    __extends(SubPersona, _super);
    function SubPersona() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubPersona.prototype.hablar_hola = function () {
        return this.hola() + this.hablar();
    };
    return SubPersona;
}(Persona3));
var persona3 = new SubPersona();
console.log(persona3.hablar_hola());
