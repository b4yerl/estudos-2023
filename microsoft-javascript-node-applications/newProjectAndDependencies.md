# Create a new Node.js project and work with dependencies

Quando trabalhamos com uma aplicação, escrevemos código para implementar regras de negócio. Por questões de velocidade e confiabilidade nem sempre construímos o código todo do chão, geralmente usamos código externo, bibliotecas que outras pessoas escreveram.

### Configure the package.json

O package.json é um arquivo manifesto do nosso projeto Node. Ele contém metadado, informações do projeto. É ele também quem dita coisas como, de qual forma as dependencias serão gerenciadas? E muito mais.

Um arquivo package.json não é algo que escrevemos do zero, na mão. Ele é o resultado do comando "npm init", esse comando nos pergunta o nome do projeto, a versão, descrição, entry point, comando de test, repositório git, keywords, autor e licença. Uma versão mais rápida, com valores padrão atribuído às chaves é com a inclusão de uma flag -y
> npm init -y

Todas as possíveis propriedades presentes no package.json podem ser divididas em 3 grupos:
- Meta-information: As propriedades nesse grupo definem as informações do projeto. Inclua aqui o nome do projeto, descição, keywords, autor, etc.
- Dependencies: Existem 2 propriedades que descrevem as bibliotecas sendo usadas: dependecies e devDependencies.
- Scripts: Nessa seção podemos listar scripts para realizar tarefas do projeto como start, build, test, lint.

O Node.js oferece uma guia para nomeação de sripts. A ideia é que projetos Node usem nomes consistentes para os scripts, isso traz varios benefícios em produtividade e manutenção.
- start: Invoca o comando "node" com o entry file como argumento 
   > "node index.js"
- build: Descreve como buildar o projeto. Por exemplo o comando build rodando o compilador Typescript para gerar a versão JS.
- test: Roda os teste do projeto. Caso estejamos usando uma biblioteca de testes, o comando deve invocar o executável da biblioteca.
- lint: Invoca um linter como ESLint. Linting encontra inconsistência no código. Um linter normalmente oferece uma maneira de corrigir inconsistências encontradas.

Para executar um script usamos o comando:
> npm run \<action>

### Add packages to your Node.js project

Node.js vem com várias bibliotecas core que lidam com tudo de gerenciamento de arquivos até HTTP até compressão de arquivos e mais. Apesar disso existe uma vasta gama de bibliotecas de terceiros disponíveis e, graças ao npm, podemos facilmente instalar essas bibliotecas e usar elas no nosso projeto.

O Node e seu ecossistema usam muito o termo dependência. Uma dependência é uma biblioteca de terceiros, um punhadão de código reutilizável que nossa aplicação depende para funcionar.

Um package é uma coleção de arquivos necessários para rodar um ou mais módulos. Esse package que nós importamos para usufruir de suas features.

Existem alguns fatores importantes quando perguntamos se precisamos de um package ou não.
- Ter código melhor. Pra algumas tasks mais complexas já existem padrões seguros em pacotes usados por muitos dvs. Muitas dessa bibliotecas implementam as features que precisamos na maioria dos casos, sem que precisemos reinventar a roda.
- Economizar tempo. Programação leva tempo, mesmo que consigamos replicar e atingir alguma feature no mesmo nível das bibliotecas mais usadas, o tempo imprimido para essa tarefa não vale.
- Manutenção. Toda biblioteca e app precisa receber manutenção mais cedo ou mais tarde, seja para adicionar features ou corrigir bugs, e nada melhor do que ter uma equipe de software open source dando essa manutenção pra você.

