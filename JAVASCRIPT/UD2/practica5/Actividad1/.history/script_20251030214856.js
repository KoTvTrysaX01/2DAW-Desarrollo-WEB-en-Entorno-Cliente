let form = document.getElementById("registartionForm");
let emailInput = document.getElementById("email");
let error = document.getElementById("errorMessages");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailForm = emailInput.value.trim();
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
      return
    }
  
});
