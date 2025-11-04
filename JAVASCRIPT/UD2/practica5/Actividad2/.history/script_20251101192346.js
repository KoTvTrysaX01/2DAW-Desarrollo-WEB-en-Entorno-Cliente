window.onload = function (){
  let form = document.getElementById("registarForm");
  let nombre = document.getElementById("nombre")
  let apellido = document.getElementById("apellido")
  let error = document.getElementById("errorMessages")
  let edad = do

  nombre.addEventListener("blur",convertirMayuscula)
  apellido.addEventListener("blur", convertirMayuscula)
  

  function convertirMayuscula(e) {
    let nom = e.target
    nom.value = nom.value.trim().toUpperCase()
    esValido()
  }
  function validNombre(nombre) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{5,40}( [a-zA-ZáéíóúÁÉÍÓÚñÑ]{5,40})*$/g.test(nombre)
  }
  function esValido() {
    const valor = nombre.value.trim()
    if(!validNombre(valor) || valor == "") {
      error.innerHTML = " Nombre no puede ser vacio"
      nombre.focus()
    }
  }
  

}
