# Learning to Write in Recursive

## Recursive Category: Repeatedly Execute

Talvez seja mais fácil de aprendermos a escrever códigoscom rcursividade se nós dividirmos as situações nas quais a recursividade nos ajudaria em categorias. Fazendo isso temos então a primeira das categorias, recursividade aplicada a problemas que executam uma mesma ação de forma repetida. Podemos enxergar esse padrão em problemas como fazer um countdown partindo de um determinado número, loggar todos os subdiretórios de uma pasta, etc. 

Uma coisa que podemos fazer para aumentar ainda mais nossas possibilidades é passar um segundo parâmetro à nossa função, um parâmetro que muitas vezes será inicializado inclusive com um valor padrão e que sirva de controle para as operaçãoes e para o fluxo do nosso código.

## Recursive Category: Calculations

Existem muitas funbções que executam calcúlos diferentes para resolver problemas diferentes. No [capítulo anterior](./recursion.md) vimos que uma das áreas que a recursividade brilha é quando temos que resolver um problema que virá com uma profundidade variável da qual não temos controle. A segunda dessas áreas é a habilidade de realizar cálculos baseado em um subproblema.

Temos duas maneiras de encarar a resolução de uma conta: top-bottom ou bottom-up. O bottom-up é uma maneira de pensar semlhante ao que podemos fazer com laços de repetição, por exemplo, traçando um pensamento bottom-up com recursividade teríamos:
```js
function factorial(n, i = 1, product = 1) {
  if(i > n) return product;
  return factorial(n, i + 1, product * i);
}
```

Repare que aí temos 3 parâmetros, 2 deles inicializados com default values, nossa função não é elegante e seria muito mais fácil de ser entendida se tivéssemos utilizado um for clássico. A força da recursividade está mesmo é no top-down. O nosso exemplo anterior de fatorial faz isso. Ele parte do ponto mais alto do problema e sem se preocupar muito em como tudo vai acabar se desenrolando, os problemas vão sendo empilhados até que tudo se desembarace.

Podemos separar o pensamento top-down em 3 etapas:
- Imagine que a função que estamos escrevendo já tenha sido implementada por alguém, basta chamar e ela vai funcionar.
- Identifique o subproblema do seu problema
- Veja o que acontece quando você chama a função de dentro do subproblema e parta disso.

### Array Sum

Vamos trazer aqui um problema para entender melhor essa questão. Eu vou tentar escrever o que foi dito lá porque é uma bela viagem. Vamos realizar a soma de um array, por exemplo [1,2,3,4,5]. Sabemos que a soma dos elementos desse array vai resultar em 15. Bom, primeiro passo é imaginar que isso aí já foi escrito por alguém e que partindo do primeiro elemento, o 1, eu posso utilizar ela que vai funcionar. O nosso subproblema então seria resolver a soma de [2,3,4,5] para que tenhamos tudo feito. Sabemos que a soma de 2,3,4 e 5 é 14, faltando apenas o 1 para fechar nosso 15. Beleza se a gente não soubesse os números ainda ia funcionar:
> arr[1] + arr[2] + arr[3] + arr[4] = total - arr[0]

Como já temos a função pronta de acordo com o passo 1, vamos aplicar o 3 e chamar ela:
> arr[0] + sum(RESTO);

E por mais ridículo que pareça, basta adicionar o base case para cortar o loop e nossa função está pronta...
```js
function arraySum(arr) {
  if(arr.length === 1) return arr[0];
  return arr[0] + sum(arr.slice(1, Number.MAX_SAFE_INTEGER));
}
```

No livro também é apresentado um algoritmo para inverter uma string. A lógica é a mesma com a diferença de o retorno primeiro chama a função e depois concatena a letra atual.

## The Staircase Problem

O problema a ser resolvido é o seguinte, imagine que dada uma escada de N degraus, temos que calcular quantas maneiras diferentes existem de subirmos esses degraus, podendo subir de uma vez 1, 2 ou 3 degraus. Se fossemos contar possibilidade a possibilidade, isso rapidamente iria sair de controle. Logo devemos tomar um caminho com recursividade para abstrair o problema.

Imagine por exemplo uma escada de 11 degraus, entenda que nosso subproblema nesse caso seria subir 10 degraus, sabendo todas as maneiras de subir 10 degraus, saberemos a resposta para o último passo, mas lembre-se que podemos também pular 2 ou 3, logo devemos considerar os caminhos para 9 e 8 degraus. Dessa maneira e por mais ridículo que pareça, temos:
```js
function staircase(steps) {
  if (steps < 0) return 0;
  if (steps <= 1) return 1;

  return staircase(steps - 1) + staircase(steps - 2) + staircase(steps + 3)
}
```
## Exercises

#### Página 181 e 182 

Questão 1)
```js
function countChars(arr) {
  if(arr.length === 1) return arr[0].length

  return arr.pop().length + countChars(arr);
}
```

Questão 2)
```js
function evenNumbers(arr) {
  if(arr.length === 0) return [];

  const element = arr.pop()
  const subArr = []

  if(element % 2 === 0) subArr.push(element);

  return new Array().concat(evenNumbers(arr), subArr)
}
```

Questão 3)
```js
function triangularNumbers(n) {
  if(n == 1) return 1;

  return n + triangularNumbers(n - 1);
}
```

Questão 4)
```js
function findX(str) {
  if(str[0] === 'x') return 0;
  
  return findX(str.slice(1)) + 1;
}
```

Questão 5)
```js
function shortestPath(n, m) {
  if(n === 1 || m === 1) return 1;

  return shortestPath(n, m - 1) + shortestPath(n - 1, m);
}
```
