# Breaking the Surface: Dive In: A Quick Dip

## Code Structure in Java

O código divide-se basicamente em um método contido em uma classe, que está contida em um arquivo.

No source file `.java` normalmente encontraremos a definição de uma única classe, esta classe é a representação de uma parte do nosso programa.

Quando executamos a JVM, ela busca a classe que indicamos no terminal, a partir daí a JVM buscará o método:
```java
public static void main (String[] args) {
  // código
}
```

É a partir deste método `main` que a aplicação será executada, logo podemos inferir que todo programa Java depende de ao menos 1 classe e 1 método main.

## While Loops

No JS podemos tranquilamente utilizar um número como condicão de um loop, isso porque todo número diferente de 0 é interpretado como `true`:
```js
let x = 3
while(x) {
  console.log(x)
  x--
}
```

No Java isso não pode ser feito, para o Java a condicional deve obrigatoriamente ser um valor booleano, logo inteiros ou qualquer outro tipo não obedecem a esta condição:
```java
int x = 3;
while(x > 0) {
  System.out.println(x);
  x--;
}
```

