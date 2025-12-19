enum Rol {
    "Admin",
    "Usuario",
    "Invitado"
};

class Usuario{
    private nombre: string;
    private edad: number;
    private rol: Rol;

    public constructor(nombre: string, edad: number, rol: Rol){
        this.nombre = nombre;
        this.edad = edad;
        this.rol = rol;
    }

    public getNombre(): string{
        return this.nombre;
    };

        public getEdad(): number{
        return this.edad;
    }

        public getRol(): string{
        return Rol[this.rol];
    }
}

let usuarios: Usuario[] = [];

function anadirUsuario(usuario: Usuario){
    usuarios.push(usuario);
};

function buscarUsuario(nombre: string):(Usuario | undefined) {
    return usuarios.filter((usuario: Usuario) => usuario.getNombre() == nombre)[0]; // devuelve un array filtrado. Tomamos el primer resultado [0] 
};

function mostrarUssuarios(): void{
    usuarios.map((usuario) => console.log(`${usuario.getNombre()} - ${usuario.getEdad()} - ${usuario.getRol()}`));
}

anadirUsuario(new Usuario("Vadim", 24, Rol.Admin));
anadirUsuario(new Usuario("Kristina", 25, Rol.Invitado));
anadirUsuario(new Usuario("Saba", 23, Rol.Usuario));
anadirUsuario(new Usuario("Saba", 232131231, Rol.Invitado));

console.log(buscarUsuario("Saba"));

mostrarUssuarios();
