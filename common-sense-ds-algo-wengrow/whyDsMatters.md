# Why Data Structures Matter?

## Arrays

Talvez uma das mais básicas e principais estruturas de dados, temos no array uma lista de dados.

Para podermos começar a anlisar qualquer estrutura de dados, temos que entender quais são as 4 operações básicas com as quais o nosso código interage com essas estruturas
- Read: A simples leitura de um dado na estrutura, no caso do array seria a leitura do valor de arr[2].
- Search: Buscar um valor dentro de uma estrutura de dados, em um array por exemplo seria saber se ess valor está presente lá e qual o seu index.
- Insertion: Inserir novos valores na estrutura de dados
- Delete: A operação inversa, deletar valores da estrutura

Uma das coisas mais importantes que podemos tirar como lição logo de começo é que a eficiência de um código é medida em "quantidade de passos" e não em tempo real. Para isso usaremos o termo time complexity ou  só velocidade mesmo xD.

#### Read

Para realizar a leitura de um valor em determinado index i, um Array requer somente um passo. Isso ocorre porque quando declaramos um array, ele é alocado em um espaço sequencial na memória e sua variável armazena a referância ao endereço do index 0.

Pensando assim, quando pedimos arr[2], o computador precisa apenas somar 2 ao endereço do index 0 e retornar o valor requisitado.

Por isso arrays são estruturas tão poderosas para esse tipo de operação, realizando a leitura de um valor na maior velocidade possível.

#### Search

Buscar valores em uma estrutura é uma operação quase que oposta à leitura, já que ao invés de dar o index e pedir o valor, estamos dando o valor e pedindo o index.

Note que o computador consegue instantaneamente acessar qualquer endereço de sua memória, mas ele não sabe o que está contido neste endereço. Desta forma é necessária uma busca para que o index possa ser retornado.

Por enquanto veremos apenas a ideia da busca linear (linear search), onde cada index é buscado do inicio até o fim do array, até que o valor seja encontrado ou não.

Essa natureza da linear search faz com que no pior dos mundos tenhamos que percorrer todos os N elementos do array. Por isso temos um time complexity aqui de N.

#### Insertion

Fato 2 sobre os arrays, quando declaramos ele, também é armazenado o tamanho desse array. Dessa forma, se quisermos adicionar um elemento ao final do Array, basta ao computador alocar mais um espaço de memória ao final e adicionar o valor. Essa operação pode funcionar de maneira diferente em cada linguagem.

O problema, o pior caso, é quando queremos adicionar um elemento em outras posições, isso porque eu sempre tenho que mover os elementos um espaço de memória para a frente, abrindo espaço para o novo. Dessa forma o pior seria adicionar um novo elemento ao inicio do Array, isso teria uma velocidade de N + 1. N movimentações de valores "para a direita" mais 1 inserção de um novo valor no espaço vago.

#### Deletion

Para remover um valor de um Array na real é bem simples, leva apenas 1 passo, basta indicar o index e pronto, removido. O problema mesmo é cobrir esse novo espaço em branco, para isso teríamos que moviemtnar valores para ocupar o espaço vazio.

Novamente se considerarmos o pior caso, seria eliminar o primeiro valor, em um Array de 100 elementos, gastaríamos 1 passo para eliminar o index 0 e 99 passos movimentando valores. Podemos então concluir a complexidade do delete em um Array como N.

Com isso terminamos a analise da nossa primeira estrutura de dados.

## Sets

Sets são estruturas de dados que não permitem valores duplicados. Aqui usaremos um array-based set, logo temos uma simples lista de valores distintos.

Para 3 das 4 operações que vimos, nada se altera em relação ao Array.
- Read: continua sendo instantâneo levando 1 step para recuperar um valor.
- Search: Vai levar seus N steps para realizar uma linear search
- Delete: Também com N steps tendo que remover um valor e realocar os outros.

A diferença agora está no Insertion. Como o set não permite valores duplicados, antes de inserir um valor, uma linear search é feita por todo o set, para garantir que teremos um valor distinto e somente então o valor novo é inserido.

Com isso em mente temos N passos para serem realizados independente de se estamos inserindo no início ou no final. No melhor dos mundos, inserindo um valor ao final levaria os N mais 1 para a inserção. Com essa lógica podemos deduzir que inserção no começo seri (N + (N + 1)). Ou seja, a inserção em um Set tem a complexidade de 2N + 1.

Isso não significa que devemos desconsiderar o uso de um Set, o ponto aqui é entender as especificidades de cada aplicação. Caso seja necessário evitar valores duplicados, vamos de Set. Agora, caso isso não seja uma necessidade para a aplicação, um Array simples se mostra mais eficiente.

## Exercises

#### Página 19

1 - a) 1; b) 100; c) 101; d) 1; e) 100; f) 1;

2 - a) 1; b) 100; c) 201; d) 101; e) 100; f) 1;

3 - Se quisermos encontrar todos os "apple" em um array, devemos fazer uma linear search por todo ele garantindo que cada elemento foi checado, dessa forma essa busca levaria N passos.
