// Clase Turno que representa un turno médico
class Turno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = Turno.generarId(); // Genera un ID único para cada turno
    }

    // Método estático para generar un ID aleatorio
    static generarId() {
        return Math.floor(Math.random() * 10000); // Genera un número aleatorio entre 0 y 9999
    }
}

// Clase TurnoManager que maneja la lógica de los turnos
class TurnoManager {
    constructor() {
        this.turnos = []; // Inicializa un array vacío para almacenar los turnos
    }

    // Método para agregar un turno a la lista
    agregarTurno(turno, callback) {
        this.turnos.push(turno); // Añade el turno al array de turnos
        callback(turno); // Ejecuta el callback con el turno agregado
    }

    // Método para listar todos los turnos
    listarTurnos() {
        return this.turnos; // Devuelve el array de turnos
    }
}

// Instancia de TurnoManager
const turnoManager = new TurnoManager();

// Función para actualizar la lista de turnos en la interfaz
function actualizarListaTurnos() {
    const listaTurnos = document.getElementById('listaTurnos');
    listaTurnos.innerHTML = ''; // Limpiar la lista actual

    // Recorre la lista de turnos y crea un elemento <li> para cada uno
    turnoManager.listarTurnos().forEach(turno => {
        const li = document.createElement('li');
        li.textContent = `Turno ID: ${turno.id} - ${turno.nombre} ${turno.apellido}`;
        listaTurnos.appendChild(li); // Añade el <li> a la lista en el DOM
    });
}

// Manejo del formulario de solicitud de turno
document.getElementById('turnoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nombre = document.getElementById('nombre').value; // Obtiene el valor del campo nombre
    const apellido = document.getElementById('apellido').value; // Obtiene el valor del campo apellido

    const nuevoTurno = new Turno(nombre, apellido); // Crea una nueva instancia de Turno
    turnoManager.agregarTurno(nuevoTurno, function(turno) {
        console.log(`Turno agregado: ${turno.id} - ${turno.nombre} ${turno.apellido}`);
        actualizarListaTurnos(); // Actualiza la lista de turnos en la interfaz
    });

    // Limpiar el formulario
    this.reset(); // Resetea el formulario después de agregar el turno
});
