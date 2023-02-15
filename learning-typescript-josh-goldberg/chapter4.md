# Objects

## Object Types

Quando declaramos um Object literal com a sintaxe { ... }, o Typescript entende aquilo como sendo um novo tipo contendo as propriedades e seus respectivos tipos.

Deixar essa inferência acontecer por parte do Typescript é ok, mas eventualmente iremos buscar uma maneira de declarar os tppos dos objetos mesmo. Uma das maneiras de fazer isso é usando uma sintaxe muito próxima à de um object literal, mas com os tipos no lugar dos valores:
```ts
let driverOne: {
  name: string,
  born: number,
  country: string
};

driverOne = {
  name: 'Ayrton',
  born: 1960,
  country: 'Brazil'
};
```

Ficar fazendo isso e depois atribuindo os valores de forma manual, tende a ficar muito chato e tedioso. Por isso uma opção mais popular nessa hora do type declaration é com o uso de type alias ou interfaces.
```ts
type Driver = {
  name: string,
  born: number,
  country: string
};

const senna: Driver {
  name: 'Ayrton',
  born: 1960,
  country: 'Brazil'
};
```

## Structural Typing

O sistema de tipos do TS é "structurally typed", isso significa que qualquer valor que satisfaça os requisitos de um tipo, pode ser utilizado como um valor daquele tipo.

A diferença entre duck typing e structural typing está no momento em que os tipos são checados. Para um apenas em runtime, para o outro, existe um sistema de checagem.

Quando declaramos um object literal com mais propriedades do que o explicitado em seu tipo, um erro é disparado da mesma forma que seria se tivessemos menos propriedades, mas note que caso seja uma variável do mesmo tipo recebendo o objeto com excesso de propriedades, tudo acontece normalmente...

Caso nosso object type tenha outros objetos aninhados, é uma boa prática declarar o tipo desses objetos de forma separada, até para melhorar a legibilidade do código e o funcionamento do Typescript com melhores mensagens de erro.

Uma propriedade pode ser definida como opcional tendo a adição do "?" ao seu final. Note que isso é diferente de definirmos uma variável como sendo "| undefined".

## Unions of Object Types

Os tipos união em objetos podem ser inferidos, como no uso de um operador ternário, ou podem ser explicitamente declarados.
```ts
type ElectricGuitar = {
  brand: string,
  strings: number,
  pickups: number
};

type Synthesizer = {
  brand: string,
  keys: number,
  isAnalog: boolean
};

type MusicalInstrument = ElectricGuitar | Synthesizer;
```

Note que definindo um objeto desta maneira poderemos atribuir valores para qualquer uma das 5 propriedades acima, mas apenas `brand` poderá ser acessada. Isso serve como uma proteção que nos impoede de olhar dentro de algo que potencialmente não existe.

Novamente teríamos uma checagem para garantir que estamos acessando a propriedade com a segurança necessária.
> if("strings" in instrument) { ... }

Outra forma popular de de fazer union typed objects é ter no objeto uma propriedade, como uma flag, que indique o seu formato. Esse modelo de shape é o chamado `discriminated union` com a tal flag sendo o `discriminant`. Fazendo a union assim fica muito mais tranquilo de fazer o type narrowing e talvez até mais elegante mesmo.
```ts
type ElectricGuitar = {
  brand: string,
  strings: number,
  pickups: number,
  type: 'electric guitar'
};
```

## Intersection Types

Intersection types (&) são tipicamente usados com aliased object types para criar um novo tipo que combina múltiplos já existentes.
```ts
type SuperKeytar3000 = ElectricGuitar & Synthesizer;

// Isso é equivalente ao objeto:
// {
//   brand: string,
//   strings: number,
//   keys: number,
//   pickups: number
//   isAnalog: boolean
// }
```

Apesar de poder ser muito útili, podemos inclusive combinar seu uso com Unions para formar uma expressão, o uso dos Intersections types pode trazer confusão ao código, inclusive a
o compiler, quando deveríamos buscar manter o código o mais simples possível. 

Um problema é a escalada rápida que o uso descontrolado desse conceito pode trazer aos erros de atribuição, dificultando muito a compreensão das mensagens e a manutenção do código.

Outro problema é cometer um erro e gerar o tipo `never`. 2 tipos primitivos por exemplo, nunca terão um valor que seja ambos ao mesmo tempo, logo as possibilidades de um `number & string` são 0, ou simplesmente `never`, também chaamdo de `bottom type`.
