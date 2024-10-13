// Lista de productos simulada
const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 }
];

// Función para mostrar los productos en la página
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Precio: $${product.price}</p>
            <button onclick="selectProduct(${product.id})">Seleccionar</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Variable para almacenar el producto seleccionado
let selectedProduct = null;

// Función para seleccionar un producto
function selectProduct(productId) {
    selectedProduct = products.find(product => product.id === productId);
    document.getElementById('buy-button').style.display = 'block';
    document.getElementById('message').innerText = `Has seleccionado: ${selectedProduct.name}`;
}

// Función para simular la compra del producto
function buyProduct() {
    if (!selectedProduct) {
        alert("Por favor, selecciona un producto primero.");
        return;
    }

    // Simulación de una promesa para la compra
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Compra exitosa de ${selectedProduct.name}. El producto será enviado a tu domicilio.`);
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Evento para el botón de compra
document.getElementById('buy-button').addEventListener('click', () => {
    buyProduct().then(message => {
        document.getElementById('message').innerText = message;
    });
});

// Inicializa la lista de productos al cargar la página
displayProducts();