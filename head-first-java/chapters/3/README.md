# Know Your Variables: Primitives and References

## Declaring a Variable

Java se importa muito com o tipo, o compilador não vai deixar passar coisas como tentar botar uma referência a um elefante dentro da variável de um rato. Para que haja esse type safety portanto, é mandatório declarar o tipo da nossa variavel, este tipo podendo basicamente ser um primitivo ou uma referência a um objeto.

Tipos primitivos suportam valores elementais como inteiros, booleanos e floats. Já as referências apontam para objetos.

Interessante lembrar aqui sobre o uso do `l` e do `f` na declaração de longs e floats, isso ocorre para que o compilador não os confunda com tipos similares como ints e doubles.

Váriaveis de tamanho menor não comportam valores de maior range, isso é um mecanismo de proteção do compilador a fim de garantir a integridade do código, agora o contrário não tem problema algum, logo atribuir um byte a uma variável int é completamente aceito.

## Controlling your Dog Object

Imagina um cachorro que carregue o método latir(), uma referência a um objeto nada mais é do que um controle remoto que, com ele, podemos enviar comandos e controlar o cachorro a distância, mandando ele latir() por exemplo xD.

Não existem variáveis que armazenam objetos, nestes casos o que temos guardados são as referências, os endereços destes objetos, ou melhor, um espaço para guardar endereços de um tipo de objeto.

O dot operator `objeto.metodo` pode ser entendido nessa ideia de referências, basicamente o que estamos dizendo é "vai lá nesse endereço e invoca esse método".
```java
public class Variables {
  public static void main(String[] args) {
    byte x = 5;
    // A variável x está realmente armazenando o valor primitivo byte, no caso 00000101.

    Dog rex = new Dog("Rex");
    // Já aqui estamos instanciando um objeto do tipo Dog lá no heap.
    // A variável rex guarda o endereço, o controle remoto que aponta pro objeto em memória.

    System.out.println(rex.bark());
  }
}
```

Para nós não interessa como a JVM implementa essas referência e sim ter como chegar lá.

O processo então ocorre em 3 etapas, primeiro declaramos uma variável e seu tipo, indicando para a JVM que deve alocar espaço para uma referência a um objeto do tipo especificado. Na sequência instanciamos um novo objeto na memória que enfim tem, através do sinal de atribuição, sua referência armazenada na variável. Note que uma vez que esta variável mude a referência que ea guarda ou torne-se nula, não é mais possível acessar aquele objeto, automaticamente o mesmo torna-se disponível ao Garbage Collector.

## An array is like a tray of cups

Um array você já sabe o que é, mas enfim, podemos ter arrays de tipos primitivos como inteiros, nestes em cada espaço de memória disponível vai o valor inteiro. Agora, para arrays de objetos, o que temos é uma sequencia de referências armazenadas.

Só que independentemente de ser um array que armazena valores primitivos ou referências, o próprio array é um objeto, logo o que temos acesso na verdade é ao endereço do array xD.
```java
Dog[] pets = new Dog[3];
// A variável pets guarda a referência a um array de Dog

pets[0] = new Dog("Rex");
pets[1] = new Dog("Scooby");
pets[2] = pets[0];
// Lá nesse array temos outras 3 referências que apontam para 2 objetos Dog na memória.
```

## Be the Compiler

Logo de cara o código apresentado tenta acessar uma variável nula e alterar suas propriedades, faltou aqui instanciar os objetos `myBooks[0] = new Books()` tipo ssim.

A forma como o incremento foi posicionado dentro do while fará com que hja uma tentativa de acessar um index além dos limites do array, simplesmente jogar esse `z = z + 1` pro final já resolve.

## A Heap O' Trouble

- hq[0] -> null
- hq[1] -> 1
- hq[2] -> null
- hq[3] -> 2
- hq[4] -> 0
- 