# Big O in Everyday Code

Até então temos visto e entendido alugns detalhes que compõe todos os arredires di Big O. Isso porque o noso objetivo aqui é sermos capazes de melhorar e otimizar o código, mas para isso, antes de podermos aumentar sua velocidade com técnicas e conhecimentos que ainda veremos, primeiro devemos ser capazes de analisar sua eficiência e avaliar onde e como o código pode ser otimizado, e claro, se isso é possível no cenário dado.

Para isso vamos analisar nesse capítulo alguns códigos reais que podemos ver e entender como isso deve ser feito. Como esse capítulo parte dos códigos mais básicos, eu vou deixar o primeiro deles aqui embaixo como exemplo e a partir daí vou trazer apenas aquilo que me acrescentar algo ou que eu considere legal/necessário de guardar aqui.

## Mean Average of Even Numbers

Vamos começar analisando o código a seguir. Basicamente o que ele faz é retornar a média aritmética dos números pares de um array:
```js
function avgEvenNumbers(arr) {
  let sum = 0;
  let count = 0;

  for(let n of arr) {
    if(n % 2 === 0) {
      sum += n;
      count++;
    }
  }
  return sum / count;
}
```

Começando simples, esse programa basicamente vai iterar por todos os números de um array, já de cara temos N operações. Para os números pares temos mais 2 operações extras dentro do loop, logo o pior dos caso seria um array somente com números pares, o que nos levaria a 3N passos. Como fora do loop temos outras 3 operações, terminamos com um total de 3N + 3, ou simplesmente O(N).

## Count the Ones

```js
function countOnes(arr) {
  let count = 0;
  for(let inner of arr) {
    for(let n of inner) {
      if(n === 1) count++;
    }
  }
  return count;
}
```
A função acima recebe um array de arrays e retorna a quantidade de 1 encontrados. Aqui pode ser tentador classificar isso como O(N^2) devido aos 2 loops aninhados. O ponto nesse programa é entender quem é o N que devemos analisar. Nesse caso o fator principal são os números em si, a quantidade de arrays dentro do array principal não importam para nossa analise, o que realmente irá trazer impacto é a quantidade de números. Com isso podemos enxergar que os 2 loops tratam de coisas diferentes, logo podemos classificar esse algoritmo como O(N).

## Dealing with Multiple Datasets

Considere um programa que encontra todos os produtos entre os números de um array com os números de outro:
```js
function getProducts(arr1, arr2) {
  let result = [];

  for(let n of arr1) {
    for(let m of arr2) {
      result.push(n * m)
    }
  }

  return result;
}
```

Olhando para essa função devemos analisar com calma a sua complexidade. Inicialmente devemos entender o que é N aqui, e aí mora o problema. Não podemos elencar simplesmente N como sendo todos os números, isso nos levaria a uma ideia de velocidade na ordem de N^2. A questão é que não necessariamente estamos trabalhando com datasets do mesmo tamnho.

Caso o primeiro tenha N elementos e o sgundo apenas 1, teríamos N operações sendo realizadas, agora, caso eles realmente tenham o mesmo tamanho, iríamos a N^2. Perceba como o tamanho do segundo array pode alterar brutalmente a velocidade de tudo, por isso, infelizmente o m,elhor que podemos fazer é definir isso como sendo O(N * M). Sim, essa ordem de complexidade dificulta a comparação com as outras categorias, mas sabemos mais ou menos onde ele pode se encaixar levando em conta a analise prévia aqui nesse parágrafo.

## Password Cracker

Imagine uma tentativa de quebrar uma senha contendo apenas letras minúsculas com "n" tamanho. Supondo que n seja 3 nossa sequência seria: "aaa, aab, aac, aad..." até que cada possibilidade seja testada. Sabendo que um loop por todas as letras do alfabeto levaria 26 passos, um loop formando todas as combinações de duas letras levaria 26 ^ 2, para todos os trios de letras teríamos 26 ^ 3 e por aí vai, chegando em O(26^N).

Entramos em uma nova categoria aqui e podemos entender como algo em O(2^N) consegue ser MUITO lento xD. Podemos enxergar melhor essa ordem de velocidade como sendo o oposto do O(logN). Por exemplo na Binary Search para cada vez que dobramos nossa base de dados, apenas 1 step a mais é necessário, aqui na categoria de O(2^N) temos o contrário. Cada vez que aumentamos nossos dados em 1, acabamos dobrando a quantidade de passos necessária '-'.

## Exercises

#### Páginas 109, 110, 111 e 112

1. Considerando o pior caso possível teríamos o retorno true, para isso acontecer teríamos que iterar por metade do array, ou seja N/2, sabendo que devemos desconsiderar constantes temos então O(N).
2. Como estamos tratando de dois arrays aqui que podem ter tamanhos diferentes devemos considerar um sendo M e o outro N, como os dois serão iterados juntos em um mesmo loop temos N+M operações, considerando que isso não representa um crescimento exponencial podemos descrever como O(N), sendo N então a representação de todos os números presentes.
3. Bom essa é um pouco mais complicada, temos novamente 2 datasets diferentes, dessa vez iremos com certeza iterar N vezes para cobrir todo o primeiro array. A pior situação possível seria algo como percorrer o N, M vezes a provura do alvo, logo O(N * M)
4. Meu deus, preciso nem olhar muito, O(N^3)........
5. Lembra muito a ideia da Binary Search, que na verdade é a ide do O(logN) como um todo, se dobrarmos os dados, aumentamos 1 passo, portanto, O(logN)
