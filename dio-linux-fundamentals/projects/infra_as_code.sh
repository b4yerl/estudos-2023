#!/bin/bash

echo "Instanciando o sistema"

# Criando os grupos
groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

# Criando os diretórios necessários e definindo suas permissões
mkdir /publico /adm /ven /sec

chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec

chmod 777 /publico
chmod 770 /adm
chmod 770 /ven
chmod 770 /sec

# Criando os usuários necessários para o sistema

# ADM
useradd carlos -s /bin/bash -G GRP_ADM -p $(openssl passwd -crypt 1234)
passwd carlos -e

useradd maria -s /bin/bash -G GRP_ADM -p $(openssl passwd -crypt 1234)
passwd maria -e

useradd joao -s /bin/bash -G GRP_ADM -p $(openssl passwd -crypt 1234)
passwd joao -e

# VEN
useradd debora -s /bin/bash -G GRP_VEN -p $(openssl passwd -crypt 1234)
passwd debora -e

useradd sebastiana -s /bin/bash -G GRP_VEN -p $(openssl passwd -crypt 1234)
passwd sebastiana -e

useradd roberto -s /bin/bash -G GRP_VEN -p $(openssl passwd -crypt 1234)
passwd roberto -e

# SEC
useradd josefina -s /bin/bash -G GRP_SEC -p $(openssl passwd -crypt 1234)
passwd josefina -e

useradd amanda -s /bin/bash -G GRP_SEC -p $(openssl passwd -crypt 1234)
passwd amanda -e

useradd rogerio -s /bin/bash -G GRP_SEC -p $(openssl passwd -crypt 1234)
passwd rogerio -e
