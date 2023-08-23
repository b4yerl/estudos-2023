# Fundamentos de Engenharia de Software

## Unidade I: Conceitos e Processos de Software

### Introdução à engenharia de software

O termo engenharia de software foi cunhado em 1968, durante a crise do software, em uma conferência da OTAN. O crescimento da demanda por software e as dificuldades inerentes ao desenvolvimento fez necessário o surgimento de uma nova disciplina para produzir software confiável, funcional e economicamente viável.

Engenharia de software então é a aplicação de um método sistemático, disciplinado e quantificável ao desenvolvimento, operação e manutenção de software.

A parte mais complexa e crítica do trabalho conceitual do desenvolvimento são os requisitos de software, já que sua definição guia o processo, assim sendo difícil de ser corrigido. Erros nesta etapa podem levar desde perdas financeiras grandes até ao risco sobre a vida.

No Caos Report 2020 foi observado que 1/3 dos projetos são cancelados e apenas **1/6 são entregues dentro do orçamento e do prazo, atendendo aos requisitos**.

É imporante entender e conceituar bem os termos utilizados na área. O **programa** é o código, as instruções que rodam, já o **software** tem outros 2 pontos além do programa em si: as estruturas de dados, para manipulação das informações e a documentação que descreve a operação e o uso dos programas. O software é a parte lógica que comanda e orquestra o hardware disponível.

Um sistema é o conjunto de elementos interdependetes que juntas formam um todo organizado. Podemos considerar o conjunto de hardware, software e pessoas como um sistema de software.

Indo agora para o processo de software, podemos entendê-lo como o conjunto estruturado de atividades necessárias para desenvolver um sistema de software. Em geral os processos são baseados em modelos, representações abstratas de um processo que tomam por base um modelo de ciclo de vida do software.

Descrever um processo envolve descrever as seguintes partes: Atividades que indicam o que precisa ser feito e com qual técnica, o resultado dessas atividades é o produto ou artefatos, para que isso seja possível muitas vezes será necessário um artefato ou algo na entrada da atividade, este é o insumo. Papéis também são definidos para definir quem é responsável por uma atividade, além das pré-condições e pós-condições que devem ser satisfeitas, regendo o processo todo.

#### Ciclo de vida

O ciclo de vida do software contempla desde sua idealização e definição de requisitos até o término do seu uso.

O modelo sequencial linear segue certinho cada passo um após o outro, começando da análise e do projeto (engenharia de SI), para então ir para a codificação. O problema deste modelo é o alto custo para corrigir qualquer erro, já que isto será visto apenas na última etapa.

O **modelo em cascata** vem na sequência como uma nova opção de ciclo, o lance aqui é a inclusão de um retorno ao final para alguma correção de erro, mas o problema de teste ocorrendo muito a frente no ciclo é mantido aqui, o feedback tardio continua.

Com o tempo a ideia de que quebrar o software em partes menores com um desenvolvimento sob um **modelo incremental** podia facilitar o desenvolvimento dessas partes menores, com trabalho em paralelo e feedbacks/correções em incrementos isolados. Esse modelo incremental revolucionou o ciclo de vida do software com entregas e feedabacks quebrados em partes.

A possibilidade agora de entregar uma fração do software e aplicar correções sobre a mesma, permitiu que o **modelo incremental evolutivo** fosse idealizado, nele a especificação inicial serve como um primeiro esboço que, ao ser entregue e ter seu feedback, passa a evoluir como parte paralela ao resto.

O **modelo em espiral** funciona com um desenvolvimento inicial no core do software, com atividades mínimas e a partir daí incrementamos esse núcleo.

O **modelo iterativo** assemelha-se ao modelo linear, a diferença é que cada etapa pode ter n iterações até que a equipe entenda que o já é possível avançar nas etapas, inclusive iterando sobre mais de uma etapa, como um bloco mesmo, o foco aqui é a repetição para atingir a qualidade necessária.

