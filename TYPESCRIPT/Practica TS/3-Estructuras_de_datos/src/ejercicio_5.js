var Rol;
(function (Rol) {
    Rol[Rol["User"] = 0] = "User";
    Rol[Rol["Admin"] = 1] = "Admin";
    Rol[Rol["Ensayador"] = 2] = "Ensayador";
    Rol[Rol["Dise\u00F1ador"] = 3] = "Dise\u00F1ador";
    Rol[Rol["Director"] = 4] = "Director";
})(Rol || (Rol = {}));
// let users: [nombres: string[], edades: number[], rols: Rol[]];
// users = [["Tania", "Vadim", "Luis", "Saba", "Hector", "Ricardo", "Kristina"], [20, 19, 21, 20, 19, 20, 21], [Rol.Ensayador, Rol.Diseñador, Rol.User]]
var users = [{ name: "Vadim", edad: 24, rol: Rol.Ensayador }, { name: "Tania", edad: 22, rol: Rol.User }, { name: "Luis", edad: 22, rol: Rol.Admin }, { name: "Saba", edad: 22, rol: Rol.Director }, { name: "Hector", edad: 22, rol: Rol.Diseñador }, { name: "Ricardo", edad: 22, rol: Rol.Ensayador }, { name: "Kristina", edad: 22, rol: Rol.Director }];
console.log(users.filter(function (user) { return Rol[user.rol] == "Director"; }));
