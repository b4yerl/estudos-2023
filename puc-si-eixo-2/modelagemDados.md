# Modelagem de Dados

## Unidade I

### Fundamentos de Banco de Dados

Quando vamos modelar um banco de dados, precisamos ter em mente em primeiro lugar, quem vai usar este banco e o porquê de precisar usá-lo.

Antes do aparecimento dos DBMS a única opção possível para manipular dados era o enfoque em arquivos, onde cada aplicação era proprietária da sua base de dados particular. Neste modelo os arquivos eram projetados tendo em mente apenas a sua função específica, isso trazia problemas como:
- Redundância de dados
- Inconsistência de dados
- Dificuldade de aproveitamento de dados em novas aplicações
- Dificuldade do acesso a dados
- Falta da visaão de administração de dados

Note qu banco de dados trata-se de um conceito, de uma maneira de persistir e lidar com dados integrados que serão utilizados por uma comunidade de usuários, já o DBMS, esse sim trata-se de uma tecnologia, um software que permite a criação e manutenção de um DB.

Um esquema de banco de dados precisa de uma linguagem para ser construído (DDL) ew uma outra para ser manipulado (DML)
- Data Definition Language: Permite a especificação de um DB, criando, alterando e deletando as estruturas, suas relações e as variávis dos rgistros.
- Data Manipulation Language: Esta é a linguagem que permite a manipulaçõa dos dados, seja para consulta, inserç~ao, atualização ou remoção destees dados. A DML pode ser de dois tipos: Procedural, onde o user deve especificar qual dado é necessário e como obtê-lo e a Não procedural, aqui o user não define como os dados serão acessados.

Administrador de Dados (DA)
- Visão mais lógica de modelagem "Arquiteto"
- Define a estrutura de informação da empresa (base de dados)
- Admiistra a descrição da base de dados (dicionário de dados)
- Define padrões para codificação de objetos da base de dados (tabelas, nomes de campos)
- Zela pelo modelo corporativo de dados
- COnhece profundamente as regras de negócio da empresa

Database Administrator (DBA)
- Visão masi física da impementação
- Perfil de analista de suporte
- Gerencia a base de dados instalada
- Modifica a estrutura de armazenamento e a organização física
- Fornece e controla as autorizações de acesso ao DBMS
- Administra o DBMS
- Deve ser especialista no DBMS

Dev
- Coletas os requisitos e necessidades de informação do usuário final
- Desenvolve os sistemas que acessam os bancos de dados
- Trabalha conjuntamente com o DA na modelagem do DB
- Trabalha conjuntamente com o DBA na implementação do DB

Usuário Final
- Acessa o banco para consultas, atualizações e geração de relatórios
- Diferenças entre nível operacional e gerencial

O DBMS pode ser dividido em 3 níveis:
Nível Interno ou FIísico
- Nível mais baixo, pois desreve como os dados estão realmente armazenados
- Trata da alocaçãop de espaço em disco, uso de índices para melhorar performance
- Principal nível de atuação do DBA

Nível Conceitual ou Lógico
- Descreve quais dados ão armazenados no DB e quais os relacionamentos entre eles
- Baseado na modelagem de dados
- Principal nível de atuação do AD

Nível Externo ou de Visão
- Visão de cada user, seja um dev ou usuário final
- Os usuários necessitam de apenas uma parte do DB.
- Podem haver diferentes visões providas para um mesmo sistema de DB.

A `Independência física` ocorre quando alterações no nível físico não provocam modificações no nível conceitual (ex: Criação de índices). Já a `Independência lógica` ocorre quando alterações no nível conitual não provocam modificações no nível de visão.

São 3 as etapas do projeto DB. O `Projeto conceitual`descreve a estrutura de informação sem se preocupar em qual DBMS a base vai residir. Aqui é feita a definição dos tipos de dados que o sistema manipula e como esses dados se realcionam. O `Projeto lógico` detalha e descreve um modelo de dados gerado na fase anterior para uma determinada classe de DBMS (relacional, OO, rede, etc). Por fim, o `Projeto Físico` define de que maneira o projeto lógico será fisicamente armazenado, ou seja, definição de espaçõ em disco, periodicidade de backups, número de perfis de usuários que terão acesso aos dados, etc.