Chegamos então ao **modelo incremental iterativo**, basicamente a fragmentação do todo para o trabalho incremental, sendo que a esses incrementos o trabalho iterativo torna-se regra, permitindo o avanço em paralelo mesmo que cada fragmento esteja em um estágio de iteração.

O **modelo em V** também pode ser encontrado, nele descemos implementando, desenvolvendo e preparando os testes que serão posteriormente utilizados ao final.

### Processos de Software

#### Processos Ágeis

Dispostos a atacar os problemas típicos que levavam ao cancelamento e atraso dos projetos de software, um grupo de metodologistas criou um documento sobre processos ágeis que: 

- São processos de desenvolvimento incremental em que os incrementos são muito pequenos e as novas versões do sistema são criadas e disponibilizadas ao cliente a cada duas ou três semanas.
- Os clientes estão envolvidos nos processos ágeis a fim de fornecer um feedback rápido sobre a evolução dos requisitos.
- Minimiza-se a documentação já que utiliza-se mais a comunicação informal do que documentos e reuniões formais.

Dentre os exemplos de processos ágeis, podemos destacar o eXtreme Programming (XP), famoso por popularizar o desenvolvimento dirigido a testes (TDD) e a programação por pares, o SCRUM, entre outros.

#### SCRUM

Aceitando que o problema não pode ser totalmente entendido de cara, o SCRUM adota uma abordagem empírica com o foco em maximizar a habilidade em responder aos desafios emergentes.

O SCRUM começa com o planejamento geral e a partir daí entramos em um ciclo, em uma Sprint, aqui devemos seguir alguns passos: Selecionar, desenvolver, revisar e avaliar. Com a conclusão de cada iteração temos uma avaliação quanto a necessidade de começar outra Sprint.

Com equipes pequenas, multidisciplinares e com liderança diluída, o foco do SCRUM está em versões incrementais com iterações curtas, tendo na figura do Scrum Master um facilitador.

A organização do trabalho é toda feita a partir do backlog do produto, uma lista atualizada e priorizada dos requisitos. Em cima disso, a comunicação entre equipes se intensifica para produzir resultados.

Temos 3 papéis básicos no SCRUM. O **Product Owner** é o responsável pelo valor de negócio do produto, agindo como um representante do cliente junto a equipe, cabe a ele controlar e gerenciar o backlog. **Scrum Master** toma as iniciativas para melhorar o trabalho, identificando e resolvendo os impedimentos, mas não se envolve com o trabalho técnico. Por fim a **equipe de desenvolvimento** é a responsável por entregar valor por meio de software com qualidade.

No processo do SCRUM temos 3 artefatos: backlog do produto, incremento do prodto e backlog da sprint. O **backlog do produto** é uma lista de requisitos apresentados como *histórias de usuário*. O **incremento do produto** é o resultado de uma Sprint, um produto parcial pronto para ser entregue, esse produto baseia-se no **backlog da sprint**, ou seja, algumas histórias de usuário escolhidas para serem implementadas na Sprint atual.

As Sprints possuem 4 importantes cerimônias a cada iteração. Toda a sprint é precedida por uma **reunião de planejamento**, aqui são selecionados os itens para o backlog da sprint. A partir daí ocorrem as **daily** para acompanhamento da Sprint. Ao final temos 2 últimas cerimônias, a **revisão da sprint**, onde temos a avaliação do artefato e se tudo foi cumprido e atende aos requisitos, e a **retospectiva da sprint**, aqui o processo é realinhado para agilizar o processo e garantir a evolução do processo.

#### Processos Prescritivos

Também conhecidos como projetos dirigidos a planos, auqui tudo é planejado com atecdência e a partir daí o progresso é medido em relação ao cronograma, ao plano inicial.

O Rational Unified Process (RUP) é um exemplo de processo dirigido por plano, no caso dele é baseado em componentes com o uso da UML.

