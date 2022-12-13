# Ignite Lab Node.js - Rocketseat
Esse Ignite lab ocorreu ainda em dezembro de 2022, aqui tive meus primeiros contatos focados no backend, abaixo estão as anotações e registros das 3 aulas deste Ignite lab.
### Aula 01 - Fundamentos do Nest.js & Prisma - Ignite Lab Node.js
#### O que é um microsserviço?
Existem 2 tipos de arquitetura comum para aplicações, arquitetura no deploy, temos o monolito com toda a aplicação dentro de uma única base de código e os microsserviços.
<br>
Em uma arquitetura de monolito temos a aplicação e o banco de dados, com uma comunicação simples, o problema é que conforme precisamos escalar a aplicação, precisamos de mais recursos e acoisa infla podendo haver conflitos entre funcionalidades diferentes.
<br>
Microsserviços são a divisaão da nossa aplicação em váriasa aplicações menores, exemplo em um e-commerce, termos carrinho, checkout, nota fiscal, logitica, autenticação, catálogo, tudo isso faz parte da mesma loja, mas cada especialidade é dividida em uma aplicação.
Em questão de código isso pouco interfere, toca mais na forma como hospedamos e esclamos a aplicação, o que mais impacta é a comunicação entre essas aplicações. As aplicações devem ser independentes, de forma a um problema em uma aplicação não interferir no funcionamento das outras.
<br>
Assim como nas aplicações, também é necessário independência no banco de dados, sendo um db por microsserviço. Isso traz problemas, por exemplo, na hora de emitir uma nota, não podemos buscar informações em outros lugares, como o frete lá na parte de logística por exemplo, pois isso fere a independencia dos microsserviços, a ideia é que toda aplicação possa funcionar sozinha dentro do seu contexto.
A solução comum é a duplicidade de dados, um checkout por exemplo envia as informações (broadcast) pra quem quiser consumir e posteriormente armazenar isso, no caso um pedido pra nota fiscal pegar.
Agora não necessariamente todas as informações são armazenadas novamente, somente as necessárias para o funcionamento de cada aplicação.

#### Nest.js
O Nest.js é um framework do Node.js. Um framework opinado, ele traz uma convenção, uma estrutura prévia para a aplicação, você não está 100% livre para fazer o que quiser. Essa opinião no Nest facilita a ter menos atrito na tomada de decisão, ele limita as formas de se realizar uma tarefa te entregando a lib já integrada.
Typescript, o Nest usa muito Typescript, usando muito o conceito de decorators.

