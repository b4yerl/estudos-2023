# Javascript Básico

## var vs let - pt1

Quando declaramos uma variável usando "let nomeVariavel" não é possível declará-la novamente, apenas alterar seu valor.
Com var esse comportamento é diferente, podemos então ficar declarando "var nomeVariavel" infinitamente, passando novos valores, etc.

## Tipos Primitivos

const tipoString = 'Hello, World!'; //string
const tipoNumber = 10; //number
let tipoUndefined; //undefined
const tipoNull = null; //object null
const tipoBoolean = true; //boolean

Foi chamado atenção na aula para os tpos de refereência, assim como no C e no C#, um objeto complexo na verdade tem armazenado na sua variável apenas um ponteiro para o objeto em si. Dessa maneira, fizermos algo como:
	let a = [1, 2];
	let b = a;
A variável "b" copiou o ponteiro que indicava o local de armazenamento do array [1, 2], ou seja, tanto "a", quanto "b", apontam para o mesmo lugar e qualquer alteração em um, como "b.push(3)" será sentida no outro.

##alert, confirm e prompt

O método window.confirm() retorna um booleano, sendo assim, caso o usuário clique em ok recebemos true, caso ele dê cancelar, volta um false.

O return do window.prompt() é uma sring, dessa forma precisamos realizar a conversão caso queiramos usar como um number.
Isso pode ser feito com parseFloat() ou com um simples Number().

## Exercicio com variáveis

No exercício proposto, a ideia era trocar o valor de 3 variáveis entre elas, para isso a primeira solução pensada é o uso de uma variável temporária, armazenando o primeiro dos 3 valores.
Acontece que o professor também mostrou outra forma de solucionar isto, declarando algo parecido com um array:
	[varA, varB, varC] = [varB, varC, varA];
Essa linha de código fez exatamente o que foi proposto, passando os valores à direita para as variáveis de inde respectivo à direita.

##Mais sobre strings

Strings são indexadas assim como o que tu apendeu lá no C, sim, provavelmente uma coleção de char, logo podemos usar a indexação para iterar pela string.

o método indexOf() recebe uma string como argumento e busca, em qual index da string nosso argumento inicia, podendo passar junto um index mínimo para início da busca.

string.length NÃO É método, aqui no javascript o length é um atributo da string.

## Mais sobre number

Alguns métodos uteis do objeto Number:
	bool Number.isInteger(variavel);
	bool Number.isNaN(variavel);

No javascript existe uma pequena imprecisão nos números de ponto flutuante, ela  pode ser observada quando somamos, por exemplo, 0.7 + 0.8, que retorna 0.7999999...
Uma forma de solucionar isso, mantendo o tipo Number, seria passando o resultado dentro de um 
	variavel = Number(variavel.toFixed(n));
Outra maneira,menos prártica, seria usar a multiplicação e divisão por potências de 10, a fim de eliminar a parte decimal e realizar contas apenas com inteiros.

## Objeto Math

Se quisermos arredondar um number, seja para baixo, para cima ou para o mais próximo, podemos usar o objeto Math com:
	Math.floor(variavel);
	Math.ceil(variavel);
	Math.round(variavel);
Dessa maneira é mantido apenas a parte inteira do número passado como argumento, sendo arredondada de acordo com o que foi solicitado.

Dentro do Math temos também a possibilidade de sacar o maior, ou menor number dentro de uma lista.
	Math.max(números);
	Math.min(números);

Outro método muito importante é o random() que gera um número entre 0 e 1, a partir daí esse valor pode ser manipulado, como você mesmo já fez lá no pedra papel e tesoura né mula. Nessa ocasião usamos:
	Math.floor(Math.random() * 3);

## Array (básico)

Tu já sabe né parceiro, Arrays aqui não são iguais os arrays do c#, aqui aparentemente funciona como uma lista, tendo também as possibilidades da pilha, e talz.
	Array.push() //adiciona no final
	Array.unshift() //adiciona no inicio mexendo nos index
	Array.pop() //remove do final e o retorna
	Array.shift() //remove do início mexendo nos index
Se não quisermos essa mudança nos index do array, podemos dar um
	delete Array[n];
Nesse caso fica um undefined ali como valor de Array[n].

Assim como nas strings, temos o método .slice() a diferença é que ao invés de fatiar char, estamos fatiando os elementos do array.

## const com valores mutáveis

Rapidinho aqui, lembra que para os tipos complexos fica apenas o ponteiro armazenado na variável e não o valor em si? Então, justamente por isso podemos declarar o array com const, o que a veriável armazena e não conseguimos mais alterar é a referência, os valores esses podemos maniplar livremente, isso é válido também para outros objetos.

## Funções (básico)

Podemos declarar valores padrão para o argumento de uma função, para isso basta que façamos:
	function soma(x = 0, y = 0)...
Com essa estrutura caso nenhum valor seja passado como argumento, a função irá assumir os valores padrão e somar 0 + 0.

LEMBRA DAS ARROW FUNCTIONS? pois é, bora escrever legal aqui pra ver se eu lembro depois. Começamos das funções anônimas, basicamente uma outra fomra de declarar a função relacionando ela a uma variável:
	const raiz = function(n) {
		return Math.pow(n, 1/2)
	};

	//ou melhor ainda, tendo só uma linha podemos ir assim:

	const rain = n => Math.pow(n, 1/2);
Dessa maneira podemos depois chamar a função com algo como "raiz(2)", dito isso podemos entender as arrow functions como uma terceira maneira de declarar a função, igual a anterior, mas omitindo a palvra function da seguinte forma:
	const raiz = (n) => {
		return Math.pow(n, 1/2)
	};
Note que ao declarar a função fora da estrutura padrão do bloco funtion() é obrigatório o uso do ';'

## Objetos (básico)

Podemos criar funções simples para implementar novos objetos, para isso passamos os valores desejados nos atributos como parâmetros e retornamos o objeto literal.
	parâmetro é o que está na declaração da função
	argumento é o valor que passamos aos parâmetros

Na declaração de um método não precisamos entrar com a palavra 'function', basta passar nome, parâmetros e o corpo da função

A keyword 'this' significa algo como 'este objeto, neste contexto', sendo assim usamos como: 'this.atributo'

## Valores Primitivos e Valores por Referência

Tipos de dados primitivos são imutáveis, não a variável, mas o valor em si.
Como já foi dito anteriormente, enquanto variáveis com dados primitivos armazenam o valor, as variáveis de tipos complexos como array, object e function, armazenam apenas a referência. Sendo assim quando copiamos uma variável de array estamos copiando apenas a referência. Uma forma de efetuar essa cópia dos valores de forma correta é com:
	const a = [1, 2, 3];
	const b = [...a];












