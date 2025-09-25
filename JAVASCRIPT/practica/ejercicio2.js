const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Introduce el código de idioma ('es', 'en', 'fr' o 'de'): ", (codigo) => {
    switch(codigo){
        case "es":
            console.log("Hola");
            break;
        case "en":
            console.log("Hello");
            break;
        case "fr":
            console.log("Bonjour");
            break;
        case "de":
            console.log("Hallo");
            break;
        default:
            console.log("Idioma no soportado");
            break;
    }
    rl.close();
});