### Modelo de Entidades e Relacionamentos (M.E.R.)

O modelo conceitual define quais dados podem aparecer no banco de dados, mas não como esses dados estão armazendos. O modelo E-R é um tipo de modelo conceitual, baseado na percepção do mundo real e composto de entidades e relacionamentos. O modelo E-R possui grande capacidade semântica, facilitando a compreensão do usuário leigo e a validação dos dados da aplicação a ser modelada.

A notação utilizada aqui, para representar o modelo de dados é a notação de Peter Chen

**Entidades** são objetos do mundo real ou estruturas abstratas de informação. A entidade é representada por um retângulo nomeado (substantivo) que designa todo um conjunto de instâncias similares. **Atributos** são elementos de dados que identificam e descrevem entidades. São representados por uma eclipse nomeada, estes podem ser de vários tipos:
- Simples: indivisíveis (CPF, Altura, Preço)
- COmposto: divisíveis em subpartes menores, que representam atributos mais básicos, com significados independentes e que podem formar uma hierarquia (Telefone = Código do país + DDD + Número de telefone)
- Monovalorados: Possuem um único valor para uma dada entidade
- Multivalorados: múltilps valores para uma dada entidade, estes representados por uma elipse dupla (vários e-mails por exemplo)
- Derivados: Computados a partir de outros atributos ou entidades, representado por uma elipse pontilhada (Idade de alguém, IMC, Total de uma nota fiscal)
- Chave: Atributo cujos valores são distintos nas ocorrências da entidade, representado como um atributo grifado. Algumas vezes precisamos de mais de um atributo para compor uma chave úncia, agência e conta por exemplo, nestes casos temos a chamada chave composta.

Um jeito legalzim ensinado para diferenciar atributos de entidades é entender a relação entre eles, por exemplo quando olhamos o pulo do gato, pulo é o atributo e do gato aponta para a entidade gato. Nessa mesma lógica temos o nome do cliente, a nota do aluno, os juros do empréstimo.

**Relacionamento** é uma asociação entre uma ou várias entidades com determinado significado. Dois conceitos importantes de compreendermos são:
- Cardinalidade: propriedade do relacionamento que expressa o número de ocorrências de uma entidade que participam do relacionamento com outras entidades. Pode ser um-um, um-muitos, muitos-um ou muitos-muitos.
- Totalidade: é uma propriedade que especifica se a existência de uma entidade depende de seu relacionamento com outra entidade, podnendo ser parcial (opcional) ou total (obrigatório).

A representação gráfica dos relacionamentos é dada através de um losango nomeado, essa nomeação as vezes tem um nome legal, mas muitas vezs vai só cair no possui/pertence.

A representação da cardinalidade é feita através de um par `(min, max)`, note para a ordem correta de leitura:
- Lê-se primeiro a entidade a esquerda
- Depois a relação
- Então temos o mínimo e o máximo do lado oposto
- E por fim a entidade a direita.

A mesma ideia de ordem vale para o outro lado, ou seja, sempre lemos primeiro a relação e depois o (min, max).

**Entidades Fracas**: Tipos de entidades que não têm chave própria. As instâncias são identificadas por meio do relacionamento com entidades de outro tipo (identificador), juntamento com os valores de alguns atributos (chave parcial). Precisa de entidade forte para definir sua identidade. **Atributos de relacionamento** são atributos específicos derivados da associação. Na maioria das vezes, os relacionamento são binários (grau 2), mas são possíveis também os relacionamentos de maior grau.

A representação gráfica da entidade fraca é um retângulo com borda dupla. Entidades fracas dependem da entidade forte para definir a sua identidade, por exemplo, uma agência depende de um banco para que sua existência faça algum dentido, mesmo tento um número que a identifica, sem um banco isso não significa nada.

Atributos de relacionamento é mais comum em relações muitos pra muitos. Por exemplo, tendo um *Funcionário* que **atua** em um *Projeto*, sua função no projeto poderia ser um atributo dessa relação. Um *médico* que **consulta** um *paciente* em um hospital, pode ter definida a data, ou uma receita de medicação como atributo deste relacionamento.

