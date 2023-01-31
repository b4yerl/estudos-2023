# Declare variable types in TypeScript

## Overview of Types in TypeScript

A adição de tipos estáticos ao Javascript talvez seja a maior força do Typescript. Com esse recurso compilers e ferramentas de desenvolvimento conseguem ter uma melhor verificação e assistência durante o processo de desenvolvimento. Além disso os tipos permitem uma melhor documnetação das funções, objetos, classe, facilitando a colaboração entre desenvolvedores.

A declaração explícita de tipos ao inicializar uma variável é a forma recomendada de se trabalha com TS, mas não é obrigatória graças à inferência de tipos.

Todos os tipos no Tyescript são subtipos do "any", um tipo que recebe qualquer valor sem nenhuma restrição. Os outros tipos entram em 3 cetegorias: Primitive Types, Object Types, Type Parameters.

## Primitive Types

Começando pelo mais básico temos o bom e velho 'boolean'. Assim como no JS, no Typescript inteiros e floats tem o mesmo tipo, 'number'. Agora os BigInt tem seu próprio tipo 'bigint'

Temos o tipo 'string' que assim como no JS podem ser  valores envolvidos tanto com '' quanto com "". Template strings também entram nesse tipo podendo ser usadas tranquilamente.

Mais para frente iremos discutir melhor os tipos void, null e undefined, já que estes fazem mais sentido no contexto de funções.

Agora uma adição aos tipos presentes no Javascript é o tipo 'enum'. Com Enumerations podemos definir um set de valores constantes que podem ser usados. No mongoose quando montamos o Schema tamb´m temos a opção de enum, veja [aqui](../udemy-nodejs-masterclass/devcamper-api/models/User.js) do que se trata melhor.

Com enums podemos reduzir a chance de erros em locais que só serão aceitas determinadas opções, o código abaixo mostra como declarar e usar um enum em TS:
```ts
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
};

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus) // 1
console.log(ContractStatus[employeeStatus]) // Temp
```

Note que da maneira acima a variável employeeStatus recebe o index associado à constante Temp.

## Any and unknown types in TypeScript

Com o 'any' podemos receber qualquer valor Javascript nas nossas variáveis sem nenhuma restrição, isso pode ser útil quando usamos bibliotecas de terceiros ou inputs de usuários onde o valor possa vir tipado dinamicamente.

Não devemos usar any quando não for estritamente necessário, isso porque sua liberdade mata a ideia da tipagem estática e evita que erros sejam pego no compile time, deixando os problemas aparecerem no runtime.

Para tentar mitigar os problemas do 'any' foi introduzido no TS o tipo 'unknown'. O tipoi unknown é similar ao any, entretanto não conseguimos interagir com uma variável de tipo unknown, ou seja, não podemos acessar propriedades, chamar como function nem chamar funções a partir dela.

Se precisarmos tratar momentaneamente uma variável com outro tipo, podemos fazer uma type assertion, uma conversão de tipos assim como as que temos em Go e Python por exemplo, exemplo:
> (isValid as string).toUpperCase() // TRUE

## Union and intersection types in TypeScript

Union e Intersection são opções mais avançadas de tipos que nos permitem lidar com situações nas quais um tipo é composto de 2 ou mais possíveis tipos.

O union funciona como um "OR" da lógica. Podemos declarar uma variável como sendo um ou outros, para fazer isso usamos um pipe único:
> let x: number | string;

Já o intersection combina dois ou mais tipos para criar um tipo que combine todas as propriedades dos outros:
```ts
interface ClubeFutebol {
  nome: string;
  fundacao: number;
}

interface CampeaoBrasileiro {
  titulos: number;
  primeiroTitulo: number;
}

const cruzeiro: ClubeFutebol & CampeaoBrasileiro = {
  nome: 'Cruzeiro Esporte Clube',
  fundacao: 1921,
  titulos: 4,
  primeiroTitulo: 1966
};
```

## Literal Types

Podemos declarar tipos literais especificando exatamente o que devem ser. Um literal type é um subtipo de string, number ou boolean. Para declarar um tileral type podemos fazer:
> type testResult = 'pass' | 'fail' | 'incomplete';
> type dice = 1 | 2 | 3 | 4 | 5 | 6 ;

## Collection types in TypeScript

Para trabalharmos com Arrays devemos usar uma de duas maneiras, podemos dizer o tipo dos elementos seguido dos colchetes "number[]" ou podemos passar "Array\<number>".

Caso seja necessário misturar tipos em uma lista, podemos declarar uma tupla, mas note que tuplas tem um número fixo de elementos, por xemplo:
> let person: [number, string];
> person = [30, 'John'] // OK
> person = [25, 'Mary', false] // ERROR

Podemos contornar isso usando os dois conceitos e declarando um array de tuplas.
