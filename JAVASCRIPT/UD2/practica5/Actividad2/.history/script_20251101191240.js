window.onload = function (){
  let form = document.getElementById("registarForm");
  let nombre = document.getElementById("nombre")
  let apellido = document.getElementById("apellido")

  nombre.addEventListener("blur",convertirMayuscula)
  apellido.addEventListener("blur", convertirMayuscula)
  nombre.

  function convertirMayuscula(e) {
    let nom = e.target
    nom.value = nom.value.trim().toUpperCase()

  }

}
