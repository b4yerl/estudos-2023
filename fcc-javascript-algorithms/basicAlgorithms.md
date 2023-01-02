# Basic Algorithm Scripting

Esse módulo do curso basicamente entrega questões simples e pede uma solução.

### Celsius to Fahrenheit

Esse exercício entregea uma temperatura em celsius e pede o retorno em fahrenheit
> f = c * 9 / 5 + 32;

### Reverse String

Para reverter a string usei um for e gerei um array ja com os caracteres invertidos, poderia ter usado o reverse() talvez? Enfim depois só foi mesmo um .join(''), dessa forma a separação deixa de ser vírgula e passa a ser nada :)

### Factorialize

Usei recursividade pra ter o fatorial de um número, inclusive eu já havia exercitado isso previamente.

Vou incluir um desses na pasta de exercícios agora mesmo.

### Longest Word in a String

Para esse exercício resolvi usar o for...of, dessa forma acho que nem vou precisar de .charCodeAt().

### Largest number from sub-arrays

De novo vamo brincar de for...of, mas dessa vez junto com o Math.max() e o spread operator.

### Check ending

Eu poderia usa o .endsWith(), mas o próprio exercício pede pra não fazer isso.

Como uma string é um grande e lindo array de char, acho que com um if só da pra checar isso, pra fins de treino vou usar o operador ternário pra esse exercício :)

No fim tinha que fazer não só de uma letra, mas de qualquer quantidade, resolvi com um slice no meu operador ternário.
> str.slice( - target.length)

### Truncate a string

Usei um .slice() pra cortar a string onde o parâmetro pede, caso o parâmetro seja menor que o tamannho da string, botei um += '...';

### Finders keepers

Mais uma facil de ser resolvida com for of, só fiz um if com a função, retornei o n, caso o loop acabasse retornava undefined.

### Title case a sentence

Aqui eu tentei reiventar a roda, mas acabei tendo que ficar no for com if mesmo.

### Slice and splice

Fiquei mó tempo nisso, simplesmente porque o console.log não tava funcionando direito........

Mas bora lá, basicamente eu criei uma cópia do arr2 dentro da função, pra isso usei um .slice() vazio mesmo, depois foi só fazer o splice norma com o spread operator
> newArr.aplice(n, 0, ...arr1)

### Falsy bouncer

Pra fazer isso eu usei um .filter(), dessa forma passaria o teste pra pegar elementos falsy, só que, o que funcionou foi
>arr.filter(item => item)

Eu tenho que entender o que rolou, mas isso de alguma forma retornou somente itens de valor true...

### Where do I belong

Tá pra organizar o array aqui fui á no mdn dar uma olhada no sort, basicamente o método sort organiza STRINGS, logo pra ele 4 > 30, mas existe uma forma de contornar isso, passando uma função como parâmetro
> arr.sort((a, b) => a - b)

Pronto, a partir daí foi só checar com um loop e devlover Number(i)

### Mutations

Trouxe ambas strings pra .toLowerCase(), depois passei um for in, caso meu if desse falso eu retornava false, se passasse ok retornava true
> str1.includes(str2[i])

### Chunky monkey

Aqui foi beleza, um novo array recebendo push vindo de um while, a condição do while era o tamanho do array original ser > 0. Isso funcionou porque eu parti o bichinho com o splice()
> newArr.push(arr.splice(0, size));

