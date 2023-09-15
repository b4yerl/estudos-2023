# Recursive Algorithms for Speed

Até aqui vimos entre os algoritmos de busca, Bubble sort, Selection Sort e o Insertion Sort, mas na prática nenhum desses é realmente utilizado. Nas linguagens de programação, na maioria dos casos o algoritmo de ordenação implementado é um formato do `Quicksort`, um algoritmo muito eficiente para o average scenario.

## Partitioning

Particionar é pegar aleatoriamente um valor do array, o chamado *pivot*, e garantir que todos os valores menores fiquem à sua esquerda e os maiores à direita. Esse particionamento ocorre como uma sequência de passos e ao ser finalizado deixa o pivô no local correto do array, faltando a ordenação do resto:
- Para realizar a operação precisamos de dois ponteiros, um em cada extremo do array, excluindo obviamente o pivô.
- Na sequência começamos a mover o ponteiro esquerdo até encontrarmos um valor maior ou igual ao pivô, da mesma maneira iremos mover o direito em busca de um valor menor ou igual ao pivô, lógico que ambos respeitam o limite chamado FIM DO ARRAY.
- Caso os ponteiros se cruzem na operação, pulamos pro último passo, se não vamos trocar os valores esquerdo e direito de posição e recomeçar o processo lá do passo 1.
- Por fim trocamos a posição do ponteiro esquerdo com o pivô, dessa forma todos os elementos menores que o pivô ficarão à esquerda e os maiores à direita.

```js
// Para manter consistência com o livro iremos sempre escolher o último elemento possível como pivô
function partition(arr, leftPointer, rightPointer) {
  let pivotIndex = rightPointer;
  rightPointer = pivotIndex - 1;

  let pivot = arr[pivotIndex];
  while(true) {
    while(arr[leftPointer] < pivot) {
      leftPointer++;
    }
    while(arr[rightPointer] > pivot && rightPointer >= 0) {
      rightPointer--;
    }
    if(leftPointer >= rightPointer) break;
    [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
    leftPointer++;
  }
  [arr[pivotIndex], arr[leftPointer]] = [arr[leftPointer], arr[pivotIndex]];
  return leftPointer;
}
```

Repare que estamos passando os ponteiros como parâmetros da função, isso porque o Quicksort irá operar com o particionamento em várias subseções do array, logo não é possível pré estabelecer para onde eles apontam.

## Quicksort

O algoritmo de quicksort nada mais é do que a combinação de particionamento e recursividade, isso é feito conforme os seguintes passos:
- Particionamos o array original e deixamos seu pivô na posição correta.
- Para resolver o resto vamos quebrar o problema em subarrays, ou seja, o lado esquerdo do pivô e o lado direito serão particionados.
- Esses dois passos acima são repetidos recursivamente até termos um subarray de 0 ou 1 elemento, chegamos então a condição em que nada é feito.

```js
function quicksort(arr, leftPointer, rightPointer) {
  if(rightPointer - leftPointer <= 0) return;
  
  let pivotPointer = partition(arr, leftPointer, rightPointer)
  quicksort(arr, leftPointer, pivotPointer - 1);
  quicksort(arr, pivotPointer + 1, rightPointer);
  return arr;
}
```

Com o uso de recursividade o código fica muito conciso e fácil de ser lido, básicamente começamos o código particionando todo o array, então utilizamos recursividade para ordenar pivôs à esquerda e posteriormente à direita, note que sempre que "cortamos" para a esquerda, fazemos isso novamente, após isso é que a call stack vem resolvendo e entrando na parte da direita.

## The Efficiency of Quicksort

Como o quicksort é a recursividade aplicada sobre a ideia do particionamento, primeiro vamos entendê-lo de forma isolada. O particionamento envolve basicamente dois tipos de tarefas, comparações e trocas, pode-se dizer que todos os elementos do array em algum momento serão comparados ao pivô, isso graças ao uso de dois ponteiros, logo temos **N** comparações ocorrendo. Já para as trocas, no pior dos casos serão **N/2**, mas como nem todo array demandará trocas a todo momento, geralmente ficamos no N/4. Enfim, juntando as duas partes teríamos *O(1,5N)*, como as constantes não entram no Big O, chegamos a conclusão de que o particionamento está na ordem de **O(N)**.

Agora para aplicar a parte da recursividade, devemos analisar como se comporta o tamanho dos subarrays a cada chamada, já que o particionamento deles será em **O(N)**. O que percebe-se é que esses subarrays vão diminuindo e voltando, sendo divididos """ao meio""", causando uma relação de *N log N*. Sooo its safe to say that quicksort pode ser classificado na ordem de **O(N log N)**. Por exemplo, em um array de N = 8, vamos dividí-lo ao meio, no máximo, 3 vezes (log 8 na base 2), como cada arrayzin desses passará por partition de O(N), acabamos com N log N passos, ou 24 nesse caso. Lógico que isso é uma aproximação, os array não serão divididos sempre em 2 iguais, há uma particionamento inicial a ser feito, enfim, **O(N log N)**.

## Worst-Case Scenario

