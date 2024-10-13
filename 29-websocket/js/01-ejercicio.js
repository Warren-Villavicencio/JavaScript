const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const standings = [
    { team: "Manchester City", points: 20 },
    { team: "Liverpool", points: 18 },
    { team: "Chelsea", points: 16 },
    // Agrega más equipos según sea necesario
];

wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Enviar la tabla de posiciones al cliente
    ws.send(JSON.stringify(standings));

    // Simular actualizaciones cada 5 segundos
    setInterval(() => {
        standings.forEach(team => {
            team.points += Math.floor(Math.random() * 3); // Simular puntos aleatorios
        });
        ws.send(JSON.stringify(standings));
    }, 5000);
});