# Intro to Node.js

### What is Node.Js?

O Node.js é um runtime open source do Javascript que nos permite rodar códigos JS em muitos lugares fora de um browser, como em um servidor.

O Node é um wrapper da engine V8, o motor do Chrome que interpreta códigos JS e funciona de forma independente ao browser. Através do Node podemos rodar o V8 fora de qualquer browser, não só isso, o Node traz otimizações à engine que aplicações server-side precisam. Por exemplo, o Node adicona uma Buffer class que permite o V8 trabalhar com arquivos.

Javascript tem se tornado cada vez mais relevante com a ascensão das single-page applications e o amplo suporte ao formato JSON para troca de dados. Muitas tecnologias NoSQL como o MongoDB, ustilizam JS e JSON para formatar queries e schemas.

Junto ao ambiente do Node.js também temos o npm para compartilhamento e gerenciamento de bibliotecas, pacotes.

O Node é rápido, possui alta performance e consegue lidar com aplicações em tempo real e alto fluxo de dados. Você pode por exemplo construir um stream deck, instalar o Node.js na sua placa IoT e escrever a lógica toda em Javascript.

### How Node.js works

Como Node consewgue rodar javascript fora do browser, o runtime tem acesso direto ao I/O do sistema operacional, sistema de arquivos e redes.

Node.js é baseado em um "Single-threaded event loop". Esse modelo de arquitetura eficientemente lida com operações concorrentes. Concorrência aqui é a habilidade do event loop de realizar callback functions em JS após concluir outro trabalho.

Neste modelo de arquitetura:
- Single-threaded siginifica que o Javascript possui apenas uma call stack, sendo assim, realiza uma tarefa por vez.
- O event loop roda o código, coleta e processa os eventos e então roda as subtasks na fila de eventos.

Nesse contexto, uma thread é uma única sequência de instruções programadas que o sistema operacional pode gerenciar de forma independente.

Em operações de I/O do Node, como ler ou escrever um arquivo no disco, realizar uma chaamda de rede a um server remoto, etc, são consideradas blocking operations. Uma blocking operation trava todas as tasks seguintes até que a operação seja concluída. Em um modelo non-blocking, o event loop consegue rodar múltiplas tarefas de I/O ao mesmo tempo.

O nome event loop descreve o uso do mecanismo "busy-waiting" que aguarda de forma síncrona a chega de uma mensagem antes de processá-la:
> while(queue.wait()) { queue.process(); }

O Node usa uma arquitetura baseada em eventos onde, um event loop cuida da orquestração e uma worker pool trava as tarefas. O event loop torna possível ao Node lidar com operações concorrentes. As principais fases do event loop são:
- TIMERS: Processam callbacks agendadas por setTimeout() e setInterval().
- CALLBACKS: Rodam callbacks pendentes
- POLL: Puxa eventos relacionados a I/O e roda callbacks relacionadas a I/O
- CHECK: Permite que callbacks rodem imediatamente após a conclusaão da fase POLL
- CLOSE CALLBACKS: Fecha eventos e callbacks
<div align="center">
  <img src="https://learn.microsoft.com/en-us/training/advocates/intro-to-nodejs/media/event-loop.svg" height="150px">
<br>
</div>
Node.js usa a worker pool para lidar com blocking operations como I/O e outras tarefas de uso intenso de CPU.

Em suma, o event loop roda callbacks em js registradas para eventos e é responsável por satisfazer requests assíncronas non-blocking.

Graças ao V8, javascript pode entregar resultados em performance tão bom quanto linguagens de nível mais baixo. Além disso o Node tira vantagem da natureza de orientação a eventos do JS.

Para dar suporte ao poderoso modelo baseado em eventos, Node.js tem "de fábrica" um set de APIs non-blocking I/O para lidar com tarefas comuns como file-system e manipulação de database. Essas APIs são providas pela biblioteca libuv. Quando mandamos a request para o Node ler o conteúdo de um arquivo em disco, Node não bloqueia enquanto aguarda o disco e leitores do arquivo estarem prontos. Ao invés disso a interface non-blockin de I/O notifica o Node quando o arquivo estiver pronto. O non-blockin I/O funciona da mesma maneira que o browser quando ele avisa ao código que um eventop de mouse ou teclado foi triggado.

#### Complemento: [Introdução ao Node.js por Fábio Jânio, Medium](https://fabiojanio.medium.com/introdu%C3%A7%C3%A3o-ao-node-js-single-thread-event-loop-e-mercado-46edd82c1faf)

Para complementar e esclarecer mais o funcionamento do Node.js fui atrás de material extra e decidi dar uma olhada mais a fundo neste artigo.

O Node.js é uma plataforma orientada a eventos que utiliza o conceito de single thread para gerenciar a call stack, que adota comportamento LIFO. As operações de background no Node são gerenciadas por works (worker pool daqui de cima) que rodam em regundo plano e, estes sim, podem conter operações multi-thread.

Os works são processo em background de I/O assíncrono non-blockin gerenciados pela biblioteca libuv, uma biblioteca open source em C, que utiliza uma thread-pool para gerenciar operações paralelas.
<div align="center">
  <img src="https://miro.medium.com/max/720/1*4Ck2I0oTttvVbinPrgIiKw.webp" height="150px">
  <br>
</div>
Os eventos entrante são empilhados na Stack, o Event-loop fica monitorando a stack em busca de eventos a aserem processados, ao encontrar um evento que não represente uma operação pesada, o mesmo é executado imediatamente e o Event loop prossegue para o próximo evento.

Caso tenhamos uma operação longa, como uma tarefa de I/O, o event loop manda ela, juntamente com uma callback, para o Background, passa a ser responsabilidade da libuv gerenciar essa execução em uma thread separada do event loop, assim, o mesmo fica livre para seguir nos outros eventos da Stack. Assim que a tarefa rodando na thread separada for concluída, a sua callback é adicionada à Task Queue, que aguarda o Event-loop terminar a sua task para entrar na Stack e ter a instrução executada.

<div align="center">
  <img src="https://miro.medium.com/max/720/1*4SoPLMu-BDKU83RTOsSm1w.webp" height="150px">
  <br><br>
</div>

