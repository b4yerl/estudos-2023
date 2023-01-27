# Javascript Assíncrono

### Promises

Muitas vezes buscamos recursos em que não sabemos/temos controle de quando isso vai estar pronto. Antes a solução para isso eram as callback functions que eram executadas quando o conteúdo estivesse pronto, o problema era o callback hell.

Agora podemos retornar promises e usar o .then() para pegar os resolves e trabalhar assim, encadeando os then se assim for necessário.

Quando retornamos uma promise passamos uma função em seu argumento com 2 argumentos - resolve e reject. O .then() é justamente pra pegar o resolve, já pra pegar o reject temos um .catch().

Note que não precisamos encadear o .catch(), o JS sabe que ele deve ser executado em qualquer reject.

### Métodos úteis para Promises

O Promise.all() resolve todas as proomises que são passadas a ele e só então retorna todos os valores juntos. Também temos o Promise.race(), nesse caso é uma corrida mesmo, o primeiro valor a voltar pronto é o que vai ser resolvido, mas note que os que "perderam" a corrida continuam executando até serem concluídos.

### async / await

Com async/await podemos deixar nosso código bem mais limpo. Ao criarmos uma função e a declrarmos async, podemos usar o await lá dentro para que nosso código assíncrono seja escrito e executado como se fosse algo síncrono.

A diferença agora é que caso tomemos um reject(), se ele não estiver sendo tratado, ele será um UnhandledPromiseRejectionWarning. Para tratar podemos fazer um bloco try catch normal mesmo e tá sussa, o erro que vai no catch() é o que voltar com o reject().

Note que se não usarmos await, nem then, nossa variável vai ficar com a promise em estado pending armazenado. Pending é um dos três estados possíveis de uma promise, junto com fulfilled e rejected.

### XMLHttpRequest, fetch API e axios

O código [desse exercício](./ajax/assets/js/main.js) traz todas as três maneiras, como essa é uma parte mais prática de como usar assincronicidade em páginas com JS e eu cansei de fazer isso no primeiro semestre da faculdade usando fetch, então decidi não escrever tudo aqui, mas da pra entender por lá.





