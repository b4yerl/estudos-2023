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

