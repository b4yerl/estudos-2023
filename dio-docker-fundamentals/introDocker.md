# Introdução e Laboratório Virtual

## Introdução ao Docker e containers

Em um mundo de Cloud e Virtualização, muitos problemas foram resolvidos, mas outros começaram a ser observados, por exemplo, apesar da facilidade de escalar uma aplicação com VM, isso poder requerer um certo tempo que não temos. Agora no carnaval o mercado vai estar entupido de gente, isso pode gerar uma demanda maior ao server e necessidade de crescer, o cliente não pode ficar parado esperando o sistema ficar disponível.

Nós já dividimos o hardware com as VMs, agora dentro dessas VMs porque não dividir a aplicação, temos assim o início dos Microserviços, uma abordagem no qual o software consiste em pequenos serviços independentes que se comunicam via APIs. Esses serviços pertencem a pequenas equipes autossuficientes.

Fazendo isso podemos escalar essas pequenas partes de forma separada, por exemplo se estivermos tendo um stress maior em um serviço de autenticação, podemos então escalar somente ele de forma isolada.

Nesse cenário entra o tal do container, uma maneira de instanciar microserviços e escalar de maneira quase instantanea.

Containers reunem aplicativos e arquivos necessários em um ambiente de runtime. Sendo uma unidade, o container pode ser facilmente movido e executado em qualquer contexto.

Com o Docker, é possível lidar com os containers como se fossem máquinas virtuais modulares extremamente leves. Containers oferecem maior flexibilidade para criar, implantar, copiar e migrar ele de um ambiente para outro.

Em suma, a virtualização executa sistemas operacionais simultaneamente em um único hardware. Enquanto isso, containers compartilham o mesmo kernel e isolam os processos da aplicação do resto do sistema.