class Persona2 {
    nombre: string;
    edad: number;
    direccion: string;
    esStudent: boolean;

    public constructor(nombre: string = "persona", edad: number = 18, direccion: string = "Calle QWERTY", esStudent: boolean = true){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.esStudent = esStudent;
    }

    hablar(): string {
        return "Me llamo " + this.nombre;
    }
};

const persona2 = new Persona2();
console.log(persona2.hablar());