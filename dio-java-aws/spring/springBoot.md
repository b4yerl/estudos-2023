# Imersão no Spring Framework com Spring Boot

O Spring Framework é um projeto open source baseado nos padrões de projeto inversão de controle e injeção de dependência. Ele é composto por módulo a fim de reduzir a complexidade no desemvolvimento de aplicações sejam simples ou corporativas.

A Inversão de Controle trata do redirecionamento do fluxo de execução de um código, retirando parcialmente o controle sobre ele e delegando-o para um container. O principal propósito por trás é minimizar o acoplamento de código.

Os Beans são os objetos instanciados, montados e gerenciados por um container, através da inversão de controle. Os *Spring Bean Scopes* são divididos em 2 tipos: os standalone e os http. `Singleton` e `Prototype` são os escopos standalone e padrões do ecossistema Spring.

No escopo Singleton, o objeto uma vez instanciado pelo container passa a ser o mesmo usado ao longo de toda a aplicação, diferentemente do Prototype que terá uma nova instância a cada chamada.

No contexto HTTP temos os escpos de `Request` (um bean novo por request), `Session` (um bean novo a cada sessão de usuário, mantém o estado) e `Global` (um bean novo para o ciclo de vida de toda a aplicação).

## Conhecendo o Springboot

Enquanto o Spring Framewoerk é baseado na injeção de dependências, o Springboot foca na configuração automática, na produtivcidade, nos padrões de estruturação de projetos.

Avaliando que a maior parte das configuraçãoes iniciais de um projeto são sempre as mesmas, o Springboot veio pra iniciar o projeto com as configurações já definidas, fazendo isso atravé dos Starters, descritores de dependêwncia.

Os Starters mais utilizados devem ser:
- `spring-boot-starter-data-jpa`: Integração ao db via JPA (Hibernate).
- `spring-boot-starter-data-mongodb`: Integração com o MongoDB.
- `spring-boot-starter-web`: Inclusão do Tomcat para aplicações REST.
- `spring-boot-starter-web-services`: Webservices baseados na arquitetura SOAP.
- `spring-boot-starter-batch`: Implementação de JOBs de processos.
- `spring-boot-starter-test`: Disponibilização de recursos para testes unitáio com JUnit.
- `spring-boot-starter-openfeign`: Client HTTP baseado em interfaces.
- `spring-boot-starter-actuator`: Gerenciamento de monitoramento da aplicação.

Lembrando que para cada proporsta da aplicação temos um Starter que pode ser localizado e aplicado.

## Primeiros Passos

Para facilirar a vida podemos utilizar o Spring Initializr, nele e possível declarar todas as propriedades iniciais do nosso projeto Maven, declarar as dependencias que queremos adicionar, principalmente o spring-boot-starter, e gerar um novo projeto.

Com o projeto aberto podemos ver que nossa classe de *Application* recebeu um annotation `@SpringBootApplication` e uma instrução de *run* que inicilaliza o container.

Outra novidade é a presença do arquivo *application.properties*, é nele que iremos colocar questões como porta de servidor, variáveis de configuração do acesso ao banco de dados, enfim, tudo associado a configuração.

Como não iremos mais instanciar objetos com o *new*, para indicar que o mesmo deve ser utilizado e como ele deve ser utilizado, iremos implementar a interface `CommandLineRunner` e seru método `run`, junto a annotation `@Component` eles irão indicar quais classes precisamos que hja uma instância e o que fazer com isso. Lembre-se de também incluir a anotação `@Autowired` ao atributo do CommandLineRunner com o objeto, com isso permitimos a injeção de dependência automatica e evitamos tomar um NPE.

## Beans vs Components

Ambas as annotations `@Bean` e `@Component`, indicam objetos a serem instanciados e gerenciados pelo container da aplicação. O `@Component` indica componentes que serão escaneados na palicação, logo quando temos acesso ao código fonte, devemos utilizar esta annotation. A partir deste momento podemos injetar este componente pelo nosso sistema, para isso precisamos apenas de uma implementação de `CommandLineRunner` ou de um `@Bean` desta interaface com o aspecto de *run*.

