# Documentation and Deploy

## Documentation with Postman and Docgen

Podemos usar o próprio Postman para a criação de documentação, mas podemos usar um utility chamado `docgen` para gerar um HTML a partir da nossa documentação, dessa maneira podemos usar o root da nossa API para retornar essa pégina.

O que precisamos fazer é exportar a documentação do Postman como JSON e usando o `docgen` geramos facilmente a página HTML com a documentação. Tendo isso na mão basta colocar a página na nossa pasta `public`.

## PM2 Process Manager Setup

No momento a nossa aplicação é iniciada no terminal e o "trava" enquanto o processo está rodando, também tem o problema que se algo der errado e a aplicação cair, é necesário o restart manual.

Para contornar esses problemas vamos instalar globalmente no nosso servidor o package `pm2`. Com este gerenciador instalado rodamos nossa aplicação com:
> pm2 start server.js

Pronto, agora que o nosso servidor está rodando a aplicação, o terminal está livre e podemos verificar o processo com
> pm2 status

Na documentação tem os outros comandos, mas tem também disponível `pm2 restart server`, `pm2 stop server`, `pm2 logs`, etc.

Para disparar o app com o start do servidor mandamos um:
> pm2 startup ubuntu

## NGINX Reverse Proxy Setup

Para instalar o nginx basta sapecar o `apt install nginx`. Agora vamos estabelecer um firewall simples para barrar as portas que não utilizaremos, assim impedindo users de entrarem em qualquer buraco.
```
# Habilita o firewall
ufw enable

# Permite a conexão de ssh (22)
ufw allow ssh
```

Com ele habilitado, apenas as portas especificadas terão a conexão permitida. A configuração do server no `nginx/sites-available/default` deve ficar algo assim:
```
server {
  server_name yourdomain.com www.yourdomain.com;

  location / {
    proxy_pass http://localhost:5000; 
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Feito isso podemos aplicar as mudanças e verificar se tudo está ok com esses dois comandos:
> service nginx restart
> nginx -t

## SSL

Para adicionar as certificações, para isso vamos rodar a seguinte sequência de comandos:
> sudo add-apt-repository ppa:certbot/certbot
> sudo apt update
> sudo apt install python-certbot-nginx
> sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

Lembrando sempre que tudo isso é realizado no server em si e não na máquina local.

## Considerações Finais

Muito dessa parte final trata da criação do repo no github para ser utilizado no deploy no Digital Ocean. Por isso não tem notas detalhadas sobre o processo. :)
