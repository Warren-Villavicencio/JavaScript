// script.js
class BasketballTeam {
    constructor(name, wins, losses) {
        this.name = name;
        this.wins = wins;
        this.losses = losses;
    }

    get winPercentage() {
        return (this.wins / (this.wins + this.losses) * 100).toFixed(2);
    }

    set updateWins(newWins) {
        this.wins = newWins;
    }
}

const nbaTeams = [
    new BasketballTeam("Los Angeles Lakers", 50, 20),
    new BasketballTeam("Golden State Warriors", 45, 25),
    new BasketballTeam("Miami Heat", 40, 30),
];

const nbaStandingsDiv = document.getElementById("nba-standings");
let nbaStandingsHTML = "<table><tr><th>Equipo</th><th>Victorias</th><th>Derrotas</th><th>% Victorias</th></tr>";

nbaTeams.forEach(team => {
    nbaStandingsHTML += `<tr><td>${team.name}</td><td>${team.wins}</td><td>${team.losses}</td><td>${team.winPercentage}%</td></tr>`;
});

nbaStandingsHTML += "</table>";
nbaStandingsDiv.innerHTML = nbaStandingsHTML;