Para exemplificar melhor, imagine que estejamos usando o *Gson* para llidar com JSON na aplicação. Para utilizar de forma correta o nosso container não podemos instanciar o *Gson* com o `new Gson()`. Como nosso querido não tem a anotação de componente, justamente por ser código externo, o `@Autowired` requer que um `@Bean` seja declarado para funcionar. Isso pode ser feito direto na classe principal, mas para deixá-la mais limpa é legal isolarmos a construção dos Beans em uma classe única:
```java
@Configuration
public class BeansFactory {
  @Bean
  public Gson gson() {
    return new Gson();
  }
}
```

## Scopes - Singleton ou Prototype

A pergunta de ouro para definir entre o escopo *Singleton* e o *Prototype* é: quantas instâncias serão necessárias? Isso porque por padrão nossos beans são *Singleton*, ou seja temos apenas um objeto sendo gerido por toda a aplicação. O problema é que em muitos cenários podemos ter a necessidade de instanciar um novo objeto a cada menção ao nosso componente, isso pode ser resolvido adicionando a annotation `@Scope("prototype")`.

## Properties Value

Um dos grandes recursos do Spring, o *application.properties*, nos permite interagir com o nosso programa de algumas maneiras, uma delas é passando valores através da annotation `@Value`.
```java
public class MyBeautifulRunner implements CommandLineRunner {
  @Value("${email:default@fallback}")
  private String email;

  @Override
  public void run(String... args) throws Exception {
    System.out.println("Email: " + email);
  }
}
```

Usando isso podemos mover a inicialização de valores padrão para o *application.properties* definindo inclusive um fallback, caso a propriedade apontado não seja encontrada no arquivo.

## Configuration Properties

Também fortemente associado ao *application.properties*,  o `@ConfigurationProperties(prefix)` carrega a ideia de se ter os alores dos Beans vindos direto do *application.properties*. Desssa maneira podemos dar valores a propriedades de um objeto lá no nosso super arquivo.

## Conceitos de ORM e JPA

Object-Relational Mapping (ORM) é um recurso para aproximar a orientação a objeto a contextos de bancos de dados relacionais. O ORM é realizado através do mapeamento de um objeto para uma tabela através de uma lib ou de um framework.

Java Persistence API (JPA) é uma especificação baseada em interfaces, que ao ser implementada permite operações de persistência de objetos Java, sendo a principal implementação o Hibernate.

A seguir um exemplo básicão de mapeamento:
```java
@Entity
@Table(name="usuarios")
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  
  @Column(length = 50,  nullable = false)
  private String name;

  @Column(nullable = false)
  private String password;
}
```

## Spring Data JPA

O Spring Data JPA adiciona uma camada sobre o JPA, especialmente o mapeamento e a persistência baseada em interfaces e anotações. Para criar nosso projeto com o Starter para o Spring Data JPA, precisamos basicamente de 2 dependencias no initializr: o Spring Data JPA e o driver do banco escolhido.

Com o Spring Data JPA, muita coisa é abstraída pára facilitar o uso do framework. Começamos então criando um model, uma entidade, isso pode ser feito seguindo o modelo já apresentado logo acima. Na sequência é necessário que criemos uma interface de repositório, esta interface irá herdar `JpaRepository<TipoEntidade, TipoId>` e é através dela que as operações de manipulação e persitência dos dados serão realizadas.

## JPA Repository

O *Repository* é um padrão de projeto similar ao *DAO*(Data Access Object) no sentido de que seu objetivo é abstrair o acesso a dados de forma genérica a partir do seu modelo. O Spring Data JPA facilita a implementação deste pattern, utilizando-se apena de uma interface o Spring irá gerar diniamicamente a implementação dos métodos de acesso a dados.

`save`, `findById`, `existsById`, `findAll`, `delete` e `count` são alguns dos principais métodos disponibilizados pelo framework na interface **JpaRepository**. Mesmo tendo os métodos padrão, podemos customizar métodos dentro da nossa interface, seguinbdo um guideline do Spring, para que o framework interprte o que deve ser feito e gere a query.

Outra possibilidade é definir queries sutomizadas na mão como feito abaixo:
```java
public interface UserRepository extends JpaReporisoty<User, Long> {
  // Query Override
  @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
  List<User> filtrarPorNomeContendo(@Param("name") String name);

  // Query Method
  User findByUsername(String username);
}
```
