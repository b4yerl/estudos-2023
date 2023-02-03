# Authentication, User and Permissions

## Part II

## Bootcamp and User Relationship

Vamos então criar uma relação entre users e bootcamps. Vamos começar adicionando um user no Schema do bootcamp, da mesma forma que fizemos ao adicionar bootcamp no Schema dos cursos.

Agora devemos alterar a controller, masi precismaente o endpoint que cria um novo bootcamp. Como o user não vem no req.body teremos que criar essa chave a partir do req.user que vem do middlewatre.

Note que nessa aplicação, apenas a role de 'admin' pode publicar mais de um bootcamp, portanto essa checagem também deve ser feita.

## Bootcamp Ownership

Bom, agora que já temos a relação entre user e bootcamp estabelecida, precisamos usar isso para permitir que apenas o dono do bootcamp possa realizar as operações de CRUD possíveis.

Novamente, como já estamos utilizando nosso middleware de protect, temos acesso fácil ao req.user, o que já adiante muito a vida. Basicamente as alterações a serem feitas aqui são: trocar o primerio findByIdAndUpdate por um findById só, assim podemos checar se o user é o dono do bootcamp ou o admin e só entçao atualizar.

Exatamente o mesmo processo feito no update deve ser repetido no delete e no upload de photo.

## Course Ownership

Vamos agora fazer a mesma lógica, feita para bootcamps, mas nos cursos. Então devemos fazer a relação do curso com um user e depois sair portegendo os endpoints com um desvio condicional.

A única diferença é que na criação do curso temos que checar se o user é o dono do bootcamp associado.

## Forgot Password - Generate Token

Vamos agora começar a implementação da recuperação de senha. Esse será um endpoint no auth controller também. O primeiro passo então é checar se o email passado no formulário corresponde a algum user do banco, caso não, 404.

Agora vamos chamar um método associado à nossa model, o getResetPasswordToken(), método esse que iremos implementar. Para isso usaremos o crypto module. Com o crypto vamos rodar um randomBytes(20).toString('hex') para gerar o nosso token em si que, na sequência passa pelo crypto novamente para gerar o hash e armazenar no document:
```js
UserSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');

  // Gerar hash e armazenar no document
  this.resetPasswordToken = crypto.createHash('sha256')
                                  .update(resetToken)
                                  .digest('hex')
  // Armazenar o tempo de 10 minutos para expirar o token
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
}
```

Note que mesmo tendo feito isso os campos adicionados ainda não foram salvos ao DB. Para resolver isso basta rodar o user.save() na controller além de um leve ajkuste no middleware de pre save do user model.

## Forgot Password - Send Email

Para fazer o envio de email usaremos o nodemailer. Junto a ele teremos que configurar um transporter, aqui vamos usar um serviço, o [mailtrap.io](https://mailtrap.io/) para simular e capturar o envio de um email, ideal para ambiente de dev.

Vamos usar um arquivo de utility para enviar o email. Esse arquivo é basicamente a sugestão padrão do nodemailer com as devidas alterações. Teremos por fim algo como:
```js
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // Utiliza variáveis de ambiente para criar o transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Gera o email a ser enviado
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  // Enfim envia o email
  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
}
```

Voltamos então à controller onde fizemos por último o save() do user com os campos associados ao token. O que devemos fazer agora é montar a estrutura do nosso email a ser enviado.

Para isso precisamos criar uma message que aponte o user para realizar um PUT request na URL com o path /auth/resetpassword/:token. Após isso basta chamar a função para envio do email, passando o objeto com os dados necessários. Note que este envio deve ser realizado dentro de um bloco try catch.

Caso seja capturado um erro devemos definir o resetPasswordToken e o resetPasswordExpire do nosso document como undefined, realizar um novo save e disparar o ErrorResponse.

## Reset Password

Agora podemos enfim implementar o reset de senha em si para utilizar o token. A request que virá nesse endpoint é um PUT carregando o token como um parameter e a nova senha no body.

Primeiro passo então é usar o crypto module para gerar um hash com sha256 utilizando o `req.params.resettoken` e conferir se existe um user no banco, com esse hash salvo no  `resetPasswordToken` e com um `resetPasswordExpire` maior do que a data atual.

Caso tenhamos a confirmação dessa busca, podemos atualizar asenha para a senha presente em `req.body.password`, deixando o nosso middleware fazer o hashing com o bcryptjs, e atualizar os campos de resetPassword para undefined.

## Update User Details

Vamos implementar a possibilidade do usuário atualizar seu nome e eu email. COmo somente esses campos serão editáveis, temos que criar um objeto isolando esses dados do resto do req.body para aí sim mandar p `findByIdAndUpdate()` já feito antes.

Nesse caso aqui, como a rota é protegida e o middleware já vai ter checado antes a existência de um usuário válido, não precisamos fazer esse checking, basta retornar o 200 OK.

Para a atualização da senha o usuário deverá enviar a senha antiga e a senha nova no body da request. Com isso podemos usar o método `matchPassword()` para verificar o usuário e somente então definir a senha do objeto user como a senha enviada em `req.body.newPassword`.

## Admin Users CRUD

Vamos separar as operações disponíveis para o admin em um router e um controller chamado "users". Aqui é bem simples, só geramos os métodos mais básicos possíveis de um CRUD para que o admin pudesse manipular a base de usuários se assim for necessário.
