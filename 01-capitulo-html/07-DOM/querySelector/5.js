const guessInput = document.querySelector('#guessInput');
const message = document.querySelector('#message');

// Generar un número aleatorio entre 1 y 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        message.textContent = 'Por favor, introduce un número válido.';
    } else if (userGuess === secretNumber) {
        message.textContent = '¡Felicidades! ¡Has adivinado el número!';
    } else if (userGuess < secretNumber) {
        message.textContent = 'El número es más alto.';
    } else {
        message.textContent = 'El número es más bajo.';
    }
}