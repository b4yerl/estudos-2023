# Debugging

### Checando valor de variável no console

Provavelmente a mais comum e mais útil ferramenta de debugging, o consol.log() imprime no console o valor de uma variável. Posicionada em pontos estratégicos pode nos mostrar valores intermediários de variáveis.

Essa técnica nos permite afunilar o posicionamento de um problema no código.

O console do browser também aceita outros métodos como .warn e .clear(), use esse último para limpar janela e clarear a analise das informações apresentadas.

### Uso do typeof no console

Além dos valores, também pode ser interessante checar o typeof de uma variável no console a fim de debugging.

Esse cuidado pode ser essencial quando manipulamos dados externos em JSON.

O Javascript reconhece 7 tipos primitivos (imutáveis):
- boolean
- null
- undefined
- number
- string
- symbol
- bigint

E mais um tipo de itens mutáveis
- object

### Erros comuns

#### Digitação

Alguns dos erros mais comuns que podemos encontrar é o erro de digitação no nome de variáveis e os erros de sintaxe como a falta de () {} [] devidamente fechados.

Uma forma de evitar o segundo erro é fechar o bloco logo após a sua abertura, felizmente o vscode já quebra esse galho.

#### Escape character

Outro possível erro é no uso de '' e "", devemos tomar cuidado para não fechar precipitadamente nossa string em palavras que possuem contração ou algo assim. Para isso devemos usar o escape character \

#### Operador de atribuição

Cuidado com o operador de atribuição
- = operador de atribuição
- == operador de igualdade
- === operador de É MUITO IGUAL PÔ

Um lugar especial para se tomar cuidado com isso é na expressão condicional do if, sem querer podemos traduzir logicamente da fala pro código e cometer erros.

#### Parenteses nas chamadas de funções

Podemos esquecer dos parenteses em funções que não possuem nenhum argumento e muitas vezes atribuímos o retorno de uma função a uma variavel.

O problema é que sem os parenteses estaremos atribuindo a referência à função à nova variável. Podemos constatar isso com o console.log() pra extrair tanto o valor quanto o typeof.

#### Ordem dos parâmetros de uma função

Quando os parâmetros possuem tipos diferentes, menos mal, provavelmente será disparado um erro de runtime. O problema maior é realmente quando os tipos são os mesmos, aí a lógica da função pode rodar sem sentido nenhum.

Novamente console.log() e debugger na cabeça, checa a assinatura d função e é nois.

#### Off by one error

Nornamenlte esse tipo de error ocorre quando miramos em um index específico de uma string ou array, quando passamos um loop por eles, enfim.

Javascript indexa a partir do zero, o que significa que o último elemento é length - 1. Se tentarmos acessar o index length podemos receber um 'index out of range' ou um simples 'undefined' :)

#### Cautela na reinicialização de variáveis em loop

As vezes precisamos reiniciar o valor de uma variável a cada loop, aqui novamente o console.log() pode nos ajudar a enxergar como o loop está funcionando.

#### Previnir loops infinitos com condição válida

As vezes simplesmente esquecemos de dar uma condição de saída para um loop, uma recursividade, etc. Ou simplesmente nossa condição de saída não tem como ser logicamente atendida.