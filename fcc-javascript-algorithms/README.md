# Javascript Algorithms and Data Structures - Free Code Camp

## Anteriormente em...
Então, esse curso do fcc eu já havia começado há uns meses, infelizmente na época não anotei nada que aprendi com ele, então toda a parte inicial de variáveis, operações lógicas, condicionais, laços de repetição, o básico de arrays e de objetos, tudo isso passou e a partir daí seguimos. Assim sendo vou fechar logo abaixo o que falta do módulo básico e a partir daí seguimos com tudo certinho.

## Basic Javascript

### Recursion
A recursividade é o conceito no qual uma função possa ser chamada nela mesma (espero ter traduzido isso de forma clara), mas bascimante estamos falando de algo como:
> factorial(n) { <br>
> if(n == 0) return 1; <br>
> else return n * factorial(n - 1) <br>
> }

Esse código acima retorna o fatorial de um número n. Entenda a call stack como uma chain no Magic the Gathering, onde os efeitos são encadeados e resolvidos em ordem LIFO (last in first out).

Note que uma função recursiva deve sempre ter uma condição de saída do loop proposto.

### Math.random()
A função Math.random() retorna um número aleatório tal que "0 <= x < 1". Números aleatórios são uteis na, advinha só, criação de comportamentos aleatórios.

Coisa rápida desse exercício, mas que apesar de me parecer óbvia vou explicitar aqui. Todo return com uma chamada de função funciona como um operador de atribuição, primeiro resolve-se a função e então passa seu valor retornado:
> return Math.random() // Retorna um número entre 0 e 1

Mais útil do que gerar um número desses entre 0 e 1 é utilizarmos essa função para gerar números aleatórios dentro de uma quantidade desejada.
Por exemplo se quisermos criar um d20 pro nosso RPG, precisamos gerar 20 números aleatórios, para isso basta que usemos o Math.random() em conjunto com o Math.floor():
> Math.floor(Math.random() * 20);

Essa linha de código nos entrega um número aleatório entre 0 e 19.

Outra possibilidade é a geração de números aleatórios dentro de um range específico de min e max.
> Math.floor(Math.random() * (max - min + 1)) + min;

No caso dessa função a expressão dentro dos parenteses faz a mesma coisa da função anterior, diz o número de resultados possíveis, fica pro 'min' do lado de fora a tarefa de subir esse chão.

### parseInt()
Quando recebe somente um parâmetro o parseInt() faz exatamente o que se propõe, transformar uma string em um inteiro. Existe a possibilidade de passarmos um segundo parâmetro, um radical que representa a base do sistema a ser utilizado na conversão, então se tivermos 5 em binário, para converter seria:
> parseInt('101', 2)

### Operador ternário
Além do if...else e do switch, podemos representar condições usando o operador ternário. Na sua sintaxe basicamente damos uma expressão lógica que caso verdadeira executa uma coisa, caso falsa outra:
> return a > b ? 'a é maior' : 'b é maior ou igual';

Podemos aninhar/encadear essas checagens pra fazer um 'else if':
> return a === b ? 'são iguais' : a > b ? 'a é maior' : 'b é maior'

### Usando recursividade

Da última vez que vimos recursividade, ela foi usada para substituir um for, dessa vez faremos algo um pouco mais diferentão. A ideia nessa lição é criar um contador usando recursividade.
Basicamente aquela call stack dita um pouco aí pra cima é toda montada pra que a medida que for sendo resolvida, vá montando o nosso array.

Por fim a última lição do módulo básico é o uso da recursividade para criar um range de números, a ideia por trás é exatamente a mesma já vista acim, com uma diferença - se lá o  < 1 servia pra cortar o loop, aqui será o < startNum.

## ES6

### Comparando o escopo de let e var

Quando é utilizada a keyword 'var', estamos declarando a variável globalmente, ou localmente caso declarada dentro de uma função. Já o 'let' se declarado dentro de uma função, bloco ou expressao, seu escopo fica limitado à função, ao bloco ou à expressão.

### Alterar um array declarado com const

No JS moderno, muitos devs gostam de, por padrão, declarar suas variáveis com const, a não ser que saibam que o valor armazenado será posteriormente alterado.

Entretanto é importante entender que objetos (incluinod arrays e funções) mesmo com const ainda são mutáveis. Esses tipos complexos têm armazenados na variável apenas a referência para sua localização na memória, por isso o const apenas impede essa mudança da referência.

