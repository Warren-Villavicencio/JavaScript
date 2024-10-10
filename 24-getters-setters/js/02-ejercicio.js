// Definición de la clase 'Team'
// Esta clase se utiliza para crear objetos que representan equipos con propiedades de nombre, posición y puntos
class Team {
    // El constructor inicializa las propiedades 'name', 'position' y 'points' del equipo
    constructor(name, position, points) {
        this.name = name; // Nombre del equipo
        this.position = position; // Posición del equipo en la clasificación
        this.points = points; // Puntos del equipo
    }

    // Getter para obtener la información del equipo
    // Este método devuelve una cadena con la posición, nombre y puntos del equipo
    get teamInfo() {
        return `${this.position}. ${this.name} - ${this.points} puntos`; // Devuelve la información del equipo en formato de cadena
    }

    // Setter para actualizar los puntos del equipo
    // Este método permite actualizar el número de puntos del equipo
    set updatePoints(newPoints) {
        this.points = newPoints; // Actualiza la propiedad 'points' con el nuevo valor
    }
}

// Creación de una lista de equipos utilizando la clase 'Team'
const teams = [
    new Team("Manchester City", 1, 80), // Crea un equipo con 80 puntos en la primera posición
    new Team("Liverpool", 2, 75), // Crea un equipo con 75 puntos en la segunda posición
    new Team("Chelsea", 3, 70), // Crea un equipo con 70 puntos en la tercera posición
];

// Obtiene el elemento del DOM donde se mostrarán las clasificaciones
const standingsDiv = document.getElementById("standings");

// Inicializa una cadena de texto HTML para la tabla de clasificaciones
let standingsHTML = "<table><tr><th>Posición</th><th>Equipo</th><th>Puntos</th></tr>";

// Itera sobre cada equipo en la lista 'teams' y añade una fila a la tabla HTML con los datos del equipo
teams.forEach(team => {
    standingsHTML += `<tr><td>${team.position}</td><td>${team.name}</td><td>${team.points}</td></tr>`;
});

// Cierra la tabla HTML
standingsHTML += "</table>";

// Inserta la tabla HTML en el elemento del DOM
standingsDiv.innerHTML = standingsHTML;
