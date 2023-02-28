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
