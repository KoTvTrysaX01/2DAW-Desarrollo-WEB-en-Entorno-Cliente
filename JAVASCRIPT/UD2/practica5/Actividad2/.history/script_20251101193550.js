window.onload = function (){
  let form = document.getElementById("registarForm");
  let nombre = document.getElementById("nombre")
  let apellido = document.getElementById("apellido")
  let error = document.getElementById("errorMessages")
  let edad = this.document.getElementById("edad")
  let nif = this.document.getElementById("nif")

  nombre.addEventListener("blur",convertirMayuscula)
  apellido.addEventListener("blur", convertirMayuscula)
  edad.addEventListener("onchange",esValidoEdad)

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
  function validEdad(edad) {
    return /^(1[01][0-9]|120|[1-9][0-9]?)$/g.test(edad)

  }
  function esValidoEdad() {
    const edadValor = edad.value.trim()
    if (!validEdad(edadValor) || edadValor == "") {
      error.innerHTML = " hay error en edad"
      edad.focus()
    }
  }
  esValidoEdad()
  function validNif(nif) {
    return /^[0-9]{8}[A-Za-z]$/.test(nif)
  }
  

}
