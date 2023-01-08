# Intermediate Algorithms

### Sum all numbers in range

A função recebe um array com 2 números e deve retornar a soma de todos os números dentro do range (ambas as pontas incluídas). 

Como pode receber tanto [min, max] quanto [max, min], o primeiro passo deve ser organizar isso para garantir uma ordem crescente
> range.sort((a, b) => a - b);

Acho que vou escrever uma segunda função, essa recebe o nosso range e devolve um array com todos os inteiros do intervalo. Como eu pensei em usar um for no centro dessa função, não acho que reduce() nem seus derivados possam me ajudar aqui.

Por fim pra fazer a soma usei um reduce só com uma callback simples:
> (function(sum, n) { return sum += n }, 0)

### Diff two arrays

Basicamente subtração de conjuntos aqui, dado 2 arrays tenho que retornar o elemento presente em somente um deles.

Dei uma olhada no Array.prototype aqui no MDN enquanto eu penso, acho que dá pra usar o .filter() aliado ao includes(). Pra ir por esse caminho vou ter que fazer as 2 vias e depois dar um concat(), mas acho que vai dar certo.

...Beleza, foi necessário apenas uma adaptação a essa ideia inicial, dada a natureza do filter e seus argumentos, eu não consegui passar um array pra comparação nos argumentos, com isso eu poderia fazer de algumas formas.
- Eu poderia implementar meu próprio filter assim como feito em uma lição no [Functional Programming](./functionalProgramming.md)
- Eu poderia usar reduce ao invés de filter
- Ou, o que eu fiz, mudar a aridade da minha ideia, fazer o Currying e salvar a primeira call, com argumento em uma variável.

### Seek and Destroy

Tá pra essa aqui eu vou precisar interagir com o arguments. A ideia aqui vai ser criar uma função que funcione com um for...in em que, caso o elemento atual esteja no array de elementos pedidos eu removo ele do array e retorno essa linda solução depois.

### Wherefore art thou

A nossa função vai receber 2 argumentos, o primeiro é o array de objetos e o segundo o objeto com o par chave e valor a ser procurado no array.

Acho que dá pra começar transformando o segundo par em dois valores: uma string com a chave e uma string com o valor. Para isso usei:
> const [[key, value]] = Object.entries(source);

O uso de colchetes duplos faz-se necessário já que o array em questão tem mais de uma dimensão, logo para pegar as strings dentro do primeiro elemento(array) tive ques usar mais um par de colchetes.

Talvez uma  espécie de filter na seqência já nos ajude a fechar a questão. Isso pode ser feito com Currying, partial call e o que eu já fiz anteriormente.

Beleza, essa primeira versão funcionou apenas para argumentos com apenas um par de chave e valor, a alteração foi não fazer a desestruturação e trabalhar com um for...in na callback function.

### Spinal tap case

Cara, eu meio que acabei de fazer isso em uma lição [aqui](./functionalProgramming.md), mas bora lá.

Podemos começar dividindo essa string com o split(/\W|_|(?=[^a-z])/), pelo que vi nos testes acho que essa regex resolve. Na sequência posso fazer um
> arr.map(item => item.toLowerCase())

Em seguida acho que sobre só o join('-') mesmo.

### Pig Latin

Para esse problema devemos seguir duas regras
- Se a palavra começar com consoante, pegue a primeira consoante ou o conjunto delas, mova-as para o final da palavra e adicione um 'ay'
- Se começar em vogal, basta adicionar um 'way' ao final

Bom, acho que regex aqui entra legal, algo tipo /^[^aeiou]/i talvez funcione para verificar se a palavra inicia em vogal ou não. Agora depois desse test(), um match() resolva a separação da string entre o cluster de consoantes e o resto.

Pra esse processo fiz uma segunda função, nela gerei 2 arrays com o match, um carregando as consonantes iniciais, o outro com o resto da string, pra isso usei 2 regex diferentes:
- const consonantRegex = /^[^aeiou]+/gi;
- const restRegex = /[aeiou]+.*/gi;

