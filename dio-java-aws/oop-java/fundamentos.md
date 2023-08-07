# Fundamentos da POO com Java

## Classes

As classes do nosso projeto serão basicamente compostas por: identificador, características e comportamentos, sendo o identificador o prpósito existencial aos objetos que serão criados, as características são os atributos e os comportamentos os métodos.

Seguindo agumas convenções, e uma distribuição de responsabilidades, podemos classificar as classes em:
- Classes de modelo (**model**) que representam estrutura de domínio da aplicação, participantes, exemplo: Cliente, Pedido, Nota Fiscal, etc.
- Classes de serviço (**service**) que contém regras de negócio e validação do nosso sistema.
- Classes de repositório (**repository**) que contém uma integração com o banco de dados.
- Classes de controle (**controller**) possuem a finalidade de disponibilizar alguma comunicação externa à nossa aplicação.
- Classes utilitárias (**util**) que contém recursos comuns à toda nossa aplicação.

## Pacotes

O mecanismo de pacotes nos permite organizar nosso código. A própria linguagem Java é composta por milhares de classes organizadas em múltiplos pacotes. Os pacotes são subdiretórios a partir da pasta *src* do nosso projeto. Existem convenções já utilizadas no mercado para a criação de pacotes, assim como nas clases podemos organizar os pacotes pelo propósito da exsit^ência de suas classes: model, repository, service, controller, view, util, etc.

Classes organizadas em pacotes passam a ter dois identificadores diferentes: o nome simples e o seu nome qualificado, no caso aquele que dá o caminho pelos pacotes, exemplo a classe ArrayList presente em java.util.ArrayList.

A localização de uma classe é definida pela palavra `package` indicada na primeira linha do código. Em outros pacotes poderemos importar essas classes com `import`.

## Visibilidade dos Recursos

Em Java temos 4 níveis de visibilidade de atributos e métodos para classes externas, isso é feito através de 3 palavras reservadas e ao nível `default`.

O modificador `public` permite que qualquer outra classe, em qualquer outro pacote da aplicação pode visualizar e interagir com os recursos disponibilizados. Deixar tudo com `public`,ou seja, com toda a implementação e os detalhes a mostra, não é a abordagem padrão de um código. Aqui temos o pilar do encapsulamento na POO.

O `default` (protected) está intrinsicamente ligado à organização por pacotes, já que este modificador restringe a visibilidade dos recursos, deixando disponível o acesso apenas às classes de mesmo pacote.

O modificador `private` permite o acesso e a visualização apenas para a própria classe, garantindo assim a segurança de algumas características e o controle do uso de recursos.

## Getters e Setters

Seguindo a ideia do encapsulamento através dos modificadores de acesso, os getters e setters nos permitem recuperar e alterar valores em atributos sem acessar diretamente o atibuto privado. Esse padrão de uso dos getters e setters é justamente o tal do Java Beans.

Exemplo de um getter e um setter para o número de alunos presentes em uma sala com capacidade para 50 alunos:
```java
private int alunosPresentes;

public int getAlunosPresentes() {
  return this.alunosPresentes;
}
public void setAlunosPresentes(int alunosAtuais) {
  if(alunosAtuais < 0) {
    this.alunosPresentes = 0;
  }
  else if(alunosAtuais <= 50) {
    this.alunosPresentes = alunosAtuais;
  }
  else {
    this.alunosPresentes = 50;
  }
}
```

## Construtores

Utilizamos os construtores para instanciar um novo objeto em uma variável a partir de uma classe, isso é feito da seguinte forma:
```java
Classe novoObjeto = new Classe();
```

Muitas vezes queremos definir algumas propriedades no momento da instanciação do objeto, por exemplo para uma classe Pessoa podemos definir o nome e o CPF no momento em que o objeto é criado, assim caso um setter não seja definido essas características ficam imutáveis para aquele objeto:
```java
public class Pessoa {
  private nome;
  private cpf;

  public Pessoa(String nome, String cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }

  public String getNome() {
    return this.nome;
  }
  public String getCpf() {
    return this.cpf;
  }
}
```

Apesar de ser possível definir atributos através de construtores não é pra socar tudo lá. Cada caso é um caso e o ideal é buscar responder a pergunta: quais os atributos essenciais para a existência deste objeto? O resto que possa ser indicado  em um segundo momento, esses devem ser deixados pros setters por exemplo.

## Enums

Enum é um tipo especial de classe onde os objetos são previamente criados, imutáveis e disponíveis por toda aplicação.

Usamos Enum quando o nosso modelo de negócio contém objeto de mesmo contexto que já existem de maneira pré-estabelecida com a certeza de não haver tanta alteração de valores.

Uma lista de contantes não é enum. Enum é um conjunto de objetos pré-definidos na aplicação, logo estes objetos podem conter seus próprios atributos, como os estados brasileiros por exemplo, neste caso nome, sigla, DDDs disponíveis, sei la, são todos atributos de um objeto já conhecido previamente.

