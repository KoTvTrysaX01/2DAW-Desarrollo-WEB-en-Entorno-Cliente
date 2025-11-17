
// Este método comprueba si las cookies están habilitadas en una página web.
// En Chrome, aunque devuelve verdadero, sigue bloqueando las cookies (¿por motivos de seguridad?).
// Sí que funciona en FireFox
console.log(navigator.cookieEnabled);

let visits = 1;
if(document.cookie.includes("visits=")){
    visits = parseInt(document.cookie.split("=")[1]) + 1;
}

document.cookie = "visits=" + visits;
document.getElementById("msg").innerHTML = `You've visited this page ${visits} times.`;

function clearCookies(){
    document.cookie = "visits=;expires=Thu, 1 Jan 1970 00:00:00: UTC;";
    document.getElementById("msg").innerText = "Cookie are cleared.";
}
