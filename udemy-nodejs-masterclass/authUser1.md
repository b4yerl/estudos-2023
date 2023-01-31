# Authentication, User and Permissions

## PART I

## User Model

Antes de mais nada, vamos começar instalando nossas dependências para essa parte, o JWT (jsonwebtoken) e o bcryptjs.

Agora vamos criar o model User começando pelo nosso UserSchema.  Os pontos interessantes aqui são novamente os usos das mensagens para caso a validação não seja satisfeita e o uso do 'select: false' no campo de password para que quando tenhamos o retorno dos dados de um user o campo de senha não venha junto.

Teremos 2 routes distintos: users e auth. A diferença entre eles é que, toda a parte de autenticação de login, cadastro, recuperação de senha e talz, tudo isso fica no auth, já o CRUDzão mesmo envolvendo usuários, isso vai pro users.

## User Register and Encrypting Passwords

Vamos começar com o nosso endpoint de register, aqui basicamente fazemos um destruct do req.body pegando os campos que iremos utilizar e passando-os depois em um User.create.

A parte de criptografia da senha fica a cargo de um middleware, dessa maneira podemos seguir deixando a controller limpa e mandando pra um middleware tudo que puder ir pra um middleware.

O hashing da senha então será feito como um pre do User, para isso usaremos o bcryptjs. Primeiro devemos gerar um salt que será usado no processo de hash. A função genSalt() recebe um número de rounds como argumento, quanto maior, mais seguro, mas mais pesado, o recomendado pela doc é 10. Com isso temos então:
```js
UserSchema.pre('save', async function(next) {
  const salt = bcryptjs.genSalt(10);
  this.password = bcryptjs.hash(this.password, salt);
  next();
});
```

## Sign and Get a JSON Web Token

Agora já podemos criar o user no banco de dados com senha criptografada e as porra, mas agora precisamos implementar o JWT para validação de acesso do usuário a algumas rotas protegidas.

Vamos fazer isso novamente no User.js declarando um UserSchema.methods. Bascimente o que vamos fazer aqui é rtetornar o jwt.sign(). O que passamos como parâmetro nesse jwt.sign() é o payload do nosso token, nesse caso vamos passar apenas o id. Também precisamos do secret a ser usado, esse secret deixaremos armazenado em uma variável de ambiente, assim como nossa option de tempo para expirar o token. Essa option expiresIn é opcional, mas por medida de segurança a mais, vamos usar aqui 30 dias de limite.

Agora nós conseguimos chamar esse método lá no nosso controller, lembrando que, como temos um '.methods.' e não um '.statics.' devemos chamar o método usando a "instância" do model em si, no caso a variável que utilizamos para criar o novo user.

## User Login

Vamos começar a fazer o nosso método para login do usuário. Aqui vamos receber um email e uma senha, então j´s podemos dar aquele destruct no req.body para facilitar a vida.

Primeiro verificamos se há um email e uma senha no formulário enviado, assim já evitamos mandar um nada pro db e já retornamos nosso ErrorResponse daqui mesmo. Na sequência buscamos o user pelo email e lembrando de adicionar um select para a senha já que aqui teremos que validar ela.

Novamente vamos fazer um methods no arquivo do nosso model para que possamos utilizar essa validação na controller. Aqui apenas retornamos um método já presente no bcryptjs:
> return await bcryptjs.compare(inputPassword, this.password);

No fim das contas nosso endpoint de login fica assim:
```js
exports.login = asyncHandler( async (req, res, next) => {
  const { email, password } = req.body;

  // Validando o form
  if(!email || !password) {
    return next(new ErrorResponse('Please provide an email and a password', 400));
  }

  // Buscando o user e checando sua existência no banco
  const user = await User.findOne({ email }).select('+password');

  if(!user) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  // Usando o bcryptjs lá no User model para validar senha
  const isMatch = user.matchPasswords(password);

  if(!isMatch) {
    return next(new ErrorResponse('Invalid Credentials', 401));
  }

  // Gerando o JWT e retornando-o na response
  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});
```

Note a importância de termos a mesma mensagem para email não encontrado e senha inválida, dessa forma não é possível saber se um email está realmente registrado no banco ou não mantendo essa barreira de segurança.

## Sending JWT In a Cookie

Poderíamos tranquilamente deixar aque o front armazena-se o token no localStorage para que, quando fosse feita uma request ele já pega dali e manda no header. Por motivos de segurança vamos dar um passo mais a fundo e armazenar esse token em um Cookie no navegador.

Vamos usar um package chamado cookie-parser, ele basicamente vai nos dar a disponibilidade de usar direto o req.cookies, um objeto com os cookies já bonitinhos lá.

Vamos substituir as duas últimas linhas do código acima por uma função que vai receber o model, o status code e o objeto response, dessa forma essa função pode er usada em outros lugares:
```js
const sendTokenResponse = (user, status, res) => {
  // Gera o token
  const token = user.getSignedJwtToken();

  // Define as opções passadas com o cookie
  const options = {
    expires: new Date(
      Date.now() + (process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000)
    ),
    httpOnly:true
  };

  // Em ambiente de produção habilita o HTTPS
  if(process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(status).cookie('token', token, options).json({ success: true, token });
};
```

## Auth Protect Middleware

Agora já conseguimos fazer o login e enviar o token de volta como um cookie pro usuário. Normalmente vamos receber esse token no header da request com a chave Authorization e a keyword Bearer a frente dele.

Vamos então criar um novo middleware que terá algumas funções sendo exportadas. Começaremos lidando com a função de protect. Ess função serve para limitar o acesso a determinadas rotas.

O que precisamos fazer aqui é garantir que foi enviado um header de authorization e que ele contém usa Bearer Auth. Com isso feito podemos tentar decodificar o token usando o secret armaznado na variável de ambiente e definir o user atual baseado em seu id.
```js
exports.protect = asyncHandler( async (req, res, next) => {
  let token;

  if(req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if(!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
})
```

Agora podemos importar essa função nos Routers que precisem de proteção em rotas. Assim será necessário um header Authorization na request com um token válido para acessar as rotas.

Podemos agora adicionar um endpoint que recebe o req.user vindo desse middleware e retorna os dados do usuário logado, simples assim, agora podemos recuperar informações de um usuário a partir de um token.

## Storing the Token in Postman

Para não precisarmos ficar manualmente adicionando o token no postman vamos automatizar esse processo. 

Vamos então usar a aba de Tests nos endpoints que geram token para definir uma variável de ambiente de forma automática:
> pm.environment.set("TOKEN", pm.response.json().token)

Para utilizar ese token não mais usaremos a aba Headers e sim Authorization. Lá podemos definir o envio de um Bearer Token e passar nossa variável {{TOKEN}} como valor e tá pronto o sorvetinho.

## Role Authorization

Vamos agora adicionar a função de middleware que autoriza certas roles a fazer certas ações.

Aqui a coisa também é bem simples, como vamos realizar uma partial call na hora de chamar isso no router, vamos receber uma lista de roles na nossa função. Posicionando ela após o protect nos dá acesso ao req.user e assim podemos checar se aqule usuário pode acessar a route com: "!roles.includes(req.user.role)".

Caso o usuário esteja proibido de acessar a rota retornamos o next com um ErrorResponse, caso contrário apenas liberamos o caminho com next().
