# Analyzing and Managing Networks

## Analisando Redes com o ifconfig

Uma das ferramentas mais básicas para examinar e interagir com redes é o `ifconfig`, só de largar esse comando solto no terminal já consultamos nossas conexões ativas. Na primeira linha da saída temos o nome da primeira interface detectada, como *eth0* para conexões Ethernet.

Na sequência temos o ip atualmente atribuído a esta interface, o *bcast*, broadcast address, usado para enviar informações para todos os IPs da subnet e por fim a *netmask* (network mask), usado para determinar qual parte do IP está conectada à rede local.

Outra seção presente é a *lo*, o endereço de loopback, também chamado de localhost. Este é o endereço que permite conectar a gente ao nosso próprio sistema, apenas o que roda no sistema pode utilizá-lo, normalmente em testes e afins.

Por fim, caso haja uma interface wireless veremos o *wlan*. Note que aqui também temos o MAC address do dispositivo (HWaddr).

## Analisando dispositivos de rede wireless com iwconfig

Com o `iwconfig` é possível obter informações sobre, por exemplo, o roteador, seu MAC, etc. Podemos ver aqui informações sobre o padrão *802.11 IEEE* e o que o dispositivo é capaz. Outra informação importante para nós é o modo, no meu caso atual *Mode:Managed*, podendo também ser *Monitor* ou *Promiscuous*, este último é o que precismaos para crackear senhas wireless.

## Mudando a informação da sua rede

Poder alterar o endereço IP e outreas informações é útil já que auxilia no acesso de outras redes enquanto aparenta  ser um dispositivo confiável daquelas redes. Essa task de spoofing é relativamente fácil usando o `ifconfig`.

Para alterar o IP atual basta inserir o `ifconfig, a interface a ser reatribuída e o novo enederço de IP:
```sh
ifconfig eth0 192.168.181.115
```

Podemos então conferir o novo IP com o `ifconfig`. Além do IP é possível alterar também a netmask e o broadcast, novamente em caso de sucesso a resposta é o prompt em branco:
```sh
ifconfig eth0 192.168.181.115 netmask 255.255.0.0 broadcast 192.168.1.255
```

O MAC address (*HWadr*, hardware address) é único e muitas vezes utilizado como medida de segurança para manter hackers longe de redes, ou para rastreá-los. O spoofing deste MAC neutraliza essas medidas de segurança, sendo então uma técnica útili para passar por controles de acesso de rede.

O processo para o spoof do MAC com o `ifconfig`é tranquilo, primeiro derrubamos a interface com o `down`, na sequencia usamos `hw ether` e o novo MAC, para então fechar com o `up` da interface:
```sh
ifconfig eth0 down
ifconfig eth0 hw ether 00:11:22:33:44:55
ifconfig eth0 up
```

O Linux tem o "Dynamic Host Configuration Protocol" (*DHCP*) que roda em um *daemon*, um processo que roda no background, chamado `dhcpd` (dhcp daemon). O DHCP server atribui IPs para todos os sistemas na subnet e mantém um log de qual IP está alocado em qual máquina em determinado momento. Isso torna o nosso garoto um grande recurso para a análise forense para rastrear hackers, então bora entender o DHCP.

Normalmente para se conectar a internet partindo de uma LAN, é necessário ter um IP atribuído via DHCP. Portanto, depois de receber um IP estático, devemos ir busca o IP com o DHCP. Isso pode será feito quando a máquina rebootar, mas a gente vai arranjar isso sem o reboot.

Para fazer a requisição desse IP utilizaremos um client DHCP, em sistemas debian usamos o `dhclient`, seguido pela interface a que queremos atribuir o IP:
```sh
dhclient eth0
```

Esse comando `dhclient` envia uma request **DHCPDISCOVER** a partir da interface especificada (eth0). Essa interface recebe do DHCP server um **DHCPOFFER** e confirma a atribuição do IP com o dhcp request. A depender das configs do DHCP esse IP pode ser diferente a cada caso.

## Manipulando o DNS

O DNS serve para traduzir os IPs em nomes de domínio, com o o `dig` podemos colher informações chave sobre um domínio alvo, principalmente na fase de reconhecimento prévio ao ataque. Entre as informações que podemos colher estão: o IP do nameserver relacionado ao domínio, o IP do servidor de email e potencialmente quaisquer subdomínios e IPs. Além do comando e do omínio podemos passar options como *ns* para name server e *mx* para servidores de email.
```sh
dig hackers-arise.com ns
```

Note que nossa consulta acima retorna o IP do servidor DNS servindo "hackers-arise.com". Quando usamos a option *mx* temos as info dos *domain mail exchange server*.

EM alguns casos podemos querer alterar o servidor DNS que utilizamos, isso pode ser alterado no arquivo `/etc/resolv.conf`. Caso alteremos o nameserver neste arquivo para 8.8.8.8 por exemplo, vamos utilizar o server DNS publico do Google.

Outro arquivo importante de se conhecer é o `/etc/hosts`, nele também há este pareamento entre IP e domínio, sendo este prioritário para o sistema direcionar o fluxo em relação ao DNS. Isso é util para direcionar o trafégo para um site desejado usando alguma ferramenta como o *dnsspoof* ou não também n´[e, sla.

Por padrão o arquivo `hosts` contém mapping apenas para o localhost (127.0.0.1), mas é possívle adicionar qualquer endereço de IP mapeado a qualquer dompinio que queiramos, sei la, mandar o "bancodagrana.com" pra o nosso próprio server :). A regra aqui na edição do arquivo é usar o TAB para separar IP do dompinio.

