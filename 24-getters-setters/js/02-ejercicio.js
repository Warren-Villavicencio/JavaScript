// script.js
class Team {
    constructor(name, position, points) {
        this.name = name;
        this.position = position;
        this.points = points;
    }

    get teamInfo() {
        return `${this.position}. ${this.name} - ${this.points} puntos`;
    }

    set updatePoints(newPoints) {
        this.points = newPoints;
    }
}

const teams = [
    new Team("Manchester City", 1, 80),
    new Team("Liverpool", 2, 75),
    new Team("Chelsea", 3, 70),
];

const standingsDiv = document.getElementById("standings");
let standingsHTML = "<table><tr><th>Posición</th><th>Equipo</th><th>Puntos</th></tr>";

teams.forEach(team => {
    standingsHTML += `<tr><td>${team.position}</td><td>${team.name}</td><td>${team.points}</td></tr>`;
});

standingsHTML += "</table>";
standingsDiv.innerHTML = standingsHTML;