Apesar da existência de um relacionamento ternário, ele pode ser dividido em vários relacionamentos binários, isso vai depender do projeto definido àqueles dados. Note também que nessas situações o direcionamento da pergunta é muito importante para a definição de uma cardinalidade.

Alguns conceitos importantes para aprofundar-mos no MER
- **Generalização**: Processo de definição de um tipo de entidade generica.
- **Especialização**: Processo de definição de um conjunto de subclasses de umt ipo de entidade.
- **Disjunção**: Subtipos podem ser subtipos disjuntos ou sobrepostos.
- **Completude**: A completude do supertipo em relação aos subtipos pode ser total ou percial, também chamada de totalidade ou obrigatoriedade.

A disjunção representa o OU exclusivo (XOR), aqui cada entidade do supertipo pode pertencer no máximo a um subtipo de especialização. Ao contrário disso a sobreposição representa o OU inclusivo (OR), ou seja, cada entidade do supertipo pode pertencer a mais de um subtipo.

Quanto à questão da completude representa se o supertipo deve obrigatoriamente pertencer a um subtipo ou se ela pode existir por conta própria, isso é representado pela linha simples ou pela linha dupla ligando o supertipo ao indicador de  disjunção.

## Unidade II

### Modelo Relacional de Banco de Dados

O modelo relacional é um teoria implementada pelos DMBS ditos relacionais à sua maneira. O banco de dados aqui é entendido como um conjunto de relações (tabelas), sendo que a relação é uma tabela de valores, na qual cada linha representa uma coleção de dados relacoinasdos.

**Domínio** é um ocnjunto de valores válidos de um atributo. É um conceito lógico que se sobrepõe ao tipo físico do atributo, é então, um conceito lógico e tipo de campo um conceito físico.(enum?)

Chaves candidatas são atributos ou um conjunto deles que definem unicamente e minimamente cada tupla da relação. Já a **Chave primária** é uma coluna ou combinação de colunas cujos valores distinguem uma linha das demais dentro de uma tabela. Também existe o conceito de Chave alterenativa (unique key - UQ), são basicamente as candidatas derrotadas pra eleição de PK.

As **tuplas** são as linhas de uma relação que precisam ser distintas. Note que a ordem nas quais as colunas são ordenadas não fazem diferença para a tupla.

A quantidade de atributos/colunas, define o grau da relação/tabela. Os valores do atributo são atômicos, ou seja, uma interseção linha x coluna, só pode resultar em um único valor. Para atributos multivalorados temos que tomar outros caminhos para solucionar essa questão, isso será abordado mais a frente.

A **chave estrangeira** FK, é a implementação física de um relacionamento do M.E.R. em um DB relacional, tendo ela as seguintes condições:
- A FK deve possuir o mesmo domínio (tipo de dados) da PK.
- Um valor de FK deve referenciar um valor válido de PK (t1[FK] = t2[PK]) ou pode ser nulo.

As **restrições de integridade** não devem ser violadas em operações de atualização do DB:
- **Integridade de Domínio**: O valor de um campo deve obedecer a definição de valores admitidos para a coluna.
- **Integridade de Entidade**: nenhum componente de uma PK pode ser nulo
- **Integridade de Chave**: não são admitidos valores repetidos da PK.
- **Integridade Referencial**: FK é um valor válido de PK ou é nula.

Enquanto as entidade do MER viram as tabelas, os relacionamentos são apresentados no formato de FK.

A exclusão de uma tupla pode ser bloqueada para evitar a violação da integridade referencial, por exemplo um departamento com 20 pessoas apontando pra ele, pode ter sua remoção do sistema bloqueada por uma restrição.

Podemos nessas situações configurar alguns triggers:
- `ON DELETE SET NULL` faz com que ao ter o departamento apagado, o empregado nele lotado passe a ter a FK definida como null.
- `ON DELETE SET DEFAULT` neste caso a FK já seria alterada para o valor padrão definido.
- `ON DELETE CASCADE` isso gera a remoção em cascata, varrendo os funcionários junto com o departamento.

