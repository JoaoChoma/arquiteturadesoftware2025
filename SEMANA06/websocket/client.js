const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function() {
    console.log('Conexão aberta com o servidor');
    socket.send('Olá, eu sou seu cliente!');
};

socket.onmessage = function(event) {
    console.log('Mensagem recebida pelo cliente:', event.data);
};

socket.onclose = function() {
    console.log('Conexão fechada');
};