### Previnir mutação de objetos

Apesar da keyword 'const' não proteger nossos objetos de sofrerem mutações, caso esse seja nosso desejo podemos usar a função 
> Object.freeze(nossoObjeto)

### Arrow functions

Gosto muito xD. As arrow functions são uma forma mais concisa de escrevermos uma função anônima.

Quando temos que declarar uma função que não será reutilizada e simplesmente não precisa de nome, usamos funções anônimas, isso é comum por exemplo quando temos uma função como argumento de outra.

Assim como qualquer função regular, arrow functions também aceitam argumentos, inclusive caso haja exclusivamente um argumento, podemos omitir os paranteses, mas aí já é maluquice...
> const quadrado = (n) => {n * n};

### Parâmetros default pra funções

Introduzido no ES6, podemos inclur valores padrão para os argumentos de uma função
> const hello = (name = 'world') => `Hello ${name}`;

No caso acima, caso não seja dado um parâmetro, sendo ele undefined, o console.log(hello()) será 'Helo world'. 

### Rest Parameter

Para termos functions mais flexíveis, temos os rest parameters. Com eles, podemos criar funções que recebam um número variável de argumentos.

Esses argumentos são armazenados em um array para uso posterior. 
> function howMany(...args) { <br>
> return "You have passed " + args.length + " arguments."; <br>
> }

O rest parameter nos permite usar direto map(), filter(), reduce() ao nosso array de argumentos.

### Spread operator

No ES6 foi introduzido a possibilidade de expandir arrays e outras expressões onde multiplos parâmetros são esperados.

Por exemplo, se quisermos saber o maior valor dentro de um array. A função Math.max(arr) retornaria NaN, já que espera-se como parâmetros números separados por vírgula e não um array. Uma solução seria usar o apply passando Math.max.apply(null, arr). O spread operator facilita a leitura dessa expressão com um simples <b>Math.max(...arr)</b>. O spread operator faz literalmente isso, ele "spread" o nosso arr, desempacota ele.

Note que o spread operator só funciona em algumas ocasiões na qual faça sentido o que se pede, exemplo:
- Math.min(...arr);
- let spreadArr = [...arr];

### Usando atribuição por desestruturação para extrair valores de objetos

Até o ES5 quando tinhamos um objeto, user por exemplo, para extrair seu nome e sua idade, teríamos duas variáveis recebendo os valores de user.name e user.age. COm o ES6 essa atribuição pode ser reduzida para:
> const { name, age } = user;

Com isso name e age passam a ter os valores de user.name e user.age.

Esse modelo é mais limpo na escrita, mas não me permite nomear a variável da forma que eu queira, para isso usamos:
> const { name: userName, age: userAge } = user;

A mesma ideia serve também quando queremos desestruturar objetos aninhados.

### Usando atribuição por desestruturação para extrair valores de arrays

Quando usamos o spread operator na desestruturação de um array, não escolhemos os valores que queremos, apenas recebemos uma lisat completa do array com valores separados por virgula.

Por exemplo, no array [1, 2, 3, 4, 5], para extrair apenas o 1 e o 2 podemos fazer
> const [a, b] = arr;

Podemos também extrair 1, 2 e 4:
> const [a, b,, c] = arr

Podemos também usar o rest parameter para fazer algo similar a um slice, retornando todo o resto do array
> const [a, b, ...cut] = arr

### Usando atribuição por desestruturação em parâmetros de functions

Em alguns casos quando uma função recebe um objeto como parâmetro, podemos ao invés de fazer a desestruturação no código, passar ela já no argumento da função.

### Template literals

Isso aqui você já tá ligado, ao invés de usar a concatenação com o + para criar strings e inserir variáveis no meio, você pode agora usar o acento grave para abrir e fechar a string e inserir suas variáveis dentro de um ${}.

### Concise object literal declarations

Quando declaramos um objeto onde sua propriedade tem o mesmo nome do valor que ela recebe via parâmetro, podemos reduzir o texto e eliminar as redundâncias, passando apenas o nome da propeiedade

### Funções concisas em objetos

Antes quand declaravamos funções dentro de um objeto era necessário dar o nome e após o : dizer o function() {}, como se fosse uma função anonima mesmo.

A partir do ES6 basta passar direto nomeFunção() {}, sem a necessidade da keyword function.


### Sintaxe de classe para definir um construtor

Com o ES6 passamos a ter a keyword class, note que isso é apenas sintaxe e não a implementação completa de uma classe baseada na OOP.

