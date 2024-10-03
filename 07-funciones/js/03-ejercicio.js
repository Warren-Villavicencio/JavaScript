// Función para calcular la circunferencia de un círculo dado su diámetro
function calcular_circunferencia(diametro) {
    // Math.PI es una constante que representa el valor de π (pi)
    // Math.ceil redondea el resultado hacia arriba al entero más cercano
    return Math.ceil(Math.PI * diametro);
}

// Función para mostrar el resultado en la página web
function mostar_resulatdo() {
    // Obtiene el elemento del DOM con el id "diametro" (campo de entrada del diámetro)
    let diametro = document.getElementById("diametro");
    // Obtiene el elemento del DOM con el id "resultado_mensaje" (donde se mostrará el resultado)
    let resultado = document.getElementById("resultado_mensaje");
    // Llama a la función calcular_circunferencia con el valor del diámetro ingresado por el usuario
    let opreacion = calcular_circunferencia(diametro.value);
    // Muestra el resultado de la operación en el elemento "resultado_mensaje"
    resultado.textContent = opreacion;
}
