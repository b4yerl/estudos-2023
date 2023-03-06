# Bancos de Dados NoSQL

## Unidade I

### Conceitos Básicos em NoSQL

Antes de mais nada vamos começar padronizando um pouco a teminlologia a ser utilizada:
- Dado: Conjunto de simbolos, sinais ou códigos decifráveis ou não.
- Informação: Ideia, conceito com significado.
- Conhecimento: Cadeia de correlações entre conceitos.
- Sabedoria: Capacidade de encadeamento e utilização de conhecimento relevante para solucionar problemas.

Alguns outros conceitos são descritos, mas optei por trazer apenas aquilo que possa vir a ser relevante:
- Big Data: Termo genérico utilizado recentemente para descrever um volume massivo de dados multivariados e de alta dimensionalidade, comumente gerados em tempo real com velocidade de crescimento exponencial.
- NoSQL: Considera-se um banco de dados NoSQL a solução de sistemas de banco de dado que não faz uso do modelo relacional para armazenamento persistente de volumes massivos de dados. Muitas dessas soluções operam em cluster computacional e sem um esquema de dados predefinido.

Além da persitência uma característica marcante dos bancos de dados relacionais que, permitiu seu sucesso é a sua capacidade de controlar concorrência entre transações executadas simultaneamente. Também são características marcantes a capacidade de integração de dados e o controle de redundância, além claro da adoção do modelo relacional e a linguagem não-procedural SQL.

Problemas sérios são percebidos nos bancos relacionais apesar de tudo. O problema de impedância é um que persistiu, além do problema de escalabilidade. A organização tabular impões limitações ao desempenho e ao formato dos dados recuperados, tuplas simples sem a possibilidade de retornar estruturas complexxas como listas ou registros aninhados. Quanto a escalabilidade isso tomou maior proporção com o advento da web, como crescer o hardware tem uma limitação tanto financeira quanto tecnológica, a opção por clusters de pequenas máquinas começou a soar mais interessante, o problema é que os DBMS de bancos SQL não foram projetados para executar em cluster e as mudanças para permitir sharding trariam um relaxamento de integridade referencial e controle de consistência.

### Características e Benefícios

**Agregados** é um termo com origem no DDD remetendo a uma *coleção de objetos relacionados* tratados com uma unidade, um *bloco úncio de objetos*. Em particular, é uma unidade para manipulação de dados e gerenciamento de consistência.

Enquanto o modelo relacional divide dados em tuplas (linhas) e limita a forma como estas podem ser moldadas/trabalhadas, a orientação por agregados reconhece que muitas vezes dados devem ser tratados como unidades que possuem estruturas mais complexas do que uma linha.

Diferente dos bancos relacionais onde precisamos definir um esquema antes de inserir qualquer dado, nos bancos NoSQL o armazenamento de dado é mais casual/liberado, não necessitando de um esquema explicitamente definido. Dessa maneira é dada mais liberdade e flexibilidade, podemos armazenar o que precisamos e adicionar novas informações on the fly. Da mesma maneira fica muito mais simples parar com o armazenamento de uma informação específica a partir do momento em que descobrimos não precisar dela ou fazer uma atualização.

A escalabilidade horizontal, considerando os recursos necessários para tal, é uma opção mais atraente e a possibilidade do NoSQL de distriubuir dados em um grande cluster computacional bate bem com isso. O problema é que executar sobre um cluster representa complexidade e a não ser que os benefícios sejam atraentes, pode não ser útil.

De forma geral, existem duas estratégias para a distribuição dos dados: replicação e framgentação (sharding). Enquanto a ideia da primeira é distribuir o mesmo conjunto de dados em vários nós, a fragmentação distribui dados diferentes em nós diferentes. Sendo ambas técnicas ortogonais, pode-se implementar uma ou ambas.

O teorema CAP é geralmente utilizado como justificativa para a necessidade de relaxamento da consistÊncia. Dadas 3 propriedade Consistência, disponibilidade e tolerância de partição, um sistema só pode obter duas dessas. Note que sistemas relacionais garantem consistência e disponibiildade, mas não entregam tolerância de partição.
- **Consistência**: capacidade de evitar que erros ocorram, em especial erros de leitura e escrita acidental de dados indesejados.
- **Disponibilidade**: capacidade de um nó ativo de um cluster ler e gravar dados, requisições válidas sempre serão respondidas por um nó.
- **Tolerância de partição**: capacidade de se manter ativo em caso de falhas de comunicação.

A adoçlão de cluster computacional não somente altera as regras para armazenamento de dados, mas tambpem as regras de processamento.

