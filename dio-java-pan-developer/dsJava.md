# Estruturas de Dados em Java

## Conceitos Básicos

Vamos esclarecer primeiro o conceito de nó. Nós são estruturas em determinado endereço de memória que além de seu payload, seu valor, carrega também a referência para um próximo nó, dessa forma é possível fazer o encadeamento, uma corrente de nós.

Assim como eu já vi em TS, [aqui](../microsoft-typescript/generics.md), bo Java também temos os generics representados geralmente pelo `<T>`. Alguns motivos para se usar generics envolem encontrar erros em tempo de compilação, evitar casting excessivo e código redundante.

Existe uma convenção para a utilização dos caracteres na nomeação dos wildcards:
- **K** para Key, exemplo: `Map<K>`
- **V** para Value, exemplo: `Map<K,V>`
- **E** para Element, exemplo: `List<E>`
- **T** para Type, exemplo: `List<T>`
- **?** quando realmente for genérico

## Pilhas (LIFO)

Vou aproveitar isso aqui pra escrever a minha revisão do que é uma pilha.

Uma pilha é um conjunto de restrições que delimitam um array para que este adote um determinado comportamento. O principal comportamento a ser adotado por uma pilha é a ideia de LIFO, ou seja, o último valor a entrar deve ser sempre o primeiro a sair.

Juntando isso com a ideia vista acima de nós, o primeiro elemento de uma pilha aponta para uma referência nula, a partir daí os próximos elementos adicionados passam a apontar para o elemento anterior, ou elemento abaixo para melhor compreensão.

Dessa maneira podemos entender que toda pilha deve conter 3 métodos principais:
- **Top** ou read, para a leitura do elemento no topo da nossa pilha, do último elemento adicionado. Perceba que isso é uma pilha de livros mesmo, a úncia capa que podemos ver é a do livro no topo da pilha.
- **Push**, utilizado para adicionar um novo elemento no topo da nossa pilha, a única posição possível de se adicionar um elemento seuindo as restrições de uma pilha.
- **Pop**, a remoção de um elemento no topo da pilha, no caso do último adicionado. Com este método terminamos de cumprir os requisitos para implementar um comportamento LIFO.

## Filas (FIFO)

Uma fila é um conjunto de regras que limita e especifica a utilização de uma estrutura a partir do conceito de FIFO, ou seja, o primeiro a entrar deve também ser o primeiro a sair, como uma fila real mesmo.

Dessa vez a o último elemento adicionado sempre vai apontar para null, alterando isso para cada novo nó adicionado à nossa fila.

Os principais métodos implementados em uma estrutura de fila são:
- **Enqueue** para enfileirar, ou seja, adicionar um novo elemento ao final da fila. Aqui é que ocorre esse esquema do antigo último elemento passar a apontar para o novo elemento.
- **Dequeue** para remover o primeiro elemento da fila. Atenção que aqui deve ser feita uma manobra antes para que essa referência ao novo início não seja perdida.

## Listas encadeadas

Bem parecida com as estruturas anteriores, mas com um conjunto de regras diferentes. No geral temos a mesma ideia de um nó carregando seu payload e uma referência ao próximo nó da lista.

A diferença aqui ficam a cargo dos métodos a serem implementados na nossa lista.
- **Add** nos permite adicionar um novo elemento em qualquer index, logo este index deve ser informado. Para isso apontamos a referência do novo nó para o elemento atualmente no index desewjado e mudamos a referência do elemento index - 1 para o novo nó.
- **Remove** bem parecido, removemos um elemento de determinado index e ligamos novamente a lista para "fechar" o buraco.
- **Get** funciona baiscamente para ler o elemento presente em um determinado index.

## Listas Duplamente Encadeadas

A diferança da lista duplamente encadeada para a simples está na estrutura dos nós que a compõe. Aqui os nós carregam além do seu payload e da referência aos próximo elemento, a referência ao nó anterior na lista. Outra diferença também presente é que alem da referência de entrada na lista, temos uma referência ao último nó.

Novamente trabalhamos com **add**, **remove** e **get**. Além dos já batidos **size**, **isEmpty** e **toString** por exemplo.

## Listas Circulares

Imagine a lista encadeada como uma corrente no qual cada elemento representa um elo. A ideia da lista circular é fechar isso ligando o último elo ao primeiro. Ou seja, ao invés de apontar para `null`, o último nó tem como referência o primeiro.

Estruturando a lista deste maneira temos um círculo no qual o último nó é a *cabeça* e o primeiro é a *cauda*. Dessa maneira a referência de entrada da lista circular aponta para a cauda.

O ponto agora é que no **add** nós entramos com uma nova cauda e devemos fazer a cabeça mudar a referência do nó para que esta se mantenha apontando para a cauda da lista.

## Árvores

Árvores são uma estrutura bidimensional, ou seja, não linear, constituída de nós que representam um modelo hierárquico.

Algumas nomenclaturas são facilmente compreendidas como: raiz, pai e filho, nós irmãos. Agora temos coisas como altura/profundidade para indicar o nível máximo, nivel que é a posição em relação a raiz, folha que é o nó terminal, o conceito de grau de um nó que se relaciona a quantidade de filhos e a subárvore.

Existem vários tipos de árvore, mas iremos ficar nas arvores binárias. A ideia de organização é bem simples, a partir de um nó, a posição na qual inseriomos seus filhos dependem da sua relação com o valor do nó pai. Caso o valor seja menor, inserimos a esquerda, para o valor maior inserimos a direita.

