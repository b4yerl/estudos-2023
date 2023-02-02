# Develop typed functions by using TypeScript

O Type checking em funções é uma grande vantagem do TS, já que não é mais necessário ficar checando o tipo dos parâmetros nem do retorno. Isso traz agilidade e segurança para as nossas funções.

Assim como no JS, também temos disponíveis aqui 3 formas básicas de declarar uma função: Named functions, Anonymous Functions e Arrow functions. Note que nas arrow functions o uso de parenteses ao redor dos parâmetros é obrigatório.

## Fun with parameters

No Javascript os parâmetros de uma função são considerados opcionais, além de, caso sejam passados mais do que os declarados pela função, não é disparado nenhum erro e esse "extra" pode ser acessado através do 'arguments'.

Em Typescript a banda toca diferente. Aqui ao declararmos uma função, todos os seus argumentos são considerados obrigatórios, não podendo-se receber nem um a mais, nem um a menos.

A exceção à regra são os parâmetros opcionais, somente assim podemos omitir um parâmetro. Para que parâmetro seja decvlaradp como oopcional ele deve vir após todos os obrigatórios na assinatura da função. Outra maneira de declarar um optional parameter é com o uso de um valor padrão, dessa maneira caso não seja fornecido um valor na chamada da função, assume-se o padrão.

Caso não saibamos quantos parâmetrros virão, ou caso queiramos trabalhar com múltiplos parâmetros sendo passados para um Array (tipo o 'arguments' do js mesmo), podemos utilizar o rest operator aqui também para ter algo como:
> function sum(...numbers: number[]): number {...}

Podemos também usar o destruct para passar um objeto já quebrado na nossa função. Se utilizarmos isso aliado a uma interface teremos ainda mais controle sobre esse destruct.

## Exercise - Define function types

Podemos definir tipos para funções, seja através de interfaces (útil quando queremos extender essa função), seja com type alias.

Imagine por exemplo um tipo calculator que sempre recebe dois números e realiza alguma operação com eles:
```ts
type calculator = (x: number, y: number) => number;

const addNumbers: calculator = (x: number, y: number): number => x + y;

const subtractNumbers: calculator = (x: number, y: number): number => x - y;

const doCalculation = (operation: "add" | "subtract"): calculator => {
  if(operation === 'subtract') return subtractNumbers;
  return addNumbers;
}

console.log(doCalculation('add')(60, 1));
```

O mesmo pode ser feito com uma interface:
```ts
interface Calculator {
  (x: number, y: number): number;
}
```

Agora, note que não é necessário que os nomes dos parâmetros sejam sempre os mesmo. O typescript pode inferir que aquele parâmetro, dada a sua posição, representa se equivalente na interface ou type alias. Da mesma maneira, se quisermos não precisamos declarar novamente o tipo dos parâmetros e do retorno.
```ts
interface Calculator {
  (x: number, y: number): number;
}

let divideNumbers: Calculator = (dividendo, divisor) => dividendo / divisor;

console.log(divideNumbers(40, 5))
```
