# Implement interfaces in TypeScript

## Overview of Interfaces in Typescript

Um dos princípios base do Typescript é que, o type checking foca na forma que os valores tem. Interfaces cumprem o papel de nomear esses tipos e são uma forma de se definir um contrato com o código.

Usamos interfaces para descrever um objeto, nomeando seus tipos. A interface abaixo define duas propriedades e um método para um objeto:
```ts
interface Student {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

Note que dentro da interface nada foi implementado ou inicializado. O único trabalho de uma interface é definir / descrever um tipo, gerando uma espécie de contrato que deve ser obedecido na implementação deste tipo.

Após criarmos nossa interface, podemos implementá-la tendo todo o suporte do type checking e do intellisense.
```ts
const student: Student = {
  firstName: 'John',
  lastName: 'Doe',
  fullName(): string {
    return firstName + ' ' + lastName;
  }
}
```

Como TS tem um structural type system, uma interface com um conjunto particular de membros é considerada idêntica e pode ser substituída por outra interface ou object type literal (classes).

Interfaces não são representadas no run-time, sendo um construct exclusivo para a comilação, sendo úteis para documentação e validação do shape de propriedades, objetos passados como parâmetros e objetos retornados de funções. COm isso podemos pegar os erros ainda no compile-time.

## Reasons for using an interface in TypeScript

Talvez o ponto chave de contato entre dois códigos TS, podemos usar as interfaces para:
- Encurtar uma definição de tipo, então mesmo para coisas simples podemos encurtar isso com a declaração de uma interface, mantendo todas as suas vantagens. Hoje por exemplo eu [declarei um tipo "Array\<number | number[ ]>"](../common-sense-ds-algo-wengrow/recursion.md), poderia ter feito uma interface para isso, facilitando até a questão de reaproveitamento de código. (teria sido melhor usar o type alias na real)
- Manter a consistência entre um conjunto objetos, fazendo com que toda a implementação daquela interface esteja some as mesmas definições de tipo. Isso se mostra útil no desenvolvimento com equipes.
- Esclarecer parâmetros de funções e seu tipo de retorno.

Note que há diferença entre o uso de interfaces e o uso da keyword type para declarar um novot tipo. O type alias define um novo tipo de dado, enquanto Interfaces são apenas uma maneira de descrever como os dados, de por exemplo um objeto, devem ser organizados. A diferença princiapl é que uma interface pode ser extendida e acrescentada mais coisas, diferente de um tipo estritamente definido.

## Exercise - Declare and instantiate an interface in TypeScript

O nome de um interface por convenção aparece me PascalCase e não se iniciam com I, diferente do C# né...

Podemos declarar propriedades opcionais na nossa interface, isso é feito com o uso do ? logo após o nome da prop. Da mesma maneira ela pode ser prefixada com readonly.

## Exercise - Extend an interface in TypeScript

Interfaces podem ser extendidas umas pelas outras. Isso nos permite copiar os membros de uma interface para outra, nos dando mais liberdade para separar as interfaces em componentes reutilizáveis.

```ts
interface IceCream {
  flavor: string,
  scoops: number
}

// Existem outras sobremesas feitas a partir do sorvete, como o sundae

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
}
```

## Other ways to use interfaces in Typescript

Podemos usar interfaces para descrever tipos indexáveis, um array por exemplo. Tipos indexáveis possuem uma index signature que indica qual o tipo do index e qual o tipo do retorno.
```ts
interface MyArr {
  [index: number]: string;
}

let arr: MyArr = ['a', 'b', 'c'];
```

Outra possibilidade é utilizar a interface para descrever os parâmetros ou o retorno de uma fnção externa, com isso podemos manter tudo melhor documentado e melhor descrito. 

Por exemplo, quando passamos um objeto de options, ou algo similar, a uma função, podemos usar a interface para esclarecer, travar e trazer mais consistência ao código.