A declaração de class tem um método constructor que é invocado junto a keyword new. Caso o constructor não esteja explicitamente definido, ele será implicitamente definido sem nenhum argumento.

Note que no ES6 o class na verdade é uma função que implementa objetos quando chamada com new. Por conveção usa-se PascalCase para nomear class.

O constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.

### getters e setters

Classicamente um getter retorna o valor de uma propriedade privada do objeto sem que o usuário acesse-a diretamente, enquando um setter permitem que essas proprieades priadas sejam modificadas.

Note também nesse capítulo o uso do _ na frente de uma propriedade privada, faz-se isso por convenção apenas.

### import e export

ES6 introduziu uma forma de facilmente compartilhar código entre arquivos JS. Isso envolve exportar e importar partes de código. Para isso criamos no nosso HTML uma tag script com type="module".

Podemos exportar um bloco de código simplesmente inserindo a keyword export na frente dele. Outra maneira de realizar esse export é através de um único export com os indicadores entre {}, lembra lá do Import no ignitelab?

Depois dos exports podemos reutilizar nosso código, para isso basta que indiquemos o import, para isso devemos dizer o que importar e de onde, aqui sim é igual o que fizemos lá no Ignite.lab
> import { add, subtract } from './math-functions.js';

Podemos também importar tudo de um arquivo e definir um alias para esse objeto
> import * as mathModule from './math-functions.js';

Podemos criar um fallback defaul para nosso export com o export default. Essa opção também está disponível no import. No caso do import basta passarmos um nome pra variável que vai receber a função default exportada
> import anyName from './math-functions.js';

### Promise

Uma promise em javascript é exatamente o que parece, uma promessa de que algo será feito, normalmente de forma assincrona. Quando a tarefa se encerra ou a promessa é cumprida ou há uma falha nisso.

Promise sendo uma função construtora deve ser criada com o new. Como argumento uma promise recebe uma função, essa função por sua vez terá 2 argumentos, resolve e reject.

Uma promise possui 3 estados: pending, fulfilled e rejected. É pra isso que servem o resolve e o reject, para alterar o status de uma tarefa entre pending e os outros 2.

Promises são uteis para lidar com processos que tomarão um tempo indeterminado no código (algo assíncrono por exemplo), geralmente uma request a um server.
No caso de um server request, quando este passar de pending pra fulfilled podemos querer fazer alguma coisa com a response. Isso é feito com o método then, uma vez que este é executado logo após a resolução da promise
> myPromise.then(res => {});

Caso a promise tome um reject podemos lidar com isso usando um bloco de .catch
> myPromise.catch(error => {});

## Regular Expressions

### Método test

Expressões regulares são utilizadas para validação e verificação de strings, para isso podemos criar padrões.

Para achar a palavra 'the' em 'the dog chased the cat', poderíamos usar a seguinte regex '/the/'

No javascript temos várias formas de utilizar regex, uma delas é através do método .test() que pega uma regex, aplica a uma string e retorna um bool.

### Match literal strings

Quando usamos o '/the/' na última lição, só iríamos obter true no test(), caso fosse encontrada uma string identica a 'the'. Case sensitive no caso.

Se quisermos buscar mais de um tipo de padrão ao mesmo tempo, podemos usar o operador lógico OU '|':
> const petRegex = /dog|cat|bird|fish/;

Para busca padrões sendo case insensitive, basta adicionar a flag 'i' ao final da regex.

### .match()

Até então só usamos o .test() para verificar a presença de um padrão, podemos usar o método .match() em uma string passando regex como parâmetro. Isso nos permite extrair a combinação encontrada.

Se acrescentarmos a flag 'g', nosso .match() passa a retornar um array com todos os matches.

Uma possibilidade é o uso do wildcard '.' por exemplo, um regex para encontrar 'dog' e 'dollar' pode ser '/do./'

Outra opção caso queiramos algo mais rígido é o uso de character classes, inserimos os caracteres desejados em [], para big, bag e bug:
> /b[aiu]g/

Agora imagine ter que cobrir muitas letras, para simplificar isso podemos definir um range de letras com o '-', essa sintaxe também serve para números 0-9.

### Negate character sets

Além de indicar padrões de combinação, podemos prefixar os [] com o sinal ^ para negar os caracteres indicados, para negar vogais por exemplo teríamos
> /[^aeiou]/ig

