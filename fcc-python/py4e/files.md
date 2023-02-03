# Files

## Reading Files

Podemos pensar em um arquivo como uma sequência de linhas que podem ser abertos com a função open() que recebe o nome do arquivo e o modo em  que será aberto: w para escrita e r para leitura.

Essa função retorna um handle, um intermediário que te permite interagir com o arquivo através dele.

## Files as a Sequence

Existem algumas maneiras de tratarmos um arquivo, mas talvez a mais comum seja trata-lo como uma sequência de linhas. Para isso vamos utilizar um for loop.

Para isso nós declaramos um handle com um open() e daí já podemos iterar sobre esse arquivo:]
```py
my_file = open('file.txt', r)
for line in my_file:
  print(line)
```

Isso nos leva de volta ao básico de loops, podemos então com essas linhas, contar a quantidade total de linhas usando uma variável counter por exemplo.

Podemos também passar o nosso handle por uma função .read() que basicamente lê TUDO presente no arquivo para dentro de uma variável. Note que tudo, inclui os caracteres de nova linha.

Podemos iterar por um handle buscando uma linha que comece com determinada sequência usando o startswith() ou podemos checar algum outro critério. A ideia é que podemos buscar, podendo inclusive utilizar o operador 'in' para encontrar uma string em qualquer lugar da nossa linha.

Podemos eliminar os '\n' de uma linha utilizando o rstrip() já que para o python esses caracteres são vistos como um espaço em branco.

Como o lugar que pode disparar um traceback é a abertura do arquivo, podemos envolver esse comando em um try except.