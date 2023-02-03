# Declare and instantiate classes in TypeScript

## Introduction to Classes in Typescript

Quando vamos criar uma classe, declaramos seu comonentes seguindo a seguinte ordem:
- Propriedades
- Constructor
- Getters e Setters
- Métodos

Fazendo desta maneira podemos manter a organização do código dentro da nossa classe, aumentando a legibilidade do código.

A primeira parte consiste apenas na declaração das propriedades do objeto, podendo ou não ter um valor padrão associado a essas propriedades. O importante é estarem listados ali para serem utilizados pelo constructor.

No Constructor fazemos a inicialização das props usando os parâmetros passados. Note que nem todas as propriedades precisam de um parâmetro correspondente, mas assim como nas functions, parâmetros são obrigatórios a não ser que deixemos explícito o contrario.

Note que aqui pode ser bom utilizar o '_' prefizando as propriedade da classe. Isso porque fazendo desta maneira conseguimos nomear melhor o get e o set, além de ficar mais claro a atribuição de valores dentro do constructor.

Os accessors tem a função de manipular as variáveis, seja retornando seu valor ou atribuindo algo novo, a vantagem no uso deles está na possibilidade de validar e/ou formatar o que foi solicitado dentro do get e do set.

## Access Modifiers

Por padrão todos os membros de uma classe são definidos como public, ou seja, podem ser acessados de fora da classe que os contêm. As vezes podemos até querer deixar o acesso lioberado, mas na maior parte dos casos queremos proteger os dados brutos.

Para realizar o controle do acesso a um membro da classe podemos utilizar uma das 3 keywords:
- `public`: O padrão caso nenhum outro modificador de acesso seja especificado, mas note que também podemos deixar isso explícito no código.
- `private`: Um membro definido como `private` não pode ser acessado de nenhum lugar fora da classe que o contém.
- `protected`: O `protected` funciona de  modo muito semelhante ao private, mas ele permite que o membro seja acessaado de dentro das deriving classes.

Em adição a esses, também podemos declarar uma propriedade como sendo `readonly`.

## Define static properties

Por enquanto temos falado apenas sobre as propriedades de instância, propriedades que são instanciadas e geradas a cada nova instância de uma classe. Existe outro tipo de propriedade, as estáticas. Propriedades e métodos estáticos são compartilhados por todas as instâncias de uma classe.

Para definir uma prop estática basta utilizar a keyword `static` entre o modificador de acesso e o nome da prop. Note que mesmo dentro da classe, uma propriedade estática não é acessada com `this` e sim com o nome da classe.

## Extend a class using inheritance

Assim como no JS, aqui podemos usar da herança através da keyword `extends`. Com isso poodemos estabeler uma relação de "é um tipo de" entre uma subclass e uma superclass.

Tudo funciona como no JS, precisamos chmar o `super()` dentro do constructor da subclass, precisamos passar os parâmetros e sim, ainda podemos sobrescrver um método.

## Declare an interface to ensure class shape

Sabendo que as interfaces criam um contrato a ser seguido que descreve as propriedades de um objeto assim como seus tipos, podemos usar uma interface para garantir que uma classe siga uma forma.

Declarações de classes podem implementar uma ou mais interfaces utilizando a keyword `implements` para que seu formato seja validado pelo TS.

Agora note que, a `interface` pode apenas descrever o lado público de uma classe incluindo parâmetros e métodos, propriedades privadas não podem ser definidas / checadas por meio de `interfaces`.

## Design considerations

`interfaces` são não existem em Javascript, portanto elas simplesmente são eliminadas do código quando compilado para JS. Sendo assim não pesam nada, não consomem nenhum espaço e nem algum impacto negativo n código final.

Diferentemente de linguagens em que podemos usar interfaces apenas com classes, aqui em TS qualquer objeto pode se beneficiar da descrição de formato e do contrato assinado com um `interface`.

A diferença chave entre uma `class` e uma `interface` é a implementação definida em uma classe. Enquanto interfaces apenas definem como os dados devem ser estruturados, classes definem métodos, propriedades, valores padrão, etc.
