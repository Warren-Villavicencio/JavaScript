const lista = document.getElementById('miLista');
const frutas = ['manzana', 'banana', 'naranja', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    const li = document.createElement('li');
    li.textContent = frutas[i];
    lista.appendChild(li);
}