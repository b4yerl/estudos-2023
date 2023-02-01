# Blazing Fast Lookup With Hash Tables

## Hash Tables

Hash Tables são estruturas poderosíssimas quando o assunto é a leitura dos dados. Com elas podemos encontrar dados em O(1). Imagine por exemplo um cardápio de uma lanchonete feito com um array:
```js
const menu = [['fritas', 10], ['hamburguer', 25], ['suco', 7]];
```
Qualquer busca aqui levaria O(N) pois para encontrarmos o preço do suco por exemplo precisaríamos olhar todo o array. Já com hash tables isso seria diferente, pois estamos usando o item como chave e seu preço como valor. Isso permite que façamos uma busca por "menu['suco']" que retorna o valor na hora.

Essa associação da chave com uma posição na memória ocorre atravé de uma hash function, uma função que transforma caracteres em números a partir de um determinado procedimento, a parte importante é que essa conversão seja consistente, isso porque quando passamos uma chave para recuperar seu valor, essa hash function é utilizad novamente.

Note então que a habilidade de buscar o valor em O(1) depende de sabermos antecipadamente qual chave estamos buscando, se não vai ser O(N) mesmo. Isso ocorre porque a busca é unidirecional, não podemos buscar uma chave a partir de um valor, dessa forma também não podemos ter duas chaves iguais dentro de uma hash table. 

## Dealing with Collisions

E se no processo de hashing acabarmos com 2 chaves diferentes convertidas para um mesmo endereço? Nesse caso ocorre uma collision e a solução para isso é armazenar um array naquele determinado endereço, um array contendo sub arrays que carregam a chave e o valor, logo uma hash table mal pensada pode se transformar em uma grande array, o que destroi completamente a premissa do O(1). O ponto é que as linguagens que implementam hash tables de fábrica já pensaram nisso antes.

## Making an efficient Hash Table

Fazer uma hash table eficiente depende essencialmente de 3 coisas:
- A quantidade de dados armazenados
- A quantidade de "células" disponíveis para uso
- A qualidade da hash funciton utilizada

Entenda que por exemplo, uma hash table com muitos dados e pouco espaço para distribuir esses dados iria gerar muitas collisions, mitigando as vantagens de se utilizar uma hash table. Já uma hash function mal feita pode acabar não aproveitando bem o espaço disponível, uma hash function boa distribui o conteúdo de forma equilibrada entre os espaços.

Podemos então querer gastar uma quantidade enorme de espaço, para alguns dados, assim evitando collisions. O problema é que também não queremos engolir memória assim. Consideramos aqui que o load factor ideal é de 0.7, ou seja, para cada 7 pedaços de informação teremos 10 espaços. Essa proporção foi encontrada por cientistas da computação e na maioria dos casos esse alocamento de memória baseado no tamanho da base de dados é feito pela própria linguagem, então não precisamos esquentar a cabeça com isso.

## Hash Tables for Organization and Speed

Como hash tables mantem os dados organizados em pares, podemos utilizar isso para organização. Ou seja ao invés de um switch wue retorna o nome do mês baseado no número, poderíamos implementar uma hash table, o que seria bem mais eficiente caso, por exemplo, alguém queira saber qual o mês 12.

Mas a parte interessane é quando usamos isso pensando na velocidade, por exemplo imagina que queiramos buscar um número em um array:
> [65, 82, 34, 12, 89]

Isso levaria O(N) como já sabemos, mas poderíamos transformar isso em uma hash table mesmo que não seja uma sequência de pares:
> {65 => true, 82 => true, 34 => true, 12 => true, 89 => true}

Instantaneamente nossa velocidade para saber se um valor está aí ou não foi derrubado para O(1). Ou seja, mesmo que tenhamos uma simples lista de itens com valores únicos, podemos sim estabelecer uma relação disso com um boolean, ou qualquer valor que seja truthy, o importante é saber que será retornado algo dessa busca, portanto podemos saber assim se o tal item está na base de dados ou não. Funciona com um índice de um livro, não precisamos folhear tudo para saber se o conteúdo está presente ou não.

## Array Subset

Imagine a seguinte situação uma função que receba 2 arrays e cheque se um é subset do outro:
```js
function isSubset(arr1, arr2) {
  let larger;
  let smaller;

  if(arr1.length >= arr2.length) {
    [larger, smaller] = [arr1, arr2];
  }

  for(const value1 of smaller) {
    let foundMatch = false;

    for(const value2 of larger) {
      if(value1 === value2) foundMatch = true;
    }

    if(!foundMatch) return false;
  }
  return true;
}
```

O problema desse algoritmo é que ele tem uma eficiência de O(N * M), mas se melhorarmos isso fazendo uma hash table, mesmo que nesse caso só usemos ela uma vez, já melhoramos nosso programa:
```js
function isSubset(arr1, arr2) {
  let larger;
  let smaller;
  const hashTable = new Map();

  if(arr1.length >= arr2.length) {
    [larger, smaller] = [arr1, arr2];
  }

  for(const value of larger) {
    hashTable.set(value, true);
  }

  for(const value of smaller) {
    if(!hashTable.get(value)) return false;
  }

  return true;
}
```

Com a implementação da hash table já derrubamos a eficiencia para O(N) já que precisamos de um loop completo para gerar a hash table. A beleza dessa ideia de usar um array como um inidice transformando-o em uma hash table, aparece mais quando temos que fazer várias buscas nesse mesmo array.

Vimos então como é poderosa a eficiencia O(1) para leitura e inserção em uma hash table.

## Exercises

#### Página 131

QUESTÃO 1)
```js
function getIntersection(arr1, arr2) {
  let larger;
  let smaller;

  let intersection = []
  const hashTable = new Map();

  if(arr1.length >= arr2.length) {
    [larger, smaller] = [arr1, arr2];
  }

  for(const value of larger) {
    hashTable.set(value, true);
  }

  for(const value of smaller) {
    if(hashTable.get(value)) intersection.push(value);
  }

  return intersection;
}
```
QUESTÃO 2)
```js
function getDuplicate(arr) {
  const hashTable = new Map();

  for(const value of arr) {
    if(!hashTable.get(value)) hashTable.set(value, true);
    else return value;
  }

  return;
}
```
QUESTÃO 3)
```js
function naoSeiDarNomePraIsso(str) {
  const hashMap = new Map();
  for(const char of str.toLowerCase()) {
    if(!hashMap.get(char)) hashMap.set(char, true);
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';    

  for(const letter of alphabet) {
    if(!hashMap.get(letter)) return letter;
  }
}
```
QUESTÃO 4)
```js
function getUnique(str) {
  let hashMap = new Map();

  for(const char of str) {
    if(!hashMap.get(char)) hashMap.set(char, 1);
    else hashMap.set(char, hashMap.get(char) + 1);
  }

  for(const char of str) {
    if(hashMap.get(char) === 1) return char;
  }
}
```
