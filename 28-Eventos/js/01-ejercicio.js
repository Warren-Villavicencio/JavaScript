// script.js

// Función para agregar un valor al resultado
function appendToResult(value) {
    document.getElementById('result').value += value;
}

// Función para limpiar el resultado
function clearResult() {
    document.getElementById('result').value = '';
}

// Función para calcular el resultado
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value); // Usar eval con precaución
        resultField.value = result;
        // Aquí podrías usar fetch para enviar el resultado a un servidor
        fetch('https://example.com/api/result', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ result: result })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    } catch (error) {
        resultField.value = 'Error';
    }
}