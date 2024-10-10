// script.js
let nbaTeams = [
    { name: "Los Angeles Lakers", wins: 50 },
    { name: "Golden State Warriors", wins: 45 },
    { name: "Miami Heat", wins: 40 },
];

const nbaForm = document.getElementById("nbaForm");
const nbaStandingsDiv = document.getElementById("nbaStandings");

function renderNbaStandings() {
    let nbaStandingsHTML = "<table><tr><th>Equipo</th><th>Victorias</th></tr>";
    nbaTeams.forEach(team => {
        nbaStandingsHTML += `<tr><td>${team.name}</td><td>${team.wins}</td></tr>`;
    });
    nbaStandingsHTML += "</table>";
    nbaStandingsDiv.innerHTML = nbaStandingsHTML;
}

nbaForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const teamName = document.getElementById("nbaTeamName").value;
    const teamWins = parseInt(document.getElementById("nbaWins").value);
    
    // Agregar nuevo equipo al array
    nbaTeams.push({ name: teamName, wins: teamWins });
    
    // Limpiar el formulario
    nbaForm.reset();
    
    // Renderizar la tabla actualizada
    renderNbaStandings();
});

// Renderizar la tabla inicial
renderNbaStandings();