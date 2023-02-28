# Web Services

Um dos principais objeticvos da ideia de sockets apresentada anteriormente e do ciclo request response em si, é a comunicação entre processos de aplicações. Para isso ser feito de forma independente a qualquer tecnologia, temos padrçoes e formatos de conteúdo estabelicidos para essa comunicação.

O ato de converter um código, python por exemplo, para o formato do "wire" é a serialização, o processo inverso a desserialização.

## XML

Parecido com o esquema de tags do HTML, o XML é mais rtigoroso com erros, tem que ter tudo certinho e talz.

O XML deve sempre ter apenas uma root tag, a partir daí podemos ramificar a arvore com ndes, childs tc.

Um XML Schema funciona como um contrato para a validação do arquivo XML que vem junto, funciona mesmo como um contrato entre as 2 aplicaçṍes.

## JSON

Para trabalhar com um JSON em python, precisamos do `import json`. Tendo isso em mãos podemos converter o JSON para um dict ou list python com `json.loads()`.

## APIs

Basicamente quando vamos utilizar um web service, mito provavelmente vamos nos deparar com uma API. APIs são basciamente um contrato no qual, fazemos algo e em troca recebemos os dados reqiusitados de acordo com o que foi solicitado.