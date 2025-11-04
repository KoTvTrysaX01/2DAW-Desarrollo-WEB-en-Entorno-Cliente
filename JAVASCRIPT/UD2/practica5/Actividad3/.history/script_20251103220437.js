window.onload = function (){
  let form = document.getElementById("registrarForm");
  let nombre = document.getElementById("nombre")
  let contrasena = document.getElementById("contrasena")
  let error = document.getElementById("errorMessages")
 

  nombre.addEventListener("blur",esValidoNombre)
  contrasena.addEventListener("blur", esValidoContrasena)
 
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
    e.preventDefault();
    const login = "digitalnest"
    const password = "12345"
    if(nombre.value === login && contrasena.value === password){
    
      error.innerHTML = "cargando"
      setTimeout(()=>
      error.innerHTML)
    } else {
      alert("los datos no son correctos")
      limpiar()
    }
  })

}
