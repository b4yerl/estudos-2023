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

## Unidade II

### Inserindo, atualizando e excluindo dados

Podemos inserir, atualizar e excluir dados de uma tabela usando 3 comandos, sendo respectivamente: `INSERT INTO`, `UPDATE`, `DELETE`. Abaixo um exemplo de uso dos 3, mas atenção com o uso do `WHERE` para evitar um desastre apocalíptico.
```sql
INSERT INTO Nome_Tabela(coluna_1,coluna_2)
VALUES (valor_1, valor_2);

UPDATE Nome_Tabela SET coluna_1 = valor_3
WHERE coluna_1 = valor_1;

DELETE FROM Nome_Tabela WHERE coluna_1 = valor_3;
```

### Consultando Dados

Não vou trazer o padrão de `SELECT` para cá, tem tudo [aqui](../kaggle-sql).

No `SELECT` temos vários operadores de comparação, lógicos e de texto:
- **Comparação**: =, <>, <, >, >=, <=
- **Lógico**: AND, OR, BETWEEN, IN, NOT, IS NULL, IS NOT NULL
- **Texto**: LIKE

Também temos as funções agregadas, operações que nos permitem exibir seu resultado em uma nova coluna no retorno da query, as principais funções agregadas são:
- `AVG(Coluna)`
- `COUNT(Coluna)`
- `COUNT(*)`
- `MAX(Coluna`, `MIN(Coluna)`
- `SUM(Coluna)`

### Agregando dados em uma consulta

Muitas vezes, a compreensão do agregado geral dos dados não é suficiente para entender o seru comportamento, tendo a necessidade de visualizar partes do negócio. Perguntas que nos levam a isso, respondidas a partir de uma abordagem mais analítica, orientam tomadas de decisão mais fundamentadas. O SQL consegue manipular dados de forma relativamente rápida para nos entregar esses resultados. Cláusulas como `GROUP BY` e `HAVING`, tornam isto possível.

Dentro da estrutura do `SELECT`, elas aparecem assim:
```sql
SELECT coluna_1, coluna_2 FROM Tabela_1
JOIN ON Tabela_2
WHERE condicional
GROUP BY coluna
HAVING condicional
ORDER BY coluna;
```

### Junção de Tabelas

Para combinar dados presentes em tabelas separadas, temos acesso aos comandos `JOIN`. Um exemplo de seu uso em uma estrutura de `SELECT` seria:
```sql
SELECT X.coluna, Y.coluna
FROM X INNER JOIN Y ON X.id = Y.x_id
WHERE condicional
GROUP BY X.coluna
HAVING condicional
ORDER BY X.coluna;
```

Poderíamos também omitir o `JOIN`, passando apenas as tabelas que queremos no `FROM` e indicando as relações no `WHERE`. Lembrando que o modelo relacional é baseado na teoria dos conjuntos, logo temos opções de `JOIN` que possibilitam as operações necessárias, dividindo-os por operação temos:
- **Interseção**: Temos o `INNER JOIN` ou somente `JOIN`.
- **União**: Outro bem simples tendo apenas o `FULL OUTER JOIN` ou `FULL JOIN`.
- **Diferença**: Neste temos duas possibilidades, o `LEFT JOIN` e o `RIGHT JOIN`.

Outra possibilidade que temos é o uso do `CROSS JOIN` para extrair o produto cartesianos entre conjuntos, isso ocorre quando não é especificado a relação entre as tabelas, seja com `ON` ou com `WHERE`.

Além dos comandos de `JOIN` temos também a `UNION` para realizar operações de união entre mais de um comando `SELECT`. Para esete funcionar o número de colunas e o tipo armazenado nelas devem ser iguais em todos os `SELECT`. Lembrando que aqui tembém há 2 opções, o `UNION` para resultados distintos ou o `UNION ALL` que possibilita um retono com duplicatas.

### Concultas Aninhadas

Consultas aninhadas ou subquer, são blocos select-from-where completos dentro de uma outra query. Sempre aparecendo entre parenteses, a subquery é usualmente executada antes da quey externa.

