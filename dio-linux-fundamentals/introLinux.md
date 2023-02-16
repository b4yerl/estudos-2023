# Introdução ao Sistema Operacional Linux

## O que é um sistema operacional

Um SO nada mais é do que um software ou um conjunto de software, que tem a função de adminstrar e gerenciar os recursos de um sistema. Logo podemos entender sua principal função como a geração de uma interface, a comunicação entre hardware e usuário.

O KERNEL é a ponte entre usuário e hardware, ele é o núcleo do SO. Estabelenco a camada de abstração de baixo nível com o hardware, gerenciando recursos, processos e o uso de dispositivos.

## Diferenças entre Linux Desktop e Server

Toda a infra da internet e até redes locais é baseado no modelo cliente-servidor, uma estrutura de aplicação que distribui as tarefas e cargas de trabalhoi entre os fornecedores de um recurso ou serviço, designados como servidores, e os requerentes dos serviços, os clientes.

Os servidores estão normalmente alocados em data centers, rodando um sistema específico para suprir suas necessidades.

## Acesso remoto via windows ou linux

Quando estamos usando uma VM local, não precisamos necessariamente usar um acesso remoto, a vantagem disso é a possibilidade de usar um copy/paste da máquina principal com a VM por exemplo.

Para fazer essa conezão usaremos aqui o PuTTy, mas antes devemos habilitar o servidor ssh na nossa vm, para isso usamos: `apt-get install openssh-server`

O acesso partindo do linux pode ser feito direto do terminal com o comando `ssh user@ip`. Essa é a conezão paarão que eu já fazia antes. Também temos a opção do puTTy, mas assim é mais prático.

