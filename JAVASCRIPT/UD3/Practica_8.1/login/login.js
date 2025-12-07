function checkInput(field) {
    if (field.value.length < 3) {
        field.classList = "incorrect";
        return false;
    } else {
        field.classList = "correct";
        return true;
    }
}


document.getElementById("entrar").addEventListener("click", function (event) {
    event.preventDefault()
    var nombre = document.getElementById("username");
    var password = document.getElementById("password");

    if (!checkInput(nombre) || !checkInput(password)) {
        document.getElementById("errores").innerHTML = "Corrija los errores";
    } else {
        fetch('http://localhost:3000/usuarios')
            .then(response => response.json())
            .then(data => {
                [...data].some(function (element) {
                    if (element["username"] == nombre.value && element["password"] == password.value) {
                        localStorage.setItem("username", element["username"]);
                        console.log(localStorage.getItem("username"));
                        
                        location.href = "../index/index.html";
                        return true;
                    } else {
                        document.getElementById("errores").innerHTML = "El nombre de usuario o la contraseña son incorrectos";
                    }
                })
            })
            .catch(error => console.error('Error al obtener usuarios:', error));
        document.getElementById("errores").innerHTML = "";
    }
});