let edad = prompt("¿Cuál es tu edad?");
        let tieneLicencia = confirm("¿Tienes licencia de conducir?");

        if (edad >= 18 && tieneLicencia) {
            alert("Puedes conducir");
        } else {
            alert("No puedes conducir");
        }

        let esDia = confirm("¿Es de día?");
        let estaLloviendo = confirm("¿Está lloviendo?");

        if (esDia || !estaLloviendo) {
            alert("Podemos salir a caminar");
        }

        let estaConectado = confirm("¿Estás conectado a internet?");

        if (!estaConectado) {
            alert("Debes conectarte a internet");
        }