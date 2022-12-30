# ES6

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