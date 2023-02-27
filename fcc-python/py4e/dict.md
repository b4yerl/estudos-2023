# Dictionaries

## Introduction

Se compararmos a `list` ao `dictionary`, veremos que enquanto uma list é uma coleção linear de valores, seguindo uma ordem, um dictionary é uma mochila de valores, no qual os valores estão atrelados a rótulos, chaves.

Associado ao nosso dict temos o método `.get`, que aceita como argumentos a key que estamos procurando e um valor padrão de return, para o caso da key não existir.

## Dictionaries and Loops

Exixstem algumas maneiras de extrairmos as chaves de u dict como uma lista. A primeira é passando `list(my_dict)`, a lista gerada será uma lista de keys. Isso também pode ser feito com o método dos dict `.keys()`. Outro método existente, extrai os valores associados às chaves, o `.values()`. Por fim, podemos extrair o par completo como itens (tuplas) de uma lista usando `.items()`.

Em python temos uma possibilidade maneira de estabelecer 2 variáveis no loop, para assim extrair tanto a chave quanto o valor de um dict:
```py
days = { 'jan': 31, 'feb': 28, 'mar': 31}

for month,days_count in days.items():
  print(month, days_count)
```

