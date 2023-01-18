# O Yes! Big O Notation

Para expressar a eficiência de um algoritmo ou de uma estrutura de dados, não podemos usar números absolutos já que isso varia de acordo com o tamanho da nossa base de dados. Para resolver isso temos que a eficiência de uma busca linear por exemplo, é de N passos em um array de N elementos.

Para diminuir essa expressão foi convencionado o uso da Big O Notation, tomando esse conceito emprestado da matemática. Logo poderíamos replicar a expressão acima dizendo que a eficiência da linear search é de O(N), podemos ler como "big O of N".

## How Many steps relative to N elements?

Podemos traduzir O(N) como "Se ouverem N elementos, quantos passos o algoritmo levará?". Essa é a maneira mais simples de se compreender a Big O notation sem entrar na parte matemática da coisa.

Logo analisando por esse ponto, chegamos na conclusão que a linear search tem O(N). Algoritmos com valocidade na ordem de N sm dito também como tendo "linear time". Já a leitura em um array, sabemos que independente do tamnho do dataset levará apenas um passo para a leitura ser feita, com isso temos O(1), aqui já temos um "constant time". Note que O(1) é a maior velocidade possível de ser alcançada.

## The soul of Big O

Agora na real quando olhamos a Big O Notation estamos mais preocupados com: "como a performance desse algoritmo muda a medida que os dados crescem?".

Por isso caso haja um algoritmo que leva constantemente 3 passos, não usamos algo como O(3) e sim O(1). Isso representa, não quantos passos leva, mas sim que a complexidade é constante independente do tamanho da base de dados.

Como o tamnho da base de dados pode ir, conceitualmente, ao infinito, consideramos que independende de serem 1 ou 1 milhao de passos constantes, O(1) é mais rápido do que O(N).

Seguindo essa lógica da relação entre o crescimento dos dados e a velocidade de um algoritmo, podemos entender o Big O da busca binária. Como vimos anteriormente, sempre que dobramos a base de dados, aumentamos 1 passo necessário para concluir a busca. Isso nos leva a uma relação logarítmica de base 2. Podemos omitir essa base por convenção e dizer então que para Binary Search temos O(log N).

## Exercises

#### Página 45

1. O(1)
2. O(N)
3. O(log N)
4. O(N)
5. O(1)