Também temos a possibilidade de configurar esses triggers com o `ON UPDATE`.

### Mapeamento do M.E.R. para o Modelo Relacional

**Mapeamento de Entidade Regular**
- Para cada entidade forte criar uma tabela com todos os atribuos da entidade (atributos simples e componentes simples de um atributo composto).
- Escolher um ou mais atributos para ser a PK.

**Mapeamento de Atributos Multivalorados**
- Criar uma tablea para um atributo multivalorado A.
- Incluir na tabela o atributo A.
- Incluir a PK da entidade que tem A como atributo como a FK da tabela.
- A PK desta tabela será formada pela combinação de A com sua FK.

**Mapeamento de Entidade Fraca**
- Para cada entidade fraca que se liga a uma entidade forte, criar uma tabela que inclua todos os seus atributos.
- Incluir como atributos de FK os atributos PK da entidade proprietária.
- A PK desta tabela deverá ser a combinação da chave parcial da tabela fraca com a PK da tabela proprietária.
- Usualmente temos o efeito cascata associado a essa relação.

**Mapeamento de Relacionamentos**
- Para um relacionamento binério 1:1 entre entidades, escolhe-se usualmente uma das tabelas e inclui-se como chave estrangeira a chave primária da outra.
- Para um relacionamento binário regular (sem a presença de entidades fracs) 1:N, identifica-se a tabela da entidade no lado N do relacionamento e inclui-se nesta a PK da outra tabela como FK.
- Para relacionamentos N:N, deve-se crar uma nova tabela para representar o relacionamento, inclui-se como FK as PK das tabelas relacionadas e define como PK a cpmbinação de ambas, neste caso inclui-se também os atributos da relação na nova tabela.
- Em um relacionamento N-ário (terciário por exemplo) seguimos a mesma ideia no N:N, criamos uma nova tabela com FKs referenciando as entidades relacionadas e uma PK composta pelas N FKs. Da mesma maneira incluímos também os atributos da relação na nova tabela.

Para a questão de supertipos e subtipos, entenda que o modelo relacional não implementa nativamente a ideia de herança, ao contrário do banco orientado a objetos, logo faz-se necessário também o mapeamento aqui. Temos 3 opções clássicas aqui.
- Opção 1: Tabela única para o supertipo que absorve todos os atributps possíveis dos subtipos, incluindo uma flag para indicar a qual tipo aquela tupla se trata.
- Opção 2: Tabelas separadas representando os subtipos, nesses casos não temos o supertipos, a solução é rebater os atributos para as N novas tabelas.
- Opção 3: Tabelas representando cada entidade, nessa situação os subtipos carregam como FK a referência ao seu Supertipo.

### Normalização de Banco de Dados

Normalização é um rocesso para avaliar e corrigir estruturas e tabelas de modo a minimizar as redundÇancias de dados, reduzindo assim a probabilidade de anomailas.

Entenda como um conjunto de testes feitos nos modelos relacionais para verificar se eles estão de acordo com as propriedades fundamentais do modelo.

**1ª forma normal**
- Um esquema de relação está na primeira forma normal se todos os seus atributos forem atômicos.
- Impedimento para a criaçlão de atributos multivalorados ou grupos repetitivos.
- Cada linha tendo sua PK
- Linhas distintas entre si não havendo PK repetida.

Quanto a depêndencia funbcional: Se conhecermos o valor de um atributo X, sabemos o valor do Y associados, logo Y é funcionalemnte dependete de X, X determina Y.

**2ª forma normal**
A segunda forma normal aplica-se somente às relações em que temos uma PK composta. Caso tenhamos uma relação já na 1FN e sua PK é formada apenas por um atributo, ela então já atende a 2FN.

- Analisa se algum atributo possui dependência parcial da PK
- Uma relação encontra-se na 2FN se e somente se estiver na 1FN e não contiver dependências parciais

