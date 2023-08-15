# Ganhando Produtividade com Stream API

## Contextualizando Stream API

Apesar de ser uma linguagem baseada na OOP, o Java oferece suporte à programação funcional desde o Java 8 com a Stream API. Temos na Stream API uma forma de manipular coleções de maneira declarativa ao invés de imperativa.

Para o uso com o stream, temos as **Lambda Exoressions**, estas nos permitem representar interfaces funcionais de forma mais concisa. Dessa maneira podemos perceber o papel crucial as interfaces funcionais na programação funcional em Java, já que estas são a base das expressões lambda.

As expressões lambda lembram as arrow functions do JS, ou seja, métodos sem declaração (modificador de acesso, tipo de retorno e nome).
```java
// Para cada item, retorne o produto entre seu preço e sua quantidade
// Veja como funciona igual o Array.map no JS que também aceita uma arrow function.
return estoque.stream()
      .mapToDouble(item -> item.getPreco() * item.getQuantidade)
      .sum();
```

Outra maneira de aplicar a programação funcional no Java é através dos **Method Reference**, um recurso que permite fazer referência a um método ao a um construtor de uma classe, indicando assim que eçe deve ser usado no ponto específico do código de maneira mais concisa.

```java
// Usando Lambda Expressions
pessoas.sort((p1, p2) -> Double.compare(p1.getAltura, p2.getAltura));

// Usando Method Reference
pessoas.sort(Comparator.comparingDouble(Pessoa::getAltura));
```

## Stream API na Prática

Os usos e explicações das interfaces funcionais estão presentes nos códigos. Abaixo o link para cada um dos exemplos:
- [Consumer\<T>](./src/stream/ConsumerExample.java)
- [Supplier\<T>](./src/stream/SupplierExample.java)
- [Function\<T,R>](./src/stream/FunctionExample.java)
- [BinaryOperator\<T>](./src/stream/BinaryOperatorExample.java)
