class Animal {
  hablar(): void{
    console.log("Decir algo");
    
  };
}

class Perro extends Animal {
  hablar(): void {
    console.log("Gaw!");
  }
}

class Gato extends Animal {
  hablar(): void {
    console.log("Meow!");
  }
}

const gato = new Gato();
gato.hablar();

const perro = new Perro();
perro.hablar();
