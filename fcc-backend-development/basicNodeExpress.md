# Basic Node and Express

### Start a Working Express Server

Usando o express o processo para iniciar a aplicação é muito simples, inicialmente basta importar o express e com o express() inicializar o objeto.
> const express = require('express');
> const app = express();

Um método fundamental do nosso objeto app é o app.listen(port), esse método indica que o nosso servidor deve escutar uma determinada porta a fim de captar requests do Client.

No Express as rotas obedecem à seguinte estrutura - app.HTTP_METHOD(PATH, HANDLER).
- HTTP_METHOD: um método HTTP em lowercase, exemplos: get, post, put, delete
- PATH: o caminho relativo no servidor, podendo ser uma string ou até mesmo uma ReGex.
- HANDLER: a função que o Express chama quando a rota bate com o esperado. Esses handlers seguem o formato function(req, res) {...}, onde req é o objeto da requisição e res é o objeto da resposta.

### Serve an HTML File

Com o 'res.send(string)' podemos enviar um conteúto do tipo text/plain como resposta à request. Para enviar um arquivo podemos usar 'res.sendFile(path)', por baixo dos panos o sendFile monta os headers necessários para o browser interpretar o que está chegando no body da nossa response. Note que este método precisa do path absoluto, por isso podemos usar a variável global do Node, o __dirname em conjunto com a localização do nosso recurso.
> absolutePath = __dirname + relativePath/file.ext

### Serve Static Assets

Um servidor HTML normalmente tem m ou mais diretórios acessíveis ao usuário. Lá colocamos os css, os sctipts, as imagens, etc.

No Expres podemos por em prática esssa funcionalidade usando o middleware "express.static(absolutePath)" sendo o absolutePath justamente a pasta com os assets.

### Serve JSON on a Specific Route

Enquanto um server HTML entrega arquivos HTML, uma API entrega dados. Uma REST (REpresentatonal State Transfer) API permite a troca de dados de maneira simples, sem a necessidade dos clients saberem qualquer detalhe sobre o server. Basta ao cliente saber o a localização do recurso (URL) e o que ele quer fazer (Método HTTP).

Quando apenas buscamos alguma informação sem alterar nada usamos o GET. Atualmente o formato mais utilizado para essa troca de dados na web é o JSON.

Para responder um json na nossa aplicação usamos um app.get(path, handler) nprmal, apenas nos certificamos de, no nosso objeto response, usar o método res.json() passando um objeto como argumento. Por baixo dos panos esse método converte o objeto em uma string e prepara o header correto para fechar o ciclo request-response.

### Use the .env File

O arquivo .env é um arquivo oculto usado para receber variáveis de ambiente. Como um arquivo secreto podemos usa-lo para passar chaves de APIs de serviços externos, podemos guardar a URI do database ouusar para armazenar opções de configuração. Usando opççoes de cnfiguração podemos alterar alguns comportamentos da aplicação, sem a necssidade de alterar código.

As variáveis de ambiente são acessíveis pelo nosso app como "process.env.VAR_NAME". O objeto process.env é um objeto global do NOde e as variáveis são passadas a ele como strings. Por convenção os nomes das variáveis são todos em UPPER CASE com separação por _. NOte que como o .env é um arquivo de shell não é necessário o uso de aspas e nem devemos acrescentar espações desnecessários.

> If you are working locally, you will need the dotenv package. It loads environment variables from your .env file into process.env. At the top of your myApp.js file, add require('dotenv').config() to load the environment variables.

### Implement a Root-Level Request Logger Middleware

Middleware functions são funções que recebem 3 argumentos,  objeto request, o objeto response e a função next. Os middleware executam ações que podem gerar alguma espécie de efeito colateral no app, normalmente acrescentando informação à request ou ao response.

Podemos chamar mniddleware functions com o app.use, dessa forma qualquer request que passsar por ali irá triggar a função, mas podemos também definir os métodos HTTp normalmente, exemplo app.post(middleware).

Devemos lembrar de passar o next() ao final da nossa função, com isso o código sabe que já podemos seguir para a próxima task da stack.

### Chain Middleware to Create a Time Server

Podemos declarar um middleware de pre request entre o path e a função de uma rota, dessa maneira o código fica mais coeso. Pensando nesse modelo podemos por exemplo usar o middleware para validação de dados ou algo assim, dessa forma o middleware pode travar o prosseguimento da request ou direcionar o fluxo para outra função.
> app.METHOD(path, function(req, res, next) {...}, function(req, res) {...});

### Get Route Parameter Input from the Client

Quando construímos uma API devemos permitir que o usuário comunique-se conosco de alguma maneira. Por exemplo caso queiram acessar um registro específico em nossos dados. Uma maneira de realzar essa comunicação é através do uso de parâmetros de rota. Route parameters são segmentos da URL delimitados por '/'. A ideia é montar um par chave valor usando :key no path que poderá ser acessado como um objeto no 'req.params'.
> /user/:userId -------- { userId: 1 }

### Get Query Parameter Input from the Client

Outra maneira comum de recebermos input do client é através do uso de uma query string, que aparece logo após o path da URL, isolada por '?' com seus pares delimitados por '&'.

Express consegue extrair os valores dessa query string e jogar para um objeto, para acessar o objeto vamos até "req.query"

### Use body-parser to Parse POST Requests

Na convenção REST, POST é usado para enviar dados que criarão novos itens no database. Nesse tipo de request, os dados não vem expostos na URL e sim no corpo da requisição. O corpo lé uma parte da request também conhecido como payload.

Para utilizar os dados vindos de um POST devemos usar o pacote 'body-parser', ele nos permite utilizar uma séries de middlewares para decodificar dados em diferentes formatos. Para um formulário HTML que por padrão envia os dados codificados como uma querystring, fazemos algo como:
> bodyParser.urlencoded({ extended: false });

Note que a opção extended diz ao body-parser qual "parsing" deve ser usado. Aqui o false indica a library querystring que consegue lidar apenas com strings e arrays, para outras coisas seria melhor utilizar json.

