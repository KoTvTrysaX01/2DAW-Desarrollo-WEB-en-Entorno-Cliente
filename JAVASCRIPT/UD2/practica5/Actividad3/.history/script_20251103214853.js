window.onload = function (){
  let form = document.getElementById("registrarForm");
  let nombre = document.getElementById("nombre")
  let contrasena = document.getElementById("contrasena")
  let error = document.getElementById("errorMessages")
 

  nombre.addEventListener("blur",esValidoNombre)
  apellido.addEventListener("blur", esValidoContrasena)
 
  function limpiar () {
    error.innerHTML = ""
  }

  
  function esValidoNombre() {
    const valor = nombre.value.trim()
    if(valor == "") {
      error.innerHTML = " Nombre no puede ser vacio o hay otro error"
      nombre.focus()
      
    } else {
  
      limpiar()
    }
  }

  function esValidoContrasena() {
    const valor = apellido.value.trim()
     if(valor == "") {
      error.innerHTML = "Contraseno puede ser vacio"
      
      
    } else {
  
      limpiar()
    }

  }
  function validEdad(edad) {
    return /^(1[01][0-9]|120|[1-9][0-9]?)$/.test(edad)

  }
  function esValidoEdad() {
    const edadValor = edad.value.trim()
    if (!validEdad(edadValor) || edadValor == "") {
      error.innerHTML = " hay error en edad"
      edad.focus()
    }else {
      limpiar()
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
    if (provincia.value === " " || !provincia.value){
       error.innerHTML = " hay que eligir una provincia"
      provincia.focus()
    } else {
      limpiar()
    }
  }
  function validFecha(valor){
    return /^(\d{2})[\/-](\d{2})[\/-](\d{4})$/.test(valor)
  }
  function esValidaFecha(){
    const fechaValor = fecha.value.trim()
    if(!validFecha(fechaValor)) {
      error.innerHTML = " hay error en fecha"
      fecha.focus()
    } else {
      limpiar()
    }
  }
  function validHora(hora) {
    return /^\d{2}:\d{2}$/.test(hora)

  }
  function esValidaHora(){
    const horaValor = hora.value.trim()
    if(!validHora(horaValor)) {
      error.innerHTML = " hay error en hora"
      hora.focus()
    } else {
      limpiar()
    }

  }
  function validTel(tel){
    return /^\d{9}$/.test(tel)
  }
  function esValidoTel(){
    const telValor = tel.value.trim()
    if(!validTel(telValor)) {
      error.innerHTML = " hay error en telefono"
      tel.focus()
    } else {
      limpiar()
    }

  }
  form.addEventListener("submit",e => {
    const mensaje = confirm("Deseas confirmar el envio de datos?")
    if(!mensaje){
      e.preventDefault()
      alert("Los datos no envian")
    } else {
      alert("los datos se envian!")
      limpiar()
    }
  })

}
