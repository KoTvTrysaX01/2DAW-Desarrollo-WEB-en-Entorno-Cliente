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
  const emailForm = emailInput.value.trim();
  const password = passw.value.trim()
  function validEmail(emailForm) {
    return /^[a-z]*[@]{1}[a-z]*[\.]{1}[a-z]{2,3}$/g.test(emailForm);
  
  }
    function esValido(emailForm) {
      if (validEmail(emailForm)) {
        error.innerHTML = "email  e valido";
      } else {
        error.innerHTML = "email no es valido";
      }
    }
    esValido(emailForm);
    
    function validarDni(dni) {
      
      return /^[XYZ]?\d{5,8}[TRWAGMYFPDXBNJZSQVHLCKET]$/.test(dni)
    }
    function esValidoDni(dni) {
      const valor = dni.value.trim();
      if (validarDni(dni)) {
        error.innerHTML += "dni es valido"
      } else {
        error.innerHTML += "dni no es valido"
        dni.value = ""
      }
    }
    esValidoDni(dni)

    function validWeb(url) {
          return /^https?:\/\/(?:www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(?:\/.*)?$/.test(url);
        }
    function esValidoWeb() {
      const urlvalid = web.value.trim()
      if(validWeb(urlvalid)) {
        error.innerHTML +="web pagina esta valida"
      } else {
        error.innerHTML += "web pagina no esta valida"
        web.value = " "

      }
    }
    esValidoWeb()

     function validarContrasena(passwor) {
      var p = passwor.length
      if(p >2 && p < 12) {
        error.innerHTML += "password es correcto"
      } else {
         error.innerHTML += "password  no es correcto"
         passw.value = ""
      }
     }
     validarContrasena(password)

     function validHijos(hijos) {
      if(hijos.value.length >=0 || hijos.value.length <= 10) {
         error.innerHTML += "numero de hijos esta correcto"
      } else {
         error.innerHTML += "numero de hijos no esta correcto"
         hijos.value = ""
      }
     }
     validHijos(hijos)
    const nom = nombreInput.value.trim()
     function validNombre(nombres) {
      return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,40}( [a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,40}){1,3}$/.test(nombres)
     }
     function isvalidNombre(nombres){
      if(validNombre(nombres)) {
         error.innerHTML += "nombre esta correcto"
      } else {
         error.innerHTML += "nombre no esta correcto"
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
         error.innerHTML += "fecha esta correcto"
      } else {
         error.innerHTML += "fecha no esta correcto"
         fecha.value= ""
      }
     }
     console.log(fechaValor)
     
     esValidFecha(fechaValor)

  
});