### Encontrar caracteres que apareçam mais de uma vez

Para termos combinações com caracteres que apareçam mais de uma vez pode-se usar o sinal +
> /a+/g

No caso acima ele busca repetições consecutivas, 'a' equivale a um match, assim como 'aaa' também.

Outra possibilidade é o uso do * para encontrar caracteres que se repitam 0 ou mais vezes.

### Lazy matching

Nas Regex um greedy match, encontra a maior parte possível de uma string que satisfaça a regex. A alternativa a isso é o lazy match, que busca sempre a menor parte possível.

Podemos aplicar a regex '/t[a-z]*i/' à palavra 'titanic' e o resultado será 'titani', no caso a maior substring possível para esse padrão.

Para alterar esse comportamento e buscar um lazy match, ou seja do 'ti', usamos o ?:
> /t[a-z]*?i/

### Buscando pelo começo e final de strings

Quando usamos o ^ dentro de um character set '[]' estamos indicando uma negação de caracteres, mas fora dele o ^ representa a busca por padrões no começo das strings.

Da mesma forma que podemos olhar para o início de uma string, também temos como olhar para o final, para isso basta acrescentar um '$' ao final da regex

### Buscar todas as letras e números

Anteriormente varríamos todas as letras do alfabeto com '[a-z]'. Esse tipo de situação é comum o suficiente a ponto de termos uma abreviação para isso, incluindo inclusive outros caracteres.

No Javascript o mais próximo que temos dessa busca é o '\w', que equivale a '[A-Za-z0-9_]'. Note que o '_' também está incluído no padrão.

É legal saber também que temos uma versão de negação desse padrão, o equivalente a '[^A-Za-z0-9_]' é o '\W'.

### Match all numbers

Além da busca por alfanuméricos, outro padrão comum é a busca por digitos / números. Para isso o '\d' equivale ao '[0-9]'.

Da mesma maneira a versão maiúscula '\D' serve para a negação e a busca por não números.

### Espaços em branco

Até então temos buscado apenas caracteres especiais e alfanuméricos, mas podemos também procurar por espaços, o atalho '\s' busca não só espaços como tabs, enters, \n, etc.

Advinha só, a negação desses espaços é o '\S'.

### Especificar o range de matches

Nós temos o + para buscar 1 ou mais repetições e o * para 0 ou mais, mas e para especificar a quantidade de repetições?

Para isso podemos especificar o alcance entre {}, por exemplo, se quisermos buscar a letra W repetida de 3 a 5 vezes:
> /w{3,5}/i

Existe a opção de definirmos apenas o valor mínimo de repetições, para isso omitimos o valor máximo
> /w{3,}/i

Por fim, o número exato de repetições também pode ser deifinido passando apenas o nḿero entre {}
> /w{3}/i

### Check for all or none

As vezes os padrões que buscamos podem ter partes que existam ou não.

A possível existência de um elemento pode ser definida com uma '?'. Ele checa se o elemento prévio existe ou não, meio que o marca como opcional.

### Positive and negative lookahead

Lookaheads são padrões que dizem pro JS pra buscar pelos padrões mais pra frente.

Para que eles sejam buscados positivamente usamos o padrão '?=...'. A negção do que pode aparecer pra frente é um '?!...'.

Note que lookaheads não retornam o que encontram, apenas conferem para garantir que o padrão está lá

### Mixed group of characters

Podemos mixar grupos de caracteres dentro de (), por exemplo uma busca por Penguin ou Pumpkin seria:
> /P(engu|umpk)in/

### Capture Groups

Imagine que você queira encontrar uma palavra que repita várias vezes na string, mas que você não saiba que paçavra é essa. Capture groups nos permitem encontrar substrings repetidas.

Capture groups são padrões regex encapsulados em (), por exemplo, buscar substring de alfanuméricos
> /(\w+)/

Esses capture groups são momentaneamente armazenados em uma variável que pode ser acessada com \1, \2, etc.

Podemos buscar e substituir text em uma string com o método .replace(). Os inputs para o .replace() são primeiro a regex com o padrão a ser encontrado, o segundo parâmetro é a string substituta ou alguma função.

Podemos acessar os capture groups no segundo parâmetro de um replace usando o '$1' por exemplo.

### Remover espaços em branco

Esse foi o desafio final do módulo de regex, esse problema daria pra ser resolvido com .trim(), mas usando regex eu fiz um
> .replace(/^(\s+)|(\s+)$/g, '')