enum Rol {
  "User",
  "Admin",
  "Ensayador",
  "Diseñador",
  "Director",
}

type Users = {
  name: string;
  edad: number;
  rol: Rol;
};

// let users: [nombres: string[], edades: number[], rols: Rol[]];
// users = [["Tania", "Vadim", "Luis", "Saba", "Hector", "Ricardo", "Kristina"], [20, 19, 21, 20, 19, 20, 21], [Rol.Ensayador, Rol.Diseñador, Rol.User]]

let users: Users[] = [{ name: "Vadim", edad: 24, rol: Rol.Ensayador }, { name: "Tania", edad: 22, rol: Rol.User }, { name: "Luis", edad: 22, rol: Rol.Admin }, { name: "Saba", edad: 22, rol: Rol.Director }, { name: "Hector", edad: 22, rol: Rol.Diseñador }, { name: "Ricardo", edad: 22, rol: Rol.Ensayador }, { name: "Kristina", edad: 22, rol: Rol.Director}];

console.log(users.filter((user) => Rol[user.rol] == "Director"));
