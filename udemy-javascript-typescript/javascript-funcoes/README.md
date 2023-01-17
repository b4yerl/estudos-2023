# Javascript - Funções

### As várias maneiras de se declarar uma função

A forma mais comum talvez de se declarar um função é com o uso da keyoword function. Quando declaramos a função dessa maneira temos a possibilidade de que ocorra o hoisting podendo assim escrever um código top-bottom.

No javascript funções são first-class objects, ou seja podemos tratar uma função como um valor que pode ser armazenado em uma variável.
> const greet = function() { console.log('salllveee') };

Esse comportamento abre possibilidades diversas, tipo funções que recebem funções como argumento:

A partir do ES6 passamos a ter a possibilidade de usar arrow functions, mais sobre esse assunto deve ter diponível [aqui](../../fcc-javascript-algorithms/es6.md).

### Parâmetros da função

Javascript é bem pouco restrito quanto ao envio de parâmetros, passando menos parâmetros do que o especificado como argumentos da função, ou passando mais, não é retornado nenhum erro.

Se declararmos a função usando a keyword function, ou sej não serve pra arrow function, teremos acesso ao objeto "arguments" ele sustenta todos os argumentos, sejam argumentos esperados ou não.

Argumentos que não recebam nenhum valor são inicializados como undefined pelo javascript. Em alguns casos isso pode prejudicar o funcionamento do nosso código.

Podemos assim nos proteger de algumas maneiras, o short circuiting em um argumento, ou de forma mais interessante, com valores padrão na própria declaração dos argumentos.
> function sum(a = 0, b = 0) { return a + b }

Caso saibamos a classe específicica que vamos recveber, podemos fazer a desetruturação de um objeto nos argumentos. A ideia da desestruturação serve também para arrays.

Outra possibilidade legal que veio com o ES6 é usar algo parecido com o objeto arguments. Podemos usar o rest operator para receber um array no nosso argumento. Então é melhor usar ele quando temos parâmetros indeterminados do que contar com o arguments.

### Retorno da função

Funções podem ou não retornar um valor, sendo que nesse return podemos botar o que a gente quiser, inclusive podemos retornar outras funções que recebam outros parâmetros. 

Essa ideia de retornar funções dentro de funções é útil para desmembrar uma função, diminuindo sua aridade com o Currying, mais sobre isso [aqui](../../fcc-javascript-algorithms/functionalProgramming.md).

### Escopo léxico e closures

Dá pra entender esse escopo local como uma sequência de conjuntos e subconjuntos. Para encontrar uma variável, o javascript olha o escopo local, se não encontrar nada, olha uma "bolha" acima e assim vai seguindo os níveis superiores.

A função sabe onde foi criada e sabe seus vizinhos, isso caracteriza o seu escopo léxico, mantendo isso independente de ond for executada.

Essa habilidade da função de acessar o seu escopo léxico, acessar o contexto que a envelopa, seus vizinhos. Podemos verificar isso no browser (V8 pelo menos sim) com console.dir().

### Callback functions

Quando trabalhamos com web, as vezes precisamos executar tarefas que não podemos controlar quanto tempo irão demorar.

Podemos usar a ideia de callbacks para controlar, por exmplo, a ordem da execução do código. Uma opção ao uso de callbacks são as Promises que veremos mais pra frente no curso.

### Funções imediatas (IIFE)

Temos aqui tentado fugir do escopo global evitando sempre que possível que nossas variávei e funções o toquem. Para isso a gente tem utilizado algo tipo "function main() {}" envolvendo nosso código e o chamando com um "main()" no fim de tudo.

Podemos usar IIFE para invocar automaticamente uma função anônima e que fica isolada completamente do escopo global, para isso basta envolver a função em parenteses e chamá-la na sequ^qncia.
> (function() {.....})();

### Factory functions

Factory functions aqui são as funções que retornam objetos simples, sem ser através de uma função construtora.

Entramos nesse assunto para começar a introduzir o uso do this. No caso de utilizarmos uma função dentro de um objeto, o this se refere ao objeto em sim. Logo se nosso objeto tiver uma propriedade "name", poderíamos nos referir a ele como "this.name". 

Para tornar nosso método um getter, basta colocar a keyword "get" na frente da sua declaração. Da mesma forma podemos criar um setter tendo inclusive o mesmo nome do getter.

### Constructor functions

Na função construtora utilizamos PascalCase para sua nomeação. Quando declaramos propriedades e métodos dentro de um Constructor, usamos sempre o this.

Podemos usar const ou let, para criar uma variável disponível apensas dentro do constructor privando do acesso externo posterior.

### Funções geradoras

Funções geradoras possuem um recurso especial chamado lazy evaluation, para declarar uma utilizamos:
> function* nomeFunction() {};

Em funções geradoras ao invés do return, utilizamos yield. Esse yield gera retornos em objeto. Para acessar esses valores devemos utilizar o .next(), assim receberemos um objeto com 2 chaves:
> { value: valorRetornadoAtual, done: boolean }

O done serve para conttolar o fim dos 'yield' da nossa função geradora.

Essa geradora que armazenamos em uma variável pode ser iterado por um for...of por exemplo e irá retornar todos os seus valores.