As subqueries que retornam um valor único (escalar) podem ser comparadas com qualquer operador de comparação, enquanto subqueries que retornam uma lista de valores devem ser comparadas com operadores lógicos.

Temos basicamente dois tipos de subqueries:
- **Sem correlação**: Essas subqueries podem ser executadas sozinhas sem nenhum problema, pois não dependem de referências a colunas externas.
- **COm correlação**: Quando uma condição no `WHERE` da subquery referencia alguma coluna externa.

## Unidade III

### Transações e Propriedades ACID

A manipulação de dados, nam maioria das vezes, ocorre em ambientes com vários usuários. Esse contexto de várias operações ocorrendo ao mesmo tempo, caracteriza uma concorrência pelo uso de recursos computacionais que devem garantir a confiança de que os dados informados a uma aplicação sejam gravados corretamente ou que a consulta se apresente de forma adequada.

Assim nos DBMS, cabe ao Gerenciador de Transações a tarefa de gerenciar a sequência de operações de entrada e saída de dados nos vários bancos por ele controlados. E estas operações fazem parte de transações.

Uma transação é um unidade lógica de trabalho ou um programa em execução que forma uma unidade lógica de processamento de banco de dados. Ela inclui uma ou mais operalçies de acesso ao banco. Ou seja, uma transação é composta por um conjunto de comandos SQL, coerentes com uma situação de negócio.

Uma transação somente será concluída, se as operações que a compões forem bem sucedidas. Caso alguma operação falhe, a transação também não será bem sucedida, pois esta é indivisível.

Em um DBMS, o que delimita os limites de uma transação são os comandos `BEGIN TRANSACTION` e `COMMIT` ou `ROLLBACK`. Além destes temos a possibilidade de desvio de fluxo dentro da transaction com `IF` - `THEN GO TO` - `END IF`, essa sequência pode mandar o fluxo para o block `UNDO`, onde mora o `ROLLBACK`.

Quando se considera o ambiente multiusuário, independente da ocorrência de falhas, as transações devem ser gerenciadas para evitar que as aplicações acessem dados desatualizados. Para garantir um ambiente transacional seguro, os DBMS devem incorporar propriedades desejáveis em suas transações. Estas propriesdades são conhecidas como **ACID**:
- **Atomicidade**: Uma transação deve ser realizada em sua totalidade ou não ser realizada de forma alguma.
- **Consistência**: Uma transalçai de preservar a consistência. Ou seja, se a execução de uma transação for executada, sem a interferência de outras transaçoes, ela deve levar o banco de um estado consistente para outro.
- **Isolamento**: Uma transação deve ser executada separademente de outras transaões. Mesmo sendo executadas simultaneamente.
- **Durabilidade**: Mudanças efetivadas em um banco de dados, devido à confirmação da execução bem sucedida de uma trasnsação, devem persisteir no banco de dados.

### Segurança

A manipulação dos dados não deve ser permitida a qualquer pessoa, a depender da natureza do dado, somente algumas pessoas devem ter acesso a ele. As ameaças a um banco de dados podem resultar em:
1. Perda de Integridade
2. Perda de disponibilidade
3. Perda de confidencialidade

Para evitar esses problemas temos a DCL, principalmente ao redor de dois comandos.

Começando pelo `GRANT` que concede os privilégios a um usuário, esses privilégios tratam dos comandos básicos DML: `SELECT`, `INSERT`, `UPDATE` e `DELETE`. Para englobar todos essas autorizações podemos usar o `ALL`. Note também que devemos informar a quem essa autorização está sendo concedida, podendo ser um usuário específico, um grupo de usuários ou simplesmente todos o usuários, nesse caso usamos `PUBLIC`.
```sql
GRANT ALL ON Nome_Tabela TO PUBLIC;
```

Por último o `REVOKE` para revogar os privilégios concedidos, nesse caso a sintaxe é a mesma:
```sql
REVOKE ALL ON Nome_Tabel FROM PUBLIC;
```

Note que existem outros privilégios podendo apontar para outros objetos, mas estes não serão abordados aqui.
