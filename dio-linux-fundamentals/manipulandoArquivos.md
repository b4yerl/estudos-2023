# Trabalhando com Usuários, Arquivos e Diretórios no Linux

## Manipulando Arquivos no Linux

Ao acessarmos um terminal teremos o seguinte:
> usuario@maquina: ~$

O cifrão aqui indica que este user não é um super user, logo ele possui restrioções no sistema. Já o til indica que estamos na pasta do usuário, podemos verificar isso com o print working directory, `pwd`. Lembre-se que o diretório raiz é o `/`.

Nem todo terminal vai nos fornecer uma barra de rolagem, muitas vezes uma parte da informação que buscamos acaba se perdendo no terminal. Um macete para driblar isso é o uso do operador pipe aliado ao more, `ls | more`, dessa forma podemos navegar com tranquilidade entre os resultados retornados pelo nosso comando.

Podemos usar o `*` para fazer uma listagem mais apurada de diretorios que por exemplo, iniciem com 'ss', no caso abaixo teríamos ssh e ssl:
> $ ls /etc/ss\*

Seguindo a mesma ideia podemos usar o `?` para substituir apenas um caractere.

Outra coisa legal que temos é para arquivos nomeados em sequência, nesse caso podemos dizer ao linux quais queremos de forma simples. No caso abaixo eu vou listar os arqiuvos de 1 a 3 e depois o 2 e o 35 especificamente:
> `ls arquivo[1-3]*`
> `ls arquivo[2,35]*`

Para buscar um arquivo temos o comando `find`, esse comando busca algo a partir do diretório atual, ele recebe parâmetros como o `-name nomeDoArquivo*`.

## Root

Quando criamos um user na instalação ele vai pra o grupo de users adm, então esse usuário pode sim realizar tarefas de administrador, mas se criarmos um novo user, de cara ele não vei ter esse poder.

Para vermos os group, podemos dar um `cat /etc/group`, além do adm, veremos também nosso querido sudo em meio aos grupos.

Quando criamos algo como um diretório, usando o `sudo`, o dono e a permisão desse arquivo serão alocados para o `root`, logo todas as operações de escrita nesse novo local será necesário o uso do `sudo`.

O arquivo que carrega a utilização e as configurações do `sudo` pode ser visto em `/etc/sudoers`.

Em alguns casos realizaremos várias tarefas como adm, tendo que largar o `sudo`o tempo todo. Podemos contornar isso logando no sistema como `root`, mas lembre-se que por questões de segurança, de ao terminar as tarefas, retornar para o user convencional.

Diferente de outras distros, no ubuntu, não configuramos uma senha para o `root`na instalação do sistema, por isso devemos fazer isso antes de utilizar o `root`. Para configurar a senha de um user já criado temos o comando `passwd`:
> `sudo passwd root`

Tendo feito isto basta usar o comando `su` para acessar o super usuário. Fez tudo que tinha pra fazer, basta usar `su usuario` para voltar logado como o user desejado.

Por segurança o accesso remoto via root é bloqueado, mas isso pode ser liberado. O ideal é utilizarmos um certificado, mas podemos ir no `sshd`. Para verificar esse serviço vamos a `/etc/ssh/sshd_config`. Um dos parâmetros disponíveis é o PermitRootLogin, que iremos descomentar, e trocar o valor para `yes`. Com isso editado podemos dar um `reboot` ou reiniciar o serviço. Vamos fazer o segundo usando o `systemctl status sshd` para checar seu status e o `sudo systemctl restart sshd` para reiniciar, e tá pronto o sorvetinho.

## Histórico de comandos

O comando `history` lista o histórico, os ultimos 1000, de comandos do usuário atual. Podemos passar um limit como parâmetro, por exemplo os últimos 10 seria `history 10`.

Outra possibilidade é observar o número atribuído a um comando no `history` e podemos reaproveitar esse comando com o `!306` por exemplo, ou para o último com `!!`.

Podemos filtrar o retorno buscando padrões, isso pode ser útili para verificar se um user executou comandos relacionados a um diretório específico ou algo assim:
> `history | grep "Diretório"`

Podemos alterar uma variável de ambiente para que o `history` exiba  também as datas do comando:
> `export HISTTIMEFORMAT="%c "`

Apesar do `history -c` existir, por segurança ele não apaga o histórioc de verdade, apenas limpa a exeibição naquela sessão. O que podemos fazer é definir um parâmetro no bash para parar o armazenamento de comandos, `set +o history`, o ponto é que esse comando cntinua armazenado, ou seja, podemos saber que o user bloqueou o acesso a comandos futuros.

Outra possibilidade ´q o user alterar a configuração do bash no `.bashrc` para diminuir a quantidade de comandos armazenados no histórico.
