var Perro3 = /** @class */ (function () {
    function Perro3() {
    }
    Perro3.prototype.hablar = function () {
        console.log("Perro3: Gaw!");
    };
    return Perro3;
}());
var Gato3 = /** @class */ (function () {
    function Gato3() {
    }
    Gato3.prototype.hablar = function () {
        console.log("Gato3: Meow!");
    };
    return Gato3;
}());
var Pajaro3 = /** @class */ (function () {
    function Pajaro3() {
    }
    Pajaro3.prototype.hablar = function () {
        console.log("Pajaro3: Scree!");
    };
    return Pajaro3;
}());
var animals = [new Perro3(), new Gato3(), new Pajaro3()];
animals.map(function (animal) { return animal.hablar(); });
