// script.js
let teams = [
    { name: "Manchester City", points: 80 },
    { name: "Liverpool", points: 75 },
    { name: "Chelsea", points: 70 },
];

const teamForm = document.getElementById("teamForm");
const standingsDiv = document.getElementById("standings");

function renderStandings() {
    let standingsHTML = "<table><tr><th>Equipo</th><th>Puntos</th></tr>";
    teams.forEach(team => {
        standingsHTML += `<tr><td>${team.name}</td><td>${team.points}</td></tr>`;
    });
    standingsHTML += "</table>";
    standingsDiv.innerHTML = standingsHTML;
}

teamForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const teamName = document.getElementById("teamName").value;
    const teamPoints = parseInt(document.getElementById("teamPoints").value);
    
    // Agregar nuevo equipo al array
    teams.push({ name: teamName, points: teamPoints });
    
    // Limpiar el formulario
    teamForm.reset();
    
    // Renderizar la tabla actualizada
    renderStandings();
});

// Renderizar la tabla inicial
renderStandings();