Baseado na ideia de atacar primeiro os riscos principais, o RUP quer garantir que se est'provendo algo de valor ao cliente, definindo a arquitetura o mais cedo possível seguindo a partir daí com a construção do sistema com componente reutilizáveis.

#### Quando usar cada tipo de processo?

Os processos reais normalmente usam elementos de ambas as opções para aprimorar o processo interno de cada empresa. Tentar se encaixar 100% em um único modelo pode não ser a melhor opção, até pela perda de ótimos elementos presentes em outros modelos como, por exemplo o TDD. A base da engenharia de sofware é o foco na qualidade, a partir daí pensamos em processos e ferramentas.

### Características do Software

Requisitos de software são uma característica observável do sistema, um efeito que o sistema deve exercer sobre o mundo real, uma condiçã/capacidade que deve ser cumprida.

Note que, requisitos descrevem o problema a ser resolvido e não a solução a ser aplicada.

O levantamento dos requisitos deve ser feito junto aos stakeholders (interessados). Nesse levantamento teremos requisitos do sistema e requisitos do cliente. Os requisitos do cliente apontam para os problemas reais, falando sobre os efeitos do sistema na solução destes. Agora os requisitos do software tratam do comportamento do sistema, delimitando a ponte entre o problema e a solução.

#### Requisitos Funcionais

Requisitos funcionais descrevem o que o software deve fazer, definindo funcionalidades e comportamento mediante cada entrada.

No SCRUM os requisitos funcionais são apresentados como histórias de usuário lá no backlg do produto, já no RUP eles entram como casos de uso no ERS (Especificaçao de Requisitos de Software).

#### Requisitos Não Funcionais

RNFs não descrevem uma funcionalidade, mas características de qualidade que o sistema todo, ou uma funcionalidade apenas, deve ter. Essas características podem ser de desempenho, ambiente, segurança, escalabilidade, etc. Assim, cabe entender que eles também descrevem as restrições necessárias e as normas/padrões do funcionamento e construção do sistema.

Um ponto importante dos RNFs é que estes devem descrever um critério de aceitação mensurável ou quantificável, em outras palavras, não vale dizer que algo deve ser rápido, pois a rapidez é subjetiva, o certo aqui seri apresentar o tempo máximo aceitável.

## Unidade II: Atividades e Artefatos da Engenharia de Software

### Atividades da Engenharia de Software

O processo de prdução de software segue um conjunto ordenado de atividades que, entre elas, podem produzir artefatos. Essas atividades podem ser tanto técnicas, quanto gerenciais ou de apoio.

#### Atividades Técnicas

O levantamento de requisitos é uma das atividades da engenharia de requisitos, aqui é onde é feita a descoberta dos problemas, as necessidades dos clientes. Para fazer isso temos a disposição entrevistas, questionários, leitura de documentos, observações, prototipação, etc.

Na análise dos requisitos há um estudo e uma busca por inconsistências, lacunas, conflitos nas descrições. A modelagem auxilia na descoberta de falhas no entendimento e de descrições incompletas. O perigo aqui é a modelagem levar a um engessamento precoce da percepção de domínio.

A especificação dos requisitos envolve descrever os requisitos de maneira clara e precisa, sem ambiguidades, seja com linguagem natural ou com um template (casos de uso).

A validação dos requisitos é justamente a reisão do que foi feito junto a um especialisto do domínio e/ou do ciente. Nessa atividade protótipos funcionam bem melhor do que notações específicas.

Além das atividades da engenharia de requisitos, temos outras atividades técnicas. Comaçando pelo projeto (design) de software, aqui são consideradas as alternativas de soluções e escolhidas pensando em satisfazer os requisitos previamente levantados. Nessa etapa temos duas partes, a primeira é o projeto de arquitetura do software, uma visão mais abstrata de quais são as grandes partes do software, como elas se comunicam e como executam. O projeto detalhado já é um projeto mais próximo do código, ainda com certo nivel de abstração, mas já são detalhados os objetos, como interagem entre si, etc. É no projeto detalhado qe há a escolha de algoritmos e estruturas de dados ideiais para a implementação.

