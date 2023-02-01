# Recursively Recurse With Recursion

## Recursion in the Eyes of The Computer

O computador interpreta a recursividade de maneira diferente a que nós enxergamos, já que teoricamente não deveria ser tão simples assim chamar uma função de dentro da outra. Como o computador sabe que deve aguardar a recursividade chegar ao seu base case, como a função para tudo para esperar um valor que será retornado de outra? A reposta está no uso de uma estrutura de dados abstrata, a stack, mais precisamente chamada de call stack.

Considerando apenas a recursividade, mas sabendo que a call stack também atua fora, o uso da call stack faz-se da seguinte maneira: Quando a função chega no momento em que ela chama a si própria, o computador tem qua armazenar em uma pilha as informações da função atual, como valores, linha em que parou, etc. Com isso ela passa a próxima e por aí vai, até que se atinja a condição para parar a recursividade, a partir daí as coisas são concluídas em LIFO, caracterizando o uso da Stack.

No caso de não apresentarmos uma condição para quebrar esse loop, o programa continuará empilhando chamadas na stack, repetidamente, até que seja atingido o limite da capacidade de memória de curto prazo, assim o computador corta a execução e temos o famoso Stack Overflow.

## Filesystem Traversal

A recursividade brilha mesmo não onde a gente poderia usar loops, mas sim em situações a primeira vista impossíveis de se resolver. Imagine por exemplo um problema em que devemos mergulhar por múltiplas camadas sem que saibamos previamente onde é o final. Tem um algoritmo assim bem [aqui](../eloquent-javascript-haverbeke/exercises/3/recursion.js), ele basicmente decompões um dado número em somas de 5 e multiplicações por 3. Outro exemplo seria um problema em que fosse preciso loggar todos os subdiretórios existentes N camadas abaixo de um diretório dado, esse é um exemplo no qual a call stack aliada a recusividade brilham como ninguém.

## Exercises

#### Páginas 159 e 200

1. Quando low for maior que high a recursividade cessa.
2. Teríamos um Stack Overflow, pois a condição de parada nunca seria atingida
3. low == high;
4. Implementando em TS:
```js
function printNumbers(arr: Array<number | number[]>): void {
  arr.forEach(item => {
    if(typeof item === 'number') console.log(item);
    else printNumbers(item);
  })
}
```
