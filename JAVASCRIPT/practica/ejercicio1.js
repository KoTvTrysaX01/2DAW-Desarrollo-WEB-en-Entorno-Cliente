const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Introduce el precios del producto: ", (precio) => {
    if (!Number.isInteger(parseInt(precio))) {
        console.log("Por favor proporcione un valor válido");
        rl.close();
    } else {
        rl.question("Introduce la categoría: (estudiante, jubilado, general) ", (categoria) => {
            if (categoria.toLocaleLowerCase() === "estudiante") {
                console.log(`Su descuento es: 20%\nEl precio final es: ${precio - (precio / 100 * 20)}€`);
            } else if (categoria.toLocaleLowerCase() === "jubilado") {
                console.log(`Su descuento es: 15%\nEl precio final es: ${precio - (precio / 100 * 15)}€`);
            } else if (categoria.toLocaleLowerCase() === "general") {
                console.log(`Su descuento es: 10%\nEl precio final es: ${precio - (precio / 100 * 10)}€`);
            } else {
                console.log("No se reconoce el valor introducido. Inténtelo de nuevo.");
            }
            rl.close();
        });
    }
});