# Build a web API with Node.js and Express

Node.js tem um módulo core chamado HTTP que nos auxilia na construção de aplicações web~, suportando requests para leitura, escrita e operações com diferentes tipos de conteúdo.

Apesar disso, o módulo HTTP não é tão rápido quanto usar um framework, até para trabalhar com uma API eficiente que consiga lidar com operções mais complexas como autorização e autenticação, usaremos frameworks.

### Create a new Express framework web application

Os conceitos a seguir são importantes de serem considerados quando construímos web apps e APIs:
- Routing: Nossa aplicação é dividida em diferentes seções baseadas em partes da URL
- Suporte a diferentes tipos de conteúdo: Os dados que fornecemos podem estar em formatos diferentes como HTLM, JSON, CSV, etc.
- Autenticação/Autorização: Haverão dados sensíveis, para isso um usuário deverá ter uma role ou um nível de permissão para que possa acesar os dados.
- Leitura e escrita de dados: Usuários irão precissar ver e enviar dados pro sistema. Para enviar dados o usuário pode usar forms ou upload de arquivos.
- Time to market: Para criar web apps e APIs de forma eficiente, escolha as ferramentas e libraries que entreguem soluções para problemas em comum. Essas escolhas permitem ao dev gastar mais tempo focado nos requisitos da aplicação.

O Node vem com o módulo HTTP. É um module ligeiramente pequeno que suporta quase todo tipo de request e de dados.

É importante saber as seguintes classes para gerenciar uma request do íncio ao fim:
- http.Server: Representa uma instância de um servidor HTTP. Devemos indicar pra esse elemento em qual porta e endereço ele deve ouvir os eventos.
- http.IncomingMessage: Use-o paraacessar status, headers e dados. Este objeto será criado por http.Server ou http.ClientRequest.
- http.ServerResponse: Criado internamente pelo HTTP Server. Essa classe define como a resposta deverá ser.

Esse código [aqui] é um exemplo de aplicação web mais simples possível, os comentários e notas estão lá no arquivo mesmo.

Para aplicações menores, o módulo HTTP pode ser o suficiente, mas para aplicações maiores, um framework como o Express pode nos ajudar a construir a arquitetura dessa aplicação de maneira mais escalável.

Para route management o Express utiliza a URL, a route (/products) e métodos HTTP (post, get, put, delete). Cada método HTTP indica o que deve ocorrer com os dados.

O Express tem métodos dedicados para lidar com cada verbo HTTP, junto com um sistema que associa diferentes rotas a difrentes trechos de código.

Express aceita vário formatos de conteúdo diferentes que podem ser devolvidos para o client. O objeto res vem ocm uma série de funções auxiliares para retornar diferentes tipos de dados.

Para retornar plain text usamos res.send('Lorem'). Já para um formato como o JSON temos outros métodos dedicados que garantem a entrega correta, res.json({obj}) por exemplo.

Para começarmos a desenvolver uma aplicação Node com o Express, precisasmos primeiro instalar ele como uma dependência, ou seja, é recomendado antes inicializar um projeto para termos nosso package.json. A partir daí seguimos basicamente 3 passos.
- Instanciar a aplicação: Criar o web app, aqui ainda não conseguimos rodar nada, mas temos algo para um extend.
- Definir rotar e route handlers
- Configurar middleware: Middleware é um trecho de código executado antes ou após uma request. Podemos usa-lo para lidar com autenticação por exemplo.
- Iniciar o app: definir a porta e instruir o app a ir lá ouvir as requests :)

### Manage a request lifecycle with middleware

Algumas vezes, quando chega uma request, precisamos verificar se o usuário está logado ou se ele tem acesso àquele conteúdo. Lidar com essas requests pode ser entendido como uma série de passos, no caso de uma necessidade de login temos:
- Pre request: Investigar se o user enviou as credenciais corretas no header, se estiver tudo ok vamos ao próximo passo.
- Construir uma response: desde que a request peça corretamente por algum dado, nos comunicamos com um banco ou com umendpoint e devolvemos o que foi requerido.
- Post request: Aqui é opcional, mas seria rodar um techo de código após lidar com a request.

O Express tem nele o suporte para lidar com a request dessa maneira. Para rodar uma pre ou post request, usamos o método use(). Em express a pre ou a post request são um middleware e seguem a sintax:
> app.use((req, res, next) => {})

Quanto a esses parâmetros temos
- req é justamente a request com headers URL que tá chamando, a depender da request pode ter um body, enfim.
- res é a resposta em que iremos escrever informação para retornar ao Client.
- next é justamente o que indica que a request está OK e pode seguir pro próximo passo, se next() não for chamado o processo para. É boa prática aqui dizer para o client porque a resquest não foi processada.

Podemos colocar o trecho do app.use() antes e/ou depois do código pra nossa request mesmo, app.get() ppor exemplo. Ou podemos passar uma pre request como parâmetro dentro do app.get(), entre a rota e o código que já estaria lá.

