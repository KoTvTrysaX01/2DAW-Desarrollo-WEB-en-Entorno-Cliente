class Persona3 {
    private nombre: string;
    private edad: number;
    private direccion: string;
    private esStudent: boolean;

    public constructor(nombre: string = "persona", edad: number = 18, direccion: string = "Calle QWERTY", esStudent: boolean = true){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.esStudent = esStudent;
    }

    public hablar(): string {
        return "Me llamo " + this.nombre;
    }

    protected hola(){
        return "Hola! ";
    }
};

class SubPersona extends Persona3{
    public hablar_hola(){
        return this.hola() + this.hablar();
    }
}

const persona3 = new SubPersona();
console.log(persona3.hablar_hola());