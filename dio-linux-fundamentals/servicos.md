# Serviços

## Servidores de Arquivos

Dentro de uma epresa / organização, um servidor de arqujivos nos permite centralizar esse serviço, levando os arquivos de todos para lá, de uma maneira em que facilmente podemos compartilhar os arquivos entre os diferentes membros da organização. Isso facilita atmbém o controle da atividade através de logs e centralizando tudo em um servidor, facilitamos o processo de backup.

O Windows, para fazer esse compartilhamento de arquivos, usa um protocolo chamado `smb`. Dentro do Linux, para utilizar esse protocolo, temos uma aplicação disponível, o `samba`.

Quando vamos configurar o samba, não é ideal que o disco de compartilhamento seja o mesmo em que esteja rodando o SO da máquina. Isso acontece porque caso haja uma grande requisição aos arquivos compartilhados, tendo eles no mesmo disco do sistema, pode trazer uma lentidão a todo o processo.

Ao definirmos uma pasta pública com permissão 777, vamos editar o arquivo de config do samba para liberar essa nossa nova pasta, ele está em `/etc/samba/smb.conf`. Por enquanto a única opção que vamos nos preocupar é adicionar um nome, um caminho e permissões:
```
[public]
  path = /disco_novo/public
  writable = yes
  guest ok = yes
  guest only = yes
```

Com isso configurado basta rolar o restartão. Note que o samba roda em segundo plano, ouvindo as request que ossam chegar. No Linux, esse tipo de serviço é chamado de `daemon`. Para trabalhar com serviços em segundo plano, usamos o `systemctl`. No caso um daemon, normalmente termina com a letra d, logo nosso comando é `systemctl restart smbd`. Note que no estado atual, o samba não será inicializado automaticamente no reboot da máquina, para isso precisamos do `systemctl enable smbd`.

Tendo configurado o servidor fazemos o acesso pelo ip. A ideia é que o ip seja fixo para esse tipo de serviço. Enfim, para acessar esse serviço no windows podemos usar o próprio explorer acessando `\\ip.do.server\public`, note que será solicitado as credenciais para acesso ao server.

Para facilitar o acesso de um usuário leigo, podemos mapear o caminho de rede, bastando indicar a letra, nome e opções de inicialização.

## Servidor Web

Para instanciar o servidor web, vamos usar o `apache2`, lembrando que podemos checar se ele está rodando com `systemctl status apache2`. O caminho padrã no qual o apache vai buscar o index.html é o `/var/www/html`. Note que o ideal para um servidor web é termos um ip fixo, não é o caso no momento.

Em uma VM de um CSP, precisamos configurar o firewall para aceitar requisições http e https nas portas 80 e 443. Na real o ideal é ter esse firewall em qualquer áquina né.

## Servidor de Banco de Dados

De cara já fica claro que o ideal não é que servidor web e banco de dados estejam na mesma m´quina.

No caso aqui usaremos o MySQL como nosso serviço de DB, para instalar ele podemos sapecar um `apt install mysql-server` ou `apt install mysql-server-8.0`.

Para acessar o mysql como root acessamos `mysql -u root -p`. De reso é normalzão fazer nosso db mesmo... Senti falta de uma explicação maior kkkkkkk.