Bancos de dados relacionais são tipicamente implementados em uma aqruitetura verticalmente escalável, que busca cada vez mais CPU e memória, enquanto os b ancos NoSQL nasceram em uma era de computação em nuvem, o que tornou possível implementar mais facilmente uma arquitetura horizontalmente escalável, distirbuindo o armazenamento de dados em um grande cluster computacional.

Essas arquitetura de expansão horizontal pode ser facilmente implementa em ambientes de computação em nuvem, apenas adicionando novas VMs ao cluster. Com o aumento dos dados ou do tráfego temos um caminho claro a ser seguido, diferentemente da escala vertical que exige mais engenharia e recursos.

Essa possibilidade não só fortacele a expansão de armazenamento como tambem de poder de processamento. Multiplos nós em cluster são usados para processamento de dados tipicamente usando padrçoes de paralelismo e distribuição como o map-reduce.

Nesta arquitetura a disponibilidade está atrelada a forma como os dados são ditribuídos entre os nós do cluster computacional.

Outro forte benfício de um banco NoSQL é a flexibilidade no armazenamento de dados, permitindo muitas vezes que este formato esteja bem mais próximo do utilizado pela aplicaçõa do que as linhas em SQL que demandam mais processamento em código. 

Com a estrutura em clusters e a replicação de dados, o NoSQL pode se proteger de falahas em alguns nós e aiunda assim manter o sistema de pé e rodando.

As diferentes opções de bancos NoSQL nos permitem escolher soluções de armazenamento diferentes para cada um dos subproblemas que temos, pois tentar encaixar tudo em um único modelo tipicamente resulta em baixo desempenho. Essa característica é o poliglotismo.

### Taxonomia de Bancos de Dados NoSQL

Bancos **chave-valor** são geralmente implementados em hash tables e são muito eficientes quando o acesso de um dados é feito exclusivamente por uma chave primária. Os valores associados a cada chave podem assumir qualquer valor blob (binary object).

Casos típicos adequeados para a utilização de bancos **chave-valor** são aqueles em que desejamos armazenar agregados simples de forma trasitória. Exemplos desses casos são: dados de sessão do usuário, de perfis e preferências do usuário ou de um carrinho de compras. Esses dados podem facilmente ser armazenados em um objeto e vinculados a um id já que usualmente são acessados em conjunto.

Casos típicos de inadequação de um banco **chave-valor** são aqueles em que seja necessário manter um relacionamento entre os dados, ou em processamento de transações que requeiram roll-back em caso de falhas, ou caso a consulta a valores e não chaves, seja requerida.

Os bancos de **documentos** armazenam e recuperam documentos em diversos formatos como: XML, JSON, BSON entre outros. Estes domuentos são organizados em uma estrutura hierárquica em árvore, podendo armazenar dados como mapas, coleções e valores escalares. Os documentos armazenados geralmente são parecidos entre si, mas não precisam ser iguais.

Tipicamente utilizados para armazenar agregados complexos de forma permanente. Exemplos são o armazenanmento de logs de eventos, de páginas em blogs e gestão de contúdo (CMS) e de catálogos de relatórios e produtos em sistemas analíticos. Um banco orientado a **documentos** não é adequado para o processamento de transações simultâneas em múltiplos documentos, ou quando consultas precisam varrer toda a estrutura dos documentos para serem respondidas.

Bancos de dados de **famílias de colunas** armazenam dados em fámilias de colunas como linhas que possuem muitas colunas associadas com uma chave de linha. Essas familias de colunas são grupos de dados relacionados que são frequentemente acessados conjuntamente.

Tendo casos de uso muito semelhantes aos bancos de documentos, os bancos de **familias de colunas** tem um caso em particular, o armazenamento de contadores em sistemas analíticos ou mesmo para agragados complexos com data de expiração.

Eventos são frequentemente armazenados para mantenção de históricos e raramente pesquisados. Nesses casos um modelo flexível com gravação eficiente com as famílias de colunas se mostra ideal. Agora para casos em que seja necessário o processamento de transações conservando as propriedades ACID (Atomicidadem Consistência Isolamento e Durabilidade), ou mesmo quando o esquema para a organização dos dados não esteja maduro o suficeinte, o banco em **familia de colunas** se mostra inadequado.

Bancos orientados a **grafos** permitem armazenar entidades (nós) e relacionamentos (arestas) entre essas entidades, bem como suas propriedades. Arestas podem ser direcionais e tipificadas.

