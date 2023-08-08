# Pilares da POO em Java

A programação orientada a objetos passa por 4 pilares fundamentais:
- Encapsulamento -> *Nem tudo precisa estar visível.*
- Herança -> *Características e comportamentos comuns podem ser compartilhados atraves de uma hierarquia.*
- Abstração -> *É a indisponibilidade para determinar a lógica de um ou vários comportamentos.*
- Polimorfismo -> *São as inúmeras maneiras de se realizar uma ação.*

## Encapsulamento

Para a maioria dos usuários (leia-se outros objetos) a implementação de métodos e atributos não precisa estar acessível. Imagina que para um motorista, basta ele saber que um carro liga quando bate a chave, o processo elétrico e mecânico que permite a partida do carro não interessa ao usuário e nem seria seguro dar ao usuário a possibilidade de ajustar fatores deste processo.

Dessa maneira o encapsulamento permite um maior controle sobre os processos ocorridos, validando tudo que precise ser validado e fornecendo acesso apenas à interface necessária para uso.

## Herança

Representando uma relação de *is-a*, a herança permite o reaproveitamento de código através da especificação de classes a partir de uma superclasse mais genérica. Mantendo o tema carro, podemos entender o carro como um veículo assim como uma moto, ambos tem uma marca, um modelo, uma quantidade de rodas, um emplacamento, número de chassi, ambos ligam, aceleram, freiam. Mesmo carregando suas especifidades, algumas características são universais entre veículos motorizados e seus tipos específicos herdam essas características e comportamentos.

## Polimorfismo

O poimorfismo permite implementações especificadas, especializadas de um método mais abrangente. No caso dos veículos, cada tipo de veículo possui um combustível e uma forma de abastecimento diferente, logo podemos ter um comportamento abstrato de abastecer um veículo motorizado, mas cada tipo vai implementar a sua maneira de abastecer com o seu combustível específico.

## Interface

As interfaces são um nível mais avançado de abstração do que as classes. Enquanto nas classes abstratas nós definimos a possibilidades de subclasses herdarem seus atributos e métodos em um relacionamento *is-a*, com as Interfaces nós permitimos que uma classe possa assumir diferentes propriedades e papéis em um modelo *has-a* ao definir um contrato que precisa ser assumido e implementado.

Como eu já to falando de veículos, vamos manter a analogia para entender interfaces. Um carro pode ter alguns tipos de motorização diferentes: combustão à gasolina, combustão à álcool, elétrico, híbrido, etc. Como cada motorização possui características próprias, como combustível, e comportamentos próprios, como recarga a partir dos freios, devemos separar os carros por essa motorização.

O problema é que adotar a herança aqui seria um erro, isso porque teríamos inúmero tipos de carro herdando de veículos, quando o motor não entra na relação *is-a* entre veículo e carro, logo o ideal seria assegurar a relação *has-a* entre motor e carro, criando uma interface e estabelecendo um contrato a ser implementado por todos os carros. Essa interface também poderia ser implementada por todos os veículos motorizados.

Além do exemplo de motor poderíamos expandir essa ideia pra emplacamento e situação legal do veículo, Java não possui herança múltipla, mas podemos tranquilamente implementar N interfaces.