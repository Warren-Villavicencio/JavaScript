document.getElementById('calculate').addEventListener('click', function() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operation = document.getElementById('operation').value;
    let result;

    try {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            throw new Error("Por favor, ingresa números válidos.");
        }

        switch (operation) {
            case 'sumar':
                result = number1 + number2;
                break;
            case 'restar':
                result = number1 - number2;
                break;
            case 'multiplicar':
                result = number1 * number2;
                break;
            case 'dividir':
                if (number2 === 0) {
                    throw new Error("No se puede dividir entre cero.");
                }
                result = number1 / number2;
                break;
            default:
                throw new Error("Operación no válida.");
        }

        document.getElementById('result').innerText = `Resultado: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
});