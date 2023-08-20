# Gerenciamento de Dependências e Build em Java com Maven

## Introdução, definição e instalação

O Apache Maven é uma ferramenta para gerenciar build e dependências de um projeto. O Maven abstrai a complexidade por trás de problemas como a execução de testes e o build do projeto, imaginando que esse projeto terá varios packages empacontados em vários `jar`, a complexidade envolvida na execução manual dessa tarefa fica evidente.

O Maven endereça como o software foi construído e as suas dependências através do *Product Object Model*, o **POM**, facilitando a compreensão do desenvolvedor e fornecendo informações de qualidade.

## Primeiro projeto e conceitos

Pra começar vamos mandar esse lindo comando e então entraremos em detalhes:
```sh
mvn archetype:generate -DgroupId=one.digitalinnovation -DartifactId=quick-start-maven -Darchetype=maven-archetype-quickstart -DinteractiveMode=false
```

Bom esse comando vai buscar um arquétipo, no caso o declarado foi o `maven-archetype-quickstart`, um temploate já existente com uma estrutura já definida. O group id foi definido assim como o id do artefato em questão. E pessoalmente pra mim que nunca tinha usado Maven, fiquei um tempo maravilhado olhando os arquivos kkkkkkkkkkkkkkkkkkkkkk. Enfim, temos agora a separação entre `main` e `test`, além do `pom.xml`, toda a estrutura já fofinha pra começar.

No dia a dia com o Maven, temos acesso a alguns comandos práticos como: `compile`, `test`, `package` e o `clean`.

O `mvn compile` compila todas as classes do nosso projeto no diretório *target*. Com o projeto compilado o `mvn test` indica que o Maven deve buscar por todos os testes e deve executá-los, mostrando na sequência o resultado. `mvn package` cria o *jar* da aplicação lá no *target*. Por fim o `mvn clean` limpa o diretório de trablaho, o diretório *target*.

O Maven Archetype é um template que permite a pesronalização e a configuração da construção do projeto. Organização de pactoes, arquivos, componentes, tudo isso pode ser feito com os arquétipos. Se pesquisarmos por *maven archetype list* veremos as inúmeras opções disponíveis para uso, podendo assim escolher a melhor opção para cada cenário.

## POM, dependências e repositórios

O **POM** é a unidade fundamental de trabalho do Maven. Escrito em XML, o POM fica na raiz do projeto detalhando-o como um todo. O Maven sempre vai atrás do pom.xml para realizar a execução de um projeto.

No pom.xml temos coisas como o nome do projeto, as dependência, módulos, configurações de build, configurações de ambiente, etc.

O Maven trablaha com uma ideia de herança nas configurações do POM. Ou seja se indicarmos apenas as infos básicas, nosso pom.xml irá usar o Super POM para complementar o que entregamos.

Os repositórios são os locais onde podemos encontrar libs e plugins providos pelo Maven. O repositório remoto é o local central utilizado pelo Maven, configurado automaticamente pelo Super POM para utilizar o Maven Central, ou seja, a não ser que passemos uma configuração específica de repo, o Maven irá usar o Central.

O repo local é utiolizado pelo Maven para buscar os artefatos, uma estratégia de caching do Maven para evitar uma busca externa o tempo todo. Tanto em windows quanto linux, temos o repo local na pasta *.m2*.

Para configurar as dependências do projeto basta adicionar a tag `dependency` no pom.xml, especificando o `groupId`, o `artifactId` e o `version` do componente:
```xml
<dependencies>
  <dependency>
    <groupId>org.hibernate</groupId> <!-->id da organização<-->
    <artifactId>hibernate-search-orm</artifactId> <!-->nome do projeto<-->
    <version>5.11.9.Final</version> <!-->versão que será utilizada<-->
  </dependency>
</dependencies>
```

No [mvnrepository.com](https://mvnrepository.com/) encontramos a tag completa já para adicionar a dependência com um simples copy paste :D

Ao adicionar a tag e salver o arquivo, basta ir ao terminal e executar o `mvn compile` para observar o Maven Central sendo chamado e a dependência baixada para a pasta *.m2*, o repo local.

## Gerenciando Dependências

Podemos publicar componentes com o Maven, ou seja, podemos disponibilizar o código, o projeto. Para fazer isso localmente usamos o `mvn install`, nesse momento o componetne ja vai pro repositório local e passa a estar disponível localmente para que outros projetos o utilizem, bastando ser adicionado como uma nova dependência.

Agora note que teoricamente precisamos das dependências utilizadas no nosso componente, também no projeto que o usa. Esse é o conceito de dependência transitiva, o outro tipo de dependência presente no Maven além da direta.

Com isso podemos ter o problema da transitividade de dependências, ou seja, podemos acabar puxando junto com uma dependencia, algo que não é necessário para a nossa aplicação. Para resolver esse problema o Maven provê 6 escopos para limitar a transitivaidade.

O escopo **compile**, o default, está diponível em todos os 3 Classpaths (runtime, test e compile), sendo então completamente transitiva.

O **provided** indica que a dependência será fornecida em runtime por uma implementação na JDK, ou seja, ela será apenas adicionada no *test* e no *compile*. Logo essa dependência não é transitiva. Servlet API seria um exemplo para o uso do escopo **provided**, como os servers já tem a implementação pronta, não preciso dele em runtime.

O escopo **runtime** indica um dependência necessária para o tempo de execução, mas não para o compile, logo temos a inclusão nos classpaths *runtime* e *test*.

O **test** advinha só... Disponível apenas para a compilação e teste, um exemplo seria o JUnit, com isso temos uma dependência não transitiva.

O **system** é bem similar ao **provided**, mas nela é necessário apontar explicitamente o *jar* na tag `dependency`.

Por fim o escopo **import** indica apenas que estamos importando as dependências presentes no *pom* de um outro artefato. Dessa maneira podemos reutilizar o que já foi declarado em outro artefato.

Podemos acompanhar como está ficando cada Classpath do nosso artefato com o comando: `mvn dependency:build-classpath -DincludeScope=classpath_indicado`.

Outro conceito é o de dependências opcionais, isso indica que os projetos que irão reutilizar o componente não precisarão de determinadas dependências com a tag `optional` em true.

## Maven Build Lifecycle

Temos 3 ciclos de vida, cada ciclo possui fases e cada fase tem seus objetivos. O *default lifecycle* é o principal ciclo, ele é responsável por todo o processo de deploy local, sendo composto por 23 fases, ou seja, 23 comandos. O *clean lifecycle* é o ciclo intermediário, com 3 fases simples, o pre-clean, o clean e o pós-clean, como já visto antes a ideia aqui é mirar na pasta target visando uma publicação do projeto. Por fim o *site lifecycle* é o responsável pela fase final de documentação do projeto, podendo usar plugins que auxiliam na entrega com o JavaDoc e tudo o necessário já bunitin.

## Plugins

Os plugins provêm a maioria das funcionalidades do Maven, sendo a sua estrutura central, dessa maneira a arquitetura foi pensada na extensabilidade. Temos o Clean plugin, o Compile plugin, o Test plugin, etc etc.

O uso do plugin da-se da seguinte maneira: `mvn plugin-name:goal-name`. Podemos usar a goal `help` para obter mais informações sobre o plugin.
