# Networking

## Networking with Python

O que chamamos de Socket é justamente o endpoint na conexão cliente e servidor. Outro conceito aqui é o de Port, podemos entender as portas como o ramal em uma organização, atarvés do número da porta indicamos qual serviço/processo do servidor estamos requisitando.

Em python podemos importar a lib `socket`. Com ela é bem fácil de usar a função `.socket()` para gerar um objeto scoket que pode na sequência se conectar a um endereço e uma porta com `.connect( (address, port) )`.

## Networking protocol

Enquanto a conexão em si, o TCP, funciona como  uma ligação telefônica, precisamos de um protocolo para ditar algumas regras como: quem fala o que, quem fala primeiro, o que deve ser dito, etc. Aqui o principal protocolo utilizado é o HTTP.

## Text Processing

QUando tratamos apenas de caracteres ASCII podemos recorrer ao método `ord()` para visualizarmos o código de uma determinada letra, por exemplo.

Com a expansão da internet e a necessidade de representar mais do que apenas 128 caracteres, foi introduzido o UTF-32 e o UTF-16, com respectivamente 4 e 2 bytes, mas isso geraria um payload muito maior que o ASCII, logo criou-se um padrão com tamanho dinâmicoo que se adapta conforme necessário, o UTF-8. A partir do Python 3, toda string passa a ser unicode.

Por essa razão o nosso "[simple_browser.py](./exercises/simple_browser.py)" tem o `.encode()`, para converter a request em bytes UTF-8 que serão enviados no `send()` e o `.decode()` para reverter os bytes recebidos no `recv()` em caracteres.
