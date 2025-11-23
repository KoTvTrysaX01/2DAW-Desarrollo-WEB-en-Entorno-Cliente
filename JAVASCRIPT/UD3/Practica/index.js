function checkInput(field) {
    if (field.value.length < 4) {
        field.classList = "incorrect";
        return false;
    } else {
        field.classList = "correct";
        return true;
    }
}


document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault()
    var nombre = document.getElementById("nombre");
    var password = document.getElementById("password");

    if (!checkInput(nombre) || !checkInput(password)) {
        document.getElementById("errorMsg").innerHTML = "Correct mistakes";
    } else {
        fetch('http://localhost:3000/usuarios')
            .then(response => response.json())
            .then(data => {
                [...data].some(function (element) {
                    if (element["nombre"] == nombre.value && element["password"] == password.value) {
                        document.cookie = `id=${element["id"]}`;
                        document.cookie = `username=${element["nombre"]}`;
                        document.cookie = `password=${element["password"]}`;
                        location.href="crud.html";
                        return true;
                    } else {
                        console.log("error");
                    }
                })
            })
            .catch(error => console.error('Error al obtener usuarios:', error));
        document.getElementById("errorMsg").innerHTML = "";
    }
});
