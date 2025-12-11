type Edad = number;
type Rol = "admin" | "user";

const usuario: {rol: Rol, edad: Edad} = {rol: "admin", edad: 23};

console.log(usuario.rol, usuario.edad);