Para os outros algoritmos de ordenação vistos, geralmente o melhor dos mundos é quando temos um array parcialmente ordenado para trabalhar, aqui já não é assim. O quicksort funciona melhor quando a cada particionamento, o pivô cai bem na meiuca do subarray, essa condição normalmente é atingida quando os elementos estão bem misturados no array original, já que cair nas pontas é um belo atraso de vida pro nosso querido. Ou seja, cair nas pontas é um inferno pro quicksort, já que o subarray consequentemente terá o tamanho de N - 1, não aproveitando o seu potencial de ir quebrando em etapas, conseguindo assim o log N, casos assim ocorrem em arrays já ordenados, sejam eles crescentes ou decrescentes.

Com isso podemos ver que os subarrays terão o comportamento de N - 1; N - 2; N - 3; e assim port diante, no fim das contas colocando-o em **O(N^2)** no pior dos casos.

Como a maioria das linguagens que implementam um método de `sort()` em algum lugar, usam o quicksort por baixo dos panos, dificilmente será necessário implemntá-lo do 0, mas a base, a ideia dele é importante para outro algoritmo útil.

## Quickselect

Buscas em array requerem um array ordenado e por mais eficiente que o quicksort seja, quando queremos só encontrar o quinto menor valor ou encontrar a mediana do array, ainda é um O(N log N) a mais na maioria dos casos (porque pode vir um O(N^2) bolado). O quickselect é um híbrido de quicksort com busca binária, concebido para solucionar esse tipo de situação. Como já vimos ao final de cada particionamento o pivô termina no local correto do array.

O que é feito basicamente é o mesmo processo do quicksort, a diferença é que, por exemplo para encontrar a mediana de um array, a depender de onde o nosso pivô terminar ao final do primeiro particionamento, poderemos ignorar completamente um dos dois lados e seguir ordenando o outro. Esse processo recursivo continua até encontrarmos o valor no meio do array inicial.

Por utilizar apenas um dos subarrays sempre, acaba que o Quickselect consegue ter uma complexidade de tempo na ordem de **O(N)**, executando em média *2N* passos para concluir a operação.

```js
function quickselect(arr, median, leftPointer, rightPointer) {
  if(rightPointer - leftPointer <= 0) return;
  
  let pivotPointer = partition(arr, leftPointer, rightPointer);

  if(pivotPointer < median) quickselect(arr, median, pivotPointer + 1, rightPointer);
  if(pivotPointer > median) quickselect(arr, median, leftPointer, pivotPointer - 1);
  return arr[median];
}
```

## Exercises

#### Página 224

1. Código para o problema da maior soma de 3 valores de um array:
```js
function greatestProduct(arr) {
  arr.sort((a, b) => a >= b ? 1 : -1);
  let tail = arr.length - 1;
  return arr[tail] * arr[tail - 1] * arr[tail - 2];
}
```

2. Código para o problema da validação de array sequencial:
```js
function isValid(arr) {
  arr.sort((a, b) => a >= b ? 1 : -1);
  for(let i = 0; i < arr.length - 2; i++) {
    if(arr[i] + 1 != arr[i + 1]) return false;
  }
  return true;
}
```

3. Código para as três implementações de busca do maior valor em um array - O(N^2), O(N log N) e O(N):
```js
function partition(arr, leftPointer, rightPointer) {
  let pivotPointer = rightPointer;
  let pivot = arr[pivotPointer];
  rightPointer = pivotPointer - 1;

  while(true) {
    while (arr[leftPointer] < pivot) leftPointer++;
    while(arr[rightPointer] > pivot && rightPointer >= 0) rightPointer--;
    if(leftPointer >= rightPointer) break;
    [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
  }

  [arr[leftPointer], arr[pivotPointer]] = [arr[pivotPointer], arr[leftPointer]];
  return leftPointer;
}

function greatestValueSquaredN(arr) {
  let isGreatestValue = false
  for(let i = 0; i < arr.length; i++) {
    isGreatestNumber = true
    for(let j = i; j < arr.length; j++) {
      if(arr[i] < arr[j]) isGreatestNumber = false;
    }
    if(isGreatestNumber) return arr[i];
  }
}

function quicksort(arr, leftPointer, rightPointer) {
  if(rightPointer - leftPointer <= 0) return;
  let pivotPointer = partition(arr, leftPointer, rightPointer);
  quicksort(arr, pivotPointer + 1, rightPointer);
  quicksort(arr, leftPointer, pivotPointer - 1);
  return arr;
}

function greatestValueNLogN(arr) {
  arr = quicksort(arr, 0, arr.length - 1);
  return arr[arr.length - 1];
}

function quickselect(arr, target, leftPointer, rightPointer) {
  if(rightPointer - leftPointer <= 0) return;
  let pivotPointer = partition(arr, leftPointer, rightPointer);
  if(pivotPointer < target) quickselect(arr, target, pivotPointer + 1, rightPointer);
  if(pivotPointer > target) quickselect(arr, target, leftPointer, pivotPointer - 1);
  return arr[target];
}

function greatestValueN(arr) {
  return quickselect(arr, arr.length - 1, 0, arr.length - 1);
}

function greatestValueNLinearSearch(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) max = arr[i]
  }
  return max;
}
```