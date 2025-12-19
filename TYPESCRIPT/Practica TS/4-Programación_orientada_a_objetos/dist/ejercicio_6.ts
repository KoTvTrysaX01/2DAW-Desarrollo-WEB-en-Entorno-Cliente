class Usuario{
    private static num: number = 0;

    private nombre: string;
    private edad: number;

    public constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;

        Usuario.num += 1;
    }

    public static totalUsuarios(): number{
        return this.num;
    }
}

const usr1 = new Usuario("vadim", 24);
const usr2 = new Usuario("person2", 22);
const usr3 = new Usuario("person3", 33);

console.log(Usuario.totalUsuarios());

