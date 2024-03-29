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

Para apagar uma tablea do nosso databse, basta usar o DROP TABLE seguido pelo nome da tabela.

Assim como temos os comandos com TABLE podemos interagir com o DATABASE, por exemplo
> ALTER DATABASE 'old' RENAME TO 'new';

Temos aqui a opção o tipo SERIAL para os Ids. Isso indica que a coluna é um inteiro não nulo que deve ser incrementado por 1.

Podemos atualizar os dados de uma tabela usando:
> UPDATE 'tabela' SET 'coluna'='valorNovo' WHERE 'condição';

Para adicionar uma PRIMARY KEY a uma tabela basta usar:
> ALTER TABLE 'tabela' ADD PRIMARY KEY('coluna');

Podemos também adicionar uma foreign key com:
> ALTER TABLE 'tabela' ADD COLUMN 'nome' TYPE
> REFERENCES 'outraTabela'('colunaQueAponta');

Outra opção quando criamos tabelas é passar já na criação as colunas que queremos com
> CREATE TABLE tabela(coluna TYPE CONSTRAINT);

Aqui na tabela sounds estamos vendo uma relação "one-to-many", quando um personagem pode ter váris sons, mas os sons não podem ter vários personagens, tendo cada som apenas 1 foreign key.

Agora veremos a relação "many-to-many", normalmente para ligar 2 tabelas com esse tipo de relação nós utilizamos uma junction table.

A junction table terá 2 colunas como FOREIGN KEYS, esssas coluna vão ligar os 2 id relacionados na mesma linha e então teremos uma COMPOSITE KEY, ou seja, uma PRIMARY KEY compost da combinação dos 2 valores.

Para finalizar essa etapa vamos dar um join para ver os dados linkado através de uma foreign key.
> SELECT colunas FROM tabela1 FULL JOIN tabela2 ON
> tabela1.colunaPrimaryKey = tabela2.colunaForeignKey;

Já quando a relação é many-to-many o JOIN ficaria algo assim:
> SELECT colunas FROM junction
> FULL JOIN tabela1 ON junction.colunaForeignKey = tabela1.colunaPrimaryKey
> FULL JOIN tabela2 ON junction.colunaForeignKey = tabela2.colunaPrimaryKey;
> 