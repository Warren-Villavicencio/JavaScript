function validar_edad() {
let edad = document.getElementById("ed");
let mensaje = edad >= 18 ? (edad >= 65 ? "Jubilado" : "Adulto") : "Menor de edad";
console.log(mensaje); // Output: "Adulto"
}