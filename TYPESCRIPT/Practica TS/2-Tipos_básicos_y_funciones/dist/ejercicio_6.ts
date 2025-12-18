function convalidacion(data: boolean): string{
    return data ? "Aprobado": "Reprobado";
}

console.log(convalidacion(false));
console.log(convalidacion(true));

function convalidacionNotas(nota: number): boolean{
    return nota >= 5 ? true : false; 
}

console.log(`El resultado de su exam: ${convalidacion(convalidacionNotas(4))}`);
