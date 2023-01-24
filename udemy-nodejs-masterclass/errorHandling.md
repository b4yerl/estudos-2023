# Custom Error Handling and Mongoose Middleware

## Error handling Middleware

O próprio express já tem um error handler para nossos routers e middlewares. Para utilizá-lo basta passar o erro no next, tendo algo assim no nosso try...catch
> next(err);

O problema é que isso retorna um HTML com todo o erro escrito e o código 500. Como não é isso o que queremos vamos para um error handler custom.

Na própria documentação do express, onde encontramos o error handler padrão, temos o auxílio para criarmos nosso próprio middleware para lidar com os erros. Seguiremos então a ideia deles:
```js
const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ success: false, error: err.message });
};

module.exports = errorHandler;
```

Isso é o básico, um pouco mais pra frente vamos usar classes para que possamos customizar o errorHandler de acordo com a nossa necessidade. Por enquanto temos isso e sendo um middleware devemos importar ele e dar um app.use() lá no server.js. Note que devido a execução top-bottom de um código, o error handler deve vir abaixo das rotas que o utilizarão.

## Custom ErrorResponse Class

Vamos primeiro introduzir uma nova pasta pra estrutura da nossa aplicação, a "utils". Aqui vamos colocar os arquivos que não sejam middleware, como um helper por exemplo.

Nossa classe ErrorResponse que será exportada fica assim:
```js
class ErrorResponse extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
```

Essa nossa classe de erro agora será importada na nossa controller e ao invés de um next(err), temos agora next(new ErrorResponse(...)). Já que nossa classe customizada agora possui status code, podemos alterar nosso error handler para receber o err.statusCode, eliminando a trava que tinhamos de um código único.

Esse ainda não é o modelo final que desejamos para nossa parte de error handling. O ideal será passar só o next(err) mesmo e deixa o error handler decidir o que fazer com aquele erro.

## Mongoose Error Handling

Erros possuem algumas propriedades que podemos analisar, uma delas é o seu nome. Se olharmos err.name no nosso error handler veremos que o erro que estamos manipulando é na verdade um CastError.

Sabendo o nome desse erro do Mongoose, podemos gerar uma condicional para tratar esse tipo de erro. A única coisa que vamos precisar é de uma variável nova de erro para manipularmos, podemos então criar uma nova que será utilizada em tudo do nosso handler daqui pra frente:
```js
let error = { ...err };
error.message = err.message;
```

Dentro da nossa condição geramos uma mensagem e apontamos nosso error para uma nova instância de ErrorResponse.

Fazendo dessa maneira vamos continuar usando o next(err) para apontar pro nosso middleware error.js que lá dentro decide qual o tipo de erro, seu código e retorna com uma instância da nossa classe ErrorResponse.

Só vamos manter direto o uso do ErrorResponse nos casos de "erro" dentro do bloco try quando não temos realmente um err para enviar ao next, nesses casos mantemos a maneira de instanciar o ErrorResponse não mão mesmo.

Vamos agora implementar outros error como campos duplicados no banco e a questão da validação, por exemplo se tentarmos registrar um bootcamp sem nome.

Alguns erros não possuem nomes únicos como é o caso do erro de valores duplicados. Sendo assim podemos verificar o err para encontrar alguma particularidade, nesse caso utilizamos o err.code para fazer a condição.

Já para ValidationError temos novamente acesso ao nome para o nosso if. Porém um erro de validação retorna um objeto com os erros encontrados já com mensagens que indicam o que falta. Para extrair apenas essas mensagens nossa message ficaria:
```js
const message = Object.values(err.errors).map(value => value.message);
```

E com isso fizemos nosso próprio error handler. Dá uma olhada depois no express validator, pergunta pro chatGPT sei lá, mas dessa maneira aqui eliminamos uma dependência criando o nosso próprio :)

## Async/Await middleware

Vamos limpar mais ainda o código eliminando o try/catch do nosso controller e passando isso pra um middleware que lida com as chamadas assíncronas pra gente.

Como material complementar temos um artigo que inspirou isso bem [aqui](https://www.acuriousanimal.com/blog/20180315/express-async-middleware). Nosso middleware é um lindo copy paste do apresentado nesse artigo. Ele basicamente faz o processamento assíncrono para nosotros.

Para usar nosso async handler basta eliminar os try catch e envelopar todo o bloco try nisso aí.

Isso será a forma padrão que faremos com funções assíncronas daqui pra frente, claro que pra algo que não seja assíncrono isso não faz sentido.

```js
exports.getSingleBootcamp = asyncHandler (async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if(!bootcamp) return next(new ErrorResponse('Bootcamp not Found', 404));

  res.status(200).json({ success: true, data: bootcamp });
});
```

## Mongoose Middleware and Slugify

Além dos nossos próprios middleware, o Mongoose também nos oferece alguns que iremos usar para complementar algumas coisas nos nossos Document.

A primeira coisa que vamos fazer lá no nosso Bootcamp.js é alterar o schema para que a partir do name seja gerado o slug. Como vamos usar o slugify devemos instalar esse package.

Após a declração do nosso schema vamos abrir um lugarzinho pra gente trabalhar. Basicamente podemos passar o middleware no pre ou no post request. Como queremos alterar o document antes dele ser salvo vamos de pre e usar o evento 'save':
> BootcampSchema.pre('save', function(next) {...});

Na documentação do slugify podemos ver as options que temos disponíveis, mas por enquanto usaremos apenas uma, tendo então que:
> this.slug = slugify(this.name, { lower: true });

Com o slug feito podemos ter uma URL mais amigável para ser trabalhada no front da nossa aplicação.

## GeoJSON and Geocoder Hook - MapQuest API

Vamos agora lidar com o endereço no nosso document. Para isso utilizaremos o package node-geocode com o mapquest como provider, logo precisamos de uma API key.

Para tornar mais fácil uma possível mudança futura vamos salvar tanto o nome do provider quantro a api key utilizada no geocoder como variáveis de ambiente no nosso .env.

Toda a parte que vai configurar o pacote node-geocoder vamos isolar do código em um arquivo na pasta util. A configuração precisa de algumas options que podemos pegar da documentação do package.

De volta ao model Bootcamp.js, vamos criar outro middleware de pre save pro nosso BootcampSchema, a diferença é que, como vimos na docuimentação a função que busca o endereço no node-geocoder é uma função assíncrona, por isso usaremos aqui async/await na nossa função.

Eu vou botar aqui embaixo direto o código completo, mas tenha em mente algumas coisas. O retorno do .geocode() é um array, as informações que queremos está no primeiro elemento, que é por sua vez um objeto, o tipo Point foi especificado no nosso schema, ele que faz disso um objeto próprio pro GeoJSON. Enfim, aqui está:
```js
BootcampSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode
  }

  this.address = undefined;

  next();
});
```

Como nós já formatamos e extraimos todas as informações necessárias do address, não é necessário guardar esse address no banco, por isso o definimos como undefined no final ali. :)
