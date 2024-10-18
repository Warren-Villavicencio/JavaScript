const tabla = document.getElementById('tabla-posiciones');
const form = document.getElementById('form-partido');
const grafico = document.getElementById('grafico');

let equipos = [
    { nombre: 'Equipo A', jugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAF: 0, golesAC: 0, puntos: 0 },
    { nombre: 'Equipo B', jugados: 0, victorias: 0, empates: 0, derrotas: 0, golesAF: 0, golesAC: 0, puntos: 0 },
    // Agrega más equipos según sea necesario
];

function actualizarTabla() {
    tabla.querySelector('tbody').innerHTML = '';
    equipos.forEach(equipo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${equipo.nombre}</td>
            <td>${equipo.jugados}</td>
            <td>${equipo.victorias}</td>
            <td>${equipo.empates}</td>
            <td>${equipo.derrotas}</td>
            <td>${equipo.golesAF}</td>
            <td>${equipo.golesAC}</td>
            <td>${equipo.puntos}</td>
        `;
        tabla.querySelector('tbody').appendChild(row);
    });
}

function actualizarGrafico() {
    // Limpiar el gráfico SVG
    grafico.innerHTML = '<text x="10" y="20" font-size="20" fill="black">Gráfico de Posiciones</text>';
    
    equipos.forEach((equipo, index) => {
        const x = 50 + index * 80; // Espaciado horizontal
        const y = 350 - (equipo.puntos * 5); // Altura basada en puntos
        const height = equipo.puntos * 5; // Altura del rectángulo

        // Crear un rectángulo para cada equipo
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x);
        rect.setAttribute("y", y);
        rect.setAttribute("width", 60);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", "blue");
        rect.setAttribute("opacity", "0.7");
        rect.setAttribute("class", "bar");
        
        // Agregar animación al rectángulo
        const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animate.setAttribute("attributeName", "height");
        animate.setAttribute("from", "0");
        animate.setAttribute("to", height);
        animate.setAttribute("dur", "0.5s");
        animate.setAttribute("fill", "freeze");
        rect.appendChild(animate);

        grafico.appendChild(rect);

        // Agregar texto con el nombre del equipo
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", 370);
        text.setAttribute("font-size", "12");
        text.setAttribute("fill", "black");
        text.textContent = equipo.nombre;
        grafico.appendChild(text);
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const equipo1 = document.getElementById('equipo1').value;
    const goles1 = parseInt(document.getElementById('goles1').value);
    const equipo2 = document.getElementById('equipo2').value;
    const goles2 = parseInt(document.getElementById('goles2').value);

    // Actualiza los equipos según los resultados
    equipos.forEach(equipo => {
        if (equipo.nombre === equipo1) {
            equipo.jugados++;
            equipo.golesAF += goles1;
            equipo.golesAC += goles2;
            if (goles1 > goles2) {
                equipo.victorias++;
                equipo.puntos += 3;
            } else if (goles1 === goles2) {
                equipo.empates++;
                equipo.puntos++;
            } else {
                equipo.derrotas++;
            }
        }
        if (equipo.nombre === equipo2) {
            equipo.jugados++;
            equipo.golesAF += goles2;
            equipo.golesAC += goles1;
            if (goles2 > goles1) {
                equipo.victorias++;
                equipo.puntos += 3;
            } else if (goles2 === goles1) {
                equipo.empates++;
                equipo.puntos++;
            } else {
                equipo.derrotas++;
            }
        }
    });

    actualizarTabla();
    actualizarGrafico();
    form.reset();
});

// Inicializa la tabla y el gráfico
actualizarTabla();
actualizarGrafico();