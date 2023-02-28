# Aprendendo a Sintaxe Java

## Anatomia das Classes

Normalmente o nome da classe está de acordo com o nome do arquivo, carregando um nome claro do que aquilo se trata.

Nossa classe principal do programa vai carregar aí um método especial, o método main, no intellij temos o `psvm` como abreviação para criação desse método, que na verdade representa:
```java
public class MyFirstClass {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
    // [...]
  }
}
```

A convenção de nomentclatura é tão importante quanto o código em si, para a organização do código. Todo arquivo `.java` deve manter PascalCase, esse nome deve ser o mesmo da classe contida no arquivo. Para variáveis a convenção utilizada é o camelCase, mas note que variáveis de valor constante devem ser completamente em MAIÚSCULAS, isso vem em conjunto com a palavra reservada `final`.

À medida que o sistema cresce e novos arquivos são necessários, é interessante qu utilizaemos dos packages para a organização destes arquivos em subdiretórios.

Existe uma convenção na nomeação destes packages. Normalmente invertemos o domíonio da organização gerando um nome como: `com.bayerl.models`.

Java Beans é uma iniciativa da comunidade para convencionar uma forma de escrita universal para classe, atributos, métodos, variáveis, etc. Abaixo temos algumas dessas regras.

**Variáveis**
- Deve sempre ser escrita no singular, exceto quando for um array ou coleção.
- Mantenha uma padrão de idioma e seja claro nos nomes.

**Métodos**
- Os métodos devem ser nomeados com verbos.
- Devem seguir o camelCase.

## Tipos e variáveis

Os oito tipos de dados primitivos no Java são: int, byte, short, long, float, double, boolean e char. Esses tipos não são considerados objetos, portanto representam valores bruto, armazenados diretamente na memory stack.

Note que os tipos mais utilizados são `int` e `double`. É importante saber que se em alguma situações tentarmos utilizar `long` e `float`, será necessário encerrar os valores com respectivamente L e F.

## Métodos

Em Java não temos o conceito de métodos globais. Todos os métodos devem obrigatoriamente ser definidos dentro de uma classe.

Alguns pontos devem ser considerados na criação e concepção da estrutura de um método.
- Qual a finalidade principal do método? Um método deve representar uma úncia responsabilidade.
- Qual o seu tipo de retorno se houver algum
- Existe risco de exceção? Preveja e trate.
- Qual a visibilidade do método? (modificador de acesso)]

Para indicar a possibilidade de que uma exceção seja disparada utilizamos o `throws Exception`, ao final da declaração de parâmetros.

## Escopo

No Java o escopo de uma variável é definido no momento em que ela é declarada, fora do seu escopo ela torna-se inacessível.

## Java Docs

É interessante que documentemos nosso código e nossas classes utilizando as tags disponíveis no Java, para isso fazemos um comentário com `/**` um exemplo de documentação simples para uma classe calculadora seria:
```java
/**
 * <h1>Calculadora</h1>
 * A calculadora realiza operações matemáticas entre números inteiros
 * 
 * @author Bayerl
 * @version 1.0
 * @since 28/02/2023
 */
public class Calculadora {
  /**
   * Este método é utilizado para somar dois números inteiros
   * @param numeroUm este é o primeiro parâmetro do método
   * @param numeroDois este é o segundo parâmetro do mpetodo
   * @return int o resultado deste método é a soma entre os dois números
   */
  public int somar(int numeroUm, int numeroDois) {
    return numeroUm + numeroDois;
  }
}
```

Uma ferramenta disponível é o `javadoc`, uma API criada pela Sun para gerar uma documentação em HTML para o nosso projeto, a partir de um comando no terminal.

## Terminal e argumentos

Nem sempre teremos a IDE disponível para rodar programas, dessa maneira. Para isso utilizaremos o arquivo `.class` contendo o bytecode necessário para a JVM interpretar.

Para apenas rodar o programa apontamos para o nosso bytecode com o comando `java`. Nesse comando podemos passar os argumentos pro nosso método main, no casso aquel `String[] args`, como argumento de CLI mesmo.

Outra maneira de obter input do usuário é com o uso da classe `java.util.Scanner`. Para instanciar esse scanner como uma interface para receber inputs do usuário, passamos o `System.in` como argumento no constructor.
