const WebSocket = require('ws');

// Cria um servidor WebSocket na porta 8080
const server = new WebSocket.Server({ port: 8080 });

console.log("Servidor WebSocket rodando na porta 8080...");

server.on('connection', socket => {
    console.log('Cliente conectado');

    socket.on('message', message => {
        console.log('Mensagem recebida pelo servidor: ' + message);
        socket.send('Olá cliente, eu sou o servidor.');
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    });
});