A ideia disso é organizar os nós por ordem de valor:

<img src="https://blog.cod3r.com.br/wp-content/uploads/2020/11/ArvoreBinaria-1024x790.png">
<br><br>

O nó aqui tem uma estrutura muito semelhante ao nó da lista duplamente encadeada, carregando o payload e duas referências a outros nós.

Como vamos implementar essa árvore usando generics, precismaos de uma forma que garanta a possibilidade de comparação entre os valores inseridos. Para fazer isso vamos usar o conceito de *upper bound wildcards* para garantir que o tipo/objeto escolhido para a nossa generics implemente a interface **Comparable<T>**:
```java
public class BinaryNode<T extends Comparable<T>> {
  // [...]
}
```

Isso no caso garante uma implementação de arvore binária para objetos, mas a gente pode fazer sem isso e definir uma tree que aceite só doubles, sei lá.

A **inserção** de um valor na árvore depende fortemente da possibilidade de comparação entre valores. Começando do topo iniamos as comparações descendo nos níveis da árvore até o ponto no qual o nó possa ser encaixado sem ter mais pra onde ir.

A **exclusão** de um valor deve seguir um princípio básico, o nó removido deve ser substituído pelo maior nó ramificado a sua esquerda, dessa maneira garantimos que todos a esquerda continuarão sendo menores e todos a direitra maiores. Reutilizando o exemplo da imagem acima, para remover o *nó 24*, colocaríamos em seu lugar o *nó 12*.

Para fazer a exibição de todos os nós de uma árvore podemos implementar um algoritmo recursivo, como este abaixo:
```java
public void showTreeInOrder(BinaryNode currentNode) {
  if(currentNode != null) {
    showTree(currentNode.getLeftNode());
    System.out.println(currentNode.getContent());
    showTree(currentNode.getRightNode());
  }
}
// OUT: 5, 10, 12, 24, 29, 32, 35
```

Temos 3 tipos de atravessamento para as árvores binárias, este acima é o primeiro deles, o atravessamento *INORDER*. Outra possibilidade é o *PREORDER*, neste caso ele primeiro exibe o nó atual e depois busca, começando pela referência a esquerda:
```java
public void showTreePreOrder(BinaryNode currentNode) {
  if(currentNode != null) {
    System.out.println(currentNode.getContent());
    showTree(currentNode.getLeftNode());
    showTree(currentNode.getRightNode());
  }
}
// OUT: 24, 10, 5, 12, 32, 29, 35 
```

Por fim temos uma exibição *POSTORDER* que, primeiro visita todos os nós e depois sai resolvendo a call stack apenas imprimindo os valores:
```java
public void showTreePostOrder(BinaryNode currentNode) {
  if(currentNode != null) {
    showTree(currentNode.getLeftNode());
    showTree(currentNode.getRightNode());
    System.out.println(currentNode.getContent());
  }
}
// OUT: 5, 12, 10, 29, 35, 32, 24
```

## Implementação de DS em Java

Temos 2 métodos importantes em objetos, o `equals()` e o `hashCode()`, normalmente implementados juntos já que normalmente estão amarrados. Com eles podemos melhorar a busca por objetos e as comparações baseadas nas nossas regras de negócio específicas. Lembrando sempre que está implementação requer o `@Override`.

Para implementar a pilha usamos a estrutura `Stack<T>` do package `java.util`. A partir daí passamos a ter os quatro métodos já disponíveis: `push()`, `pop()`, `peek()` e `empty()`.

No caso das filas temos a nossa `Queue<T>` que implementa os conceitos de fila, lembrando que a documentação toda tá no `java.util`, mas nos caso, ao contrario da Stack, a Queue não é uma classe e sim uma interface. Dessa maneira podemos declarar uma da seguinte forma:
```java
import java.util.Queue;
import java.util.LinkedList;

public class Main {
  public static void main(String[] args) {
    Queue<int> integersQueue = new LinkedList<>(); 
  }
}
```

Os principais métodos associados a Queue são:
- add: Tenta adicionar um novo elemento à fila, disparando um erro caso não consiga.
- offer: Parecido com o add, mas apenas retorna um false em caso de falha.
- peek: Retorna o primeiro elemento na fila.
- poll: Remove o primeiro elemento da fila.
- size: retorna o tamanho.
- isEmpty: você já entendeu...

Agora vamos para as listas, no caso para a interface `List<T>` que tem uma penca de métodos associados e eu não vou trazer pra cá, vai olhar a doc.
```java
List<Students> studentsList = new ArrayList<>();
```

Outra coisa que temos aqui também é a implementação do `Set<T>`, seguindo aquelas mesmas regras já conhecidas [daqui](../common-sense-ds-algo-wengrow/).
```java
Set<Clubs> footballClubs = new HashSet<>();
```

Note que o HashSet é uma implementação baseada em Hash Tables, logo ordens de inserção não são preservadas e enfim, podemos implementar as restrições de um set de outras maneiras como com `TreeSet<T>`, mas note que nesse caso precisamos de um tipo com o `Comparable<T>` e a implementação do método `compareTo()`.

Por fim vamos falar de `Map<K,V>`, advinhaaaaaa? Uma hash table classicuda mesmo:
```java
Map<String, Integer> courses = new HashMap<>();
```
