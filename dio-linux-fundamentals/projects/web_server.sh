#!/bin/bash

# Atualizar o servidor e instalar as aplicações necessárias
apt update
apt upgrade -y

apt intall apache2 -y
apt install unzip -y

# Baixar os arquivos e move-los para o diretório do apache
cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip

unzip main.zip
cp -R linux-site-dio/* /var/www/html
