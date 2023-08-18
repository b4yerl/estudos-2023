# What is Node.js

Node.js é um runtime de Javascript, ou seja ele roda programas em JS, utilizado principalmente para criar ferramentas de linha de comando e aplicações de servidor web.

Desenvolvido inicialmente por Ryan Dahl, o Node.js tem como base o *V8 Engine* do Google Chrome, com mais algumas APIs e envelopado em um **event loop**.

JavaScript hoje é a linguagem mais popular do GitHub, usada por uma cacetada de gente, logo entende-se a popularidade do Node.js. Como todo dev front-end já tem que saber JS, começar nas aplicações back-end na mesma linguagem muitas vvezes é o caminho natural.

O Node roda em uma única thread de processamento. Tarefas maiores e complexas, como uma query em um DB, são processaodas de forma assíncrona, o que não trava a execução. A task roda em background enquanto o Node segue o baile, quando ela é finalizada e os dados retornam é invocada uma callback functon.

Ponto importante de se notar é que o Node.js é um projeto open source, além da maioria do seu vasto leque de módulos, que podem facilmente ser instaldos com o `npm`.

E o Deno? Bom, o Deno é o projeto mais recente do Ryan Dahl, também utilizando o V8 Engine. No Deno algumas inconstistencias do Node foram corrigidas, o Typescript agora tem suporte direto sem a necessidade de ser transpilado, além do uso de ES6 Modules ao invés do tradicional CommonJS. Dito isso, o Node.js ainda tem uma popularidade absurda.

### Respostas Quiz

1-d; 2-d; 3-b; 4-c; 5-a (5/5)
