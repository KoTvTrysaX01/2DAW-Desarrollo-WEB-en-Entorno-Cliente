class Persona {
    nombre: string;
    edad: number;
    direccion: string;
    esStudent: boolean;

    public constructor(nombre: string, edad: number, direccion: string, esStudent: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.esStudent = esStudent;
    }

    hablar(): string {
        return "Me llamo " + this.nombre;
    }
};

const persona1 = new Persona("Vadim", 24, "qwerty", true);

console.log(persona1.hablar());


