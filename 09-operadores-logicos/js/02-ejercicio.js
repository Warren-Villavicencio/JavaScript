

        let esDia = document.getElementById("esDia");
        let estaLloviendo = confirm("¿Está lloviendo?");
function validar_clima () {
        if (esDia || !estaLloviendo) {
            alert("Podemos salir a caminar");
        }

    
    }