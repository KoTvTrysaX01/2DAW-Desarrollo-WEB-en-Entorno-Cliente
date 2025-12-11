function sumar(a:number, b:number): number{
    return a + b;
}

function filtrarMayoures(arr: number[], limite: number): number[]{
    return arr.filter(item => item > limite);
}

function obtenerPropiedad(obj: string[], clave: number): string{
    return obj[clave];
}


console.log(sumar(12, 13));
console.log(filtrarMayoures([1, 2, 3, 4, 5], 2));

const obj : string[] = ["manzana", "naranja", "plaatano"];
console.log(obtenerPropiedad(obj, 1))