A implementação dos projetos em si é a etapa de codificação, isso é feito com base nos modelos de pojeto, implementando corretamente o que foi descrito e decidido.

Após a codificação temos os testes de software a fim de verificar o funcionamento do software e a satisfação dos requisitos não funcionais. Esses testes podem ser tanto manuais ou automatizados, nesse segundo o foco maior está no código e não no usuário.

Com tudo ok temos a etapa de aceitação por parte do cliente, nela o cliente em si varifica e conduz testes para validar o software, sua funcionalidade e sua qualidade.

Mesmo com o software pronto há uma constante evolução e manutenção do mesmo, visando correção de erros, implementação de novos requisitos, etc. Na mesma toada temos a medição de software, análise de metas e métricas, coleta de dados a respeito do processo.

#### Atividades Gerenciais

A primeira atividade entre as gerenciais é a **gestão de configuração**, essa atividade de apoio gerencia os arquivos resultantes do desenvolvimento. Essa atividade de gestão costuma ser feita pelo próprio desenvolvedor.

A **gerência de projetos** planeja e controla a execução de um projeto com duração no tempo. Na mesma forma temos a **gerência de requisitos**, é aqui que os requisitos são controlados com: priorização, aprovação de mudanças, controle de escopo e rastreabilidade.

A **gestão de processos** visa definir e melhorar os processos com base nas boas práticas da egenharia de software, nos modelos de capacitação e maturidade como CMMI, MPS.BR. As atividades de garantia da qualida são, guess what, a **gestão da qualidade do software**. Além das medições de software temos as estimativas de software, previsões baseadas no histórico das equipes visando estimar: tempo, custo, esforço, tamanho do software e da equipe necessária.

#### Testes de Software

O teste de software abrange desde os requisitos até a verificação e a validação. Devido ao alto custo é necessário que a escolha dos cenários seja precisa a fim de evitar testes repetitivos ao mesmo tempo em que se amplia a cobertura e a eficácia. Como até mesmo para pequenos softwares temos uma imensidão de possibilidades, em softwares complexos é impraticável buscar uma cobertura de 100%.

O objetivo do teste de software é revelar os defeitos. Com os teste podemos aumentar a confiança, mas não é possível garantir que erros não estão presentes.

Com os testes podemos focar em garantir que os requisitos funcionais e não funcionais foram satisfeitos, seja pelo produto final ou pelo incremento em questão.

Um caso de teste padrã é composto por valores de entrada, condições / procedimentos de execução e a saída esperada. Para escolher os casos de testes, primeiro as histórias de usuários são consideradas para que haja a definição dos cenários a serem testado, apenas aí os casos de teste são elaborados.

Para indicar um conjunto de casos de testes e os objetivos de cada conjunto como: testes de desempenho, testes de navegabilidade, teste ponta a ponta, etc. usamos um **plano de testes**.

Testes de aplicações web podem se concentrar em 4 conjuntos diferentes: testes de navegabilidade, de responsividade, de campos e páginas e testes ponta a ponta.

Os testes de navegabilidade verificam se os links da aplicação front end são navegáveis e corretos para direcionar o usuário. Esses testes podem ser feitos tantos de forma manual, navegado pela aplicação, quanto de forma automatizada.

### Artefatos de Software

Antes de entrarmos no assunto devemos entender o que são os artefatos. Os artefatos estão intrinsicamente ligados aos tipos de processos, por exemplo um backlog de um produto no SCRUM é um artefato. Podemos entender então que artefatos são um produto intermediário de trabalho, que fornecem uma descrição e definição paa outros produtos tangíveis.

