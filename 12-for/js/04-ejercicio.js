// script.js
const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
const intentosMaximos = 10; // Número máximo de intentos

function adivinar() {
    const numeroUsuario = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    for (let i = 0; i < intentosMaximos; i++) {
        if (numeroUsuario === numeroSecreto) {
            resultado.textContent = "¡Adivinaste!";
            return;
        } else if (numeroUsuario < numeroSecreto) {
            resultado.textContent = "El número secreto es mayor.";
        } else {
            resultado.textContent = "El número secreto es menor.";
        }
        break; // Salimos del ciclo si el número no es correcto
    }

    if (i === intentosMaximos) {
        resultado.textContent = `¡Lo siento! Se acabaron los intentos. El número era ${numeroSecreto}.`;
    }
}