Traduzindo para a linguagem de ós meros humanos. Imagine uma tabela Pedido_Produto que tenha o número do pedido, o código do produto e o nome do produto. Como o nome do produto não é uma informação que dependa dessa união, ele já está ligado ao código do produto, logo isso indica uma dependência parcial, sendo assim nossa tabeça não estaria na 2FN. Um outro exemplo seria Funcionario_Projeto com o CPF e o código do projeto, as horas trabalhadas dependem totalmente dessa relação, diferentemente do nome do funcionário que no caso depende apenas do CPF.

**3ª forma normal**
Um esquema de relação está na 3FN se estiver na 2FN e nenhum atributo não pertencente a uma chave for transitivamente dependente da PK. Dependência transitiva ocorre quando uma coluna depende de outra, ou de um conjunto de outras colunas, que não seja a PK.

*Todos os atributos que não pertencem à PK dependem exclusivamente da PK.*

## Modelagem de Dados em Bancos Não-Relacionais

Antes de entrarmos de verdade nos Não-Relacionais vamos ao conceito de modelo de dados:
> Modelo de dados é uma coleção de ferramentas conceituais para descrição do sdados, seus relacionamentos, suas restrições de consistência e semântica.
> Um DBMS deve suportar um modelo de dados

Os bancos No-SQL surgem em um cenário de grande volume de dados não estruturados demandados por aplicações web, sua arquitetura favorece o escaçonamento de máquinas distribuídas na nuvem e replicação. Muito usados também para aplicações de Big Data.

Dentro dos bancos No-SQL temos opções baseadas em colunas, grafos, documentos, key-value etc. Um Sistema key-value é um sistema que fornece uma maneira de armazenar ou atualiazr um registro com uma chave associada e recuperar o registro a partir dessa chave.

Alguns exemplos de DBMS NoSQL:
- **Key-Value**: RocksDB, Aerospike, redis
- **Documento**: mongoDB, Couchbase
- **Coluna**: Google Big Table, Cassandra, amazon DynamoDB, Apache HBase
- **Grafo**: JanusGraph, neo4j

No modelo de documentos os registros não precisam ter uma estrutura uniforma. Registros distintos podem ter coleções de atributos diferentes. É possivel armazenar mais um valor em um mesmo atributo (multivalorado) em formato de array. Registros podem sguir uma estrutura aninhada.

No modelo de colunas, muito usado em redes sociais, temos familias de colunas em que cada familia podem haver varias colunas, tendo armazenadas seus pares key-value, aqui temos uma Tripla, a linha, a coluna e o timestamp.

Em grafos, grafos são utilizados para representar dados e as ligações representam as associações entre estes dados. NO caso os atributos aqui são essas relações.

### Segurança

Existem vários conceitos associados à segurança de um DB. O **sigilo** deve assegurar que as informações nao devem ser reveladas para usuários não autorizados. A **integridade** garante que os dados devem estar protegiso contra qualquer alteração imprópria. Por outro lado, a **disponibilidade** diz que os dados estarão disponíveis aos usuários e sistemas que estão autorizados a acessálos no momento em que forem acessados.

Pelo valor que os dados representam hoje, no Brasil temos a LGPD, lei 13709 de 14/8/2018, trazendo regras para o tratamento de dados pessoais, proteção a privacidade. Temos coisas como o direito de esquecer, a inviolabilidade da intimidade, da honera e da imagem.

Toda a questão deve estar integrada na política de segurança do DB dentro da organização, tanto do ponto de vista lógico quanto do físico (servidores). Dentro do controle de acesso temos 2 tipos principais, o **controle de acesso discricionário** trata da autorização e revogação de privilégios para users, grupos e papeis. No SQL essa é a DCL (Data Control Language) com os comandos `GRANT` e `REVOKE`. O outro tipo é o **controle de acesso obrigatório** baseado em políticas em nível de sistema que não podem ser alteradas por usuários individuais, logo algo mais sofisticado.

Tempos outros tópicos na segurança como a criptografia, assinaturas e certificados digitais, tendo o papel central do DBA na averiguação da seguranla do DB. As trilhas (log) de auditoria em DB são muito outilizadas pelos DBAs como ferramenta de averiguação, sabendo quem fez o que no DB.

Note que para algumas coisas o padrão SQL atual não consegue cobrir, por isso a importância da integração da segurança com a camada de aplicação para limitar ações indesejadas.
