function validar_edad() {
    // Obtener el valor ingresado en el campo "edad"
    let edad = document.getElementById("edad").value;

    // Utilizar una expresión condicional ternaria para determinar el mensaje a mostrar
    // Si la edad es mayor o igual a 18, se verifica si también es mayor o igual a 65
    //   - Si es mayor o igual a 65, el mensaje será "Jubilado"
    //   - Si no, el mensaje será "Adulto"
    // Si la edad es menor a 18, el mensaje será "Menor de edad"
    let mensaje = edad >= 18 ? (edad >= 65 ? "Jubilado" : "Adulto") : "Menor de edad";

    // Obtener el elemento HTML donde se mostrará el resultado
    let mostar_resultado = document.getElementById("mostar_resultado");

    // Actualizar el contenido del elemento con el mensaje correspondiente
    mostar_resultado.textContent = mensaje;
}