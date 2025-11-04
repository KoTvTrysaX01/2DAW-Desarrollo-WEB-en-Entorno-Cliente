window.onload = function (){
  let form = document.getElementById("registrarForm");
  let nombre = document.getElementById("nombre")
  let apellido = document.getElementById("apellido")
  let error = document.getElementById("errorMessages")
  let edad = document.getElementById("edad")
  let nif = document.getElementById("nif")

  nombre.addEventListener("blur",esValidoNombre)
  apellido.addEventListener("blur", convertirMayusculaApellido)
  edad.addEventListener("onchange",esValidoEdad)

  function limpiar () {
    error.innerHTML = ""
  }

  function convertirMayusculaNombre() {
    nombre.value = nombre.value.trim().toUpperCase()
  }

  function validNombre(nombre) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{5,40}( [a-zA-ZáéíóúÁÉÍÓÚñÑ]{5,40})*$/g.test(nombre)
  }
  function esValidoNombre() {
    const valor = nombre.value.trim()
    if(!validNombre(valor) || valor == "") {
      error.innerHTML = " Nombre no puede ser vacio"
      nombre.focus()
      
    } else {
      convertirMayusculaNombre()
      limpiar()
    }
  }
  function validApellido(apel) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4,80}( [a-zA-ZáéíóúÁÉÍÓÚñÑ]{4,80})*$/g.test(apel)
  }
  function convertirMayusculaApellido() {
    apellido.value = apellido.value.trim().toUpperCase()
  }
  function esValidoApellido() {
    const valor = apellido.value.trim()
     if(!validApellido(valor) || valor == "") {
      error.innerHTML = " Nombre no puede ser vacio"
      nombre.focus()
      
    } else {
      convertirMayusculaNombre()
      limpiar()
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
  
  function validNif(nif) {
    return /^[0-9]{8}[A-Za-z]$/.test(nif)
  }
  

}
