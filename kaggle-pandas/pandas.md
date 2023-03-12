# Pandas

## Creating, Reading and Writing

De começo importamos o pandas com o `import pandas as pd` padrão mesmo. Existem dois objetos principais no pandas, o *DataFrame* e a *Series*.

Um DataFrame é basicamente uma tabela, vamos começar declarando um simples Dataframe de clubes e títulos
```py
import pandas as pd

clube_bh = pd.DataFrame({'Brasileirao': [4,2], 'Copa do Brasil':[6,2]}, index=['Cruzeiro', 'Atletico'])
```

Repare que utilizando o constructor `pd.DataFrame()`, a sintaxe para declarar os data frames é um dictionary no qual as keys são as colunas e os valores são os registros da nossa tabela. Note que o parâmetro index nos permite dar um nome identificando cada linha do data frame. Esse é o modo padrão de se declarar um novo DataFrame e o mais provável de ser encontrado.

Uma Series em contraste é uma sequência de valores. Se um DataFrame é uma tablea, então a Series é uma lista:
```py
brasileiros_cruzeiro = pd.Series([1966,2003,2013,2014])
```

Uma Series não é nada mais do que uma única coluna de um DataFrame, logo podemos da mesma maneira utilizar o parâmetro `index` para nomear nossas linhas.

Poder inserir os dados manualmente nos nossos DataFrames é legal e talz, mas no mundo real vamos lidar com arquivos externos para fazer isso. O mais basicão deles, o CSV, pode ser lido na nossa aplicação com `pd.read_csv(path)`.

Temos mais de 30 opções de parâmetros para o read_csv, entre elas o `index_col` nos permite indicar qual coluna pode ser utiilizada como o index da nossa tabela.

## Indexing, Selecting and Assigning

Assim como no python normal, no pandas podemos acessar propriedades (colunas) de um dataframe com a *dot notation*, mas isso também pode ser feito com os colchetes *[]*. Essas são duas maneiras de selecionarmos uma Series específica de um DataFrame.

Outra maneira de nos movimentarmos por um dataframe através de operações mais complexas, normalmente será com o `loc` e o `iloc`.

A indexação no pandas funciona dentro de 2 paradigmas. O primeiro é a seleção baseada no ndex numéricos, nesse contexto usamos o `iloc`. Note que diferente do Python onde primeiro vem as colunas e depois as linhas, aqui no Pandas temos o começo pelas linhas e posteriormente as colunas, logo para pegar a primeira coluna em todas as linhas temos: `my_df.iloc[:, 0]`.

O segundo paradigma nos permite localizar pelos rótulos atribuídos. Neste caso utilizaremos o `loc`.

Um ponto bem importante de diferença entre ambos. O `iloc` usa o Python stdlib, logo `[0:3]` significa o range de elementos 0, 1 e 2. Agora, para o `loc`, algo assim representaria 0, 1, 2 e 3.

Podemos realizar uma seleção condicional nos nossos dados, primeiro vamos entender que uma expressão de comparação envolvendo um Dataframe ou uma Series, retorna aquele shape com valores booleanos:
```py
product.Reviews > 7.5
```

Dentro de um `loc` essa expressão booleana funciona como uma cláusula WHERE em uma query SQL. Dentro deste `loc` podemos isolar essas operações em parÊnteses e adicionar operadores lógicos `&`, `|`.

Além das nossas próprias expressões, o Pandas entrega alguns sletores condicionais para que possamos utilizar. O `isin` nos permite passar uma lista de valores possíveis, funcionando como uma sequencia de `==`. Outras opções disponíveis são a duplinha `isnull()` e `notnull()`.

## Summary, Functions and Maps

O Pandas nos dá várias funções que reestruturam os dados para algo útil. Por exemplo temos o método `describe()`, que gera um sumário dos atributos de uma ou mais colunas com alguns dados estatísticos. Note que podemos isolar esses valores com métodos específicos como `mean()`, ou retornar uma lista de valores únicos com `unique()`.

Um map é um termo emprestado da matemática, indica uma função que recebe um conjunto de valores e "mapeia" eles para outro conjunto de valores, ou seja, usamos o map para levar os dados em um formato atual para algo qieremos.

