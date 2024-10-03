function validar_edad() {
let edad = document.getElementById("edad").va;
let mensaje = edad >= 18 ? (edad >= 65 ? "Jubilado" : "Adulto") : "Menor de edad";
let mostar_resultado = document.getElementById("mostar_resultado");
mostar_resultado.textContent = mensaje;
}