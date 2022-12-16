# Javascript - Lógica de Programação

## Extensões VSCode
	> Code Runner
	> Code Time
	> Git Graph > olha depois
	> StardadJS > olha depois
	> Dracula Official > tema
	> Material icon Theme

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

Sendo assim podemos passar como argumento na hora de instanciar nosso objeto, valores em milésimos de segundos, ou podemos passar ano e mês, pelo menos, separados por vírgula.

Existem vários getters no nosso objeto do tipo Date, podemos então pedir um get para cada atributo como .getFullYear, .getDate, .getMonth, por exemplo. Lembre que a contagem dos meses começa do 0

 
