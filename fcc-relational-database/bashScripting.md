# Learn Bash Scripting by Building Five Programs

Podemos rodar comandos no terminal ou coloca-los em um arquivo para ser executado como script. Nesse módulo iremos construir 5 programinhas para entender melhor o scripting.

## questionnaire.sh

Quando vamos rodar nosso programa pelo terminal, podemos prefixar o nome do arquivo com o interpretador que dejamos usar, por exemplo para rodar no bash
> $ bash questionnaire.sh

Como o comando which podemos localizar onde determinada coisa está armazenada.

Usando o caminho absoluto retornado pelo which, podemos eliminar a necessidade de colocar "bash" na frente do console incluindo um shebang no topo do nosso script, apontando para o path do bash.
> #!/bin/bash

Caso tenhamos a permissão negada para executar o script podemos vericicar suas autorizações usando o "ls -l", ali onde tem rw-r--r etc, isso indica a permissão, sendop w de write e r de read.

A permissão para executar um arquivo é representada por x, para acrescentar isso ao nosso script usamos:
> chmod +x questionnaire.sh

Podemos declarar variáveis passando o seguinte modelo, note que podemos usar espaços aqui:
> VARIAVEL=valor

Para utilizar essa variável utilizamos o $VARIAVEL. Para ler um valor de um input para uma variável, usamos simplesmente "read VARIAVEL"

## countdown.sh

Para adicionar comentários ao código utilizamo o # assim como em python. Podemos também receber argumentos no nosso programa. Para acessar todos os argumetnos passados, usamos $*, para selecionar um argumento podemos simplesmente passar os número $1, ou $2 por exemplo
```sh
#!/bin/bash
echo -e "The arguments passed were: \n $*"
echo The first argument: $1
```

Vamos agora adicionar uma condicional com if e then seguindo a seguinte sintaxe:
```sh
if [[ CONDITION ]]
then
  echo this
else
  echo this instead
fi
```
Note que a condição deve ser separada pro espaços das bordas e de qualquer operador e que o bloco é encerrado por fi, if ao contrário xD

Podemos usar os seguintes operadores lógicos dentro da condição:
- -eq: igual
- -ne: diferente
- -gt: maior que
- -lt: menor que
- -le: menor ou igual
- -ge: maior ou igual
- &&
- ||
- ==
- !=

Usando o "help test" podemos ver mais operadores, como uma lista de operadores de arquivos, etc.

Podemos rodar condicionais diretor no terminal e acessar seu exit code com "echo $?" sendo 0 pra true (0erros) e 1 pra false

Para realizar nosso countdown usaremos o comando for. Aqui ele será apresentado da seguinte forma:
```sh
for (( i = 0; i < $1; i++ ))
do
  echo $1
  sleep 1
done
```

Podemos fazer comentários em várias linhas com : ' '

## bingo.sh

Todo shell possui variáveis de ambiente que podemos ver digitando "printenv". Podemos ver também com declare -p.

Usaremos aqui o $RANDOM para gerar números inteiros aleatórios entre 0 e 32767. Lembra quando você usou o operador % (modulus) para limitar as possibilidades dentro do array de pets lá no projeto do petIN? Pois é, aqui queremos limitar nossa variável a 75, logo:
> NUMBER=$(( RANDOM % 75 + 1 ))

Note a necessidade no uso de $((...)), isso porque o bash interpreta tudo como string, logo com essa sintaxe podemos realizar contas.

## fortune.sh

Esse programa deverá conter um array de possíveis respostas. Para declarar um array usamos:
> ARR=("a" "b" "c")

Podemos acessar os elementos do array nomrmalmente com por exemplo ${ARR[0]}.

Vamos criar uma função usando a seguinte sintaxe:
```sh
FUNCTION_NAME() {
  ...STATEMENTS
}
```

Podemos usar regex aliado ao operador de pattern matching para vericar padrões em variáveis.

## five.sh

Esse último script tem como objetivo rodar os outros 4 feitos. Isso é feito basicamente passando os comandos necessários para a esecução deles.

=)
