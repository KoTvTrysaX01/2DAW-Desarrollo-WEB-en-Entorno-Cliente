function iniciar() {
    event.preventDefault();

    var nombre = document.getElementById("nombre");
    var contr = document.getElementById("contr");
    var div = document.getElementById("contenedor");
    var result = document.getElementById("result");


    if (nombre.value == "" || contr.value == "") {
        result.className = "incorrecto";
        result.textContent = "COMPLETE LOS CAMPOS";
    } else if (nombre.value != "digitalnest" || contr.value != "12345") {
        result.className = "incorrecto";
        result.textContent = "DATOS INCORRECTOS";
    } else {
        result.className = "correcto";
        result.textContent = "CARGANDO...";
        setTimeout(()=> alert("¡Bienvenido, digitalnest!"), 3000);
    }
}