Temos dois métodos principais de mapping mais utilizados. O primeiro, o `map()`, é o mais simples dos dois. Por exemplo se quisermos explorar a diferença do review dos produtos com a média:
```py
reviews_mean = products.reviews.mean()
products.reviews.map(lambda p: p - reviews_mean)
```

A função que passamos como argumento deve esperar um valor único vindo da Series e retorna a versão transformada daquele valor, no fim das contas o `map()` retorna uma nova series na qual todos seus valores foram transformadas pela nossa função.

O método equivalente a ser usado para transformar todo um dataframe pe o `apply()`, este irá chamar o método custom em cada linha.
```py
def remean_reviews(row):
  row.reviews = row.reviews - row.reviews.mean()
  return row
products.apply(remean_reviews, axis='columns')
```

Se ao invés do `axis='columns'` indicassemos uma mudança no index, deveráimos passar uma função que transformasse cada coluna.

Note que tanto `map()` quanto `apply()` não modificam a Series e o DataFrame original.

## Grouping and Sorting

Com os maps podemos tansformar os dados um por vez, em toda uma coluna. No entanto as vezes queremos agrupar os dados e aí sim, fazer algo com eles. Já vimos anteriormente o `value_counts()` que agrupa os valores iguais retornando a contagem, veremos agora que podemos replicar seu comportamento com:
```py
products.groupby('reviews').reviews.count()
```

Basicamente nós agrupamos os valores baseados na coluna revies, depois selecionamos a coluna e contamos suas aparições. Com esta ideia do `groupby()` podemos utilizar qualquer summary function.

Podemos pensar nos grupos gerados como uma fatia do nosso dataframe, sendo assim podemos passar um `apply()` ali tranquilamente.

Um método legal de conhecer é o `agg()` que nos permite rodar mais de uma função ao mesmo tempo nos nossos grupos:
```py
products.groupby(['category']).price.agg([len, min, max])
```

Para fazer a ordenação dos valores baseado em alguma coluna específica usamos:
```py
products.sort_values(by='reviews', ascending=False)
```

Note que por padrão os valores sção ordenados em ordem crescente, logo se quisermos outro comportamento isto deve ser indicado.

Podemos também ordenar pelos index com o `sort_index()` que tem a possibilidade de carregar os mesmos argumentos que o `sort_values()` aceita.

## Data Types and Missing Values

O tipo de dado de uma coluna em um dataframe ou de uma series é conhecido como `dtype`. Podemos acessar a propriedade `.dtype` para conferir o tipo das colunas. De maneira alternativa, podemos também acessar todos os tipos de um dataframe com o `.dtypes`, no plural.

Vale notar que strings não tem o seu tipo específico, elas são denotadas aqui como *object*. Podemos fazer uma espécie de type casting, desde que faça sentido, no retorno de uma query como o método `.astype('tipo')`.

Os index dos dataframes possuem os seus próprios dtype que também podem ser verificados com `.index.dtype`.

Uma entry sem um valor recebe por padrão o valor *NaN* que, por razões técnicas, recebe o tipo `float64`. Como substituir valores vazios é uma operação comum, o pandas já entrega um método para isso: `.fillna('UNKNOWN')`. Também temos opções como `.replace()` que recebe 2 argumentos, sendo o primeiro o valor que procuramos e o segundo sim o novo valor.

## Renaming and Combining

Direto vamos topar com dados que tragam nomes para colunas, index ou outras convenções de nomaeação que não nos agrade.

A primeira função que veremos para alterar isso é a `.rename()`, podendo ser usada para alterar tanto coluas quanto index:
```py
products.rename(columns={'reviews': 'score'})
products.rename(index={0: 'first_entry'})
```

As colunas até fazem mais sentido de serem renomeadas do que os index, para index usa-se mai o `set_index` mesmo.

Podemos também renomear os nossos eixos:
```py
products.rename_axis("products", axis='rows').rename_axis("fields", axis="columns")
```

Para combinar diferentes dataframes e series, o pandas disponibiliza 3 métodos diferentes, da mais fáil para a mais difícili temos: `.concat()`, `.join()`, `.merge()`.

Enquanto o concat junta dataframes que tenham o mesmo número de colunas, o join junta os dados pelas linhas, como um JOIN ON mesmo.