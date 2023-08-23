# Testes Unitários com JUnit

## Por que escrever testes unitários?

Testes unitários tratam da menor unidade de código possível: função, método, classes. A ideia é essa, testar a aplicação na sua menor parte, ou seja, não necessariamente estamos testando features, mas sim os componentes que levam a algum resultado para o user. Esses testes são escritos geralmente em tempo de desenvolvimento.

Os testes unitários podem nos ajudar em diversas situaçlões, podemos por exemplo usar os testes para compreender o código fonte rodando a suit de testes, observcar os comportamentos durante os testes dizem muito sobre o sistema de maneira rápida. Corrigir bugs com segurança e refatorar código sem inserir novos bugs, são também classicas situações cobertas pelos testes unitários.

Testes unitários são o inicio de uma métrica de qualidade, expandindo a cobertura de testes e assegurando que em sua menor unidade o programa funciona.

## Hello world, JUnit!

Bom aqui foi mais prático a coisa, masi basicamente vimos que com o JUnit 5, agora precisamos ir atrás da dependência JUnit Jupiter para o Maven. Tendo isso feito criamos uma classe pessoa com um método simples e criamos um teste para validar seu funcionamento:
```java
import java.time.LocalDate;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions;

public class PessoaTest {
  @Test
  void deveValidarMaiorIdade() {
    Pessoa p = new Pessoa(LocalDate.of(2007, 10, 10));

    Assertions.assertFalse(p.isMaiorDeIdade());
  }
}
```

## Aprofundando nos Recursos

O mais básico do JUnit é começar nosso baguio com `@Test`, a partir daí devemos nomear nosso teste como o que queremos testar, exemplo: *shouldReturnAgeCorrectly*.

Algo interessante de se notar é que caso não queiramos ficar chamando a classe `Assertions` o tempo todo, podemos importar estaticamente todos os seus métodos com `import static org.junit.jupiter.api.Assertions.*;`, tendo isso feito basta passar o método para fazer o teste, exemplo: `assertNotNull(minhaVariavel);`.

No JUnit temos estruturas de After e Before, eles s'ao utilizados para indicar operações que devem ocorrer sempre antes ou depois dos testes, seja uma vez para cada teste ou uma única para todos.

É possível implementar condicionais no teste usando as annotation que iniciam com `@EnabledIf` e `@DisabledIf`, dessa maneira é possível, por exemplo, habilitar um teste para que ocorra somente quando o usuário logado no sistema seja o *root*, apenas quando o OS atual seja Linux ou apenas em JRE acima da 11, sei lá, tem altas possibilidades.

Para testar o disparo de exceções podemos fazer algo da seguinte maneira:
```java
Assertions.assertThrows(IllegalArgumentException.class, () -> conta.depositar(-1));
```

Nesse exemplo é verificado se a chamada indicada no segundo argumento dispara um `IllegalArgumentException`. Seguindo a mesma ideia temos também o `Asserions.assertDoesNotThrow()`.

Com a annotation `@TestMethodOrder()` acima da classe de testes, podemos definir a ordem com o=que os testes serão executados. Passando como argumetno `MethodOrderer.OrderAnnotation.class`, habilitamos a annotation `@Order(i)` acima dos métodos como responsável pela ordenação. Outros argumentos possíveis são o `MethodOrderer.MethodName.class`, que no caso simplesmente ordena alfabeticamente, `MethodOrderer.Random.class`, que advinha só e o `MethodOrderer.DisplayName.class`, que habilita a annotation `@DisplayName()`.

## Boas Práticas

Ao escrevedr testes unitários podemos adotar algumas boas práticas, começando pela preocupação com os nomes ds testes, principalmente a padronização dos nomes e a simplicidade, e com a facilidade de leitrua do código. Deve-se procurar escrever os códigos de teste o mais cedo possível para testar as unidades de código ainda em tempo de desenvovlimento.

Entenda que testes devem ser determinísticos, ou seja, não vão variar depois de bater o green e tu não mexer em nada dele, a ideia é não inserir variáveis que alterem o estado e a confiabilidade do teste. Muito importante também usar ferramentas de cobertura de código e de automatização da execução dos testes.
