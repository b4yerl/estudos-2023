# API Security

## Logout to Clear JSON Token

Antes de aprimorar a segurança em outros aspectos, vamos voltar ao cookie que armazenamos, mas até então não utilizamos pois vinhamos usando o Authorization header.

A única mudança necessária é descomentar a parte do middleware, na função auth, que checa que, se caso não houver um token nos  headers da request, mas houver nos cookies, usaremos este.

Com isso feito, vamos implementar agora um sistema de logout para limpar o cookie criando um novo endpoint no `auth`.

```js
exports.logout = asyncHandler( async (req, res, next) => {
  req.cookie('token', 'none', {
    expires: new Date().now + 1000,
    httpOnly: true
  })

  res.status(200).json({ sucess: true, data{} })
});
```

## Prevent NoSQL Injection and Sanitize Data

No momento o nosso ccódigo está vunerável a injeção de comandos NoSQL, por exemplo, alguém pode, desde que acerte uma senha cadastrada no sistema, logar assim:
```json
{
  "email": {"$gt": ""},
  "password": "123456"
}
```

Podemos usar o `mongo-sanitize` para previnir isso, protegendo cada rota individualmente, ou podemos usar o `express-mongo-sanitize` que é passado como um middleware direto no `server.js` filtrando tudo que entra na aplicação.

## XSS Protection and Security Headers

Vamos introduzir na aplicação o `helmet`, um package famoso e muito utilizado que entra como um outro middleware. Ele adiciona uma série de headers que por padrão aprimoram a segurança da aplicação.

Além do `helmet` usaremos também o `xss-clean` que fará outro sanitize do input, como uma precaução ainda maior contra cross site scripting.

## Rate Limiting and, HPP and CORS

Por fim vamos implementar mais algumas coisas na segurança da nossa aplicação, começando pelo rate limiting, vamos estabelecer um máximo de requests que um user pode fazer à nossa aplicação. Para isso vamos usar o `express-rate-limit`, com ele poderíamos inclusive limitar rotas específicas, mas faremos isso pra API como um todo. A única coisa que precisamos é configurar o limiter antes de rodar o middleware:
```js
const limiter = rateLimit({
  windowMs = 10 * 60 * 1000, // Janela de 10 minutos
  max: 100 // Limite de 100 requests
});

app.use(limiter);
```

Outro problema que iremos cobrir é o HTTP Parameter Pollution, para isso utilizaremos o `hpp` como um middleware, assim como já fizemos com outros packages.

Caso nossa API esteja em um domínio e estejamos tentando acessar ela a partir de um outro domínio, seria disparado um erro CORS (Cross-Origin Resource Sharing) no Chrome. Como a ideia é ter uma API pública, vamos previnir isso usando o `cors`.
