# A Trip to Objectville: Classes and Objects

#### Quick Note

Nesse capítulo a história inicial deixa claro algumas das vantagens da POO, como por exemplo a facilidade na manutenção e evolução do código a medida que a especificação do programa é alterada, graças a pilares como herança e polimorfismo. Essa maleabilidade das classes permite que código testado e entrege não precise ser alterado a cada nova demanda, facilitando a atividade.

Outro ponto interessante notado foi a forma como uma classe é vista na idealização do programa, como um key player no ambiente abstraído.

## Designing Classes

Ao conceituarmos uma classe devemos basicamente pensar em dois importantes pontos sobre os objetos que serão criado: o que eles sabem (características) e o que eles fazem (comportamentos). A partir dessas perguntas queremos obter as variáveis de instância de uma classe e seus métodos.

## Get Out of Main

Para fins de teste das classes que veremos aqui é ok usar o main() na criação dos objetos, mas em uma aplicação real o ideal é a interação entre as classes, mantendo ao main() a função de disparar e controlar o uso do da aplicação.

## Java takes out the garbage

Cada vez que um novo objeto é criado no Java, ele vai para uma área da memória, o *Heap*. Todos os objetos vão pro heap, no caso do java "*garbage-collectible heap*".

Quando objetos são criados, memória é alocada pela JVM a medida que é necessário, quando um objeto fica sem uso no heap, a própria JVM reclama esse espaço através do seu **Garbage Collector**, jogando fora estes objetos inúteis e liberando o espaço. Por enquanto apenas essa visão básica do garbage collector é o suficiente.

## There are no dumb questions

No java não temos a ideia de variáveis globais, mas assim como o `Math.random()` ou uma das constantes disponíveis é possível utilizar os modificadores de acesso para criar algo parecido com métodos e constantes globais. Um método com `public static` pode ser invocado por toda a aplicação, assim como uma constante definida por `public static final`.

Podemos então compreender que uma aplicação Java, na verdade é um punhado de classes, sendo que uma delas deve conter o método main(). Agora para não entregar 1000 classes separadas, podemos simplesmente empacotar isso em um Java Archive (.jar) e através de um manifest indicar em qual das classes está o métoo main().

## Be the compiler

O código A simplesmente saiu alterando atributos de um objeto que nem foi instanciado ainda, o código poderia ser resolvido com um simples:
```java
StreamingSong song = new StreamingSong();
```

O código B instancia tudo legal, mas tenta chamar um método inexestente na classe, podemos resolver isso acrescentando o método:
```java
public void play() {
  System.out.println("Playing episode...");
}
```

## Who am I?

Abaixo apenas as respostas:
- object
- class
- method
- object/class
- instance variable
- object/class
- instance variable/method
- object
- constructor
- object
- instance variable