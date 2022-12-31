# Intro to SQL

### Getting started with SQL and BigQuery

Structured Query Language, ou só SQL, é a linguagem de programação utilizada em databases.

Aqui é utilizado o o BigQuery, serviço web que permite o uso de SQL em grandes daasets.

Um dataset é só uma coleção de tabelas. Dá pra pensar nele como um arquivo excel com várias planilhas.

A estrutura de uma atbela é o seu schema. Precisamos compreender o schema para efetivamente extrair os dados que queiramos.

### Select, From, Where

A mais básica query SQL, buscar uma coluna de uma tabela
> SELECT ... FROM ...

O WHERE é um filtro para puxar apenas informações que atendam a condições específicas. Por exemplo, uma busca por filmes lançados em 2007 em uma tabela 'movies'
> SELECT * FROM movies WHERE year = 2007;

### GROUP BY, HAVING e COUNT

Já vimos como selecionar dados brutos, agora vamos agrupar esses dados e contar coisas.

COUNT() retorna uma contagem de algo, se como parâmetro passarmos um nome de uma coluna, ele retorna a quantidade de entradas na coluna. COUNT() é um exemplo de uma função agregada, que recebe vários valores e retorna um. Outros exemplos são: SUM(), AVG(), MIN(), MAX().

GROUP BY recebe o nome de uma ou mais colunas e trata todas as linhas com aquele valor como um úncio grupo para funçoes como COUNT().

Por exemplo na nossa tabela de movies, poderíamos fazer uma busca para descobrir quantos filmes foram lançados em cada ano combinando essa ideia de COUNT() e GROUP BY
> SELECT year, COUNT(id) FROM movies GROUP BY year;

O resultado seria uma tabela de 2 colunas, a primeira traria os anos e a segunda a quantidade de filmes lançados em cada ano.

HAVING é usado em conjunto com GROUP BY para ignorar grupos que não atendam a certo critério
> SELECT year, COUNT(id) FROM movies GROUP BY year HAVING COUNT(id) > 1000;

Podemos gerar um alias para a nossa coluna de COUNT() adiconando um AS ... logo após sua definição. Outro ponto é a possibilidade de usar COUNT(1), o que isso faz é contar a quantidade de linhas dentro do grupo, iss é especialmente útil quando não sabemos o que colocar no parâmetro.

Quanto ao GROUP BY, note que não faz sentido utilizar o GROUP BY sem uma aggregate function, assim como, caso haja um GROUP BY, então todas as variávei devem ter sido passadas pra ele ou pra uma aggregate function.

### ORDER BY

Normalmente a última cláusula da query, ordena o resultado retornado pelo resto da nossa query.
> SELECT year, COUNT(id) FROM movies GROUP BY year ORDER BY COUNT(id);

Não apenas em colunas numéricas, ORDER BY também funciona para ordenar alfabeticamente. Podemos reverter a ordem usando o DESC no final.

Quando lidamos com datas temos o tipo DATE e o DATETIME, no primeiro temos apenas YYYY-MM-DD, já o segundo traz junto as horas.

Para extrair apenas uma informação dessa data podemos usar a função EXTRACT().
> EXTRACT(DAY from OrderDate)

Além de informações explicitamente isponíveis, podemos pedir coisas como EXTRACT(WEEK), EXTRACT(DAYOFWEEK), etc.

### AS e WITH

A medida que as queries vão ficando maiores e mais complexas, elas também tendem a ficar mais complicadas de serem lidas e debugadas. Para facilitar a leitura usamos AS e WITH.

Como já foi visto podemos usar o AS para gerar um alias, paara que isso seja feito basta inserir o as após o campo selecionado
> SELECT AVG(cost) AS avg_cost_per_studio

Quando sozinho o AS é útil para limpeza dos dados retornados na query, mas pode ser mais forte junto ao WITH, gerando uma CTE (common table expression).

Uma CTE é uma tabela temporária que nos permite separar nossas queries em blocos legíveis que além de tudo, ainda podem receber outras queries.

Toda a busca feita com CTE poderia ser feita sem seu uso, mas se ela for a primeira parte de uma longa busca, torna-se cada vez mais difícil de ir acompanhando o raciocinio. Logo qualquer query que utilize CTE passa obrigatoriamente por 2 passos
- Criar a CTE com WITH... AS ()
- Escrever a query que mira o CTE

### Joining Data

Agora já temos as ferramentas para obter a informação de uma tabela no formato que queiramos, mas para múltiplas tabelas precisamos do JOIN.

Para que haja relação entre as tabelas precisamos de um campo em comum, uma FOREIGN KEY. Uma query juntando duas tabelas poderia ser algo como:
> SELECT movies.title AS movie, directors.name AS director
> FROM  movies INNER JOIN directors
> ON movies.director_id = directors.id

Essa query retorna uma tabela com informações que batam o id do diretor em uma com o da outra. Na busca é o ON que indica quais colunas devem ser verificadas para juntar as tabelas.

INNER JOIN é um tipo de JOIN, ele indica que uma linha só vai para a tabela de output se o valor do ON estiver presente em ambas as tabelas. Por exemplo um diretor que não tenha seu id ligado a nenhum filme, não aparece na tabela final.

One last thing, no WHERE podemos usar LIKE '%%', tmj :)


