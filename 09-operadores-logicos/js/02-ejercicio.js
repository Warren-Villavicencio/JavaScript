

        let esDia = confirm("¿Es de día?");
        let estaLloviendo = confirm("¿Está lloviendo?");
function validar_clima () {
        if (esDia || !estaLloviendo) {
            alert("Podemos salir a caminar");
        }

        let estaConectado = confirm("¿Estás conectado a internet?");

        if (!estaConectado) {
            alert("Debes conectarte a internet");
        }