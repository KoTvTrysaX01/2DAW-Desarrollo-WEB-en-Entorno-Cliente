let form = document.getElementById("registartionForm");
let emailInput = document.getElementById("email");
let error = document.getElementById("errorMessages");
let dni = document.getElementById("dni")
let passw = document.getElementById("password")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailForm = emailInput.value.trim();
  const 
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
      if (validarDni(dni)) {
        error.innerHTML += "dni es valido"
      } else {
        error.innerHTML += "dni no es valido"
        dni.value = ""
      }
    }
    esValidoDni(dni)

    function validWeb(web) {
          return /^https?:\/\/(?:www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(?:\/.*)?$/.test(web);
        }
    
  
});
