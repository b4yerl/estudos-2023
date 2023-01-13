const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello, world!');
});

server.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}`);
})

/*
Bora lá pontuar coisas, esse exemplo seguiu os seguintes passos:
1 - O método http.createServer() criou a instância da classe http.Server
2 - É esperado como argumento uma callback function que entrega uma http.IncomingMessage
    e uma http.ServerResponse. Nesse caso req e res.

    Client Request: O objeto req interpreta quais headers e dados foram enviados na request
    Server Response: Construímos a resposta dizendo ao res o que deve ser respondido.

3 - O método listen() é chamado em uma porta específica, com a callback que indica
    que nosso server já está ouvindo outras requests na porta especificada.
*/