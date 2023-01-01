# Basic Data Structures

### Using an Array to store a collection of data

O array de uma dimensão é a estrutura de dados mais simples possível com um Array, armazenando tipos primitivos.
> const simpleArray = ['one', 2, true, null];

Todo array tem a propriedade Array.length. Uma implementação mais complexa de um array seria um array que contem outros arrays, ou array multi dimensional.

Note que um array também pode armazenar elementos de tipo complexos.

### Acessando o conteúdo de um array

A feature fundamental de qualquer estrutura de dados é a habilidade não só de armazenar como de acessar os dados.
Para isso usamos o index, lembrando que no JS arrays são indexados por zero.

Note que também podemos atribuir valor a um item em determinado index, não apenas recuperar

### .push() e .unshift() // .pop() e .shift()

O tamnho de um Array em JS não é algo fixo, levando pro C#, lá esse comportamento lembra o de uma List<>. Ou seja arrays são mutáveis.

Para adicionar elementos a um array temos dois métodos Array.push(), que adiciona o item ao final e Array.unshift() que adiciona ao início do array.

Caso queira remover elementos de um array podemos usar .pop() para remover o último elemento e .shift() para remover o primeiro.

Note que os métodos para remoção não recebem nenhum parâmetro, diferente dos métodos para adicionar, maaasss .pop() e .shift() retornam o elemento removido.

### Removendo com .splice()

Já removemos itens das pontas, mas e se quisermos extrair um item no recheio do array? Para isso podemos usar o splice. Esse método nos permite remover qualquer número de elementos consecutivos de um array.

O primeiro argumento do splice diz o index do primeiro elemento a ser removido, o segundo argumento indica a quantidade a ser removida.

Assim como os outros métodos de remoção, splice retorna um array com os valores exraídos.

Note que splice também pode adicionar elementos, a partir do 2º parâmetro, tudo o que vier vai ser inserido no index indicado pelo primeiro parâmetro.

### Copiando itens

Ao invés de modificar o array, o método slice() copia os elementos para um novo array. Os 2 argumentos para slice() são o index em que se inicia a cópia e o index limite, que não entra na extração.

Além do slice() também podemos usar o spread operator para facilmente copiar todos os itens de um array para outra variável. Lembrando que:
- newArr = oldArr (COPIA APENAS A REFRÊNCIA AO ARRAY)
- newArr = [...oldArr] (COPIA OS ELEMENTOS EM SI)

### Combinando arrays

Uma das forças do spread operator é a possibilidade de combinar arrays, inserindo todos os elementos de um em qualquer index de outro.

### indexOf()

Considerando a natureza mutável dos arrays, ão podemos garangir que um elemento sempre estará no lugar esperado. Para isso podemos usar o indexOf(), que nos permite checar a presença de um elemento retornando o index do elemento ou -1 para elementos não eistentes.

Nesta lição foi construída uma função que recebe um array e um elemento e checa a presença do elemento retornando um bool.

### Iterando pelos elementos de um array

Javascript nos oferece alguns métodos para que possamos passar pelo array: every(), forEach(), map(), etc. No entanto a opção mais flexível ainda é o <b>for</b>.

### Add key-value pairs to objects

Na camada mais simples, podemos ver os objetos como uma coleção de pares chave-valor. Podemos settar, recuperar e adicionar novas chaves usando notação de ponto ou de colchetes:
- objeto.propriedade
- objeto['propriedade']

Objetos podem receber qualquer tipo de valor, logo podem receber outros objetos. Nesse caso o acesso pode continuar sendo feito normalmente:
- objeto.objetoAninhado.propriedade

Além de propriedades com espaços no nome (o que não deveria acontecer) a notação de colchetes também é útil para passar variáveis, principalmente quando não sabemos o que passar antes da execução do progrqma :)

### Algumas outras operações com objetos

Podemos usar o operador unário 'delete' para remover uma chave do nosso objeto
> delete objeto.propriedade

Quando queremos saber só se existe uma propriesdade específica no objeto podemos usar o método .hasOwnProperty() ou o 'in', ambos os métodos retornam um valor booleano
- objeto.hasOwnProperty('propriedade');
- 'propriedade' in objeto;

Podemos usar o for...in para iterar pelas chaves de um objeto, lembra python, lembra o foreach do C#, tu tá ligado
> for (let user in users) {}

Note que o users[user] ainda pode ser usado detro do for...in caso se faça necessário.

O método Object.keys(objeto) retorna um array com todas as keys de um objeto caso a gente queira por algum motivo místico.


