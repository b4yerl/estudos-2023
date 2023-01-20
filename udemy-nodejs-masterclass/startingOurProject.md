# Starting Our DevCamp Project

## Basic Express Server, dotenv and git

Novamente, como muito dessa parte mais básica já foi vista tanto no [Microsoft Learn](../microsoft-javascript-node-applications/README.md) quanto no [freeCodeCamp](../fcc-backend-development/README.md), vou trazer pra cá apenas coisas novas ou que eu ache necessário srem reforçadas.

Um dos primeiros passos é configurar o dotenv e criar o nosso arquivo .env dentro da pasta config, por enquanto usaremos apenas as variávei NODE_ENV e PORT. Para configurar o dotenv fizemos o seguinte:
```js
const dotenv = require('dotenv');
dotenv.configure({ path: './config/config.env' });
```

## Creating Routes and Responses in Express

Uma coisa que podemos notar no POSTMAN é que quando devolvemos um res.send() o Content-Type header se adapta automaticamente a dependender do conteúdo que estamos enviando.

Para escolher o status code temos maneiras diferentes, uma delas é com o res.sendStatus(), o problema é que além de escolher o status, aqui nós também enviaremos um JSON. Para resolver isso podemos atrelar o "res.status(xxx)" ao res.send() ou res.json(), ficando com:
> res.status(400).json({ success: false });

Até para respostas bem sucedidas com 200 OK, é legal que usemos o .status() por questão de padronização.

O modelo a ser seguido nas nossas rotas será o seguinte:
> /api/v1/RESOURCE

O motivo de usarmos o /v1/ é para versionamento da nossa API, dessa forma casa a atualizemos algum dia, podemos manter a v1 funcionando de forma que frontends que estiverem a utilizando não quebrem por isso.

Começamos montando as rotas de todo o CRUD pra um resource, dessa forma temos uma ideia do que deve ainda ser feito:
```js
app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).send({ success: true, msg: 'Show all bootcamps' })
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).send({ success: true, msg: `Show bootcamp ${req.params.id}` })
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).send({ success: true, msg: 'Create new bootcamp' })
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).send({ success: true, msg: `Update bootcamp ${req.params.id}` })
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).send({ success: true, msg: `Delete bootcamp ${req.params.id}` })
});
```

Como dá pra ver, manter todas as rotas em um arquivo ia transformar isso em um caos gigante rapidinho, por isso usaremos o express router.

## Using the Express Router

Primeiro criamos nossa pasta routes dentro da estrutura de arquivos e nomeamos um novo script da seginte forma RESOURCE.js, dentro desse novo arquivo podemos jogar todas essas rotas acima, mas algumas configurações deverão ser feitas.

A começar, é necessário importar novamente o express e dessa vez inicializar um router com:
> const router = express.Router();

Como não temos mais nenhum app, nossas rotas passam a ser router.get, router.post, etc.

Voltando ao nosso server.js podemos importar nosso router com require(PATH) e montar ele através de um middleware indicando qual rota será usada:
> app.use('/api/v1/bootcamps', bootcamps);

Com isso feito o nosso router não precisa mais apontar esse path novamente, basta substituir por / e ao final do arquivo exportar o module, para exemplo teríamos algo como:
```js
router.get('/', (req, res) => {
  res.status(200).send({ success: true, msg: 'Show all bootcamps' })
});

router.get('/:id', (req, res) => {
  res.status(200).send({ success: true, msg: `Show bootcamp ${req.params.id}` })
});

module.exports = router;
```

## Creating Controller Methods

Vamos agora limpar mais ainda para que não tenhamos toda a lógica das rotas ali no nosso router. Para isso criamos a pasta controllers contendo 1 arquivo para cada resource.

Dentro desses arquivos teremos funções sendo exportadas para agir como middleware no nosso router, logo o argumento dessa função deve ser (req, res, next). Acima de cada função temos 3 linhas de comentário:
- @desc traz uma breve descrição da função
- @route aponta o método e a rota
- @access indica se a função precisa de autenticação ou se é pública.

Com isso, cada função ficará mais ou menos assim:
```js
// @desc   Get a single bootcamp
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'Show a single bootcamp' })
}
```
Tendo isso feito volatamos pro nosso router para arrumar tudo, começamos importando nossos médotos do controller.

Usaremos router.route() para definir a rota e iremos acoplar .get() .post(), .put() e .delete() a ele de acordo com o que precisamos. Por exemplo, nossa rota '/:id' ficou assim:
```js
router.route('/:id')
      .get(getBootcamp)
      .put(updateBootcamp)
      .delete(deleteBootcamp);
```

## Intro to Middleware

Para organizar nossos middleware, nós utilizamos uma pasta separada, cada middleware vai em um arquivo que será exportado. Dessa maneira mantemos o server.js o mais limpo possível.

Podemos também importar middleware de terceiros para o nosso projeto, como nós aprendemos middleware aqui gerando um logger, vamos importar algo parecido, mas pronto para usar, o morgan.

## Postman Environment and Collections

Vamos organizar nosso Postman para posteriormente utilizar essa ferramenta para gerar documentação.

Começamos criando um novo environment. Dentro desse environment podemos gerar variáveis globais para facilitar nossa vida, por exemplo uma variável URL com "http://localhost:5000", dessa forma caso seja necessário, podemos alterar a URL em apenas um lugar.

Com isso podemos criar uma nova collection e adicionar não só um título como também uma descrição para começar nosso processo de documentação. Inclusive criaremos pastas separando os Resources. Agora sim podemos salvar uma request para nossa pasta dando novamente, nome e descrição.
> GET {{URL}}/api/v1/bootcamps >>> Exemplo de request.