Após isso foi só checar se a segunda string era falsy eretornar o solicitado.

### Search and replace

Basicamente vamos receber 3 argumentos: A string base, o termo a ser substituído, o termo substituto.

Importante notar que se a rimeira letra do termo original for maiúscula isso deve ser mantido. Aqui um test() com regex pode ajudar.

O javascript fornece uma função, o String.prototype.replace() que recebe 2 argumentos: O padrão a ser substituído e o termo novo. Ali eu coloquei padrão porque replace() aceita regex.

Então após o /^[A-Z]/.test() eu chamo uma função para "capitalize" ou "uncapitalize" a palavra, essa função basicamente usa o spread operator para passar cada letra da string como um elemento de um array
> const arr = [...str];

Dessa forma eu mudo o case da primeira letra, junto de novo com .join('') e retorno a string alterada. Depois disso que entra o replace pra retornar o desejado.

### DNA Pairing

Aqui ele quer basicamente temos que parear elementos retornando um array de 2 dimensões, pra isso devemos seguir os seguintes pares:
- A e T
- C e G

Como o input é uma string e eu vou ter que testar cada letra da string individualmente, acho que posso desestruturar essa string em um array com o spread operator e depois usar um map() pra checar cada elemento e retornar o par correto. 

### Missing letters

Recebendo uma string que representa um range de letras, devo checar pra ver se o range tá bonitinho, caso esteja faltando letra, retorno ela, se não, retorno undefined mesmo.

Eu poderia novamente usar o spread operator pra trabalhar com cada elemento separado, mas posso fazer isso com a string também, até porque só vou checar e usar métodos do String.prototype. Usando os códigos de cada letra posso iterar por elas e checar se o código atual é igual ao código da anterior mais 1.

Então um for simples aliado ao .charCodeAt() e o .fromCharCode() resolvem a questão aqui.

### Sorted Union

Tá, aqui é pegar 2 ou mais arrays passados pra função, pra isso vou usar:
> const args = [...arguments];

Com isso devo ter um array de 2 dimensões. O objetivo da minha função vai ser unir todos esses subconjuntos, excluir as duplicatas e depois organizar eles em ordem crescente.

Para a primeira parte o JS já me ajuda com o Array.prototype.flat().

A parte da remoção de duplicatas posso fazer de duas maneiras, com Set ou com .filter(). A solução com Set talvez seja mais interessantes, mas como não vimos isso nesse curso vou tomar o outro caminho mesmo, enfim, ficaria asssim:
> const distinctElements = [...new Set(allElements)];

Para fazer isso com filter() também é tranquilo:
> const newArr = allElements.filter((item, index, arr) => arr.indexOf(item) === index);

Como indexOf retorna o index do primeiro match, esse será o único momento que nossa comparação retorna true.

O sort() é bem simples também
> newArr.sort((a, b) => a - b);

OOOOOPAAAAA não precisava ordenar kkkkkk mas enfim, é assim que eu faria :)

### Convert HTML Entitites

Basicamente é identificar alguns elementos da string e converter eles pro formato pedido. Eu decidi então usar o spread operator, trazendo essa string pra um array, daí eu passo ele em um map().

A callback function desse map vai basicamente identificar se o item é um dos elementos a serem convertidos e tomar a decisão quanto ao que fazer. A título de fixar conhecimento vou usar um switch aqui.

### Sum All Odd Fibonacci Numbers

Então pra esse exercício minha função deve receber um número como argumento e retornar a soma dos números ímpares da sequência de Fibonacci, que sejam menores que o número limite.

Beleza, primeira coisa que eu fiz foi escrever uma função recursiva que recebe 2 argumentos, o número de elementos desejados e um array e retorna uma fibonacci de n elementos.

Agora eu preciso alterar minha função para que ela retorne uma fibonacci com elemento menores que o pedido.

