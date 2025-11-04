window.onload = function (){
  let form = document.getElementById("registrarForm");
  let nombre = document.getElementById("nombre")
  let apellido = document.getElementById("apellido")
  let error = document.getElementById("errorMessages")
  let edad = document.getElementById("edad")
  let nif = document.getElementById("nif")
  let email = document.getElementById("email")
  let provincia = document.getElementById("provincia")
  let fecha = do

  nombre.addEventListener("blur",esValidoNombre)
  apellido.addEventListener("blur", esValidoApellido)
  edad.addEventListener("change",esValidoEdad)
  nif.addEventListener("change", esValidoNif)
  email.addEventListener("change",esValidoEmail)
  provincia.addEventListener("change",esValidaProvincia)

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
      error.innerHTML = " Nombre no puede ser vacio o hay otro error"
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
      error.innerHTML = " Appellido no puede ser vacio"
      apellido.focus()
      
    } else {
      convertirMayusculaApellido()
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
  function esValidoNif(){
    const nifValor = nif.value.trim()
    if(!validNif(nifValor)) {
      error.innerHTML = " hay error en nif"
      nif.focus()
    } else {
      limpiar()
    }
  }
  function validEmail(valor) {
    return  /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(valor)
  }
  function esValidoEmail() {
    const emailValor = email.value.trim()
    if(!validEmail(emailValor)) {
      error.innerHTML = " hay error en email"
      email.focus()
    } else {
      limpiar()
    }
  }
  function esValidaProvincia() {
    if (provincia.value === ""){
       error.innerHTML = " hay que eligir una provincia"
      provincia.focus()
    } else {
      limpiar()
    }
  }

}
