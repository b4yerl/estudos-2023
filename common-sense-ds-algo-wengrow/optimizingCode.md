# Optimizing Code With and Without Big O

Apesar de ser uma ferramenta importante, o Big O não é a única coisa a se levar em consideração. Algumas vezes podemos ter dois algortimos com a mesma eficiência em termos de O, mas ainda assim, um ser mais rápido que o outro. Nesse cápitulo vamos observar isso.

## Selection Sort

Anteriormente vimos o Bubble sort, então agora temos nosso segundo algoritmo de ordenação do livro. O Selection Sort funciona da seguinte maneira: 
- Começamos com uma iteração por todo o array, sempre inciamos o loop tomando o primeiro elemento como o menor encontrado até agora.
- A partir daí começamos um segundo laço de repetição que servirá para comparar o menor valor encontrado com o valor em j.
- Ao final passamos o menor valor encontrado pro lugar do valor presente em i e assim seguimos.

Para ficar mais clara a explicação, até porque eu não soube explicar com as melhores palavras do mundo, segue o código em JS como sempre:
```js
function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowestValueIndex = i;

    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[lowestValueIndex]) {
        lowestValueIndex = j;
      }
    }

    if(lowestValueIndex !== i) {
      [ arr[i], arr[lowestValueIndex] ] = [ arr[lowestValueIndex], arr[i] ];
    }
  }
  return arr;
}
```

## The Efficiency of Selection Sort

Se analisarmos quantos passos levam a medida que crescemos nossa base de dados, veremos que o Selection Sorte tem a tendência de ser quase metade do Bubble Sort. Intuitivamente diríamos então que Selection Sorte tem O(N^2/2), mas não, na realidade mesmo sendo em média 2 vezes mais rápido que Bubble Sort, o Slection Sort também possui O(N^2).

Isso ocorre porque a notação Big O ignora constantes. Ou seja, números regulares que não são encaixados como expoentes são cortados da notação, logo N + 5, N + 50 e N + 500, são tudo O(N), da mesma forma que 10N, 100N ou 1000N. Isso naturalmente nos leva ao próximo tópico, a notação Big O se importa em elencar categorias de velocidade.

## The Big O Categories

A analogia feita no livro é comparar as categorias do Big O a tipos de construções. Por exemplo, podemos enxergar O(N) como uma casa em que vive uma família e O(N^2) como um arranha-céu. Não importa se a casa tem 2 ou 3 andares, nem se o arranha-céu tem 100, são 2 construções completamente diferentes. Lembremos que o cerne do Big O está em analisar o longo prazo, em ver como a complexidade do algortitmo se comporta a medida que a base de dados cresce.

Com isso podemos perceber que as 4 categorias que vimos até então: O(1), O(logN), O(N) e O(N^2) contam histórias completamente diferentes quando aumentamos radicalmente sua base de dados. Logo o Big O consegue nos mostrar claramente como algoritmos tão diferentes podem se encaixar nas categorias, mas dentro de uma mesma categoria é necessária uma análise mais profunda.

## Significant Steps

No primeiro capítulo vimos 2 algoritmos para imprimir números pares no console, eu acho que eu não trouxe aqui, mas a ideia era basicamente mostrar como algoritmos que fazem a mesma coisa podem ter velocidades diferentes. O primeiro checava "i % 2 === 0" para saber se era par ou não, enquanto o segundo começava por 2 e incrementava de 2 em 2. Sendo assim o segundo algoritmo tinha o dobro da velocidade.

Sbemos agora que apesar disso ambos cairiam na categoria O(N) já que as constantes são eliminadas, mas como saber quais são os passos importantes em um algoritmo desses? Simples, todos os passos são... Até então temos escolhido aqueeles que realmente impactam a magnitude da velocidade, como um loop dentro de outro por exemplo, porque no fim das contas as constantes são eliminadas, por exemplo o algoritmo mencionado agora foi:
```js
function printEven(upperLimit) {
  for(let n = 0; n < upperLimit; n++) {
    if(n % 2 === 0) console.log(n);
  }
}
```

Se analisarmos realmente cada passo dado no algoritmo acima teremos:
- N repetições no for
- N checagens no if
- N/2 console.log()

Ou seja, somando tudo temos no total 2.5N passos para concluir a função, mas como as constantes são cortadas, no fim temos O(N), por isso repito, analisamos aquilo que impacta realmente em como o programa se comporta a medida que os dados crescem.

## Exercises

#### Páginas 76 e 77

1. Um algoritmo que leva 4n + 16 passos tem O(N), pois para o Big O não interessam os números regulares, apenas os expoentes que afetem a magnitude no longo prazo.
2. Da mesma forma, 2N^2 na verdade é representado como O(N^2) 
3. Apesar de podermos descrever o algoritmo apresentado como levando 2N steps já que ocorrem 2 loops separados, para a análise em termos de Big O temos O(N).
4. Novamente, 1 loop com 3 ações internas, temos aqui algo como 3N, cortando o número regular ficamos com O(N).
5. Como dentro de um loop verificamos se um número é par antes de entrar em um loop interno, temos um total de N^2/2 steps no aloritmo, ficamos então com O(N^2)
