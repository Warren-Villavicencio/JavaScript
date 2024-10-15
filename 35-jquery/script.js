$(document).ready(function() {
    $('#medalForm').on('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener los valores de los ganadores
        const goldWinner = $('#goldWinner').val();
        const silverWinner = $('#silverWinner').val();
        const bronzeWinner = $('#bronzeWinner').val();

        // Agregar los ganadores a la lista
        $('#winnersList').append(`
            <li>
                <strong>Oro:</strong> ${goldWinner} <br>
                <strong>Plata:</strong> ${silverWinner} <br>
                <strong>Bronce:</strong> ${bronzeWinner}
            </li>
        `);

        // Limpiar los campos del formulario
        $('#medalForm')[0].reset();
    });
});