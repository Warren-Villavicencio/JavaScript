// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento con el id "mostrar_resultado" y lo asigna a la variable numero_aleatorio
    let numero_aleatorio = document.getElementById("mostrar_resultado");

    // Define la función mostrar_numero_aleatorio
    // Esta función genera un número aleatorio y lo muestra en el elemento numero_aleatorio
    function mostrar_numero_aleatorio() {
        numero_aleatorio.textContent = Math(Math.random());
    }

    // Asigna la función mostrar_numero_aleatorio al evento onclick del botón
    document.querySelector("button").onclick = mostrar_numero_aleatorio;
});
