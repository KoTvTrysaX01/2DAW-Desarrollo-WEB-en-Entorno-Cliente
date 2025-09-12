console.log("¡Hola desde Node.js!");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("¿Cómo te llamas? ", (nombre) => {
  console.log(`¡Encantado de conocerte, ${nombre}!`);
  rl.close();
});
