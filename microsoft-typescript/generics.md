# Define generics in TypeScript

## Introduction to Generics

Generics são templates de código que podemos definir e reutilizar por todo o projeto. Eles nos dão uma forma de dizer a funções, classes e interfaces qual o tipo queremos utiizar somente quando o chamamos. Funciona como os argumentos passado a uma função, generics nos permitem dizer ao componente qual tipo esperar.

Criamos generic functions quando nossa função ou classe tabalha com uma variedade de tipos de dados e usa aquele mesmo tipo em vários lugares. Com generics aumentamos o reuso de código, temos mais flexibilidade no trabalho com tipos, mas reduzindo o uso do `any`

Para entender o porquê de utilizarmos generics, vamos uilizar essa função aqui:
```ts
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}
```

Usando essa função imagine que criemos dois novos arrays: `numberArray` e `stringArray`, passando apenas números e strings como elementos em cada uma. Como a função indica o tipo `any`, nada me impede de colocar um dado de outro tipo entre os itens do array.

A solução para isso é o uso de uma generic function:
```ts
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
```

Generics definem uma ou mais type variables para identificar o tipo que estamos passando ao componente. Normalmente utilizamos a letra 'T' para fazer o papel desa variável.

Note que da forma como foi feito, para declarar que queremos gerar um array apenas com números, basta chamar `getArray<number>`. Caso o tipo seja omitido quando chamamos uma generic function, o próprio TS vai tentar inferir um tipo para ser utilizado, se ele perceber algum tipo complexo então vai com `any`mesmo.

Para usar mais de uma type variable, usamos a sguinte notação: `<T, U>`

## Use the methods and properties of a generic type

Quando utilizamos type variables para criar componentes, devemos utilizar apenas métodos e propriedades acessíveis à todos os tipos. Isso porque o TS não faz ideia de qual tipo você pretende jogar ali.

Uma forma de resolver isso é restringindo os possíveis tipos que uma type variable aceita. Podemos gerar essa restrição criando um custom type como uma tupla, por exemplo:
```ts
type ValidTypes = string | number;
```

Para utilizar isso na type variable basta usar o `extends` como se fosse um tipo de inheritance mesmo.

Também é possível limitar uma type variable como sendo uma chave de um objeto:
```ts
function getPets<T, U extends keyof T>(pet: T, key: U) {...}
```

## Using type guards with generics

Caso o TS ainda levante erros mesmo após restringirmos os tipos possíveis, podemos recorrer aos type guards para assegurar a ele que sabemos o que estamos fazendo:
```ts
if(typeof value === 'number') {
  ...
}
```

Note que esse tipo de type guard, usando `typeof`, funciona apenas para tipos primitivos. Para checarmos o tio de uma classe, utilizamos `instanceof`

## Exercise - Implement generics with interfaces and classes

Generics são nada mais do que uma maneia de passar tipos para um componente, logo podemos explorar isso também em classes e interfaces.

Podemos normalmente declarar uma interface com generics:
```ts
interface Test<T, U> {
  value: T;
  message: U;
}

interface FunctionType<T, U> {
  (a: T, b: T): U;
}

```

Note que podemos não só declarar tipos de objetos com interfaces usando generics, como também odemos declarar function types.

Da mesma forma podemos também usar generic interfaces para classes que serão posteriormente implementadas. Note que quando implementamos uma interface em uma classe, nós mantemos os `<T, U>` para que os tipos sejam declarados apenas na instanciação da classe, mas isso pode ser feito ja aqui na implementação.
