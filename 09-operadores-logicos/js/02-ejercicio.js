

        let esDia = document.getElementById("esDia").value.toLowerCase() === "si"; // Convertir a minúsculas y comparar con "sí";
        let estaLloviendo = document.getElementById("estaLloviendo");
        let resultado = document.getElementById("resultado_mensaje");

function validar_clima () {
        if (esDia || !estaLloviendo) {
            
            resultado.textContent = ("Podemos salir a caminar");
        }


    }