Bancos em **grafos** são tipicamente utilizados quando queremos armazenar agregados complexos, em especial conexões complexas entre dados de forma permanente. Exemplos sao o armazenamento de redes complexas de objetos interconectaos, serviços de roteamento e geo-referenciamento e sistemas de recomendação. Redes sociais ou mesmo redes tecnológicas compexas, em que as relações entre os objetos frequentemente precisa ser acessaa e pesquisada são casos típicos de bancos de dados NoSQL orientados a **grafos**.

Agora não é adequado utilizarmos os **grafos** em casos de atualização periódica de um grande volume de dados, o que pode carretar em atualizações de propriedades de multiplos nós e arestas, tornando a operaçõa muito ineficiente.

### Aspectos Arquiteturais

#### Single Server

A mais simples e mais barata opção de distribuição de armazenamento e processamento é a utilizada com maior frequência, a não distribuição. O banco presiste em um único servidor que lida com todas as requisições, dessa maneira eliminando toda a complexidade inerente à distirubuiçõa de dados e de processamento, sendo de fácil manutenção e de fácil entendimento por parte dos desenvolvedores.

Embora muitos bancos NoSQL tenham sido pensados para rodar em um cluster, em alguns momentos pode sim fazer sentido usa o modelo de servidor único. Bancos de dados em grafos por exemplo são mais eficiente em uma configuração single server. Alem disso, caso a demanda seja por um processamento simples de baixo volume de agregados a configuração single server pode tornar amais fácil a tarefa do dev.

#### Sharding

Um banco pode ter sua disponibilidade comprometida porque diferentes pessoas acessam simultaneamento partes diferente do banco. Nessa situação, a distribuição de partes diferentes dos dados em servidores diferentes oferece suporte à escalabilidade horizontal. Assim o volume de requisições é distribuído entre os nós.

Enquanto a fragmentação ajuda nessa situação, principalmente na escrita de dados de forma paralela em nós diferentes, ela pouco contriubui para a tolerância a falhas do sistema, uma vez que parte dos dados ficará indisponível caso o nó que o armazene se torne indisponível.

#### Master-Slave

A replicação traz essa resiliência, já que com a indisponibilidade de um nó, os dados continuam disponíveis em outros. Na replicação mestre-escravo, um nó é designado como mestre, ou primário, e os outros designados como escravos, cabendo ao nó mestre a autoridade sobre os dados, processando as requisições de atualização.

Ou seja em bancos de leitura intensiva de dados esse modelo se mostra muito eficiente, já que apesar de todas as requisições de atualização serem feitas ao mestre, todos os nós escravo podem fornecer os dados para leitrua.

#### Peer-to-Peer

Para este problema de escalabilidade na escrita e a falta de resiliência em caso de falha do nó mestre, a aplicação ponto-a-ponto todos os nós tem a autoridade tanto de leitura quanto escrita dos dados. O grande desafio desta arquitetura é manter a consistência dos dados. Ao escrever em dois lugares diferente, temos o risco de duas pessoas tentando atualizar o mesmo registro, um conflito de *escrita-escrita*. Para solucionar tais problemas usam-se técnicas de versionamento de dados mais complexas, tornando o processamento menos eficiente.

#### Sharding + Replication

Para balancear a resiliência da replicação com a eficiência do sharding, uma escolha é a adoçao de um modelo híbrido. A combinação do sharding com o peer-to-peer é muito comum em bancos orientados por colunas, a combinação entre sharding e o modelo master-slave é a mais comum para os bancos orientados a documentos ou chave-valor.

## Unidade II

### Modelos de Dados NoSQL

#### Tabular

Sistemas de banco de dados relacionais se tornarem muito popularaes a partir da década de 1980 e ainda são amplamente utilizados devido à sua robustez e confiabilidade para armazenamento de grande quantidade de dados.

Uma característica dos bancos relacionais é que o esquema de dados, deve ser definido previamente, sendo que todos os dados devem ser armazenados seguindo-o.

Apesar do armazenamento persistente, integradom com controle de concorrência de transações e de redundância, problemas de impedânci e de escalabilidade se tornaram limitadores para a adoção de bancos relacionais em aplicações modernas. Além disso a escalabilidade vertical na qual esses sitemas se baseiasm é limitada, cara e complexa.

#### Chave-Valor

No modelo chave-valor os dados são armazenados nesses pares no qual a chave serve como identificador exclusivo de seu valor, sendo que tanto a chave quanto os valores podem ser especificados como qualquer tipo de dado. Esse tipo de DB é altamente particionável e permite a escalabilidade horizontal.

