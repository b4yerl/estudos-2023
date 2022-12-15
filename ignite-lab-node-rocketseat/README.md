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

### Aula 02 - Domínio, casos de uso e regras de negócio - Ignite Lab Node.js
#### Design de Software

Design de software é o processo em que arquitetamos como as coisas vão funcionar, as regras de negócio, casos de uso, etc.
/* Lembra do RF, RNF e Restrições? */

A ideia passada aqui é a de "pensar na aplicação desconexa de qualquer meio externo". Quando iniciamos uma aplicação podemos começar pensando em banco de dados, logo de cara, quando a ideia aqui na aula é que a aplicação funcione independente de qualquer coisa. Dessa forma o banco de dados passa a ser visto apenas como ferramenta para persitência de dados e não como responsável ou algo que vá interferir no funcionamento da aplicação.

Normalmente enxergamos as nossas tabelas como entidades, para sair disso podemos ver nossas entidades como classes da OOP. No contexto da nossa aplicação de notificações podemos ver nossa entidade principal, as notificações, como uma classe e posteriormente nos preocupamos com a integração disso ao banco de dados.

##### Organização da aplicação

Dentro do src/ abrimos duas novas pastas, "application" e "infra". Na pasta infra/ teremos tudo que é externo, tudo relacionado a camadas externas como banco de dados, conexão com outras apis, rotas http, tudo que nos conecta com o mundo exterior vai pra infra/.
Todo o resto, tudo que é independente da camada externa vai pro application/, como nossas entities/ por exemplo.

#### Entidade de Notificação

Na construção da nossa classe de notificação seguimos inicialmente os conceitos de encapsulamento, ou seja, nossos atributos estão privados, dessa forma devemos criar getters e setters para trabalhar com esses atributos. A vantagem do uso de métodos get e set é o papel deles como middleman, que traz para nós a flexibilidade de uma validação por exemplo, ou simplesmente de esconder do "exterior" o que apenas nossa entidade deve ter conhecimento.

##### Getters / Setters

No JS podemos usar o prefixo "get" e o "set" na assinatura do método, mas não podemos repetir o nome dos atributos, no entanto existe uma saída para isso.
Podemos criar uma interface com nossos atributos e ao invés de declarar nossos atributos na classe separadamente, nós aplicamos a interface tipo: 
> private props: NotificationProps;
Agora podemos chamar nossos getters e setters pelo nome dos atributos já que eles internamente estarão definindo valores para
> this.props.content
O nosso constructor também pode simplesmente receber um argumento tipo NotificationProps e settar props de uma vez.

/* Aí vai de saber até onde isso vale né, as vezes um getContent fica mais bunitim */

Outro atributo pra nossa interface vai ser o readAt:
> readAt?: Date | null;
Repare que o ? indica que o readAt é opicional, ou seja ela pode ser do tipo Date ou undefined. Por isso a importância do pipe, ele indica ali que alé dos 2 tipos anteriores, também pode ser null.
Quando geramos uma notificação podemos ter uma data de leitura ou não, nesse caso quando não temos readAt é undefined.
O null entra na brincadeira quando queremos atualizar uma notificação e remover o valor de readAt, o undefined é o equivalente de remover o readAt em si, enquanto o null é o envio de um valor vazio, mantendo o readAt vivo e sorridente.

Note que, apesar dessa nossa entidade ser igual a nossa tabela, isso não é uma regra, uma entidade pode ser mais de uma tabela e enfim.

##### Value Objects

O conceito de Value Objects vem do DDD, sendo aplicado a atributos nos quais eu queira algum tipo de funconamento específico dentro daquele atributo.

Começamos com uma classe para o nosso content, sim, podemos chamar o arquivo só de content.ts e caso comece a ficar bagunçado podemos criar uma pasta com o nome da entidade em questão.

A ideia aqui é fazermos toda operação relacionada ao nosso content de forma isolada la na classe Content, dessa forma não poluímos a nossa entidade Notification com validações, formatações e afins, relacionados a Content.

Essa ideia de value objects não é obrigatória, mas é algo muito interessante para fins de organização de tudo, isolando melhor o código, podendo isolar também os testes, facilitando a manutenção :)

#### JEST

##### Introdução a testes

Quando falamos de testes unitários, estamos falando de testar cada pedacinho da nossa aplicação, portanto, sim ´pdemos começar a pensar nos primeiros testes agora.

