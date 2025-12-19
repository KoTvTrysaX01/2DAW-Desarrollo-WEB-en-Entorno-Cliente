interface Mascota{
    hablar(): void;
}

class Perro2 implements Mascota{
    hablar(): void {
        console.log("Perro: Gaw!");
    }
}

class Gato2 implements Mascota{
    hablar(): void {
        console.log("Gato: Meow!");
    }
}

class Pajaro implements Mascota{
    hablar(): void {
        console.log("Pajaro: Scree!");
    }
}

const perro2 = new Perro2();
perro2.hablar();

const gato2 = new Gato2();
gato2.hablar();

const pajaro = new Pajaro();
pajaro.hablar();