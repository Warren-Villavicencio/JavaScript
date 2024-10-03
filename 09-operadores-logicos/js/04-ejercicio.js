function validar_edad() {
let edad = document.getElementById("edad");
let mensaje = edad >= 18 ? (edad >= 65 ? "Jubilado" : "Adulto") : "Menor de edad";

mensaje.tex
console.log(mensaje); // Output: "Adulto"
}