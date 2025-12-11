function isPrime(num: number): boolean{
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}


function contarLetras(palabra: string): number{
    let contador: number = 0
    for(let i = 0; i < palabra.length; i++){
        contador++;
    }
    return contador;
}

function nombreCompleto(nombre: string, apellido: string): string{
    return nombre + " " + apellido;
}


console.log(isPrime(13));
console.log(contarLetras("palabra"));
console.log("Vadim", "Elshin");

