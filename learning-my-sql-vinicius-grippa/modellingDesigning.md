# Modelling and Designing Databases

## The Databse Design Proccess

Quando vamos desenvolver um database, passamos basicamente por três estágios princiais:
- Análise dos Requisitos: Aqui nós devemos botar no papel tudo aquilo que iremos precisar armazenar, quais relações existem entre esses dados e realmente entender, até com os requisitos da aplicação, quais são as necessidades e casos de uso daquele database.
- Design Conceitual: Agora que temos tudo listado, mas bagunçado, começamos o processo de organizar esses dados em um modelo formal, separando as entidades e organizando tudo para a próxima etapa.
- IMplementação Lógica: Aqui no ponto final é quando vamos até um DBMS e escrevemos o Schema do nosso DB.

## The Entities Relantionship Model

Nossa base de dado vai se separar em basicamente 2 coisas, enitdades e relações. Tomemos como exemplo um db de um universidade que tem os alunos, o cursos e as matrículas, Alunos e Cursos são duas entidades separadas que se relacionam por meio de matrículas. Outro exemplo seria um DB de uma loja com clientes, cprodutos e vendas. Produtos e vendas aqui são as entidades que se relacionam através de uma compra firmada.

No íncio pode ser complicado distinguir bem isso. Temos então um approach tradicional para o design conceitual, conhecido como Entities Relationship (ER) Model, que será explorado melhor logo mais.

## Representing Entities

O ER modelling envolve criar diagramas com retângulo que representam nossas entidades. Nessas entidades iremos armazenar atributos. Um atributo pode ser um nome, m email, uma data, um telefoen, qualquer coisa que represente/descreva as características daquela entidade. Podemos ter atributos formados por partes menores, como um endereço que receber o CEP e a linha de endereço separados para formar um só, esse é um atribusto composto, o contrário de um atributo simples. Podemos ter também multivalued attributes, ou seja, atributos que contenham vários valores, exemplo: vários números de telefone.

Um atributo importe é a primary key, um atributo único àquela entidade que está sendo representada. Lembre-se que a escolha de qual atributo deve ser a primary key é uma decisão importante que pode levar a várias consequências, por exemplo no caso de um tabela de clientes, se considerarmos o nome como PK, então não poderemos ter clientes com o mesmo nome, da mesma maneira teremos problemas se utilizarmos o email, pois além de obrigarmos o cliente a ter um email, ele não poderia ter mais do que um, já que seu email é o que lhe representa na tabela. Há também a possibilidade de gerrmos uma chave composta de port exemmplo nome e telefone, para ser algo único. O ponto é termos confiança que escolhemos a melhor alternativa, de que ela será realmente úncia e saber que quanto menor essa chave for, melhor, pois facilita a vida nas queries e na manutenção em geral.

Os tipos de atributos são especificados a partir de uma lista de tipos disponíveis. Outra possibilidade é que tenhamos valores desconhecidos, nulo, mas para alguns atributos, como a primary key, não podemos ter valores nulos (NOT NULL), logo um campo opcional não pode de forma alguma ser utilizado como PK.

Ao representarmos multivalued attributes devemos ter cuidado. Esses valores realmente representam a mesma coisa ou são distintos? Por exemplo, número do celular e número do telefone do escritório são coisas que podemos querer manter uma separação, apesar de serem no final das contas, números de telefone.

Para algumas aplicações, não existe uma combinação plausível que sirva para representar a entidade de forma única. Nesses casos criamos um atributo articial para que este seja único por natureza e assim possa ser usado como PK. Temos exemplos variados disso: CPF, Titulo de Eleitor, Número da matrícula, etc. Todos funcionam como um id, criado para representar uma única entidade

## Representing Relationships

Assim como entidade, relações também podem conter atributos. Por exemplo quando um cliente (entidade) compra um produto (entidade), a compra em sim, carrega um horário (timestamp), quem comprou, o que foi comprado, etc. Diferentes números de cada entidade podem aparecer de cada lado de uma relação. Nesse exmplo, apenas um cliente realiza uma compra por vez, mas esta compra pode ter vários produtos distintos.

Quando uma relação pode conter várias entidades de ambos os lados, Por exemplo em um restaurante, várias pessoas podem pedir a mesma coisa, da mesma forma que uma pessoa pede várias coisas, esse tipo de relação é a chamada "many-to-many". Ela é diferente de uma relação em que apenas um lado pode ver vários, como uma pessoa podendo ter várias contas em banco, mas a conta no banco pertence a uma única pessoa. Esse tipo de relação é a "one-to-many", ou "many-to-one" a depender do ponto de análise. Por fim temos a relação "one-to-one", por exemplo um CPF só representa uma única pessoa e aquela pessoa possui um único CPF. Podemos abreviar essas relações como M:N, 1:N, 1:1.

O número de entidades de cada lado da relação (a cardinalidade) é o que define as restrições dessa relação e isso é importante ser analisado com cuidado. Muitas vezes algo pode parecer óbvio, como em casos de 1:1, mas que após uma análise mais profunda optemos por outro caminho, já visando um problema que possa ocorrer. Sempre será mais barato partir do caminho certo do que remodelar uma base de dados.

## Partial and Total Participation

A relação entre entidades pode ser opcional ou compulsória. No caso já dito de clientes e produtos, podemos armazenar os dados apenas dos clientes que já efetivaram uma comprar, o que seria a participação total, mas também podemos registrar os dados de clientes que nunca compraram nada, mas que apresentem um potencial por algum motivo, enfim, nesse caso teríamos a relçao parcial estabelecida.

## Entity or Attribute?

As vezes iremos nos deparar com uma dúvida de se um item é um atributo ou se deve ser tratado como uma entidade mesmo, para isso podemos usar algumas perguntas para esclarecer o caminho que devemos seguir:
- A nossa databse possui interesse direto no item? Objetos de interesse direto devem ser tratados como entidades, atributos são as informações que o descrevem.
- O item possui os seus próprios componentes? Caso sim, devemos então encontrar uma maneira de representar esses componentes. Uma sentidade separada pode ser a melhor opção disponível.
- O objeto pode possuir múltiplas instâncias? Devemos então encontrar uma maneira de armazenar os dados em cada instância. No exemplo do DB de vendas, caso o costumer possa ter vários emails então talvez seja interessante isolar isso como uma entidade para ser tratada a parte.
- O objeto é frequentemente desconhecido ou nulo? Isso indica que estamos tratando de um atributo presente apenas a algumas entidades e talvez seja melhor modelado como uma entidade separada do que como um atributo que frequentemente aprece como nulo.

## Entity or Relationship?

Um jeito simples e efetivo de identificar o que é entity e o que é relation, é separando os substantivos e os verbos presentes nos requesitos do banco de dados. Normalmente os substantivos vão apontar as entidades enquanto os verbos apontam para as relações entre elas. Por exemplo algo como "No sistema os estudantes se matriculam nos cursos oferecidos", podemos separar "estudantes" e "cursos" como as entidades e o "matriculam" representa uma relação de  matrícula entre as duas entidades.

## Intermediate Entities

