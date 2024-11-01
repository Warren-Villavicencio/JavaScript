const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const bookElement = button.parentElement;
        const title = bookElement.getAttribute('data-title');
        const price = bookElement.getAttribute('data-price');

        cart.push({ title, price });
        alert(`${title} ha sido agregado al carrito.`);
        console.log(cart); // Muestra el contenido del carrito en la consola
    });
});