A documentção do Nest.js pode ser encontrada [aqui](https://docs.nestjs.com/), após os primeiros passos serem seguidos para a criação de um novo projeto podemos explorar a estrutura do Nest.js

Note a presença da pasta 'dist', como estamos aqui em Typescript e o Node precisa do código em js, temos um processo de 'compilação' que vai para essa pasta.
Temos também a pasta src, a node_modules com as dependências, a pasta test com os arquivos relacionados a testes.
Temos algumas configurações, o package.json com dependeências de desenvolvimento, configurações do jest, temos um READ.me e tsconfig.json alem de versão pra build.

##### Modules, Services, Controllers

Dentro da src temos o arquivo principal, o main.ts, nele basicmanete tem a criaçõa do app passando o app module e o listen na 3000.
Já no app.module.js tem o export de uma classe AppModule sem nada no {}, aqui faz-se necessário o conceito de decorators, que nada mais é do que acoplar um funcionamento dentro de outra variável, aqui vemos logo acima no @Module. Esse @Module passa imports, providers e controllers.

Controllers são os pontos de entrada na aplicação, arquivos que vão lidar com as chamadas HTTP, se olharmos o app.controller.ts, veremos que ele é uma classe que também tem um Decorator, o @Controller, isso transforma a classe em controller.

/* Logo abaixo vemos outro decorator, o @Get, que acopla o método get (momento aaaaahhhh) lembra dos colchetes acima dos métodos la no c#? Inclusive esse decorator aceita rota como parâmetro, assim como no @Controller, podemos prefixar rotas, UAAAAAAUUUU */

Services são classes sem um propósito específico, o ponto é no Nest.js temos geralmente, modules, services e controllers, esses 3 conceitos, e tudo que não é controller, arquivos que definem rotas da aplicação, é service. Conexão com db por exemplo é service, uma classe genérica a ser usada dentro de controllers ou outros services.

O module é basicamente um acoplador, junta vários controllers com vários services, funciona como um ponto central para importar esses outros arquivos.
Podemos ter vários modules e importar uns para dntro dos outros '-'... Assim a ideia é termos varios modules que se juntam no app.module.ts como o module central.


##### Inversão de dependência e Injeção de dependência

O Nest.js trabalha com um dos princípios do SOLID, a inversão de dependência, podemos ver na nossa controller que busca o AppService mas não o utiliza de cara, ele no construtor tem um atributo appservice do tipo AppService e só aí utiliza no this.appservice.getHello().
Ou seja ao invés dele buscar a dependência em outro arquivo, ele a recebe quando é instanciado

Agora se olharmos o module veremos que o AppService não é passado para o AppController, aqui entra a injeção de dependência

Inversão, recebe as dependências geralmente através de um construtor, quem for instanciar essa classe deve passar as dependências.
Injeção é uma forma de automatizar esse processo, o Nest entende que tem um AppService ali no module, pronto para ser instanciado lá no AppController. Para isso é obrigatório que haja um decorator @Injectable() no AppService.

#### Prisma

> npm i prisma -D
> npm i @prisma/client
> npx prisma init --datasource-provider SQLite

Esses foram os comandos utilizados para instalar o prisma na aplicação, após isso alguns arquivos são gerados como o schema.prisma, onde definiremos as tabelas do onsso banco de dados, além de um arquivo .env que diz qual é a URL do banco de dados.

##### Primeira tabela

Como estamos desenvolvendo uma aplicação de notificações push, faremos a tabela notification.
model Notification {} começamos aqui para definir a tabela, passamos então 'campo tipo comportamento', por exemplo ao criarmos um campo de id como chave primaria no SQLite passamos 'id String @id', outro exemplo seria um campo 'createdAt DateTime @default(now())', esse "comportamento" não necessariamente é obrigatório, por exemplo o conteúdo na notificação basta um 'content String'.

Agora quando vamos referenciar o id do recipiente, não necessariamente temos que ter uma tabela com os usuários aqui nesse microsserviço, é uma referência pra uma informação que está em outro serviço.

Note o uso de recipientId ao invés de userId, isso porque a mesma entidade pode estar em vários serviços, logo a nomeação pode ser mais clara a depender do serviço.

Finalizando, para enfim criarmos a tabela passamos um 'npx prisma migrate dev', damos um nome pra nossa migration e voilá

##### Conexão

Para fazer essa integração Nest.js Prisma, podemos voltar à documenta~çao do Nest, na aba esquerda em Recipes, temos todo o guia do Prisma.

O arquivo prisma.service.ts basicamente exporta uma classe PrismaService que extende o PrismaClient e implementa uma interface OnModuleInit do Nest. O OnModuleInit nos permite definir o método onModuleInit() para executar algo assim que a aplicação rodar.

Com isso feito podemos importar o nosso novo service lá no module para que este seja usado em qualquer lugar.

##### Primeira entrada

Podemos agora trabalha na nossa controller trazendo o PrismaService, nosso método @Get() pode agora retornar todas as entradas na nossa tabela com um simples

> return this.prisma.notifications.findMany();

O nosso método @Post() vai ser um async create() que vai await o this.prisma.notifications.create({data:{dados passados}}). Podemos testar esse nosso método lá no Postman, como os dados já estão prontos basta mandar a request 'vazia'.

Nossa entrada foi criada e podemos ver ela no Browser, ou no 'npx prisma studio' ou no próprio Postman, basta passarmos um get no mesmo endereço.

#### Rotas e validação

##### Corpo da requisição

No próprio Postman podemos criar um JSON para o corpo da nossa request, para essa nossa tabela de notificação precisamos passar o recipientId, o content e a category da notificação.

No Nest não recebemos requisições, respostas, talz, no nosso método, aqui usamos decorators. Então trazemos o (@Body() body: any), nesse momento podemos passar um corpo e verificar com um console log como ele chega.
Assim sendo podemos definir um const {recipientId, content, category} que recebe os valores vindos do body e no nosso data passar apenas a chave.

Partimos então pra validação de dados

##### Validação de dados

Se por acaso passarmos um corpo sem o recipientId? temos um status 500 , vamos então fazer uma validação dos dados.

Começamos com uma classe separada pra fazer essa tarefa e instalamos 2 pacotes aqui.

>npm i class-validator class-transformer

Agora o body deixa de ser 'any' e passa a ser a classe que criamos, no caso CreateNotificationBody, isso tá feito, falta a validação eeeeeee vamos de decorator.

Importamos então do class-validator um @IsNotEmpty()

Por padrão o Nest não valida as requisições para não acoplar coisas que deixariam a aplicação lenta, o que devemos fazer é adicionar um app.useGlobalPipes(new ValidatonPipe()) antes do listen lá no main.ts.

Agora ao invés de um 500 internal server error, devemos ter um 400 Bad Request se tentarmos passar um campo vazio, a vantagem agora é sabermos exatamente qual é o problema.