# Gerenciamento de Pacotes e Discos

## Gerenciamento de Pacotes

Um pacote pode ser um software, um driver, um codec. No Ubuntu e no Debian o gerenciador de pacotes é o mesmo.

O apt-get é uma ferramenta de mais baixo nível que oferece menos conforto ao user. Uma ferramenta mais moderna disponível aqui é o apt. Apesar de terem suas diferenças, ambas carregam similaridades como o `update` para atualizar a lista de pacotes disponíveis, o `upgrade` para atualizar os pacotes instalados, o `install` para instalar um pacote indicado e o `remove` para desinstalar.

No `apt` temos mais algumas coisas como `list` que nos mostra todos os pacotes disponíveis para instalação, este comando aceita uma opção `--installed` para retornar apenas os pacotes instalados. Outra possível opção é o `--upgradeable` que nos mostra quais softwares tem atualização disponível.

Quando precisamos adicionar um novo repositório como fonte podemos utilizar o comando `apt edit-sources`, esse comando abre o arquivo com os repos oficiais, basta adicionar o link do nosso e ser feliz.

Lembre-se que atualizações em ambiente de produção devem ser testadas antes, pra isso podemos clonar uma VM e usar como ambiente, odemos fazer um backup ou um snapshot para garantir que caso algo quebre na atualização podemos retornar.

Para outras distros como o RedHat temos 2 comandos que funcionam como o apt-get e o apt, respectivamente  o mais user friendly e o mais low level, o `dnf` e o `yum`.

No debian os arquivos executáveis para instalação possuem a extensão `.deb`, ele é o equivalente ao .exe ou .msi do Windows. Em distros RedHat / Fedora temos a extensão `.rpm`.

A instalação do arquivo `.deb` pode ser feita com o `apt install` normalmente, claro que isso também pode ser feito com o ambiente gráfico abrindo um instalador e pah.

## Gerenciamento de Discos

Vamos primeiro entender a diferença entre discos, partições e sistema de arquivos. O disco é o local onde fisicamente os nossos arquivos são armazenados. Um sistema de arquivos é um padrão, uma forma que o SO usa para controlar os seus arquivos, por exemplo o Ext4 no Ubuntu, o XFS no Fedora ou o FAT32 e NFTS em algumas versões de Windows. Por fim o particionamento é a divisão de um arquivo em partes, inclusive isolando sistema de arquivos diferentes para cada partição. No windows cada partição é representada por uma letra como C, D, E, enquanto no linux isso é feito com sda, sdb, sdc, para os discos e sd1, sd2, para partições.

Para visualizar os discos disponíveis podemos usar o comando `lsblk`, que nos retorna um lista com informações, ou podemos usar o `fdisk -l`, esse já nos retorna um porradão maior com informações mais mastigadas.

Quando apenas adicionamos um novo disco ele não pode ser utilizado ainda, justamente por não estar particionado com o file system. Para criar a partição o `fdisk path/to/disk`. Isso inicia o fdisk no nosso disco, com o `m`podemos ver as opções disponíveis, mas para criar apenas uma partição samos a seguinte sequência, `n / p / enter / enter / w`, lógico que devemos ler e sempre estar atentos as ações realizadas. Com a partição criada precisamos formatar indicando o file system.

Para formatar o disco como ext4, usamos `mkfs.ext4 /path/to/disk`, lembrando que isso faz a formatação do disco varrendo todo o seu conteúdo e inicializando um novo file system.

Agora basta montar esse disco, normalmente temos o diretório `/mnt` padrão para montarmos os discos. Dentro do /mnt mandamos um `mount /path/to/disk /mnt/diskname`. Para desmontar o disco, fazendo a operação reversa, mandamos um `unmount`. Esse comando não apaga nada, apenas desmonta o disco.

Para montar os discos automaticamente no boot do sistema, para isso devemos editar o arquivo `/etc/fstab`. Lá inserimos as infos na seguinte ordem:
> local_do_disco onde_montar file_system defaults 0 0

## Copiando Arquivos e Manipulando Processos

A cópia de arquivos pode ser feita a partir de um padrão apontando origem e destino. Temos algumas flags interessantes como  o `-i` que pede confirmação no overrite de arquivos, o `-r` para copiar recursivamente, copiando todas as subpastas e o `-v` para vermos o que está sendo realizado.

Para visualizar os porcessos podemos usar o comando `ps` o problema om o ps é que ee mostra apenas processos incializados via terminal e pelo usuário atual. Vamos então acrescentar alguns parâmetros: o `a` para ver todos os users, o `u` para ver o nome dos users e o horário e o `x` para ver o que foi aberto fora do terminal, temos então:
> `ps aux`

O comando `kill` mata um processo a partir de um PID, o process id. Se não soubermos exatamente qual o id, podemos usar o `killall` passando o nome do processo.

Dentro de um server, o comando `w` nos mostra os users logados, mas não mostra o PID, com o `who -a` temos o PID do processo de logon, dessa maneira podemos matar a sessão do user usando o `kill`.