Neste momento nossa aplicação já cria um objeto de Notificação e já valida seu conteúdo pela quantidade de caracteres.

Pra início arrancamos a parte do Jest lá do package.json e passamos para um arquivo separado, o jest.config.ts.

Então começamos com um teste pro nosso content no arquivo
> content.spec.ts

No fim das contas criamos nesse arquivo 3 testes dentro de 2 modelos diferentes, mas que no fim tem uma mesma ideia por trás.
> test('Nome do nosso teste', () => { <br>
>   expect('Algo que se espera').toFazerAlgumaCoisa(); <br>
> })
Sendo que em um modelo usamos uma variável que foi checada com .toBeTruthy() e no outro tivemos uma arrow function com .toThrow().

O legal é que estamos pensando em testes desde o início da aplicação independente da metodolia (tdd) e talz.

##### Organização dos testes

No Jest, existe algo que podemos aplicar, o describe(), nele podemos categorizar nossos testes que dentro dele estiverem.

Outra mudança que podemos fazer é trocar a keyword test() por it(), facilitando uma leitura dieta do teste.

##### Replace helper

Quando tentamos criar uma notificação pro teste nos deparamos com um problema. É exigido que passemos uma data pro createdAt, o problema é, quando a notificação é criada, não queremos informar o createdAt e para isso existem algumas soluções.

A ideia na verdade é mostrar que no constructor a presença do createdAt não é obrigatória, apenas no instanciamento da classe.

Aqui é utilizado um helper, o Replace.ts
> export type Replace<T, R> = Omit<T, keyof R> & R;
Estamos então ex´prtando o tipo Replace, uma helper function do TS, passando um tipo original e o tipo a ser replaced/opicional

Dá uma olhada lá no notification.ts como ficou esse replace, não vou passar pra cá kkkkkkkkk

#### Casos de uso da aplicação

Casos de usos são as funcionalidades da nossa aplicação, a forma como o usuário interage com a aplicação, guess what, services. Partimos então pra criação do primeiro RF da aplicação.

##### send-notification.ts

Na hora de nomear essa funcionalidade, tenta sair um pouco do CRUD e busca um nome que realmente representa aquilo que está sendo feito pelo "user" da funcionalidade, nesse caso uma notificação deve ser enviada.

Antes de criarmos nossa classe de enviar notificações temos duas interfaces, a primeira contém aquelas informações básicas necessárias para o envio da notificação. A segunda interface tem apenas a função de transformar o nosso return em um objeit, carregando um único atributo do tipo Notification.

/* Lembra lá da ideia de interface e implementação do livro de OOP? Pois bem, com essa interface Response, podemos alterar o que tem neça sem nos preocuparmos em alterar os que a usam. */

A nossa classe tem apenas um método, ela recebe a interface de request e retorna a Promise do objeto de SendNotificationResponse. Ou seja recebemos a informação e criamos a notificação.

Com isso já podemos criar um teste send-notification.spec.ts, por enquanto podemos testar se a notificação pode ser criada, mas isso já havia sido feito antes.

A partir de agora perceberemos que os casos de uso são o ponto central da nossa aplicação e aqui é que começarão as conexões com camadas de persistência de dados, api externa, envio de email, conexão com o mundo externo.

Nesse nosso caso aqui, futuramente vamos querer persistir essas notificações criadas em um banco de dados.

##### Repository pattern

O repository pattern é um intermédio entre a nossa aplicação e a camada de persistência. Então as classes, as funcionalidades que fazem a comunicação entre banco de dados e aplicação são os repositórios. São eles que recebem as chamadas do caso de uso e salvam os arquivos no banco.

Agora por que isso? Um exemplo seria, em caso de troca do banco, não é necessário sair alterando todos os arquivos que com ele se comunicam. Outro ponto aqui é a aplicação do principio de inversão de dependência visto lá atras, tendo as interfaces e as implementações variadas.

Criamos então o notifications-repository.ts, nosso amigo aí é um contrato, ele não implementa nada. Por questões do Nest (injeção de dependencia) e por ele lidar melhor com classes abstratas do que com interfaces, vamos de classe abstrata.

Após feita esse contrato, criamo um construtor pra nossa funcionalidade SendNotification passando o repository como um atributo private. Tendo esse atributo podemos chamar
> await this.notificationsRepository.create(notification)
Vamos ver agora um erro no nosso teste, porque o nosso .create() não está implementado ainda, para resolver isso momentaneamente podemos implementar apenas um console.log(notification).

