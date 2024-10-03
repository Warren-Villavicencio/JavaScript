
function validar_conexion () {

let estaConectado = confirm("¿Estás conectado a internet?");

if (!estaConectado) {
    resultado.textContent = ("Debes conectarte a internet");
}
}