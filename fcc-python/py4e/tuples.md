# Tuples

## The tuples collection

Tuplas são outro tipo de sequência que funciona de forma muito similar a uma list, ambas tendo index em 0. Agora diferentemente de uma lista, quando uma tupla é criada, não podemos alterar seu conteúdo, parecido com uma string, sendo também imutáveis.

Sendo as tuplas apenas listas, muito limitadas já que não podemos alterar nada, apenas ver e contar, por quÊ utilizar isso? A questão nesse caso é que devido a essa simplicidade, a tupla é uma estrutura mais eficiente em termos de uso de memória e feiciência.

Podemos por exemplo fazer algo semelhante ao que fazemos em javascript quando desejamos inverter a posição de valores em variáveis, utilizando tuplas:
```py
# Trecho do algoritmo de bubble sort
if arr[i] > arr[i + 1]:
  (arr[i], arr[i + 1]) = (arr[i + 1], arr[i])
```

## Comparing and Sorting Tuples

Como temos a possibilidade de comparar tuplas, temos então a possibilidade de ordenar uma lista de tuplas, da mesma maneira, usando o método `.items()`, temos a possibilidade de visualizar um dictionary ordenado. Podemos inclusive gerar a lista invertendo a tupla para posteriormente ordenar o dict pelo valor.

Agora, podemos fazer isso de forma procedural, indicando cada passo necessário, bem na pegada clássica de DSA, ou temos a opção de partir pra `list comprehension`.

```py
print(sorted( [ (v,k) for k,v in words.items() ] ))
```

Quando fazemos o código desta maneira estamos usando a idei de list comprehension, ali em os colchetes, indicamos pro python que temos uma lista, mas ao invés de explicitamente declarar a lista, a criamos de forma dinâmica para o próprio python interpretar o que queremos.

No caso representado acima, podemos traduzir a expressão da seguinte maneira:
> Faça uma lista de tuplas (v,k) para cada par k,v presente em words.items()
