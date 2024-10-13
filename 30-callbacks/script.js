// Clase Turno que representa un turno médico
class Turno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = Turno.generarId();
    }

    static generarId() {
        return Math.floor(Math.random() * 10000);
    }
}

// Clase TurnoManager que maneja la lógica de los turnos
class TurnoManager {
    constructor() {
        this.turnos = [];
    }

    agregarTurno(turno, callback) {
        this.turnos.push(turno);
        callback(turno);
    }

    listarTurnos() {
        return this.turnos;
    }
}

// Instancia de TurnoManager
const turnoManager = new TurnoManager();

// Función para actualizar la lista de turnos en la interfaz
function actualizarListaTurnos() {
    const listaTurnos = document.getElementById('listaTurnos');
    listaTurnos.innerHTML = ''; // Limpiar la lista actual

    turnoManager.listarTurnos().forEach(turno => {
        const li = document.createElement('li');
        li.textContent = `Turno ID: ${turno.id} - ${turno.nombre} ${turno.apellido}`;
        listaTurnos.appendChild(li);
    });
}

// Manejo del formulario de solicitud de turno
document.getElementById('turnoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;

    const nuevoTurno = new Turno(nombre, apellido);
    turnoManager.agregarTurno(nuevoTurno, function(turno) {
        console.log(`Turno agregado: ${turno.id} - ${turno.nombre} ${turno.apellido}`);
        actualizarListaTurnos(); // Actualizar la lista de turnos
    });

    // Limpiar el formulario
    this.reset();
});