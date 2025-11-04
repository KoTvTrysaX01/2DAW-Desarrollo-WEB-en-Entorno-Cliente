window.onload = function (){
  let form = document.getElementById("registarForm");
  let nombre = document.getElementById("nombre")
  let apellido = document.getElementById("apellido")

  nombre.addEventListener("blur",convertirMayuscula)
  apellido.addEventListener("blur", convertirMayuscula)

  function convertirMayuscula() {
    let nom = nombre.value.trim()
    nom.toUpp

  }

}