Na sequência é só dar um filter e retornar um reduce, vou listar as 2 callbacks aqui, mas são beeeemm simples:
- .filter(item => item % 2);
- .reduce((sum, item) => { return sum += item }, 0);

### Sum all primes

Tá o mais chatinho aqui foi fazer uma função que retorna o array de primos menores que o número passado pra função. Pra fazer ela usei um for dentro de outro, 2 if's e é isso.

Na sequência foi passar pelo mesmo reduce que o exercício anterior a fim de chegar na soma.
> .reduce((sum, item) => { return sum += item; }, 0);

### Smallest Common Multiple

Beleza, eles não querem o MMC padrão. O programa aqui deve retornar o minímo multiplo comum de um range, por exemplo, se o argumento for [1, 3] ele deve ser MMC de 1, 2 e 3, o seja 6.

Pra resolver isso primeiro tive que ordenar o array com a nossa same old sorting callback function. Passei por uma função pra pegar o range todo e devolver um array com cada elemento. Essa função getRange() é basicamente:
> for(let i = arr[0]; i >= arr[1]; i++) { range.push(i) };

Com esse range em mãos passamos pra funçã que aí sim vai fazer a mágica, basicamente é um contador infinito, while(true) que checa a divisibilidade por todo o array usando um:
> .every(item => num % item === 0);

Se a expressão acima retornar positivo então retornamos o valor de num, e voilá, tá pronto o sorvetinho.

### Drop it

Essa é bem bobinha. Temos que checar se o primeiro elemento de um array devolve true em um função, enquanto não devolver, eliminamos o primeiro e tentamos de novo......
> while(!func(arr[0])) { arr.shift() } // depois retorna arr

### Steamroller

Isso foi um pouco complicadinho, mas beleza. Enfim tive que dar uma pesquisada e vi aqui a ideia de usar o concat pra eliminar uma camada de nesting.

Usando isso e aplicando pra várias camadas, a função flattener usa recursion para gerar os concats, chamando a sim própria cada vez que a expressão Array.isArray(arr[i]) for verdadeira.

### Binary Agents

A função desse exercício deve receber uma string em binário, com cada byte separado por espaço e retornar a sentença em inglês.

Como eu quero trabalhar com cada byte separado, primeiro usei o split(' '), assim eu pude usar um map() retornando o parseInt(bin, 2). O interessante do parseInt é esse lance de aceitar o radix, a base do sistema numérico a ser utilizado na conversão.

Com o nosso novo array passei por mais um map, dessa vez a callback era só um String.fromCharCode(item). Por fim foi só retornar um .join('');

### Everything Be true

...ai ai, vou transcrever literalmente 100% do meu código aqui e é isso:
> return collection.every(obj => obj[pre]);

### Arguments optional

Esse execício propunha uma função de soma de 2 numbers. Caso os dois argumentos sejam passados de cara, retorna a soma, se apenas um for passado retorna uma partial call.

Basicamente chequei se arguments[1] era truthy, tendo então os dois argumentos já retornava a soma, tendo só um mesmo, retornava
> function(y) { return x + y };

Além disso fiz as validações para garantir que ambos os inputs sejam do tipo number.

### Make a person

O desafio pede para eu completar o constructor com apenas 6 keys, 3 getters e 3 setters. No fim das contas o úncio truque aqui é o uso de uma variável local.

O resto das coisas é bem tranquilo, talvez o mais chatinho seja quebrar a string em um array de 2 elementos (split()) e depois juntar tudo (join()) sempre que formos tabalha com apenas um dos nomes.

### Map debris

...A descrição do problema me deixou meio assim só de olhar, tô cansado, mas bora lá.

Enfim depois de gastar um tempo pesquisando descobri/entendi que <i>a</i> é na verdade o raio da terra somado a altitude média.

A sequência foi só calcular tudo usando MUITO o objeto Math e suas propriedades e métodos dentro de um forEach().

Teve uma graça ali também com o delete, mas no fim acabou sendo mais simples do que parecia.
