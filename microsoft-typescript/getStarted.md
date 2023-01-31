# Get Started With TypeScript

## Overview of TypeScript

Typescript é uma linguagem open-source desenvolvida na Miscrosoft, mais precisamente é um superset do Javascript, ou seja, podemos usar o Javascript que já conhecemos com features que antes não estavam disponíveis.

O cerne do TS são os tipos. Com eles podemos ter menos dor de cabeça, validação do código e melhor documentação. Usando a checagem de tipos o TS consegue pegar erros antes de rodarmos o código.

Tipar algumas variáveis pode também ser opcional no TS, assim como em outras linguagens como o Go, aqui temos uma inferência de tipos que para algumas situações pode funcionar perfeitamente.

Como o Typescript é um superset do ES6, todo código Javascript, também é código Typescript e todo código Typescript pode ser compilado em Javascript. Ou seja, qualquer projeto que utilizaria JS pode utilizar TS.

Para utilizar o compilador do TS devemos instalar o package no nossoprojeto ou globalmente
> npm install typescript

Para realizar essa compilação de TS para JS vamos usar o compiler nativo do TS ou podemos também utrilizar um transpiler compatível como o Babel.

Existem inúmera flags de options que podemos passar ao compiler, mas algumas das mais importantes são:
- --noImplicitAny: Dispara erros em expressões que implicitamente declarem o tipo 'any'.
- --target: Especifica a versão JS no qual o nosso código será compilado.
- --noEmitOnError: Impede que seja gerado um arquivo Javascript caso seja reportado algúm erro na compilação.
- --init: Sozinho esse comando gera um novo tsconfig.json

O tsconfig.json carrega as configurações que queiramos passar ao compiler. Repare que a maioria das options estão comentadas, mas está descrito o que elas fazem.

Note que após alterarmos o tsconfig é necessário rodar um 'npx tsc' para que as alterações sejam interpretadas. Além disso quando rodamos o npx tsc em um único arquivo, ele ignora o arquivo de config, para usar sua configuração faça o compile apenas com npx tsc.

