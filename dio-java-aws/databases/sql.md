# Introdução a Banco de Dados Relacionais

O início do curso traz os conceitos básicos de um banco relacional, como: propriedades ACID, entidades, relacionamentos, cardinalidade, DER e MER, etc. Tudo isso pode ser encontrado nesses [microfundamentos aqui](../../puc-si-eixo-2).

## Modelagem de Dados Relacionais

Na hora de criar a tabela com o `CREATE TABLE` é sempre interessante que também adicionemos `COMMENT` para melhorar o entendimento dos nossos dados para qualquer um que posteriormente venha dar manutenção ou simplesmente quem venha operar o DB. Note que no PostgreSQL os comentários são feitos com um statement após tu criar as tabelas e colunas:
```sql
COMMENT ON COLUMN tabela.coluna IS 'Comentário sobre a coluna';
```

Para alterar uma tabela, podemos fazer a cria;'ao de uma nova tabela e depois migrar os dados, ou podemos alterar a tabela atual com o `ALTER TABLE`.

Com o `ALTER TABLE` temos uma penca de opções disponíveis para manipulação do estado atual da nossa tabela, por exemplo podemos alterar o tipo de uma coluna com:
```sql
ALTER TABLE minha_tabela ALTER COLUMN minha_coluna TYPE novo_tipo;
```

## Consultas Avançadas

Através da análise do plano de execução podemos analisar alguns dados referentes às nossas queries, para fazer isso usamos o `EXPLAIN`. Caso, por exemplo, o número de linhas consultadas durante nossa query seja muito alto, ou até mesmo todoas, temos um alerta de que ali talvez seja necessário um **index**:
```sql
CREATE INDEX idx_coluna ON tabela (coluna);
```

