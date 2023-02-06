# Organize code using TypeScript namespaces

## Introduction to TypeScript namespaces

Namespaces são uma outra maneira de se organizar o código, agrupando-o e isolando-o do escopo global. Podemos por exemplo, isolar funções, variáveis, etc. em um namespace A e a parte de segurança da aplicação em um namespace B.

Namespaces podem ser implementados em um arquivo único ou passando por múltiplos arquivos. Para permitir o acesso de uma função fora do namespace é necesspario o uso da keyword `export`, isso tabém vale para namespaces aninhados e afins.

## Organize code by using multi-file namespaces

Podemos extender os namespaces por vários arquivos. Para realizar isso é preciso o uso de tags `reference` que dizem ao compiler que ali existe uma relação.
```ts
namespace Interfaces {
  [...]
}

/// <reference path="interfaces.ts" />
namespace Functions {
  export function funcName(a: string): Interfaces.Result {
    [...]
  }
}
```

Quando usamos os namespaces dessa maneira, podemos caso desejado, instruir o compiler para que, todos os arquivos relacionados sejam compilados como um só.
