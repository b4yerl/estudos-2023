# Javascript - Lógica de Programação

## Extensões VSCode
- Code Runner
- Code Time
- Git Graph > olha depois
- StardadJS > olha depois
- Dracula Official > tema
- Material icon Theme

## Operadores de Comparação

Dentro dos operadores de comparação existe uma diferança quando falamos da igualdade:
- ==  igualdade (valor)
- === igualdade (valor e tipo)
- !=  diferança (valor)
- !== diferença (valor e tipo)

Note que a igualdade que checa apenas o valor, não deve ser utilizada para comparação. Não é ideal que confiemos em um type correction para resolver nossos prolemas, tipos diferentes devem ser vistos como coisas diferentes.

Uma comparação retorna um valor booleano

## Avaliação de short-circuit

Quando temos uma operação lógica com &&, sabemos que a partir do momento que encontramos um 'false' o resultado pela tabela verdade, também será 'false'. A mesma lógica pode ser aplicada para a relação entre operações com || e valores 'trueque encontramos um 'false' o resultado pela tabela verdade, também será 'false'. A mesma lógica pode ser aplicada para a relação entre operações com || e valores 'true'.

No javascript temos os seguintes FALSY VALUES:
- false
- 0
- '', "", ``
- null, undefined
- NaN

Qualquer coisa diferente desses valores, no javascript é avaliado como 'true'

