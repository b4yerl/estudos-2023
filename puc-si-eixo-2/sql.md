# Manipulação de Dados com SQL

## Unidade I

### Conceitos Básicos

Com o início de sua história na década de 70, o SQL se tornou o padrão para manipulaçõa de dados em bancos de dados relacionais. A Structured Query Language é uma linguagem declarativa de alto nível.

Composto por vários comandos, o SQL é dividido em 3 grupos principais: DDL, DML e DCL. A **Data Definition Language** é onde definimos os dados com as instruções para manutenção da estrutura dos bancos de dados, como tabelas e suas colunas, views e indexes. A **Data Manipulation Language** é a que utilizamos para manipular os dados existentes ou que serão inseridos. Por fim a **Data Control Language** contém as intruções para o controle de acesso aos dados.

### DDL

Para começo de conversa, precismos do database em que iremos trabalhar, para isso usamos o comando `CREATE DATABASE Nome_Database;`. A partir daí podemos nos conectar ao DB e começar a criação das tabelas.

A criação de tabalea para um fornecedor, por exemplo, pode ser feita com:
```sql
CREATE TABLE Fornecedor (
  Codigo char(3) PRIMARY KEY,
  Nome char(20)
);
```

Agora um exemplo de uma tabela para os produtos em um DB:
```sql
CREATE TABLE Produto(
  CodigoProduto char(3) PRIMARY KEY,
  NomeProduto char(30),
  PrecoProduto numeric(6,2),
  Categoria char(3),
  Fornecedor char(3),
  CONSTRAINT FK_Produto_Categoria FOREIGN KEY (Categoria) REFERENCES Categoria(Codigo),
  CONSTRAINT FK_Produto_Fornecedor FOREIGN KEY (Fornecedor) REFERENCES Fornecedor(Codigo)
);
```

Vamos agora para os comandos que permitem a alteração da estrutura do banco de dados, começando pelo `ALTER TABLE`. Podemos com ele definir uma CONSTRAINT, como uma FK, ou alterar o nome de uma coluna:
```sql
ALTER TABLE Nome_Tabela
ADD CONSTRAINT Nome_Constraint
FOREIGN KEY (Coluna) REFERENCES Tabela_2(Coluna_2);

ALTER TABLE Nome_Tabela
RENAME COLUMN Coluna TO Novo_Nome;
```

Podemos também facilmente remover uma tabela do nosso database com o comando `DROP TABLE Nome_Tabela`. Agora note que temos também um comando para apagar as linhas, os registros, de uma tabela, sem ter que remove-la do DB, no caso o `TRUNCATE TABLE Nome_Tabela`.
