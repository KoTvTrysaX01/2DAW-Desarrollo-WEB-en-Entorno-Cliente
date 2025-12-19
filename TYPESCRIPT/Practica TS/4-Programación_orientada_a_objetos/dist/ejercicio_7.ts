interface Animal{
    hablar():void;
}

class Perro3 implements Animal{
    hablar(): void {
        console.log("Perro3: Gaw!");
        
    }
}

class Gato3 implements Animal{
    hablar(): void {
        console.log("Gato3: Meow!");
        
    }
}

class Pajaro3 implements Animal{
    hablar(): void {
        console.log("Pajaro3: Scree!");
        
    }
}

const animals: Animal[] = [new Perro3(), new Gato3(), new Pajaro3()];
animals.map((animal) => animal.hablar());