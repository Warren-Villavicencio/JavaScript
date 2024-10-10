// Clase base Deportista
class Deportista {
    constructor(nombre, pais) {
        this.nombre = nombre; // Nombre del deportista
        this.pais = pais;     // País del deportista
    }

    // Método para mostrar información del deportista
    mostrarInfo() {
        return `${this.nombre} de ${this.pais}`;
    }
}

// Clase derivada para Deportista de Oro
class DeportistaOro extends Deportista {
    constructor(nombre, pais, deporte) {
        super(nombre, pais); // Llamamos al constructor de la clase base
        this.deporte = deporte; // Deporte en el que ganó la medalla
    }

    // Sobrescribimos el método para incluir el deporte
    mostrarInfo() {
        return `${super.mostrarInfo()} ganó medalla de oro en ${this.deporte}`;
    }
}

// Array para almacenar los deportistas que ganan medallas de oro
const medallistasOro = [];

// Función para registrar un deportista
function registrarDeportista(event) {
    event.preventDefault(); // Evitamos el comportamiento por defecto del formulario

    // Obtenemos los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('pais').value;
    const deporte = document.getElementById('deporte').value;

    // Creamos una nueva instancia de DeportistaOro
    const deportistaOro = new DeportistaOro(nombre, pais, deporte);
    medallistasOro.push(deportistaOro); // Agregamos el deportista al array

    // Actualizamos la lista de medallas
    actualizarListaMedallas();
    
    // Limpiamos el formulario
    document.getElementById('form-deportista').reset();
}

// Función para actualizar la lista de medallas en la interfaz
function actualizarListaMedallas() {
    const listaMedallas = document.getElementById('lista-medallas');
    listaMedallas.innerHTML = ''; // Limpiamos la lista actual

    // Recorremos el array de medallistas y agregamos a la lista
    medallistasOro.forEach(deportista => {
        const li = document.createElement('li');
        li.textContent = deportista.mostrarInfo(); // Mostramos la información del deportista
        listaMedallas.appendChild(li); // Agregamos el elemento a la lista
    });
}

// Añadimos el evento al formulario
document.getElementById('form-deportista').addEventListener('submit', registrarDeportista);