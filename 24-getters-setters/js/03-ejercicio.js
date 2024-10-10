// Definición de la clase 'BasketballTeam'
// Esta clase se utiliza para crear objetos que representan equipos de baloncesto con propiedades de nombre, victorias y derrotas
class BasketballTeam {
    // El constructor inicializa las propiedades 'name', 'wins' y 'losses' del equipo
    constructor(name, wins, losses) {
        this.name = name; // Nombre del equipo
        this.wins = wins; // Número de victorias
        this.losses = losses; // Número de derrotas
    }

    // Getter para calcular el porcentaje de victorias
    // Este método calcula el porcentaje de victorias basado en las victorias y derrotas del equipo
    get winPercentage() {
        return (this.wins / (this.wins + this.losses) * 100).toFixed(2); // Calcula y devuelve el porcentaje de victorias con dos decimales
    }

    // Setter para actualizar el número de victorias
    // Este método permite actualizar el número de victorias del equipo
    set updateWins(newWins) {
        this.wins = newWins; // Actualiza la propiedad 'wins' con el nuevo valor
    }
}

// Creación de una lista de equipos de la NBA utilizando la clase 'BasketballTeam'
const nbaTeams = [
    new BasketballTeam("Los Angeles Lakers", 50, 20), // Crea un equipo con 50 victorias y 20 derrotas
    new BasketballTeam("Golden State Warriors", 45, 25), // Crea un equipo con 45 victorias y 25 derrotas
    new BasketballTeam("Miami Heat", 40, 30), // Crea un equipo con 40 victorias y 30 derrotas
];

// Obtiene el elemento del DOM donde se mostrarán las clasificaciones de la NBA
const nbaStandingsDiv = document.getElementById("nba-standings");

// Inicializa una cadena de texto HTML para la tabla de clasificaciones
let nbaStandingsHTML = "<table><tr><th>Equipo</th><th>Victorias</th><th>Derrotas</th><th>% Victorias</th></tr>";

// Itera sobre cada equipo en la lista 'nbaTeams' y añade una fila a la tabla HTML con los datos del equipo
nbaTeams.forEach(team => {
    nbaStandingsHTML += `<tr><td>${team.name}</td><td>${team.wins}</td><td>${team.losses}</td><td>${team.winPercentage}%</td></tr>`;
});

// Cierra la tabla HTML
nbaStandingsHTML += "</table>";

// Inserta la tabla HTML en el elemento del DOM
nbaStandingsDiv.innerHTML = nbaStandingsHTML;
