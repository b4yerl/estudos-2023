# Speeding Up Your Code With Big O

Usando Big O podemos agora observar o nosso próprio código, entender a sua eficiência e saber se temos um algoritmo eficiente ou não. A partir daí podemos pensar se tem uma forma melhor de executar determinada tarefa.

## Bubble Sort

Vamos entrar agora nos algoritmos de ordenação. Começaremos por algoritmos mais simples como o Bubble Sort.

O Bubble Sort funciona da seguinte maneira: A cada nova iteração pelo código pegamos dois elementos vizinhos e comparamos seus valores para checar a necessidade da mudança de posição. Ao final de um "run" pelo nosso array teremos a certeza que o maior elemento foi enviado à ultima posição, daí vem o nome bolha, os elementos maiores flutuam a cada repetição OOOOOHHHHHHHHH.

Sabendo disso a cada repetição diminuímos em 1 a quantidade de comparações necessárias. Quando não realizamos nenhuma troca durante o laço de repetição sabemos que o array foi ordenado e podemos então retornar.

Abaixo eu traduzi a implementação desse algoritmo para Javascript:

```js
function bubbleSort(arr) {
  let unsortedUntil = arr.length - 1;
  let sorted = false;

  while(!sorted) {
    sorted = true;

    for(let i = 0; i < unsortedUntil; i++) {
      if(arr[i] > arr[i + 1]) {
        [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
        sorted = false;
      }
    }
    unsortedUntil--;
  }
  return arr;
}
```

Agora vamos analisar a eficiência do Bubble Sort. Para isso vamos considerar o pior caso aqui, que seria um array já ordenada, só que em ordem descendente, ou seja, inverso ao que queremos. O ponto aqui é que existem basicamente 2 tasks principais nessa ordenação: as comparações e as trocas de posição.

Trazendo isso para um número absoluto, em um Array de 5 elementos teríamos 4 + 3 + 2 + 1 comparações nas repetiçõese igualmente 4 + 3 + 2 + 1 trocas, totalizando 20 passos, aumentando para 10 elementos isso iria para 90 passos, com 20 teríamos 380. Note um comportamento expnencial muito próximo de uma questão quadrática.

Devido a isso tratamos a eficiência do Bubble Sort como sendo O(N^2). Um algoritmo que cresce exponencialmente a medida que temos mais dados, isso o torna muito pouco eficiente. O(N^2) também é apontado como "quadratic time".

## A quadratic problem

Outro problema clássico em qu encontramos um time complexity de O(N^2) é quando aninhamos for loops. Nem sempre isso é sinal de que o código realmente tem O(N^2), mas quando temos 2 loops no qual para cada iteração do outer loop, temos N iterações do inner loop. Aí pode soar o alarme do O(N^2) e tentar procurar uma solução mais eficiente, claro, nem sempre isso será possível, mas vale tentar.

Vamos simular aqui um código com O(N^2), faremos uma função que busca se existem números duplicados em um array.

```js
function hasDuplicateValues(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(i !== j && arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

## A linear solution

Podemos resolver o problema acima de forma linear, como esse código é um pouquinho mais diferentão, então vou botar ele aqui primeiro e explico abaixo:

```js
function hasDuplicateValues(arr) {
  let tracker = []
  for(let i = 0; i < arr.length; i++) {
    if(tracker[arr[i]]) return true;
    tracker[arr[i]] = 1;
  }
  return false;
}
```

Bora lá, com essa redução que fizemos, agora no máximo percorremos nosso array uma vez, ou seja, nossa função faz a mesma coisa, mas com O(N).

Basicamente "tracker" é um array vazio que vai servir para manter um histórico dos números já vistos. A cada nova iteração nós checamos se não há um falsy value na posição arr[i] do nosso tracker. Caso haja algum valor lá, sabemos que aquele número já foi visto e retornamos true, caso o código siga, nós registramos um valor na posição arr[i] do tracker.

Usando o Big O para avaliar a eficiência do código, conseguimos aumentar drasticamente a velocidade dessa função. Note que existe um trade off aqui, para conseguirmos esse boost de velocidade tivemos que aumentar o gasto de memória, mas isto será visto mais pra frente.

## Exercises

#### Páginas 60 e 61

1. 7, 10000, 2000, 11, 4000000
2. 256 ** 0.5 = x; x = 16
3. Como para cada iVal será feita uma comparação com o produto junto a jVal, temos O(N^2).
4. A versão a seguir itera por todo o array apenas 1 vez e com 1 comparação a cada repetição, logo O(N):

 ```js
function greatestNumber(arr) {
  let greatest = arr[0];
  for(let num of arr) {
    if(num > greatest) greatest = num; 
  }
  return greatest;
}
```
