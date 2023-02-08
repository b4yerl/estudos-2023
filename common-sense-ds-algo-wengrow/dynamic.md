# Dynamic Programming

## Unecessary Recursive Calls

Apesar da recursividade abrir um mundo novo de opções, ela também pode trazer um mundo novo de problemas, sendo uma das principais responsáveis por Big O absurdamente lentos como O(N!) e O(2^N). Muitas vezes dentro de uma função recursiva, acabamos chamando a nossa função mais vezes do que realmente seria necessário, por exemplo ao realizar comparações.

Uma das maneiras de resolver um problema desta natureza é armazenando o valor retornado apenas uma vez em uma variável para ser utilizado posteriormente. Uma mudança mesmo que pequena assim, pode ser a responsável por manter a velocidade no código mesmo com recursividade. Evitar chamadas desnecessárias chega a ter o impacto de reduzir um O(2^N) para O(N).

## Overlapping Subproblems

Imagine a seguinte função para clacular o enésimo valor da sequência de Fibonacci:
```js
function fibonacci(n) {
  if (n <= 1) return n;
  
  return fibonacci(n - 2) + fibonacci(n - 1);
}
```
Opa, a gente tem uma red flag aqui, em 2 momentos do nosso return chamamos a função `fibonacci`, isso nos leva a uma complexidade O(2^N), o que não é nada bom. O problema é que nessa situação não podemos simplesmente armazenar um valor em uma variável e utilizá-lo. Temos aqui um caso de overlapping subproblems. Lembrando que quando dividimos um problema em pedaços menores de um mesmo problema, temos os subproblems. Overlapping vem justamente dessa repetição que tende a ocorrer quando chamamos a mesma função dessa maneira. Felizmente existem maneiras de lidar com isso.

## Dynamic Programming through Memoization

Dynamic programming é o termo empregado à otimização de um código com overlapping subproblems. Basicamente existem duas técnicas principais para atingir essa otimização, a primeira delas é justamente a `memoization`.

Memoization trata-se de armazenar o que já foi calculado, de modo a impedir que isso seja realizado repetidas vezes. Para fazer esse armazenamento utilizamos uma hash table, dessa maneira quando a função é chamada, antes de sair se afundando em recursividade, primeiro é feito uma checagem para garantir que aquele valor ainda não foi calculado. Essa ideia só funciona se a hash table for "transmitida" pelas chamadas recursivas, precisamos então utilizar ela como um segundo argumento na função.

```js
function fibonacci(n, memo = new Map()) {
  if (n <= 1) return n;

  if(!memo.get(n)) {
    memo.set(n) = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }

  return memo.get(n)
}
``` 

Repare que o cerne da função ainda está na recursividade, mas implementando a hash table cortamos todas as chamadas desnecessárias. O impacto pode ser visto na velocidade que, antes em O(2^N), abaixou para O(N), tendo precisamente cerca de 2N steps.

## Dynamic Programming through Going Bottom-up

A outra maneira de resolver overlapping subproblems é mudando a perspectiva do problema, eliminando de vez a recursividade e partindo para outro modelo com loop. Repare que dynamic programming trata de resolver um problema e não de conservar o uso da recursividade. Isso se mostra mais como uma técnica quando a solução óbvia, ou tradicional, seria através da recursividade e não da iteração.

```js
function fibonacci(n) {
  if (n === 0) return 0;

  let a = 0;
  let b = 1;

  for(let i = 1; i < n; i++) {
    let temp = a;
    a = b;
    b = temp + a;
  }
  return b;
}
```

Quanto à escolha entre as duas opções, isso vai depender um pouco. Em uma situação na qual a recursividade se encaixe legal e a gente não queira abrir mão disso, vamos de memoization, mas note que sempre a recursividade vai ser um pouco mais lenta que o loop, além de gastar mais memória, seja pela call stack, seja pela implementação de uma hash table, logo, a não ser que recursividade se encaixe melhor, geralmente dê preferência ao uso dos laços de repetição.

## Exercises

#### Página 197

Questão 1)
```js
function addUntil100(arr) {
  const sum = arr.reduce((sum, n) => {
    if(sum + n > 100) return sum;
    return sum + n;
  }, 0)

  return sum;
}
```

Questão 2)
```js
function golomb(n, memo = new Map()) {
  if(n === 1) return 1;

  if(!memo.get(n)) {
    memo.set(n, 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo))
  }

  return memo.get(n);
}
```

Questão 3)
```js
function uniquePaths(rows, columns, memo = new Map()) {
  if(rows == 1 || columns == 1) return 1;

  if(!memo.get(String(rows) + String(columns))) {
    memo.set(String(rows) + String(columns), uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo));
  }
  
  return memo.get(String(rows) + String(columns));
}
```
