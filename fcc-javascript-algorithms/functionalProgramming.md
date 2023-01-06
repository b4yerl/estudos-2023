# Functional Programming

Programação functional é um estilo de programação no qual as soluções são funções simples e isoladas, sem que haja nenhum efeito paralelo ao escopo da função
> INPUT - PROCESSAMENTO - OUTPUT

Functional programmin se trata então de:
- Funções isoladas - Não há dependências ao estado do programa, variáveis globais por exemplo
- Funções puras - O mesmo input sempre devolve o mesmo output
- Funções com efeitos colaterais limitados - Qualquer mudança, mutação, fora do escpo da função é cautelosamente controlado.

### Callback functions

Uma função que recebe outra função para decidir o que fazer torna-se mais flexível, tendo mais controle sobre as mudanças de pedidos.

Callbacks são funções que são passadas dentro de outras funções para decidir a 'invocação' daquela função...... Um exemplo é a função que passamos pra .filter(), é ela que decide o critério a ser usado no filtro do array.

Funções que podem ser atribuídas a uma variável, passadas em outras funções ou retornadas por outras funções como se fossem qualquer outro valor, são chamadas de first class functions. No javascript, todas as funções são firts class.

Funções que recebem ou retornam outras funções são as higher order functions, enquanto funções que são passadas ou são retornadas, podem ser chamadas de lambda functions :)

Só um ponto antes de fechar o tópico, quando passamos a função como parâmetro, não chamamos a função, damos apenas a variável/identificador.

### Os pergigos do código imperativo

Programação funcional é um bom hábito. Ela mantém o código com fácil manutenção e te poupa de bugs traiçoeiros, mas para entender o porquê, devemos voltar pro modo imperativo.

Imperativo vem da ideia de dar comandos, no caso, passar uma série de ordens pro computador realizar as tarefas. Muitas vezes isso é feito atualizando uma variavel global.

Em constraste, a programação funcional age de forma declarativa. Você diz ao computador o que deve ser feito através de funções ou métodos.

Javascript por padrão já oferece uma série de métodos para realizar tarefas comuns, sem que usemos o modo imperativo. Por exemplo, ao invés de usar o for, para realizar alguma tarefa em um array, podemos usar o método .map() que recebe uma callback function e lida com a implementação da iteração pelo array, isso pode evitar a aparição de bugs como o Off by One visto [aqui](./debugging.md).

### Evite mutações e efeitos colaterais

No exercício da lição anterior o erro estava no uso do splice(). Infelizmente splice() alterou o array original e levou ao bug, esse é só um exemplo de um padrão muito, muito maior.

Um dos princípios fundamentais da programação funcional é não alterar as coisas. Mudanças levam a bugs e é mais fácil previnir bugs sabendo que suas funções não mudaram nada, NADA.

Lembrando que em functional programming, mudar ou alterar coisas é chamado de mutation e o resultado disso um side effect. No mundo ideal uma função deve ser uma pure function, ou seja, não deve causar side effects.

### Use argumentos para evitar a dependência externa

Outro princípio da programação funcional é sempre declarar suas depêndencias explicitamente. Ou seja, se uma função depende de uma variável ou de um objeto, então passe-os nos argumentos da função.

Esse comportamento traz algumas boas coisas, por exemplo, a função passa a ser mais fácil de ser testada, já que agora sabemos exatamente o que ela precisa, trazo mais confiança na adição, alteração e remoção de partes do código, já que sabemos o que é necessário ou não à função e finalmente, independente de qual parte do código executa a função, ela passa a ter semore o mesmo output.

### Refactor Global Variables Out of Functions

Até agora vimos dois princípios distintos da programação funcional:
- Não alterar variáveis ou objetos, ao invés disso crie as suas próprias varáveis, seus proprios objetos e retorne eles na função.
- Declarar os argumentos da função, qualquer coisa que ocorra dentro da função dependa apenas dos parâmetros passados e não de variáveis globais.

### .map()

Funções são first class objects em javascript, o que significa que elas se comportam como qualquer outro objeto: Podem ser armazenadas em variáveis, salvas em outro objeto ou passadas como argumento de funções.

Nessa lição vamos começar a olhar para algumas funções de arrays, métodos presentes no prototype do Array. Começaremos pelo map().

O método map() itera por cada item de um array e retorna um novo array, contendo o resultado da callback function em cada elemento, dessa forma ele não altera o array original.

Quando a callback function é chamada, são passados 3 argumentos:
- O elemento a ser processado
- O index do elemento
- O array no call o map() foi chamado

Na lição em que foi necessário implementar meu próprio map, pude rever a questão do, posso passar quantos argumentos eu quiser para uma função que não terei erro.

Isso está melhor descrito no Eloquent Javascript, depois vou revisar lá.

### .filter()

