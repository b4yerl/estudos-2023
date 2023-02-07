# Unions and Literals

## Union Types

Quando utilizamos um union type para declarar o tipo de uma variável, o Typescript não nos permite utilizar, acessar, uma propriedade que não seja comum a todos os tios possíveis. Isso é feito como medida de segurança.

Caso queiramos utilizar métodos e acessar propriedades atreladas a apenas alguns dos tipos possíveis em uma union, devemos realizar um "narrowing", um afunilamento de possibilidades.

A primeira maneira de fazer isso é através da atribuição direta de um valor. Quando isso ocorre, o Typescript sabe qual o tipo atual armazenado naquele endereço e assim, permite que façamos operações relacionadas ao tipo em questão.

Podemos fazer esse narrowing também com desvios condicionais. Um bloco `if` aliado ao operador `typeof` podem por exemplo garantir que estamos acessando propriedades existentes no tipo atual da variável. Note que esse desvio condicional também é aceito com o operador ternário.

## Literal Types

Além de usar tipos primitivos, podemos declarar o tipo de uma variável como sendo o valor literal que ela assume. É isso que ocorre, mais ou menos, quando declaramos uma variável com `const`, Seu tipo passa a ser um literal type, no caso o valor a ela inicialmente atribuído.

Podemos pensar em tipos primitivos como uma grande union de todos os literals possíveis ali, por exemplo `boolean` na verdade pode ser visto como sendo `true | false`.

## Strict Null Checking

O Typescript possui diversas opções de configuração que podem ser alteradas para modificar o comportamento do type checking, do compiler, enfim, uma das opç~çoes que veremos agora é o `strictNullChecks`.

O `strictNullChecks` quando desabilitado, basicamente adiciona `| null | undefined` em todos os tipos declarados, permitindo que qualquer variável receba `null`ou `undefined`. A boa prática aqui é manter o `strictNullChacks` ligado, mantendo também a segurança dos tipos e caso precisemos de um null, podemos simplesmente declarar isso nmo código.


