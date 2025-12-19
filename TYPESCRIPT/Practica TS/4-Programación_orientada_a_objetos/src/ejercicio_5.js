var Perro2 = /** @class */ (function () {
    function Perro2() {
    }
    Perro2.prototype.hablar = function () {
        console.log("Perro: Gaw!");
    };
    return Perro2;
}());
var Gato2 = /** @class */ (function () {
    function Gato2() {
    }
    Gato2.prototype.hablar = function () {
        console.log("Gato: Meow!");
    };
    return Gato2;
}());
var Pajaro = /** @class */ (function () {
    function Pajaro() {
    }
    Pajaro.prototype.hablar = function () {
        console.log("Pajaro: Scree!");
    };
    return Pajaro;
}());
var perro2 = new Perro2();
perro2.hablar();
var gato2 = new Gato2();
gato2.hablar();
var pajaro = new Pajaro();
pajaro.hablar();