Outro método útil do Array.prototype é p filter(). O filter chama uma função para cada elemento do array e caso o elemento atenda ao teste proposto, ele retorna-o, uncionando como um filtro mesmo.

A callback aqui novamente aceita os mesmos 3 argumentos que a callback function do map().

### .slice()

O Array.prototype.slice retorna um uma cópia de determinados elementos de um array recebendo até 2 argumentos. O primeiro indica o index de onde a ação começa e o segundo indica a parede no qual termina (não-inclusivo).

Podemos não passar nenhum paâmetro, dessa forma a cópia terá início no index 0 e irá até o final. Essa é uma maneira simles de fazer uma cópia de um array.

### Removendo elementos com slice ao invés de splice

Um padrão comum quando trabalhamos com array é a remoção de itens e a manutenção do resto. Javascript por padrão oferece o método splice(), que recebe o index de onde começa a remoção e o número de itens a serem removidos.

O problema é que o splice atua alterando o array original. Em contrapartida o método slice() não altera o array inicial, ele retorna um novo array.

### concat()

Para utilizar o slice no lugar do splice, precisaremos do Array.prototype.concat, com este método podemos juntar 2 arrays para formar um terceiro.

Seguindo a ideia da programação funcional, criando funções e utiliazndo funções que não alterem nada <3. Podemos usar o concat em substituição ao push. Dessa forma retornaremos um novo array e não uma alteraçõa do original.

### .reduce()

Array.prototype.reduce é a operação mais geral de todas no JS. Você pode resolver quase qualquer problema de rocessamento.

É possível provar que tanto map quanto filter, são aplicações especiais do reduce. O reduce itera por cada ittem de um array e retorna um valor único (string, objeto, array, etc), isso ocorre através de uma callbalck function.

A callback function aqui aceita 4 argumentos:
- O accumulator recebe o return value da iteração anterior.
- O segundo é o elemento atual sendo processado
- O terceiro é o index
- Por fim o array original.

Além da callback function, reduce também recebe um parâmetro adicional, o valor inicial do accumulator, caso não seja dado um valor inicial, a primeira iteração é pulada e a segunda recebe o primeiro item do array como accumulator.

### .sort()

O método sort ordena os itens de acordo com a callback function, por exemplo, para ordenar um array de números em ordem crescente usamos:
> (a, b) => { return a - b; }

Como o padrão usa o Unicode point value, isso pode gerar resultados inesperados, por iso a importância de se passar a própria callback funtion.

A callback function do sort é conhecda como compareFunction e segue a seguinte regra:
> Se compareFunction(a,b) retornar um valor menor que 0 então a vem antes de b. Caso o valor seja maior que 0, então inverte-se a ordem dos elementos. Caso o resultado seja igual a 0 então a ordem dos elementos é indiferente.

Seguindo essa ideia, podemos escrever uma função que ordena os letras em ordem alfabética:
> function(a, b) { return a === b ? 0 : a < b ? -1 : 1 }

Um problema com sort é que este método modifica o array original, mas existem maneiras de contornar isso. Uma dessas maneiras é aliar o uso de sort ao concat([]) ou ao slice(), já que ambos retornam um novo array.

### .split()

O split divide uma string em um array de strings. Para isso ele recebe um delimitador, podendo este ser um caracter (string) ou uma regex.

Como strings são imutáveis, o método split pode facilitar o trabalho com elas.

Por exemplo, para separar e delimitar a quebra em todo caractere não alfa numérico, podemos usar
> string.split(/\W/);

### .join()

O método join é usado para juntar os elementos de um array retornando uma string. Este método recebe como argumento um delimiter que será usasdo para separar os elementos na string.

### .every() e .some()

Retornando um bool, o método every() recebe uma callback function contendo uma condição e checa se todos os elementos do array atendem ao teste pedido.

Funcionando de forma parecida o .some() retorna true caso qualquer elemento do array atinja o critério da callback.

### Introduction to Currying and Partial Application

A aridade de uma função é o número de argumetos que ela requer. Currying uma função significa converter uma função de N aridade para N funções de aridade 1.

Ou seja, isso significa reestruturar uma função para uma que receba 1 argumento e retorne outra função que recebe 1 argumento.
> const unCurried = (a, b) => a + b;
> const curried = a => b => a + b;

Dessa forma ao invés para obter a soma de 1 e 2, poderíamos, ao invés de unCurried(1, 2), chamar curried(1)(2).

Isso é útil caso não tenhamos todos os argumentos de uma vez. Podemos armazenar uma function call em uma variável e passar o argumentos restantes:
> const faltaB = curried(1);
> const resultadoFinal = faltaB(2);

De forma simiilar podemos entender partial application como aplicar alguns argumentos em um momento e retornar outra função que receberá mais argumentos (? acho que não fui claro):
> const impartial = (x, y, z) => x + y + z;
> const partialFunction = impartial.bind(this, 1, 2);
> partialFunction(10); // retorna 13
