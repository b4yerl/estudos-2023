# Conhecendo Collections Java

## Introdução

Uma collection é uma estrutura de dados que serve para agrupar muitos elementos em uma única unidade, sendo estes obrigatoriamente objetos. Temos quatro grandes tipos de coleções: List, Set, Queue, Map, a partir dessas interfaces, temos muitas subclasses concretas que implementam várias formas diferentes de se trabalhar com cada coleção.

Note que ao observar a hierarquia do Collection Framework, a interface Map não está na ramificação das collections iteráveis. Coollection framework esse que pode ser encontrado todinho no `java.util`.

### Generics

Um tipo genérico é uma classe ou interface que é parametrizada em relação a tipos, isso é feito através do diamond operator `<T>`, com ele torna-se possíel inferir o tipo com base no contexto.
```java
public class ClasseGenerics<T> {
  private T atributoGenerico;

  public T get() {
    return this.atributoGenerico;
  }
  public void set(T t) {
    this.atributoGenerico = t;
  }
}
```

O uso de generics garante que apenas elementos de um tipo específico possam ser adicionados à coleção. Além de manter o código mais legível e auxiliar no reuso do mesmo, generics também possibilitam uma detecção de erros mais cedo pelo compilador.

O código abaixo mostra como generics garante a segrança de tipo, impossibilitando uma collection com tipos heterogêneos:
```java
// Sem o uso de generics o seguinte é aceitável
List listaSemGenerics = new ArrayList();
listaSemGenerics.add("Elemento 1");
listaSemGenerics.add(2);

// Com generics eu limito e garanto o tipo
List<String> listaGenerics = new ArrayList<>();
listaGenerics.add("Elemento 1");
listaGenerics.add("Elemento 2");
listaGenerics.add(3); // ERRO
```

### Interfaces comparable e comparator

As interfaces comparable e comparator são utilizadas para fins de comparação e ordenamento dos elementos dentro de uma collection.

O comparable oferece uma única squência de ordenação. Ele afeta a classe original já que exige a implementação da interface (presente no java.lang) direto na classe original. Para fazer a ordenação utiliza-se o `compareTo()`. Com ele implementado podemos ordenar os elementos da coleção com `Collections.sort(MinhaLista)`.

O comparator fornece o método `compare()` tendo a possibilidade de múltiplas sequências de ordenação. Aqui a classe original já não é afetada, isso porque o comparator exige ser implementado (java.util) em uma nova classe. Assim, para fazer a ordenação passamos o `Collections.sort(MinhaLista, MeuComparator)`.

Repare que a classe utilitária `Collections` foi usada em ambos os casos, nela temos vários métoos para manipulação de collections.

## List

A interface List é uma coleção ordenada que permite a inclusão de elementos duplicados, suas implementações mais comuns são ArrayList e LinkedList. A List possui comprimento dinâmico, permitindo assim a livre adição e remoção de itens. A classe Collections já traz pra gente métodos uteis para manipulação de Lists, como `sort`, `shuffle`, `reverse` e `binarySearch`.

O **ArrayList** armazena seus elementos em uma espécie de array redimensionável, isso possibilita o acesso rápido aos elementos através dos indíces, permitindo um acesso de *O(1)* aos itens, mas em contrapartida a flexibilidade de seu tamanho faz com que a realocação de espaço demande um tempinho a mais.

**LinkedLists** são uma implementação com a ideia da lista duplamente encadeada, ou seja, cada elemento carrega consigo uma referência ao próximo nó e ao nó anterior da lista. Como tudo é uma balança, aqui ganhamos eficiência na adição e remoção de elementos, mas perdemos no acesso, já que agora devemos percorrer os nós até o index desejado.

**Vector** já é uma implementação menos usada. Ela é bem semelhante ao ArrayList, mas por ser síncrona é thread-safe, ou seja, várias threads podem ao mesmo tempo manipular o Vector sem que haja problema de concorrência. A sincronicidade ataca o desempenho do Vector em relação ao ArrayList, até mesmo em cenários nos quais concorrência não é um problema.

## Set

A interface `Set` possui 3 implementações principais: HashSet, TreeSet e LinkedHashSet. A ideia do set você já sabe, mas vale lembrar que ele ainda é iterável apesar de não ser permitido o acesso aleatório aos elementos.

O **HashSet** utiliza-se de uma hash function para facilitar o reconhecimento de elementos já existentes no conjunto, consequentemente com alta eficiência de acesso a estes. Em contrapartida os HashSet não garantem a ordem de inserção.

**TreeSet** é a implementação que utiliza uma árvore balanceada (AVL), dessa maneira os elemento são sempre mantidos em ordem. O ponto fraco aqui é a inserção e remoção dos elementos, operações que demandam mais tempo com o balanceamento da estrutura.

**LinkedHashSet** por fim utiliza uma hash function, mas preservando a ordem dos elementos, isso é feito através da manutenção de uma linked list além da hash table. Aqui então temos a velocidade de reconhecimento e busca pelo conjunto com a preservação da ordem de inserção.

## Map

A interface Map tem uma particularidade, não herdar do Iterable, mesmo assim faz parte da Collections Framework. Tu já sabe o que é um Map, então vamos pras implementações principais: HashMap, TreeMap, LinkedHashMap.

Note que os métodos disponíveis ao Map são diferentes, para operações básicas temos:
- `put()`
- `get()`
- `containsKey()`
- `containsValue()`
- `size()`
- `isEmpty()`

A **HashTable** é uma implementação antiga da interface Map, caracterizada por ser thread-safe (síncrona). Aqui não é possíve usar chaves nem valores nulos e os elementos não são mantidos em ordem.

**LinkedHashMap** preserva a ordem de inserção, para isso cada elemento possui uma referência ao próximo e ao anterior, formando uma lista duplamente encadeada e permitindo que os elementos sejam percorridos na ordem de inserção.

O **HashMap** usa as hash functions para melhorar a pesquisa e o acesso, mas não mantém a ordem incial dos elementos.
