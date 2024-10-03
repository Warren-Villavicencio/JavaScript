document.addEventListener("DOMContentLoaded", function() {
    let numero_aleatorio = document.getElementById("mostrar_resultado");

    function mostrar_numero_aleatorio() {
        numero_aleatorio.textContent = Math.random();
    }

    document.querySelector("button").onclick = mostrar_numero_aleatorio;
});
