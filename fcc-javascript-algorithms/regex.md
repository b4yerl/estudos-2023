# Regular Expressions

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