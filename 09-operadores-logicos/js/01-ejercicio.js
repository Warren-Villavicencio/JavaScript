function validar_ingreso() {
    // Obtener los valores de los elementos de entrada dentro de la función
    let edad = document.getElementById("edad").value;
    let tieneLicencia = document.getElementById("tieneLicencia").value.toLowerCase() === "si"; // Convertir a minúsculas y comparar con "sí"
    let resultado = document.getElementById("resultado_mensaje");

    if (edad >= 18 && tieneLicencia) {
        resultado.textContent = "Puedes conducir";
    } else {
        resultado.textContent = "No puedes conducir";
    }
}