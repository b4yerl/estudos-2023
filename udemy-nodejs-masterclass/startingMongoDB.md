# Getting Started with MongoDB and Bootcamps Resource

## Connecting to the Database with mongoose

Existem diversas formas diferentes de estruturarmos a nossa conexão ao banco usando mongoose. Aqui iremos fazer isso em um arquivo separado dentro da pasta config.

Como o mongoose.connect() retorna uma Promise, vamos fazer a nossa função async e salvar o retorno do mongoose.connect() em uma variável com await.

O primeiro argumento do mongoose.connect é a URI para nos conectarmos ao banco, o segundo podem ser options que utilizaremos para evitar warnings no console caso isso seja informado.

Podemos agora importar esa função lá no server.js e realizar a conexão ao database.

Eu sofri um pouco para me conectar ao Mongo justamente porque estava errando a senha e tomando um UnhandledPromiseRejection. Podemos agora então criar um maneira global de lidar com esse tipo de erro. O primeiro passo é armazenar o app.listen() em uma variável para que possamos feechar o servidor em caso de erro.

Na sequência lidamos com esse tipo de erro da seguinte maneira:
```js
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1))
})
```

## Colors in the console

Uma respirada aqui... Vamos instalar um package chamado colors, que faz nada mais do que estilizar as mensagens no console de forma simples e rápida de ser aplicada. Basta aplicar o .COR e/ou .ESTILO ao final da mensagem do console.log().

## Creating our First Model

Vamos criar primeiro uma pasta de models com arquivos obedecendo PascalCase no singular.

Começamos pelo schema. Quando adicionamos um campo, podemos simplesmente passar o tipo, exemplo String, mas podemos também fazer a validação do campo aqui mesmo, por exemplo nosso campo name:
```js
name: {
  type: String,
  required: [true, 'Please provide a name'],
  unique: true,
  trim: true,
  maxlength: [50, 'Name cannot have more than 50 characters']
}
```

Nesse ponto rolou um grande copy paste de campos, nada muito complicado de se entender exceto pela parte do location, onde foi introduzido o [GeoJSON](https://mongoosejs.com/docs/geojson.html).

A parte de foto, vamos lidar com todo o processo de upload, mas no DB vai ficar aqpenas o nome do arquivo.

## Create Bootcamp - POST

Vamos começar nosso CRUD básico. Primeiro vamos preparar a request no Postman para o POST, como vamos enviar um JSON devemos dizer isso no header. Ao invés de adiconar o Content-Type direto, vamos criar um preset para isso, dessa forma, sempre que formos enviar um JSON basta usar o preset.

De volta à aplicação, para utilizarmos os dados enviados no corpo da requisição precisamos configurar o body parser no server.js. Para isso podemos simplesmente incluir:
> app.use(express.json());

Lá no nosso controller podemos então usar o Bootcamp.create(req.body) após importar o nosso model. Mongoose garante pra gente que não serão criados campos adicionais àqueles especificados no nosso Schema. Assim como todo o método mongoose, o .create() vai retornar uma Promise, então usaremos async/await.

Como estamos criando um recurso, o código da response passa a ser 201 e junto ao success true mandamos na chave data o novo recurso gerado no DB.

Outro ponto importante é colocar ess bloco dentro de um try...catch, isso porque temos campos etquietados como 'unique' e caso não tratemos esse erro, nosso console vai disparar a unhandledRejection, mas o Client vai ficar lá com a request aguardando. Repondemos então a Bad Request no catch com o status 400. Mais tarde vamos eliminar a necessidade desse try catch, mas por enquanto essa será a forma que teremos.

## Fetching Bootcamps - GET

Nossos endpoints de GET são relativamente tranquilos de serem feitos, lembrando que como ainda não implementamos um error handler pras nossas responses, seguiremos no try...catch.

Começando pelo getAllBootcamps() vamos simplesmente dar um await Bootcamp.find() para termos um array com todos os bootcamps que iremos retornar.

Já o endpoint que retorna apenas 1 bootcamp pelo id, vamos usar o findById(req.params.id), no fim das contas teremos isso aqui:
```js
const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if(!foundBootcamp) return res.status(400).json({ success: false });

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(404).json({ success: false });
  }
};
```

Note o if dentro do bloco try. O motivo dele estar ali é que, caso o ObjectId venha formatado corretamente na request, mesmo que não seja encontrado nada, a nossa response iria com um 200 vazio. Checamos então se algo foi encontrado, o return aparece ali para evitarmos o erro de ter 2 objetos responses sendo settados, com isso quebramos a execução no return.

## Updating and Deleting Bootcamps - PUT and DELETE

Vamos começar pelo update, assim como nos outros métodos, também teremos o async/await aqui. Para atualizar o noso documento vamos utilizar um método que receberá 3 argumentos:
> Bootcamp.findByIdAndUpdate(ID_TOFIND, BODY_TOUPDATE, OPTIONS)

O primeiro argumento é justamente o id passado no req.params.id, o segundo é o corpo da requisição, aqui é onde estará a mudança a ser feita, lembrandoo que isso virá em json, portanto devemos atualizar o header no Postman, por fim temos algumaspossibilidades de optios, nós usaremos 2.

"new: true" indica que o objeto a ser retornado é o novo document atualizado. "runValidators: true" diz ao mongoose que queremos rodar os validators do Schema novamente no update.

Para o Delete, primeiro criamos um bootcamp teste que será deletado pelo nosso endpoint. Na sequência basta utilizarmos o findByIdAndDelete(req.params.id), checar com o if se foi encontrado algo e GG.
