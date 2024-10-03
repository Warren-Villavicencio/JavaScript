

        let esDia = document.getElementById("esDia");
        let estaLloviendo = document.getElementById("estaLloviendo");
        let resultado = document.getElementById("resultado_mensaje");

function validar_clima () {
        if (esDia || !estaLloviendo) {
            
            resultado.textContent =t("Podemos salir a caminar");
        }


    }