# NumPy I

## Introduction

Numpy é uma lib pioneira, focada em trabalhar e computar números. Em python o processamento numérico é lento, principalmente crescendo o tamanho dos dados que estamos usando. Numpy busca resolver isso trazendo eficiência no trabalho numérico para o Python.

Normalmente não utilizamos tanto o Numpy diretamente, mas outras ferramentas como o pandas e o matplolib trabalham montados no Numpy.

## How it works

Para entender o Numpy vamos voltar a como funciona o processamento em um computador, uma máquina binária que apenas computa 0s e 1s. Na nmamória temos o centro onde nosso computador guarda informação para utilizar.

O grande ponto do Numpy é a eficiência com a qual ele gerencia o uso de memória. Uma variável com um número inteiro em Python consome em torno de 20bytes, já que um inteiro acaba sendo um objeto, quando a depender do uso desejado isso poderia ser feito em um único byte.

No Numpy podemos definir o tamanho desejado, por exemplo pra trabalhar com a idade de uma pessoa, dificilmente será preciso mais do que 1 byte, temos entaão `np.int8`.

Na maioria dos usos do Numpy veremos seu processamento de Arrays. As estruturas de dados que temos nativas no Python, `list` no caso, não é garantido que seus valores ocuparão espaços contíguos na memória, além de não podermos depender de intruções avançadas da CPU para processamento de matrizes e arrays.

## Arrays

Em Numpy criamos os arrays de forma muito simples, inclusive para acessar seus elementos fazemos da mesma forma que uma list. Ou seja, sabendo usar uma list, sabemos um array:
```py
import numpy as np

arr = np.array([1,2,3,4,5])
print(arr[1:3]) # 2 3
print(arr[::2]) # 1 3 5
```

Uma novidade é que podemos acessar elementos com multi-indexing, considerando o mesmo array já declarado acima, poderáimos tranquiliamente passar:
```py
print(arr[0], arr[2], arr[1]) # 1 3 2
print(arr[[0, 2, 1]]) # [1, 3, 2]
```

Note que o resultado em fazer desta maneira é um novo numpy array e não os elementos soltos individualmente.

Um ponto importante de se entender é sobre o tipo dos arrays. Para poder usar a eficiência no gerenciamento de memória e o armazenamento da maneira correta, o numpy precisa saber especificamente qual tipo de dados está sendo armazenado no array. Esta propriedade pode ser acessada passando `.dtype`.

Por padrão o numpy tenta identificar o tipo de dados sendo inicializados no array para definir seu tipo como int64, float64 etc. Podemos definir nós mesmos passando o `dtype` como opção na construção do array:
```py
age_arr = np.array([25, 88, 10], dtype=np.int8)
```

Com numpy podemos também criar arrays multidimensionais, matrizes. Para trabalhar com estas matrizes podemos acessar várias propriedades que o numpy disponibiliza. O `.shape` nos retorna o número de linhas e colunas do array em questão, com `ndim` podemos ver quantas dimensões nossa matriz posusi e `size` responde o total de elementos de forma recursiva.

Caso uma matriz tenha dimensões que não batem dentro da sua declaração, o numpy vai interpretar aquilo como sendo um objeto comum, logo cuidado com isso.
```py
import numpy as np

A = np.array([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])

print(A[2, 0]) # 7
print(A[:, :2]) # [1, 2], [4, 5], [7, 8]

A[1] = np.array([10, 11, 12])
print(A[1]) # [10, 11, 12]

A[1] = 0
print(A[1]) # [0, 0, 0]
```

Nativamente no numpy podemos executar uma série de operações nos nossos arrays e matrizes como `.sum()`, `.mean()`, `.std()`. Para matrizes podemos definir com qual eixo estamos trabalhando, por exemplo `.sum(axis=0)` soma as colunas, já o `.sum(axis=1)` soma as linhas.

## Numpy Operations

Vamos agora para o broadcasting e operações vetorizadas, começando pela compreensão do comando `np.arange(n)` que retorna uma array com os elementos equivalentes ao `range(n)`, ou seja:
```py
A = np.arrange(5)
print(A) # 0 1 2 3 4
```

As operações que veremos nos permitem trabalhar com arrays entre si ou com arrays e "scalars", por exemplo, podemos somar 10 ao array, isso resulta na soma de cada elemento por 10. Note que essas operações não modificam o array original, mas sim retornando um novo array, apesar desse comportamento poder ser sobreposto.
```py
A = np.arrange(5)
A + 10 # 10 11 12 13 14
A * 10 #  0 10 20 30 40
A += 5 #  5  6  7  8  9 ARRAY MODIFICADO
```
No python regular, um equivalente a essas operações em toda a list seriam as *list comprehensions*.

Outra possibilidade é operarmos entre arrays, para isso eles devem ter o mesmo shape, assim podemos ter uma correspondencia entre os elementos.

## Numpy Boolean Arrays

Sabendo como funcionam essas operações com arrays podemos trabalhar não somente com operadores aritméticos, como também com operadores lógicos.

COmeçando por uma simples seleção de valores. Já vimos que no numpy odemos fazer uma seleção passando vários indexes dentro da expressão, `arr[[0, -1, 4]]` e que iso retorna um array com apenas os elementos especificados. Podemos também selecionar esse novo aray através de valores booleanos. Note que nesta situação é necessário apontar todos os valores possíveis do array: `arr[[True, False, False, False, True, True]]`.

Outra possibilidade é a utilização de operadores lógicos para definir uma expressão que filtre para nós o array: `arr[[arr >= 2]]`. Podemos explorar essa possibilidade buscando resultados como: `arr[[arr > arr.mean]]`. Podemos também utilizar outros operadores booleanos: `~`, `|` e `&`.

## Numpy Algebra

Passando rapidamente pela parte de algebra linear. O numpy já cobre pra nós as principais operações que precisamos utilizar, como `A.dot(B)`, `A @ B`, `A.T`, `B.T @ A`.
