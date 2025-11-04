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
    const valor = contrasena.value.trim()
     if(valor == "") {
      error.innerHTML = "Contraseno puede ser vacio"
      contrasena.focus()      
      
    } else {
  
      limpiar()
    }


  }
  
  form.addEventListener("submit",e => {
    const login = "digitalnest"
    const password = 12345
    if(login === nombre.value && password === ){
      e.preventDefault()
      alert("Los datos no envian")
    } else {
      alert("los datos se envian!")
      limpiar()
    }
  })

}
