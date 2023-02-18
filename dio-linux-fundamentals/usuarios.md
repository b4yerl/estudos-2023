# Manipulando Usuários no Linux

## Criando, excluindo e editando usuários

Para criarmos novos usuários no nosso sistema, usamos o comando `useradd usuario`, note que o ideal é não acentuarmos o nome do nosso usuário, porque isso pode acaretar alguns problemas futuros. Outro ponto importante é perceber que ao criar um user dessa maneira, ele ainda não possui uma senha nem nenhum arquivo de config pessoal, como uma pasta na home.

A remoção de um user é feita com o comando `userdel -f usuario`, a flag `-f` entra aqui para forçar a remoção, mesmo que tenha alguém logado e talz.

No `useradd` temos uma série de flags que fazem esse processo de criação das configurações, como: `-m` para criar a pasta home. O `passwd` pode ser utilizado para settar ou resetar a senha de qualquer user.

Outro passo necessário na cirção é a definição de um shelll padrão, isso pode ser feito posteriormente com `chsh -s /bin/bash usuario`, mas note que o ideal é fazer isso na criação do user com `-s /bin/bash`.

Uma paradinha interessante que podemos fazer é adicionar uma data de expiração para o user cadastrado no sistema, atrvés da flag `-e`.

Para realizar alterações no user podemos usar o comando `usermod usuario` e passar as flags que queremos alterar como se fosse um `useradd` mesmo.

Nós podemos usar o `passwd`para definir a senha de um user, mas podemos também fazer a senha expirar inntantaneamente para forçar o user a definir sua senha no momento que este acessar o sistema, para isso basta passar o `passwd user -e` sem parâmetro mesmo.

Com a flag `-p` até dá pra definir a senha do user na criação, mas ela precisa ser encriptada. Uma maneira de fazer isso é passandol o seguinte:
> `$(openssl passwd -crypt SenhaDesejada)`

Agora que sabemos definir tudo o necessário para um user em um único comando, podemos definir a criação em lote de users com um script, assim poderíamos por exemplo definir um script para definir X usuários novos em qualquer nova maquina instanciada. Esse script pode ser algo como:
```sh
#!/bin/bash

echo "Criando usuários"

useradd guest -c "Convidado" -s /bin/bash -m -p $(openssl passwd -crypt Senha123)
passwd guest -e

# Podemos jogar isso dentro de um loop se quisermos
```

Lembre-se só que esse arquivo não tem permissão de execução, então é preciso mandar um `chmod +x script.sh`.

## Grupos

Com o `usermod -G` é possível passa uma lista de grupos para inserir determinado usuário. Com esse método podemos por exempl, inserir um user ao sudoers e ao adm.

A criação de um grupo pode ser realizada com `groupadd NOME_GRUPO` e a remoção com `groupdel NOME_GRUPO`,mas note que é preciso que não haja ninguem no grupo para que a remoção seja realiazda.

Podemos usar o `usermod` para alterar e adicionar os grupos, mas uma maneira de remover iso é através do `gpasswd -d usuario grupo`.

## Permissões

É o `ls -l` que vemos a descrição das permissões de um arquivo ou diretório, (`-` para arquivo, `d` para diretório). Na sequência temos uma sequência de 3 colunas, a primeira para o dono, a segunda para grupos e a terceira para outros. Essas colunas podem conter 3 caracteres, r, w e x, que respectivamente representam, ler, escrever e executar.

Podemos alterar o dono e o grupo de um diretório/arquivo com o seguinte comando 'change owner':
> `chown dono:grupo diretorio_ou_arquivo`

Para alterar as permissões usamos o `chmod`, talvez a maneira mais tranquila de fazer isso seja de forma numérica seguindo a seguinte relação: 4 para leitura, 2 para escrita, 1 para execução e 0 para nenhum. Quando apontamos os números, fazemos isso na ordem das colunas de permissão: dono, grupo e outros. Logo para apontar um diretório com permissão total para o dono, leitura e execução para o grupo e nada oara os otros, erpiamos o seguinte comando:
> `chmod 750 diretorio`

Quando temos um arquivo, um novo script por exemplo, que não tem permissao de execução podemos incluir isso de forma geral com o `chmod +x arquivo` ou `-x` para remover.

