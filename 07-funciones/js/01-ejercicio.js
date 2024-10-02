function sumar() {
    let numero_uno = document.getElementById("numero_uno").value;
    let numero_dos = document.getElementById("numero_dos").value;
    let resultado = parseInt(numero_uno) + parseInt(numero_dos); // Convertir a números antes de sumar
    let elemento_respuesta = document.getElementById("respuesta");
    elemento_respuesta.textContent = "La suma es: " + resultado;
  }
  