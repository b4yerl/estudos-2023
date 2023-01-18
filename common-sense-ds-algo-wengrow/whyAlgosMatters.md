# Why Algorithms Matters?

Nesse cpítulo veremos como a escolha de um algoritmo também afeta na eficiência do nosso código. Para isso iremos explorar uma nova estrutura de dados:

## Ordered Arrays

Arrays ordenados, são uma lista simples de valores assim como os arrays, mas com a diferença de que sempre que uma inserção é feita, acontece uma busca para posicionar o valor no local correto de forma a manter a ordem do array.

Sendo assim ao juntarmos as checagens com a movimentação de valores para abrir espaço, teremos na pior das opções N + 1 movimentos, adicionando o novo valor isso vai para N + 2.

O grande lance é a possibilidade de ter um Array organizado, isso libera um super poder na hora de fazer um Search.

#### Searching an Ordered Array

A linear search em um array ordenado tem uma leve diferença, pois poderíamos asdicinar uma checagem e caso o elemnto atual fosse maior que o elemento procurado a busca iria parar ali.

O porblema é que no pior dos casos ainda teríamos que percorrer todo o Array levando os N passos já conhecidos. O ponto é que com um array ordenado não precisamos ficar na busca linear e podemos ir para um algoritmo muito mais poderoso.

## Binary Search

A busca binária é um algoritmo extremamente eficiente que necessita de uma lista ordenada para funcionar. Intuitivamente pensamos nele desde que somos crianças. Uma brincadeira comum é imaginar um número de 1 a 100 e dizer se a resposta é maior ou menor que o número pensado. Naturalmente iremos dividir ao meio a cada resposta para eleminar metade das possibilidades.

Essa é justamente a ideia da busca binária. Estabelecemos um ponto mínimo e um ponto máximo e entramos em um loop. A condição de saída deve ser o momento em que as pontas se encontram, eliminando a possibilidade de haver valores intermediários.

Dentro do loop checamos o valor no meio do caminho e estreitamos as pontas a depender do resultado do meio, em Javascript teríamos algo como:
```js
function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
 
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if(Number(target) === arr[mid]) {
      return mid;
    }
    else if(Number(target) < arr[mid]) {
      max = mid - 1;
    }
    else if(Number(target) > arr[mid]) {
      min = mid + 1;
    }
  }
  return null;
}
```

## Binary Search vs Linear Search

Vou pular direto ao assunto e trazer aqui o porque da estúpida diferença entre esses dois algoritmos de busca, principalmente se começarmos a aumentar o tamanho do array.

Para cada novo elemento em um array, aumenta-se um passo para se concluir a Linear Search, agora, para aumentar um passo na Binary Search é necessário DOBRAR a base de dados. Isso ocorre porque cada passo de uma busca binária elimina metade das possibilidades.

Hiperbolizando para ficar claro, imagina uma base de dados com todas as pessoas do mundo ordenadas. Se considerarmos que de 1970 até 2020 a poupulação dobrou de 3.5bi para 7bi de pessoas, a busca linear passaria a levar 3.5 BILHÕES DE STEPS A MAIS no pior dos casos. Agora para a busca binária seria apenas mais 1 passo para concluir a busca...........

Lógico que a escolha por um algoritmo depende do que pretende-se fazer com a aplicação. Por exemplo, uma aplicação com muitas inserções e poucas buscas taçvez não valha a pena ordenar o array.

## Exercises

1. 4
2. 1
3. Considerando que a eficiência da busca binária é o log de N na base 2, temos então um máximo de 17 passos.
