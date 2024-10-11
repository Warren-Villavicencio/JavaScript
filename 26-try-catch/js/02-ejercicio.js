function appendToResult(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Error en la operación: ' + error.message);
        clearResult();
    }
}