O modelo chave-valor oferece a simplicidade e a flexibilidade na organização de dados, bem como pode ser implementado de fomra muito eficiente, utilizando por exemplo hash functions em memória. Com isso esse modelo oferece baixa latência, sendo muito efetivo para armazenamento de dados simples e de natureza transitória.

#### Coluna

Pode-se considerar orientado a coluna como uma especializaçlão do modelo key-bvalue, uma vez que ambos provêm uma estrutur composta por pares cheve-valor. Note que o modelo de coluna o valor armazenado consiste em uma estrutura específica denominada família de coluna. Particulamente o modelo de coluna permite o armazenamento como um conjunto de pares key-value, em que uma chave (row-key) é o identificador exclusivo e uma família de coluna (column-family) é um agregao de colunas, cada uma composta por um par ky-value.

#### Documento

O modelo baseado em documentos traz uma estrutura complexa de documentos semiestruturados para organização dos dados no banco. Podendo ser implementado de forma muito eficiente com estruturas hierárquicas de árvore, os bancos de documentos são muito efetivos para o armazenamteno de agregados complexos e de natureza permanente.

#### Grafo

Bancos baseados em grafos usam sua estrutura baseados em vértices (nós) e arestas (ligações) que ligam os vértices. O modelo de grafo permite o armaenamento de relações complexas sob a forma de um grafo, facilitando o armazenamento e a navegação por dados e relacionamentos complexos.

Nessa estrutura uma aresta sempre está relacionmada a um vértice inicial e um final e poussui um tipo e um direcionamento, o que possibilita a descrição de relacionamentos. A quantidade e os tipos de relacionamentos que um vértice pode apresentar são ilimitados.

Diferentemente de outros modelos, que estabelecem vínculos entre os dados no momento da consulta, aqui os vínculo são preestabelecidos e persistentes, o que faz com que a busca por relacionamentos seja muito efetiva.

### Sitemas de Banco de Dados NoSQL

#### Cassandra

O Apache Cassandra é um DBMS orientado a colunas que provê uma solução de armazenamento de dados distribuída resiliente e e de alto desempenho, privilegiando os aspectos de disponibilidade e tolerância de partição.

Como distribuída entende-se que a solução Cassandra pode ser executada em várias máquinas, com os nós em uma arquitetura peer-to-peer.

COm a ideia de fator de replicaçõa, o Cassandra garante a confiabilidade e a tolerância a falhas replicandos uma parte dos dados em um número x de nós.

#### MongoDB

Sendo orientado a documentos, o MongoDB, em sua versão paga, provê uma solução de armazenamento distribuída, resiliente e de alto desempenho, privilegiando a disponibilidade e a tolerância de partição no teorema CAP.

Aqui os nós encontram-se em uma arquitetura master-slave, o que confere à solução alto-desempenho, especialmente para a leitura de dados, e tolerância a falhas derivada do mecanismo de replicação.

Com a replicação assíncrona aliada a fragmentação de dados, esta solução torna-se ainda mais eficiente, provendo baixa latência e alto desempenho. Um diferencial é que o particionamento de dados entre nós não é definido por hash functions, mas sim por shard keys, ou chunks de atributos indexados.

#### Neo4J

Sendo um DBMS orientados a grafos, o Neo4j provê uma solução nativa de dados compatível com as propriedades ACID e de alto desempenho, privilegiando a consistência e a disponibilidade no CAP.

Para atingir a escalabilidade horizontal, o Neo4j oferece recursos de replicação e fragmentação baseados em uma arquitetura mestr-escravo.

#### Redis

O Redis é um DBMS de código aberto baseado no modelo chave-valor que provê uma solução de armazenamento de dados in-memory com diferentes níveis de persistência. Se trata de uma solução distribuída, resiliente e de alto desempenho que privilegia a disponibilidade e a tolerância de partição.

Configurados em uma arquitetura mestre-escravo, os nós Redis conferem à solução uma baixa latência e um alto desempenho, especialmente no modo de comunicação assíncrona. Para garantir a disponibilidade, o recurso Redis Sentinel faz o monitoramento, a notificação e a recuperalçao automática em caso de flhas a partir da promoção de um escravo para nó mestre.

Com o Redis Cluster temos a fragmentação sendo feita a partir de um mecanismo denominado hash slot. Outro aspecto importante é que assim como no MongDB, o Redis tem a implementação do conceito de transação que possibilita a execução de um grupo de operações de leitura como um unico bloco lógico de execução, o que assim como em bancos relacionais, demanda mecanismos de controle de concorrÇencia de transação.

Com esses recursos, o Redis é uma boa opção para cache, message broker e armazenamento transiotório de grandes volumes de dados agregados.
