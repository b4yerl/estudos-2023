# HTTP Intro

## HTTP and the Node http module

Basicamente só uma revisão daquilo que a gente já sabe. O protocolo HTTP permite a interação entre 2 computadores, sendo um o Client que envia as request e o outro, nosso Server que devolve as responses.

Tanto na request, quanto na response, temos um header e um body. O header é uma estrutura de key-value onde encontramos coisas como "Content-Type" por exemplo. Já no body encontramos dados enviados, seja do Client enviando ao Server, seja o Server respondendo o Client.

Vamos ilustrar uma aplicação básica usando o core module do Node, o http. Como ele é "mais baixo nível" do que o express, talvez seja melhor para compreender um pouco do ciclo req-res e do funciomanto de um servidor web como um todo:
```js
const http = require('http');
const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  console.log(headers, method, url);
  res.end()
});

server.listen(3000, () => console.log(`Server running on port 3000`))
```

Com esse programinha podemos agora utilizar o Postman para enviar uma requesst e assim podemos analisar a forma dessa request no nosso console, ou se quisermos podemos usar o object destructuring para isolar apenas algumas partes como os headers.

## Nodemon

Usando o npm, podemos instalar o Nodemon como dependência da nossa aplicação. Como nodemon só é necessário no ambiente de desenvolvimento e não na produção, passamos a flag -D assim:
> $ npm install -D nodemon

Agora ao invés de iniciar nosso server com um comando usando "node", usaremos "nodemon", dessa forma ele fica como se fosse em modo --watch lá do dotnet, atualizando o server sempre que alteramos algo e salvamos, eliminando a necessidade de ficar resetando o server no terminal toda vez.
> nodemon server.js

## Responding with data

Podemos responder uma request com "res.write()", isso escreve um texto no corpo da response que será interpretada pelo Client. É interessante sempre passar pelo menos o Content-Type como header, para isso usaríamos:
> res.setHeaders('Content-Type', 'text/plain');

Para devolver um HTML, apesar de não ser o foco do curso, primeiro teríamos que alterar o Content-Type para text/html.

Podemos settar outros Headers, incluindo headers personalizados, não convencionados, para isso normalmente usamos "X-" na frente do header.

Outra forma de fazer isso de forma mais limpa é com:
```js
res.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'Node.js'
});
```

## Status Codes

Os status codes devolvidos nas responses vão do range dos 100 até os 500.
- A casa dos 1xx é informacional e não entraremos nisso agora
- Já nos 2xx temos os códigos de sucesso como o 200. Para informar que algo foi criado com sucesso usamos 201, outro importante de saber é o 204 para uma resposta sem conteúdo, como um delete.
- Nos 3xx temos basicamente os redirecionamentos, como 304 para Not Modified, isso ocorre quando fazemos uma GET request na sequência de outra, mas nada se alterou entre as duas.
- A série dos 4xx indica erro no client, como o 400 pra Bad Request, quando o client não envia o que precisava enviar em um form por exemplo. 401 para usuários não autorizados e o famoso 404 para Not Found.
- Por fim temos os 5xx que indicam erro no Server, o básico é o 500 Internal Server Error.

## HTTP Methods and RESTful APIs

Os HTTP métodos que mais iremos usar de longe serão GET, POST, PUT / PATCH, DELETE, com esses métodos HTTP temos a base de um CRUD.

As rotas das nossas APIs devem ser consistentes, por exemplo, em uma TODO list, nossas rotas iriam variar apenas entre
- /todos/ >> Para todas
- /todos/:id >> Para apenas 1

E é isso, iríamos alterar sim os métodos HTTP para atender ao CRUD, mas as rotas mantendo a consstência

Abaixo eu vou trazer uma rota simples de GET usando apenas o http module:
```js
const server = http.createServer((req, res) => {
  let status = 404;
  const response = {
    success: false,
    data: null
  };

  if(req.method === 'GET' && req.url === '/todos') {
    status = 200;
    response.success = true;
    response.data = todoList;
  }

  res.writeHead(status, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'Node.js'
  });

  res.end(JSON.stringify(response))
})
```
Caso nenhum if de rota seja satisfeito é retornado o padrão de 404, com um objeto indicando a falha.
