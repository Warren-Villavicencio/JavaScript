// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const resultInput = document.getElementById('result');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    // Función para manejar los clics en los botones
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                // Limpiar la entrada
                currentInput = '';
                resultInput.value = '';
            } else if (value === '=') {
                // Calcular el resultado
                if (firstOperand !== null && operator) {
                    currentInput = calculate(firstOperand, parseFloat(currentInput), operator).toString();
                    resultInput.value = currentInput;
                    firstOperand = null;
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                // Guardar el operador y el primer operando
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else {
                // Agregar el número a la entrada actual
                currentInput += value;
                resultInput.value = currentInput;
            }
        });
    });

    // Función para realizar el cálculo
    function calculate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});