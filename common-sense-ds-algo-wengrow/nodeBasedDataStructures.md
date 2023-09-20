# Node-Based Data Structures

## Linked Lists

Listas encadeadas são muito parecidas com um array na percepção básica: ambos são listas de itens. Aprofundando um pouco mais notam-se diferenças gigantes entre as duas estruturas. Enquanto os **arrays** são uma sequência de elementos armazenados de forma contígua em memória, ou seja, o computador sabe que o index 4 está a 4 "espaços de memória" do início do array, podendo acessá-lo em O(1), as Linked Lists são construídas por nós. Um nó simples carrega além de seu conteúdo um ponteiro com o endereço do próximo elemento. É dessa forma que os links entre elementos são estabelecidos em uma lista encadeada.

Percebe-se então que podemos espalhar uma lista pela memória e mantendo a referência ao *head* conseguimos sempre navegar por ela, incluir novos elementos, etc. Diferentemente do Array, em que há um limite de tamanho pré estabelecido no instanciamento da estrutura.

#### Read

O acesso aos elementos de um array, como já visto antes, requer apenas 1 passo, é imediato, já na Linked List essa condição se sustenta apenas para o *head*, daí pra frente será necesário percorrer a lista em busca do elemento desejado. Assim, fica fácil compreender uma complexidade de O(N) para o pior caso de leitura de um elemento em uma lista encadeada.

#### Search

Aqui estamos falando de buscar um valor e retornar seu index. Bom, da mesma maneira que uma operação desta natureza, uma busca linear, em um array teria O(N), na linked list encontramos a mesma complexidade, nada muda aqui.

#### Insertion

Até aqui ou a linked list apanhou do array ou empatou, chegou a hora dela ganhar em alguma coisa, pelo menos em algumas situações específicas... Enfim, o pior caso de inserção para um array é a inserção de um novo elemento no index 0, isso porque todos os outros elementos deverão chegar uma casinha pro lado, causando assim uma complexidade de O(N) neste cenário. Agora, para as linked lists, inserir um elemento no início está em O(1), já que basta alterar a referência do head. Note que não é apenas nesta situação, qualquer inserção de elemento em uma lista tem a eficiência de O(1), o problema é que a partir do *head* precisamos percorrer elementos antes de realizar a inserção e, como visto acima, isto tem O(N).Logo, o pior caso para a inserção de um elemento em uma lista é justamente o melhor caso do array, a inserção de elementos no fim da lista, que representa O(N).

Percebe-se então que para algumas estruturas a inserção em O(1) traz grandes vantagens no uso de listas encadeadas em sua implementação, como é o caso das stacks. Já que em uma Stack nós inserimos, removemos e consultamos elementos de uma única posição, essas operações podem ser realizadas em **O(1)** caso optemos por utilizar uma Linked List por baixo dos panos.

#### Deletion

Assim como a inserçõ, a remoção de elementos funciona da mesma maneira, O(1) no início, O(N) no pior caso.

Eu vou continuar não entrando muito aqui na implementação em si dessas operações porque não são novidade pra mim, mas vou só reforçar o cuidado necessário pra não arremessar pro limbo da memória, pras entranhas do Garbage Collector, elementos e parte da lista que não queremos perder, cuidado com o gerenciamento dos ponteiros nas operações básicas com nós.

## Doubly Linked Lists

Linked lists podem ser encontradas nas mais diversas formas além da tradicional. Em uma lista duplamente encadeada cada nó carrega dois links, um aponta normal pro próximo elemento, o outro mantém uma referÇencia ao nó anterior. Além disso uma doubly linked list possui não só uma referência ao *head* como também ao *tail*, o que permite leitura, inserção e remoção de elementos em **O(1)** tanto no início quanto no final da lista.

Agora com o nó duplo podemos atravessar uma lista tanto no sentido normal *head -> tail*, quanto no sentido oposto, do início para o final.

Como temos referências tanto para o *head* quanto para o *tail*, que permitem operações em **O(1)**, a lista duplamente encadeada torna-se uma opção perfeita para a implementação de Queues, já que o FIFO gera essa necessidade de inserir e remover elementos em pontas distintas.

## Exercises

#### Páginas 244 e 245

1. Implementação em JS do método que imprime todos os elementos de uma lista:
```js
printElements() {
  let node = this.head;
  while(node) {
    console.log(node.content);
    node = node.next;
  }
}
```

2. Implementação em JS do método que imprime todos os elementos de uma lista duplamente encadeada em ordem reversa:
```js
printElementsInReverseOrder() {
  let node = this.tail;
  while(node) {
    console.log(node.content);
    node = node.previous;
  }
}
```

3. Implementação blablabla toma o código aí:
```js
getLastElement() {
  let node = this.head;
  while(node.next) {
    node = node.next;
  }
  return node;
}
```

4. Invertendo a ordem da nossa lista:
```js
reverse() {
  let previous = null;
  let current = this.head;
  while(current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
}
```

5. A ideia basicamente é não eleminar o nó, mas o conteúdo dele, bom pelo moenos essa foi o único jeito que eu encontrei para remover um elemento da lista sem ter referência para toda a lista, apenas para o elemento em questão:
```js
node.content = node.next.content;
node.next = node.next.next;
```