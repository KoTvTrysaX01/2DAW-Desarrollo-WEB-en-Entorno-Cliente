function eresMayor(edad: number): boolean{
    return edad >= 18;
}

function comprobarNºPedido(pedido: string): boolean{
    return pedido.length == 8;
}

console.log("Eres mayor?: " + eresMayor(17));
