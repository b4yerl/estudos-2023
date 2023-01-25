# Optimizing for Optimistic Scenarios

Até entçao temos focado nossas energias em analisar sempre o pior cenário possível, isso porque caso estejamos preparados para o pior, vai estar tudo ok. Nesse capítulo vamos aprender que também pode ser útil estar pronto para outros cenários que possamo ocorrer.

## Insertion Sort

Vamos pro nosso terceiro algoritmo de ordenação, o Insertion Sort. Esse algoritmo funciona da seguinte forma: Nós iniciamos um laço de repetição a partir do index 1, "isolamos" o valor presente ali em uma variável temporária e iniciamos as comparações com valores a esquerda. Quando encontramos valores maiores que o da variável temporária, nós os empurramos para a direita e seguimos comparando até não haver mais nada do lado esquerdo ou encontrarmos um valor maior ou igual:
```js
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let position = i - 1;

    while(position >= 0) {
      if(temp < arr[position]) {
        arr[position + 1] = arr[position];
        position--;
      }
      else {
        break;
      }
    }

    arr[position + 1] = temp;
  }
  return arr;
}
```

## The Efficiency of Insertion Sort

Bom, como já vimos que os passos significantes são todos então vamos olhar para tudo: aqui temos basicamente 4 momentos, comparações, shifts, loops e inserções, vamos então olhar para o pior caso, um array em ordem descrescente:
- Todas as comparações possíveis serão feitas, em um array [5, 4, 3, 2, 1] isso seriam 10 comparações, em um de tamanho 10 teríamos 45, pra 20, 190, podemos perceber então que esse crescimento se comporta como N^2/2.
- Da mesma maneira, cada vez que houvesse uma comparação teríamos um shift do valor atual para uma "casa" à direita, logo também temos aqui N^2/2.
- Agora o loop começa do index 1 e vai até o final, portanto é um N - 1.
- Assim como a inserção que aconteceria uma vez por loop, também em N - 1

Somando esses 4 temos (N ^ 2 + N - 2), cortando o número regular ficamos com (N^2+N). Aqui entra mais um ponto do Big O, só nos interessamos pelo N de maior ordem, isso porque no longo prazo seu comportamento é drasticamente diferente do outro, podendo, para fins de classificação, cortar isso. Temos então que o Insertion Sort está em O(N^2).

## The Average Case

Na maioria dos casos reais, os dados não estarão completamente ordenados nem pra um lado, nem pro outro, devemos então entender que existe também uma imortância em pensar como cada algoritmo se comporta em uma situação média.

Se olharmos de forma otimista, no melhor dos mundos, um array já ordenado, temos que o Insertion Sort irá apenas iterar por cada item da lista, tendo O(N). Agora se considerarmos um caso médio, onde alguns dados serão movimentados e outros terão as comparações interrompidas pelo nosso break. Podemos inferir que no ponto médio teríamos algo como N^2 / 2 steps.

Vamos voltar um pouco pro Selection Sort que vimos [aqui](./optimizingCode.md). Nele não existe nenhum mecanismo que quebre o loop caso o valor atual já esteja na posição correta, todas as comparações sempre serão feitas, logo considerando apenas os passos nos mantemos com aquele N^2/2 que havíamos visto antes em qualquer que seja a situação.

Ou seja, caso haja motivo para acreditar que os dados tendem a estar mais organizados, Insertion Sort tem uma vantagem, caso a tendencia sejam dados mais desordenados, ponto pra Selection Sort, em um caso médio ambos terão o mesmo desempenho.

## Practical Example

Vamos entender melhor como algoritmos que compartilhem a mesma eficiência no pior cenário, podem ainda se comportar de maneira diferente frente a um caso médio. Considere um programa que encontra a interseção de dois arrays:
```js
function intersection(a1, a2) {
  let result = []
  for(let i = 0; i < a1.length; i++) {
    for(let j = 0; j < a2.length; j++) {
      if(a1[i] === a2[j]) {
        result.push(a1[i]);
      }
    }
  }
  return result;
}
```

Repare que independente da situação analisada o código acima sempre irá percorrer os 2 arrays da mesma forma, caso os dois tenham o mesmo tamanho, estamos falando de N^2. Agora, existe uma forma de melhorar a eficiência desse código pra maioria das situações, infelizmente pra pior das possibilidades ele continuaria performando da mesma fora, mas ainda assim com a adição de apenas uma palavra, podemos gerar um mecanismo que corte todos os passos desnecessários:
```js
function intersection(a1, a2) {
  let result = []
  for(let i = 0; i < a1.length; i++) {
    for(let j = 0; j < a2.length; j++) {
      if(a1[i] === a2[j]) {
        result.push(a1[i]);
        // Apenas esse break já tem um grande impacto na média dos casos
        break;
      }
    }
  }
  return result;
}
```

## Exercises

#### Páginas 93 e 94

1. Um algoritmo que leve 3N^2 + 2N + 1 passos tem O(N^2), isso porque para o Big O interessa apenas o N de maior magnitude, já que ele impulsiona o crescimento de forma mais drastica no longo prazo.
2. Da mesma forma, uma situação de N + logN leva em conta apenas o N^1, tendo então O(N)
3. Para essa função apresentada podemos entender o melhor caso como sendo "array[0] + array[1] === 10", O que levaria apenas 2 passos para ocorrer, sendo então O(1), já o pior caso possível seria a ausência desse resultado no array, o que levaria 2N^2 passos ou um O(N^2). Agora, o caso médio disso é justamente uma situação em que os números estejam em algum lugar no meio do array.
4. Analisando em termos de big O, essa função possui O(N), isso porque caso não haja 'X' na string, o loop inteiro seria necessário. Agora, esse código pode ser sim melhorado para o melhor caso e os casos médios, para isso o return deve ser feito logo após uma comparação bem sucedida.
