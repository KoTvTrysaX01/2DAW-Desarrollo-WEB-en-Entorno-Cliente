let coord: [x: number, y: number, direccion: string] = [75, -43, ""];

function comprobar(coord: [number, number, string]){
    let dir = coord[0] > 0 ? "Oeste" : "Este";
    dir += "-";
    dir += coord[1] > 0 ? "Norte" : "Sur";
    coord[2] = dir;
};

comprobar(coord);

console.log(coord);


