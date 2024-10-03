
function validar_conexion () {

let estaConectado = document.getElementById("esDia").value.toLowerCase() === "si"; // Convertir a minúsculas y comparar con "sí";

if (!estaConectado) {
    resultado.textContent = ("Debes conectarte a internet");
}
}