Sabendo disso, podemos ter acesso ao short-circuit no javascript, basicamente em uma operaçao lógica, um valor é retornado assim que ele 'crava' o resultado. Caso isso não ocorra é retornado o valor do último elemento da operação. Com isso podemos montar algumas expressões interessantes.
- console.log(true && 0 && 'Cruzeiro) // retorna 0
- console.log('Campeão' && 1921 && 'Cruzeiro') // retorna 'Cruzeiro'

A partir daí podemos por exemplo, chamar uma function apenas quando o valor de controle for verdadeiro
- vaiExecutar && minhaFunction();

A mesma ideia pode ser aplicada ao ||, mas agora retornando o primeiro valor verdadeiro da sua expressão. Isso nos permite criar estruturas lógicas/condicionais, utilizando apenas os operadores && e ||, sem o uso da estrutura condicional padrão.

## Exercício IMC

É uma boa prática de programação, manter o escopo global limpo, para isso criamos nesse exercício a função main().
Outra boa prática é a criação de várias pequenas funções que executem tarefas específicas, a fim de reutilizar esse código.

Quando queremos variar o style a depender de um resultado, podemos usar classes no arquivo css e apenas adiciona-las a medida do necessário.

Quando lidamos com o return dentro da estrutura condicional, não é necessário o encadeamento com else if, até por questões de legibilidade basta que passemos vários if

Principais lições que tiro desse exercício
- O uso de várias funções sendo chamadas no meu main()
- Manipular classes CSS ao invés do setAttribute()
- Uso de flags no retorno de uma validação

## Objeto Date

A função Date() é uma função construtora, portanto para declaração temos:
- const data = new Date();

Cada vez que rodarmos esse código, um novo objeto com todas as informações de data atual serão salvos na nossa variável

Um simples .toString já nos permite exibir esse horário de forma completa e legível já que o Date() é contado em milésimos de segundos a partir de 1/1/1970.

Sendo assim podemos passar como argumento na hora de instanciar nosso objeto, valores em milésimos de segundos fazendo operações para encontrar o resultado esperado.

Para instanciar o objeto na data desejada, podemos passar todos os parâmetros pro nosso timestamp, seguindo a ordem (lembrando que o mês é indexado por 0):
> const data = new Date(yyyy, MM, dd, hh, mm, ss, ms)

Outro ponto interessante é que se "transbordarmos" o parâmetro (65 segundos por exemplo) a função construtora corrige isso.

Além de branco (data atual), valor em ms e os parâmetros isolados, o Date() também aceita uma string que siga uma modelo 'yyy-MM-dd' ou 'yyyy-MM-dd hh:mm:ss', esse formato por string deve ser o mais comum.

Existem vários getters para o objeto de data, seguindo a ordem já descrta temos:
- data.getFullYear()
- data.getMonth() (indexado por 0)
- data.getDate()
- data.getHours()
- data.getMinutes()
- data.getSeconds()
- data.getMilliseconds()
- data.getDay() (dia da semana indexado por 0)

## Mais diferenças entre let e var

Uma coisa a se notar é que a variável var, diferente de let, pode ser redeclarada
> var nome = 'João';
> var nome = 'José';

O código acima roda sem problema '-'. O lance é que let tem escopo de bloco, então poderíamos ter 2 varíaveis declaradas com o mesmo identificador desde que em blocos diferentes.

Essa questão do escopo talvez seja a maior diferença entre var e let. Para let, qualquer {} representa um bloco e o escopo lá dentro e pah. Jaá pra var esse escopo aṕenas se apresenta na separação de funções.
 
Um escopo consegue olha o seu entorno pra buscar coisas de dentro pra fora, o que não vale pra busca de fora do escopo pra dentro.

Outra coisa acontece tanto com var quanto com function, o HOISTING. O que acontece, quando executamos um código JS, ele faz a elevação da declaração de variáveis. Note que não é elevação da atribuição de valores e sim da declaração. 

Pras funções o hoisting ocorre só quando há o uso da keyword function, quando criamos uma variável const e atribuimos a função a ela, o hoisting não ocorre.

## Atribuição via desestruturação de Arrays e Objetos

Jogo rápido aqui, isso foi feito lá atrás quando invertemos o valor de variáveis com:
> [x, y] = [y, x]

O lance é que esse tipo de atribuição de valor busca o valor armazenado nos index do array a direita que batam com os da esquerda, logo o código abaixo armazenaria 66 e 03:
> const [primeiroTitulo, segundoTitulo] = ['66', '03', '13', '14'];

Pra pegar o resto do array poderíamos passar uma variável pra ser um novo array, usando o Rest Operator, mais sobre isso [aqui](../../fcc-javascript-algorithms/es6.md).

Para objetos usamos algo parecido, mas seguindo as seguintes possibilidades:
> const { propriedade } = objeto;
> const { propriedade: minhaVariavel } = objeto;

Novamente, já vimos isso lá no [fcc](../../fcc-javascript-algorithms/es6.md).

Podemos criar valores padrão também aqui na atribuição por desestruturação
> const { invalid: variável = 'não existe' } = objeto;

Para objetos aninhados podemos usar a atribuição da seguinte forma:
> const { objetinho: { propriedade: prop = 'x' } } = objetão

## for classicão

Por mais que eu já esteja cansado de ver aulas e de usar o for, vou aproveitar o espaço pra reescrever algumas coisas kkkkk.

Dentro do for precisamos basicamente de 3 coisas para controlar o nosso loop:
- Uma variável de controle (para)
- Uma condição (enquanto)
- E uma atualização

Dessa maneira o forzão clássico é apresentado como:
> for(let controle; condição; atualiza controle)

A volta do laço segue a seguinte lógica: define a variável de controle -> checa a condição -> executa o código -> atualiza -> checa a condição -> executa o código -> e por aí vai

## DOM e a DOM tree

O Document Object Model é o que rege as coisas no browser. No topo da cadeia temos o window, seguido pelo document. Dentro do window.document é onde encontramos todo o nosso html.

A partir daí já exploramos a DOM tree, os childs de document são head e body por exemplo, document por sua vez é child de window e a lógica segue.

Quando nosso código chama um document.método estamos usando a API do DOM para interagir com a página no browser.

## for...in

Além do for clássico, temos outras formas de criar laços de repetição para iterar por arrays e objetos, o for...in
> for (let index in arr)

Veja então que no for...in pegamos o index no caso de arrays e as chaves nos objetos.

## for...of

O for of é específico para iteráveis (strings, arrays, etc). Ele lembra muito o foreach lá do C# se não me engano, basicamente entramos com
> for (let value of arr)

Diferente do for...in, o for...of já retorna o valor pra variável e não o index.

Note então que para objetos, a única possibilidade de iterar por ele é o for...in.

## forEach()

O forEach() aqui no javascript é um método do objeto Array que recebe uma função como parâmetro.

Essa função por sua vez recebe de 1 a 3 elementos no argumento, sendo eles: O valor do loop atual, o índice e o array completo.

Mais pra frente voltaremos ao forEach

## Exercício - HTML Collections e node list

Quando usamos o querySelectorAll para pegar a referência a uma coleção de elementos HTML, o retorno é uma NodeList, que se comporta de maneira muito similar a um Array, mas é um NodeList.

Podemos selecionar e armazenar o style de um elemento da DOM em uma variável, para isso usamos o getComputedStyle()

## while e do while

Normalmente usamos for quando sabemos qual será o nosso limite, quantas vezes iremos iterar, ou quando não temos uma condição interativa.

Para esses casos partimos para os while, com a diferença que o while padrão checa a condição antes de entrar no laço, já o do...while executa ao menos uma vez o código e só depois checa a condição.

## Break e continue

Dentro de um laço de repetição podemos controlar seu fluxo de repetição com as keywords break e continue.
- break: quebra o laço de repetição e retorna para a execução natural do código saindo do bloco.
- continue: permite pular para a próxima iteração, assim podemos por exemplo adicionar um desvio condicional para pular uma iteração.

## try, catch, throw

Quando sabemos que algo no programa pode lançar um erro tratamos isso com o bloco try catch. O bloco try indica um código que o programa tentará executar, caso isso dispare um erro, o fluxo é jogado para o bloco catch(err) recebendo o erro.

Não é interessante deixar o usuário ver o erro do programa, além de prejudicar a experiência do usuário, alguém vendo informações internas do nosso código é algo potencialmente inseguro.

Além disso podemos disparar nossos próprios erros. Para isso usamos algo como:
> throw('Mensagem do erro aqui'); // ou
> throw new Error('Mensagem do erro aqui');

Podemos tratar nossos próprios erros com o try catch, e assim eliminar as informações do erro lançado. Essa questão de segurança é válida principalmente pro frontend

Além do try catch, podemos adicionar o bloco finally, um bloco que sempre será executado independente de ter erro ou não.

## setInterval() e setTimeout()

O setInterval nos permite configurar um intervalo de tempo no qual queremos que uma função fique sendo executada:
> const timer = setInterval(relogio, 1000);

Podemos usar clearInterval() passando nosso interval para parar o processo.

Outra opção é o setTimeout(), este executa o nosso código uma vez após esperar o período de tempo pedido.
> const autoDestroy = setTimeout(explodeBase, 60000);

## Criando uma lista de tarefas

Podemos capturar o evento keypress para o momento do click de uma tecla em determinado local. Esse evento tem propriedades como keyCode que nos permitem especificar e identificar as teclas pressionadas.

Com a ideia de parent e child abrimos mais formas de manipular a DOM.

A solução para salvar as tarefas começou com ele iterando pela NodeList do querySelectorAll('li') e com replace() e trim() filtrando apenas o nome da tarefa de dentro do innerText que foi então passada para um array.

Com o array contendo o nome das tarefas, ele utilizou o JSON.stringify() para usar habilitar o possibilidade de salvar fácil essa string no localStorage e posteriormente converter de volta.

A volta basta usar o JSON.parse() e chamar a função que cria os li dentro de um for...of

Agora vou refazer o [código](./exercicios/taskList/js/taskListRefactor.js) tentando usar tudo visto nessa aula.
