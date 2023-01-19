# Final Projects

Para a conclusão do curso é necessário entregar 5 Microsserviços usando Node.js e Express. Os códigos comentados de cada um dos 5 podem ser encontrados na pasta "[/projects](./projects/)" ou acessados diretamente pelos links abaixo.

## [Timestamp Microservice](./projects/timestamp/app.js)

Tendo 2 rotas disponíveis além da '/', essa API retorna sempre um JSON contendo 2 chaves: 'unix' e 'utc'. Para interagir com a API as rotas são:
- /api/ >>> Retorna um objeto com a data atual.
- /api/:date >>> Retorna um objeto com a data do route parameter.

## [Header Parser Microservice](./projects/headerParser/app.js)

Achei bem mais simples do que o desafio anterior, aqui basicamente era necessário resgatar algumas informações presentes no header da request e retornar como JSON.

Para utilizar basta acessar a rota disponível "api/whoami/".

## [URL Shortener Microservice](./projects/urlShortener/app.js)

O primeiro projeto a utilizar um banco de dados, o MongoDB. Aqui o usuário insere uma URL para ser encurtada, como resposta recebe um "short_url" que referencia o document com a URL inserida lá no MongoDB.

Com isso o usuário pode acessar o site desejado inserindo a sua "short_url" ao fim da URL, da seguinte maneira:
- /api/shorturl >>> Um POST aqui e a URL desejada é armazenada no banco, recebendo um id de referência.
- /api/shorturl/:id >>> Dessa maneira o usuário é redirecionada à URL previamente armazenada.

## [Exercise Tracker](./projects/exerciseTracker/app.js)

De longe o mais complexo de se realizar até agora com 4 rotas diferentes e a possibilidade de filtrar resultados com a query string. Além disso gerar relação entre entidades em um banco não relacional me pareceu uma gambiarra, não sei até onde vai a aplicabilidade disso.

Enfim o projeto consiste em desenvolver um sistema no qual usuários podem ser cadastrados para depois ter tarefas atribuídas a eles com descrição, duração e data.
- /api/users >>> POST // Cadastra novo usuário
- /api/users >>> GET  // Retorna todos os usuários cadastrados
- /api/users/:id/exercises >>> POST // Cadastra um novo exercício para o usuário indicado
- /api/users/:id/logs >>> GET // Recupera os dados do usuário e todos os seus exercícios
- /api/users/:id/exercises?[from][&to][limit] >>> GET // Podemos filtar os exercícios por um intervalor de datas e limitar o retorno.

## [File Metadata Microservice](./projects/fileMetadata/app.js)

Talvez o mais fácil e mais simples até agora, mas tudo graças ao multer. Basicamente realiza o POST do arquivo pelo formulário e retorna um JSON com algumas informações sobre o arquivo.

Com isso acaba o curso e as minhas primeiras aplicações backend, bora pro próximo :)