Vemos então que, não é o nosso caso de uso que diz como a notificalçao vais er persistida, não é ele mesmo, estamos invertendo a ordem das coisas, é quem chama que diz como essa persistência ocorre, inversão de dependência.

Poderíamos trocar esse console.log() por um .push() pra dentro de um array, que simularia o db, e no teste checar o array pra .toHaveLength(1), essa ideia de desacoplamento de camadas nos permite ir testando a aplicação a medida que a desenvolvemos sem que haja uma dependência de uma tabela pra isso.

Isso nos leva paaaraaaa.........

##### Banco de dados em memória

Que é basicamente o que já estamos fazendo aqui, um "armazenamento" temporário dessas informações até que a aplicação seja reiniciada.
Para fins de organização o que vamos fazer é transportar essa ideia de implementação e array do nosso teste para um arquivo separado.

Podemos trazer o array como um atributo público da nossa classe InMemoryNotificationsRepository.

Um ponto para se atentar é com o caminho das importações.

Enfim, agora podemos instanciar um objeto pro no In memory database já dentro do teste.

#### Juntando as pontas

##### Repositório do Prisma

Chegou a hora de juntar as pontas dessa aula com a aula 1 e fazer a paradinha funcionara realmente.

Antes de tudo vamos organizar a pasta infra/. Criamos 2 novas pastas, uma pra cada parte da nossa infra, database/ e http/.
Dentro de http/ temos a pasta controllers/ e dtos/. DTO, ou Data Transfer Object, é exatamente o que o nosso create-notification-body.ts é xD.

Separamos os modules em 2, http/hhtp.module.ts e database/database.module.ts, fica agora a cargo do app.module.ts fazer esses dois imports.

Outra separação que podemos fazer é uma pasta prisma dentro da database/, aqui entra tudo que está relacionado ao Prisma, dessa forma facilitando a manutenção em caso de troca de ORM.

Enfim podemos criar o prisma-notifications-repository.ts, uma classe que implementa o nosso NotificationsRepository, recebendo no seu construtor um atributo do tipo PrismaService.

O método async create tem um
>await this.prismaService.notifications.create({data: {...}})
Basta então passar os dados no modelo
>prop = notification.getProp

Quanto ao id da notificação existem duas maneiras, gerar o id pelo banco ou pela aplicação. Aqui vamos gerar pela aplicação, dessa forma mesmo antes de persistirmos essa entidade no banco já saberemos seu id e poderemos utiliza-lo para outras operações.

Para isso vamos utilizar a função randomUUID() que será importada do node:crypto e um atributo private _id: string, lá no nosso notification.ts.

Ao criarmos o get pro nosso _id podemos nomea-lo apenas como public get id :)

##### notifications.controller.ts e Injeção

Com o repositório pronto, voltamos a nossa controller e injetamos o nosso caso de uso com um construtor. A questão é que aqui no Nest, para que nosso use-case seja injetável, temos que colocar o decorator @Injectable() lá na classe. Estamos então gerando um acoplamento do código ao framework que até então não havia.

Para que essa injeção seja possível, também devemos passar o nosso use-case (service) como um provider lá no http.module.ts

##### Vai rodar?

Precisamos de alguns ajustes no dabase.module e no http.module. Começando pelo database.module, precisamos informar aqui que quando o PrismaService pedir NotificationsRepository a classe a ser usada é a PrismaNotificationsRepository. Outra coisa necessária aqui é o export do NotificationsRepository para que lá no http.module, o SendNotification possa usar.
No http.module basta importarmos o DatabaseModule.

Por fim foi necessário passar o @Injectable() lá no nosso prisma repo também.

##### Teste coverage

E no final de tudo isso, nossos testes ainda são independentes do banco graças ao in memory database.

Mas ainda tem uma coisa bacana no Nest.Js, o npm run test:cov. O teste coverage gera um relatório dos nossos teste unitários, podemos dessa forma ver o que nossos testes unitários estão cobrindo e o que falta cobrir, o que passou e o que falhou, etc.

Repare que você não deve/precisa cobrir 100% da aplicação, por exemplo nossos getters e setters aqui não tem nenhuma regra de negócio, portanto não há necessidade de testar isso.