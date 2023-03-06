# Pandas

## Pandas Introduction

Pandas é a lib mais importante para as análises. Com Pandas iremos coletar os dados a partir de diversas fontes, poderemos processar esses dados, visualizar e criar reports, tudo utilizando o Pandas.

Pandas tem basicamente duas estruturas que utilizaremos muito, series e data frame. Para começar, importamos o pandas e o numpy.

Começando pelas series, temos a ideia de de uma coleção de valores indexados, que apesar de parecer uma list, é uma paradinha diferente. Podemos reparar que ela carrega um dtype assim como nossos np.array. Outra propriedade que podemos adicionar para a nossa series é o seu nome.
```py
import pandas as pd
import numpy as np

g7_pop = pd.Series([35.467, 63.951, 86.940, 68.685, 127.061, 64.511, 318.523])

g7_pop.name = "G7 Population in millions"
```

Com o `.values` podemos checar um np.array com os valores armazenados nas series, o ponto é que essa estrutura em si está muito mais próximo de um dict do que de um array do numpy. Apesar de inicialmente nossas series serem indexadas a partir de 0, nós podemos alterar esses indexes arbitrariamente.
```py
g7_pop.index = [
  'Canada',
  'France',
  'Germany',
  'Italy',
  'Japan',
  'UK',
  'US'
]
```

A grande diferença para os dictionaries é que as series mantem a ordem com que os valores foram definidos. Para acelerar o processo podemos criar as series já passando o index que queremos, faznedo-o como um dict seria declarado mesmo.

## Pandas Indexing and Conditional Selection

Mesmo com os indexes tendo sido definidos, nós ainda podemos procurar um elemento baseado na sua ordem sequencial, para isso usamos o comando `.iloc[index]`. Assim como o numpy, no pandas também podemos usar o multi index para retornar vários elementos por consulta.

**IMPORTANTE**, no python, o limite de um slice `[x:m]` não é incluído, servindo como uma barreira, já em pandas o m em questão também seria incluído no retorno.

Assim como os Arrays do Numpy, também podemos realizar operações booleanas e aritméticas nas series do pandas.

## Pandas Dataframes

DAta frames são muito similares em aparência a uma planilha excel, com linhas e colunas. A similaridade disto com o que vimos de series, é que uma coluna de um data frame é basicamente uma series:
```py
import pandas as pd
import numpy as np

clubes_bh = pd.DataFrame({
  'Brasileiros': [4, 2, 0],
  'Fundacao': [1921, 1908, 1912]
}, columns=['Brasileiros', 'Fundacao'])

clubes_bh.index(['Cruzeiro', 'Atletico', 'America'])
```

Temos algumas propriedades e métodos possíveis para os nossos data frames, alguns já conhecidos como o shape, o size, o dtype, mas temos coisas como o `.describe()` que retorna uma espécie de sumário com as principais estatísticas relacionadas ao data frame para cada coluna numérica.

Com o método `.loc[Nome_index]` podemos selecionar os dados de uma linha inteira, o mesmo pode ser feito com `.iloc(index)`. Outra op~ap é selecionar uma coluna asim como faríamos para series e arrays.

## Pandas Creating Columns

Costumeiramente precisamos criar novas colunas, as vezes dados derivados, nos nossos data frames para uma melhor visualização do que precisamos. Como podemos realizar operações entre series podemos tranquilamente fazer algo como `df['PIB per capita'] = df['PIB'] / df['Populacao']`.

Vamos a uma introdução rápida quando ao input de dados externos como o método `pd.read_csv(path)`, nesse método podemos usar algumas propriedades como `headers=None`, ou então `parse_dates=True` e até `names=['Coluna 1', 'Coluna 2']` quando o CSV não traz as colunas.

Pandas tem uma integração com o matplotlib, por isso podemos plotar um gráfico passando um simples `df.plot()`.
