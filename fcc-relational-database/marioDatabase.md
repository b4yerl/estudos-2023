# Learn Relational Databases by Building a Mario Database

### PostgreSQL

Para esse curso iremos nos comunicar com o PostgreSQL pelo terminal, para isso realizamos o login como o comando psql.

Note que o prompt do terminal indica em qual database estamos interagindo.

Podemos listar os databases presentes com o \l. Parar criar a nossa entramos com o seguinte
> CREATE DATABASE 'nome';

Para nos conectar temos o atalho \c 'nome', a partir daí podemos listar as tabelas presentes no banco com o atalho \d. Para criar novas tabelas usamos o modelo básico:
> CREATE TABLE 'nome'();

Com a tabela criada podemos ir mais a fundo e ver mais detalhes com o \d 'nome_da_tabela'.

Para alterar ma tabela criada e assim adicionar novas colunas podemos seguir o seguinte padrão:
> ALTER TABLE nome_tabela ADD COLUMN nome_coluna TYPE;

Podemos remover colunas basicamente com a mesma expressão, alterando apenas o ADD trocando por DROP e removendo o tipo.

Podemos procurar uma lista de tipos, mas entre os mais comuns temos INT e VARCHAR(n).

Casa precisemos renomear uma coluna, podemos também fazer isso com alter table:
> ALTER TABLE 'nome_table' RENAME COLUMN 'antigo' TO 'novo';

Com nossa tabela pronta podemos inserir dados com a seguinte query:
> INSERT INTO 'nome_tabela' ('col1', 'col2') VALUES ('x', 'y');

A parte de SELECT não vou trazer pra cá, tem lá no [Intro do SQL do Kaggle](../kaggle-sql/intro/), caso seja coisa nova eu boto aqui :)