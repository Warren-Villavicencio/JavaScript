function validar_edad() {}
let edad = 25;
let mensaje = edad >= 18 ? (edad >= 65 ? "Jubilado" : "Adulto") : "Menor de edad";
console.log(mensaje); // Output: "Adulto"