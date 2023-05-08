# Text Manipulation

No linux lidamos na maior parte do tempo com arquivos, sendo a maior parte destes arquivos de texto, por exemplo as configurações de uma aplicação.

Em arquivos longos, usar `cat` pode ser muito pouco prático, por isso podemos utilizar outros comandos como `head` e `tail`, que por padrão mostram 10 linhas do arquivo. Outra possibilidade em arquivos longos é a sinalização do número da linha, isso faz-se útil para gerar uma referência para uso posterior, para iso usamos o comando `nl` (number lines).

Assim como utilizado no capítulo anterior, vamos novamente criar um pipe para filtrar o resultado com o `grep`, podemos usar ele junto com qualquer outro comando visto neste capítulo:
```sh
nl /etc/firebird/3.0/firebird.conf | grep setting
```

# Achar e Trocar

Podemos usar o comando `sed` (stream editor) para procurar ocorrências de uma palavra ou de um padrão e ralizar ações no mesmo.
```sh
sed s/mysql/MySQL/g /etc/snort/snort.conf > sedtest.conf
```

No comando acima, *s* significa ubstituição, enquanto o *g* aponta para uma ação global, além da primeira ocorrencia, também poderíamos dizer em qual ocorrência específica a ação ocorreria.

## Manipulando Arquivos Longos

Para longos arquivos vimos que o `cat` pode ser bem chatino, uma opçã interessante é o uso do comando `more`. Com este comando teremos apenas uma parte inicial do arquivo na tela, podemos avançar com Enter ou sair com *q*. Outra opção ainda mais poderosa é o `less`, com esse comando podemos buscar termos no arquivo e facilitar o processo. Usando a barra */* podemos passar um termo e navegar pelas ocorrências com *n*.