Antes de instalar uma library é interessante [checar](https://www.npmjs.com/) as dependências dela, alguns fatores a se levar em cinta aofazer isso são:
- Tamanho: A quantidade de dependências pode deixar uma pegada grande, caso tenhamos banda lmitada ou limitações de hardware mesmo, tamanho pode ser um problema
- Licença: Caso pretendamos vender o software, licença pode ser um fator muito importante de se observar.
- Manutenção ativa: Se o package tiver uma dependência que não está com manutenção ativa a manutenção do seu programa pode vir a ser dificil.

Para instalar um pacote basta usar o seguinte comando no terminal:
> npm install \<package-name>

Quando rodamos o install, somos conectados ao registro global que cata o código e o coloca em uma pasta "node_modules" dentro do projeto.

Pacotes podem vir de vários locais diferentes, não só pelo nome do registro público, podemos manter um registro privado, pdemos passar uma URL do github para trazer o pacote direto de um repositório, podemos ter ele em uma pasta ou um zip local, ou até direto de um diretório

Quando rodamos o npm install somente com o nome do pacote, o Node.js vai até o registro público global e busca pero código para download, localizado lá no [npmjs.com](https://www.npmjs.com/). Podemos usar o site para explorar os packages.

#### Production vs. development dependencies

Podemos separar as dependencies em duas categoris, dependências de produção são as que precisamos rodar quando mandamos a aplicação pra produção. Uma dependência de produção deve estar na aplicação para que sua funcionalidade esteja disponível com o projeto rodando. Dependências de desenvolvimentos são aquelas que precisamos apenas durante a fase de desenvolvimento, pense nelas como andaimes de um construçlão, aqui entram libs de teste, ferramentas de linting, elas são importantes pra garantir que a aplicação funciona direito, mas não precisamos enviar junto a aplicação.

Essa separação é apenas conceitual, mas o npm nos permite passar flags durante a instalação de um package para que a dependência vá para o dependencies ou devDependencies. Independentemente dessa separação, tudo é instalado no node_modules.

Para instalar um dependencia que não irá futuramente para a produção, usamos a flag --save-dev junto ao npm install. Outra opção é instalar o package globalmente, dessa forma ele não vai para o node_modules e sim para um diretório específico no computador, assim a ferramenta fica disponível pra qualquer projeto node no computador. Com o tempo esses packages globais podem tomar muito espaço para algo que nem sempre usaremos com frequencia, sendo assim podemos usar o npx.

A ferramenta npx nos permite justamente carregar uma dependencia dentro do processo do Node e rodar um comando de lá. Após rodar o comando a dependência é varrida do sistema. Para usar essa feramenta basta passar npx \<package-name>

Os pacotes listados no dependencies do package.json, serão diferente dos presentes no node_modules. Para analisar os pacotes no node_modules podemos usar o npm list, o problçema é que isso pode retornar uma lista longa, para resolver isso talvez seja melhor listar os packages baseado em suas "profundidades", para depth 0 por exemplo teríamos:
> npm list --depth=0

No depth 0 teremos a mesma lista do dependencies, para descer um nível basta ir para depth=1 e assim por diante.

Para desinstalar um package, seja porque não precisamos mais dele ou porque ele não cumpre o que queríamos, existem dois caminhos que podemos seguir.
- npm unistall \<package-name> remove o seu conteúdo do node_modules e a entry no package.json
- npm prune remove todas as dependências do node_modules que não estejam listadas no package.json, sendo assim uma boa escolha para deletar vários pacotes de uma vez.

### Manage dependency updates in your Node.js project

Cedo ou tarde, nós iremos querer atualizar par uma nova versão da library. Existem aí algumas considerações a serem feitas:
- O tipo de update: Para entender qual foi o tipo de update usamos o semantic versioning.
- Se o projeto está configurado corretamente: Você pode configurar o projeto para realizar somente o tipo de update desejado.
- Probleams de segurança: Genrenciar o seu projeto com o tempo, involve estar a par de problemas que podem ocorrer. Problemas surgem com a detecção de vulnerabilidades e, idealmente, patches serão lançados para correção.

O padrão de semantic versioning é e deve ser seguido quando temos a versão de um pacote. Mudanças em um pacote podem introduzir risco, com semantic versioning podemos saber a natureza da atualização.
- Major Version: o primeiro número. Mudanças aqui indicam que haverão incompatibilidades no código e tempo para reescrever deverá ser gasto.
- Minor version: o número do meio. Indica a adição de features, mas ainda assim seu código deve continuar funcionando. Normalmente uma atualização segura de ser feita.
- Patch version: o número da direita. Geralmente correções como bug fixes.

Para a atualização de um pacote podemos usar
> npm update \<package-name>@\<optional-version>

O segundo argumento ali é opcional, usamos quando queremos uma versão específica do pacote, podemos simplesmente mandar um @latest.

Podemos também ditar como as atualizações serão feitas atrave´s do package.sjon:
- x.0.0 ou *1.0.0 para atualizar automaticamente até em Majors
- 0.x.0 ou ^1.0.0 para se limitar a Minors
- 0.0.x ou ~1.0.0 para patches

O comando npm outdated lista pacotes ultrapassados, ele auxilia na identificaçõa de quais pacotes já poussuem, e quais são, versões mais novas. Sendo assim é interessante rodar o npm outdated antes do npm update, lembrando que se não passarmos nem o nome do pacote, tudo será atualizado.

Sempre que instalamos ou atualizamos um pacote recebemos uma log message, nela pode conter uma informação quanto a vulnerabilidades encontradas. Com o comando npm audit podemos verificar masi a fundo o problema. O npm audit fix tenta resolver o problema atualizando os pacotes em minor versions até solucionar a questão, caso a vulnerabilidade não seja resolvida assim podemos passar um flag npm audit --force, mas cuidado, isso força Major updates que possivelmente vão quebrar o código.