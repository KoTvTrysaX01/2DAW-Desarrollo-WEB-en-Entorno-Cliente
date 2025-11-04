let form = document.getElementById("registartionForm");
let emailInput = document.getElementById("email");
let error = document.getElementById("errorMessages");
let dni = document.getElementById("dni")
let passw = document.getElementById("password")
let web = document.getElementById("pagina")
let hijos = document.getElementById("hijos")
let nombreInput = document.getElementById("nombre")
let fecha = document.getElementById("fecha")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  error.innerHTML = ""
  const emailForm = emailInput.value.trim();
  const password = passw.value.trim()
  function validEmail(emailForm) {
    return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(emailForm);
  
  }
    function esValido(emailForm) {
      if (validEmail(emailForm)) {
        error.innerHTML = "email  e valido<br>";
      } else {
        error.innerHTML = "email no es valido<br>";
      }
    }
    esValido(emailForm);
    
    function validarDni(dni) {
      
      return /^[XYZ]?\d{5,8}[TRWAGMYFPDXBNJZSQVHLCKET]$/.test(dni)
    }
    function esValidoDni() {
      const valor = dni.value.trim();
      if (validarDni(valor)) {
        error.innerHTML += "dni es valido<br>"
      } else {
        error.innerHTML += "dni no es valido<br>"
        dni.value = ""
      }
    }
    esValidoDni()

    function validWeb(url) {
          return /^https?:\/\/(?:www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(?:\/.*)?$/.test(url);
        }
    function esValidoWeb() {
      const urlvalid = web.value.trim()
      if(validWeb(urlvalid)) {
        error.innerHTML +="web pagina esta valida<br>"
      } else {
        error.innerHTML += "web pagina no esta valida<br>"
        web.value = ""

      }
    }
    esValidoWeb()

     function validarContrasena(passwor) {
      var p = passwor.length
      if(p >=8 && p <=10) {
        error.innerHTML += "password es correcto<br>"
      } else {
         error.innerHTML += "password  no es correcto<br>"
         passw.value = ""
      }
     }
     validarContrasena(password)

     function validHijos(hijos) {
      const valorHijos = Number(hijos.value)
      if(isNaN(valorHijos) || valorHijos < 0 || valorHijos > 10) {
        error.innerHTML += "numero de hijos no esta correcto<br>"
         hijos.value = ""
        
      } else {
         error.innerHTML += "numero de hijos esta correcto<br>"
         
      }
     }
     validHijos(hijos)
    const nom = nombreInput.value.trim()
     function validNombre(nombres) {
      return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,40}( [a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,40}){1,3}$/.test(nombres)
     }
     function isvalidNombre(nombres){
      if(validNombre(nombres)) {
         error.innerHTML += "nombre esta correcto<br>"
      } else {
         error.innerHTML += "nombre no esta correcto<br>"
         nombreInput.value = ""
      }
      }
     isvalidNombre(nom)

     const fechaValor = fecha.value.trim();

     function validFecha(fecha) {
          return /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(fecha)
     }
     function esValidFecha(fecha) {
      if (validFecha(fecha)) {
         error.innerHTML += "fecha esta correcto<br>"
      } else {
         error.innerHTML += "fecha no esta correcto<br>"
         fecha.value= ""
      }
     }
     console.log(fechaValor)
     
     esValidFecha(fechaValor)
     function alerta(campo) {
      alert ("porfa completa el campo " + campo)
     }
     function validarForm(form) {
      if(nombreInput.value.trim() === ""){
        
        alerta("Nombre");
    nombreInput.focus();
    return true;

      }
     }
     validarForm()

  
});
