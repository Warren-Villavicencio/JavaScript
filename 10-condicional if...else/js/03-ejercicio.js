function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return false;
    }

    if (mensaje === "") {
      alert("Por favor, escribe un mensaje.");
      return false;
    }

    // Si todos los campos son válidos, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }