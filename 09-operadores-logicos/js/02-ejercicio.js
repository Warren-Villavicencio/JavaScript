

        let esDia = document.getElementById("esDia").value.toLowerCase() === "si"; // Convertir a minúsculas y comparar con "sí";
        let estaLloviendo = document.getElementById("estaLloviendo").value.toLowerCase() === "si"; // Convertir a minúsculas y comparar con "sí";
        let resultado = document.getElementById("resultado_mensaje");


        if (esDia || !estaLloviendo) {
            
            resultado.textContent = ("Podemos salir a caminar");
        }


    }