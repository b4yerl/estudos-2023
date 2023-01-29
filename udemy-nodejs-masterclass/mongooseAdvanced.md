# Mongoose Advanced Querying and Relantionships

## Database Seeder for Bootcamps

Isso aqui é um momento paralelo, mas a gente aqui vai ver como criar um seeder para jogar os dados pro nosso DB. Faremos isso com o fs module.

Fazemos as configurações de conexão ao banco de forma separada aqui já que ele não roda com o resto da aplicação.

Na sequência usamos o fs.readFileSync() para ler o arquivo de forma síncrona, por enquanto estamos trabalhando apenas com o bootcamps.

Teremos basicamente 2 funções, uma para adicionar os dados do arquivo ao DB e outra para deletar tudo que houver nele. Adicionalmente queremos ter uma forma de passar argumentos no terminal para indicar  qual função deve ser executada. Para isso podemos acessar "process.argv[2]" e usar um bloco condicional.

## Geospatial Query - Get Bootcamps within Radius

Como nosso campo location é um campo GeoJSON podemos fazer algumas operações com os dados.

Vamos começar então criando um novo endpoint na nossa controller, aqui vamos precisar de 2 req parameters, o zipcode e a distancia desejada pro nosso raio.

Na sequência usaremos o geocoder novamente, passando o zipcode dessa vez, assim pderemos obter a latitude e a longitude que serão utilizados para fazer a conta com [$geoWithin](https://www.mongodb.com/docs/manual/reference/operator/query/geoWithin/). Também será necessário obeter o raio em radianos, para isso basta dividir a distancia passada como parâmetro pelo raio da terra.

Por fim teremos algo como:
```js
const { zipcode, distance } = req.params;

const location = await geocoder.geocode(zipcode);
const lat = location[0].latitude;
const lon = location[0].longitude;

const radius = distance / 6378;

const bootcamps = await Bootcamp.find({
  location: {
    $geowithin: {
      $centerSphere: [ [ lon, lat ], radius ]
    }
  }
});

res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps
});
```

## Advanced Filtering

Vamos melhorar nosso Get All Bootcamps para que possamos utilizar alguns filtros passando uma query string.

Como o req.query é um objeto, podemos simplesmente passar isso como parâmetro no nosso find e deixar o mongoose trabalhar. Porém queremos fazer filtros do tipo "preço menor que x e maior que y", para isso teremos que trabalhar nosso req.query de forma separada.

O que precisamos fazer é garantir que os lte e gte da vida tenham o sinal de $, para que sejam entendidos pelo mongoose como os operadores '<=' e '>='. Faremos isso usando o replce() e passando a seguinte regex:
> /\b(gt|gte|le|lte|in)\b/g

Com isso podemos voltar a string para JSON com JSON.parse() e passar ela como parâmetro na nossa query no banco.

## Select and Sorting

Agora vamos implementar a capacidade de selecionar apenas os conteúdos desejados para a resposta. Essa seleção vai ser feita através de uma chave select na query string, mas da forma como fizemos o filtro, a query string é entendida como algo a ser enviado no filtro da query no banco...

Para isso devemos limpar o nosso objeto req.query. Começamos copiando seu conteúdo para uma nova variável que será utilizada em conjunto com um array contendo os campos que queiramos remover. Na sequência um forEach resolve nossa vida: 
`removeFields.forEach(key => delete reqQuery[key]);`

Agora para implementar o sleect voltaremos a trabalhar com o req.query.select. O Quey.select pede valores separados por espaço e nossa query vem separada por vírgula, isso é tranquilo de resolver, mas no curso foi feito com .split(',').join(' '), eu mantive na string e fiz direto com .replaceAll(',', ' '). Pronto, basta acrescentar o query.select() na condicional e deixar o .exec() trabalhar igual antes.

Para a ordenação o processo é o mesmo usando a keyword sort. A única diferença é que além do nosso bloco condicional temos um else, nele iremos definir uma ordenação padrão para caso isso não seja especificado pelo user.

## Adding Pagination

Por fim vamos adicionar paginação ao nosso endpoint. Vamos então começar pelo limit.

Como o código é bem tranquilo de entender eu vou jogar ele aqui direto sem muita explicação, mas basicamente settamos os valores convertendo-os para números, usamos o page para calcular quantos resultados devem ser eliminados na query e passamos nossos valores para a query:
```js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 100;
const startingIndex = (page - 1) * limit;

query = query.skip(startingIndex).limit(limit);
```

Podemos fazer mais algumas coisas relacionadas a paginação aqui. Vamos devolver na nossa response um objeto para facilitar a vida do front. Nesse objeto teremos no máximo 2 propriedades: next e prev, elas carrega a informação de qual a proxima página ou qual a anterior e o limite descrito nisso.

O que acontece é que agora fica mais fácil de saber se há uma página pra frente ou pra trás. Poderíamos também incluir já o link para a próxima página o que seria ainda mais confortável, ams desse jeito aqui tá ok.

Agora, esse tipo de coisa será transferida pra um middleware para que todos os resources tenham acesso a paginação, ordenação, seleção, sem que tenhamos de repetir o código.

## Course Model and Seeding

Vamos passar agora para os cursos, então começamos criando o novo model. Criamos o schema, tudo tranquilo, a diferença aqui fica pra como é feita a relação entre curso e bootcamp. Para isso utilizamos a seguinte sintaxe:
```js
bootcamp: {
  type: mongoose.Schema.ObjectId,
  ref: 'Bootcamp',
  required: true
}
```

Isso indica o tipo especial que tem o id do document e referencia o model Bootcamp para tal.

Vamos agora alterar nosso seeder para que ele tenha a funcionalidade de cursos também.

## Course Routes and Controller

Vamos agora criar nosso router e nossa controller pra esse resource. Começamos pelo getCourses. Muito parecido com o que já foi feito antes, a diferença agora é uma checagem para um possível bootcampId, isso porque nosso método aqui suporta 2 rotas.

O processo de criar um router e levá-lo ao server.js também é o mesmo. COm tudo feito, vamos ao Postman criar um nova pasta pro recurso Courses.

Vamos agora voltar e implementar o /bootcamps/:bootcampId/courses. Para isso teremos algumas opções, nós poderíamos simplesmente jogar essa rota no bootcamps router, mas como estamos lidando com outro resource não faremos isso.

Vamos trazer então o router dos cursos pra dentro do router dos bootcamps, dessa maneira podemos fazer uma especie de re-route com:
> router.use('/bootcamps:Id/courses', courseRouter);

A única mudança no courses router é settar uma option dentro da inicialização do express.Router({ mergeParams: true });

## Populate, Virtuals and Cascade Delete

Quando nós buscamos os courses, a response vem apenas como id do bootcamp a ele relacionado, vamos então usar a ideia de populate no mongoose para trazer mais informações acerca do bootcamp.

Para fazer isso basta adicionar o .populate() à nossa query passando ('bootcamp'). Essa soulução cospe de volta todos os dados daquele bootcamp, mas as vezes queremos somente alguns dados, nesse caso ao invés de mandar a string completa, mandamos um objeto com o path apontando pra bootcamp e um select com os campos que queremos.

Agora vamos implementar o contrário para que, quando buscarmos os bootcamps, recebamos um array com seus cursos. Isso vai ser um pouco mais difícil e aqui entramos em Virtuals - criar uma propriedade/campo virtual que não está presente de verdade no banco de dados.

Para fazer isso teremos que modificar o BootcampSchema, mais especificamente vamos acrescentar informação ao fim das chaves do mongoose.Schema({}...AQUI...).

Vamo lá, como o código é dividido em duas partes não vou botar tudo aqui, o ideal é [ir lá](./devcamper-api/models/Bootcamp.js) ver como tá, mas eu vou explicar. Primeiro logo após a definição do nosso schema passamo um objeto com duas option: toJSON e toObject, ambas como true. Na sequência, antes de salvar o model, fizemos o seguinte:
```js
BootcampSchema.virtual('courses', {
  ref: 'Course',
  localField: '_id',
  foreignField: 'bootcamp',
  justOne: false
});
```

O que isso faz é settar um virtual chamado courses que aponta pro model Course, busca lá um campo bootcamp que bata com nosso campo _id e retorna não só 1, mas um arrray de resultados.

Para finalizar basta dar um populate na query dos bootcamps passando 'courses'.

Agora vamos fazer com que, quando um bootcamp seja deletado, todos os seus cursos sejam deletados juntos. Isso será implementado usando um mongoose middleware lá no model Bootcamp, nesse caso aqui teremos um pre ouvindo remove e não save. Teremos algo assim:
```js
BootcampSchema.pre('remove', async function(next) {
  await this.model('Course').deleteMany({ bootcamp: this._id });
  next();
});
```

Antes de ver nosso cascade delete funcionando temos que alterar uma coisa no bootcamps controller. Para o pre middleware pegar o remove, não podemos usar findByIdAndDelete(), portanto vamos alterar isso para apenas encontrar o bootcamp com findById() e posteriormente usamos .remove() para, aí sim, disparar o middleware.

## Single Course and Add Course

O GET para um único curso é bem tranquilo de fazer, adicionamos a rota, criamos o método basicão e voilá.

Para o nosso POST usaremos novamente a ideia do re-route já que precisamos de um bootcamp associado ao curso. Até po isso no nosso método a primeira coisa que fazemos é adicionar manualmente essa informação ao corpo da nossa request:
> req.body.bootcamp = req.params.bootcampId;

Com isso vamos apenas verificar se esse bootcamp existe antes de fazer o Course.create().

## Update and Delete Course

O update é muito semelhante ao que já veio sendo feito até aqui, fizemos uma alteração na checagem em comparação ao que foi feito no resource bootcamps, mas eu acho o anterior melhor, enfim...

Como futuramente iremos adicionar um middleware aqui no delete, não o faremos com findByIdAndDelete, faremos assim como foi feito para adicionar o cascade delete, primeiro damos o find e na sequência a gente fecha a tampa do caixão com .remove().

## Aggregate - Calculating the Average Course Cost

Agora vamos implementar o custo médio dos cursos de um bootcamp. A nossa função getAverageCost() vai ser chamada a cada vez que um novo curso for salvo no DB, por isso o lugar certo desa call ficar é como um middleware post save no model Course e pre remove, já que essas são as duas ações que alteram o custo médio.

Dentro do mongoose temos statics que declaramos para serem chamados diretamente pelo model depois, vamos então fazer dele nossa função assíncrona que recebe o id do bootcamp para calcular seu custo médo.

Aqui dentro agora sim iremos usar o this.aggregate para gerar um objeto que vai identificar o bootcamp com o id passado e vai retornar um grupo com o $avg do campo tuition de seus courses, em código fica:
```js
CourseSchema.statics.getAverageCost = async function(bootcampId) {
  const arr = this.aggregate([
    {
      $match: { bootcamp: bootcampId }
    },
    {
      $group: {
        _id: '$bootcamp'
        averageCost: { $avg: '$tuition' }
      }
    }
  ])

  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
      averageCost: Math.ceil(arr[0].averageCost / 10) * 10
    })
  } catch (err) {
    console.log(err.message)
  }
}

// Depois é só chamar nos middleware com:
this.constructor.getAverageCost(this.bootcamp)
```
Com isso nós armazenamos o calculko do custo médio e depois atualizamos nossa base de dados dentro do bloco try catch.

## Photo Upload for Bootcamp

Vamos agora implementar o upload de imagens pro servidor, lembrando que no nosso document teremos apenas a referência ao nome do arquivo. Para essa funcionalidade usaremos o express-fileupload, existem outras opçoes como o multer que, por exemplo, foi utilizado [aqui](../fcc-backend-development/projects/fileMetadata/).

Vamos importar o uploader e montar o middleware acima dos nossos routers. Na sequência vamo levar ele pro nosso bootcamps controller onde termos um novo método exclusivo pra esse processo de upload de foto através de um update com PUT.

Para fazermos o upload de um aquivo no Postman devermos botar o body da request como form-data enviando um arquivo com a chave file. Com isso ao enviarmos nossa request, o express-fileupload já ajeita a vida pra gente e podemos ter acesso ao que foi enviado com req.files.file.

Com esse arquivo em mãos, podemos checar se o mime-type é o de alguma imagem, para isso faremos a seguinte condição:
> if(!file.mimetype.startsWith('image')) return next(new ErrorResponse(...));

Vamos também limitar o tamanho desse aruivo de imagem, para isso podemos usar uma variável de ambiente de forma que seja fácil mudar isso em qualquer ambente :)

Agora precisamos garantir que cada arquivo tenha um nome único para que eles não sejam sobrescritos. Para isso vamos usar o _id do bootcamp para nomear a foto. Para isso vamos ter que extrair a extensão do arquivo, logo como já visto [aqui](../microsoft-javascript-node-applications/filesAndDirectories.md), vamos usar o path module.

Com isso feito vamos usar a função mv que o express-fileupload nos disponibiliza para enviarmos o arquivo a uma pasta 'public/uploads' da nossa aplicação, lembrando que esse path está salvo como variável de ambiente. essa função file.mv precisa de uma callback que é onde checamos se houve algum erro e então salvamos o nome do arquivo no nosso DB passando apenas o novo file.name.

Por fim vamos apenas definir a nova pasta public como nossa pasta static com o app.use(express.static(path.join(__dirname, 'public'))). Da mesma forma que eu já fiz em outros cursos.

Vou trazer o código da nossa endpoint aqui, mais como um summary de como a criança ficou e eu já dou uma revisada reescrevendo tudo:
```js
exports.uploadBootcampPhoto = asyncHandler ( async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  if(!req.files) return next(new ErrorResponse(`Please upload a file`, 400));

  // Validação da imagem enviada
  const file = req.files.file;
  if(!file.mimetype.startsWith('image')) return next(new ErrorResponse(`Please upload an image file`, 400));
  if(file.size > process.env.FILE_SIZE_LIMIT) return next(new ErrorResponse(`Please upload an image with less than ${Math.floor(process.env.FILE_SIZE_LIMIT / (100 ** 3))}`, 400));

  // Alteração do nome do arquivo
  file.name = `photo_${bootcamp._id}${path.extname(file.name)}`;

  // Levar o arquivo à pasta public e salvar no DB
  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`);

  await Bootcamp.findByIdAndUpdate(req.params.id, { photo: file.name });

  res.status(200).json({ success: true, data: file.name });
});
```

Lembrando que essa é apenas uma das maneiras de lidar com upload de arquivos / imagens.

## Advanced Results Middleware

Aquelas paradas de paginação, ordenação, o select e talz, vamos tirar isso da nossa controller e passar para um middleware, assim poderemos usar esses filtros em qualquer outro resource.

Como a ideia é usar isso com outros resources vamos fazer a seguinte estrutura:
```js
const advancedResults = (model, populate) => (req, res, next) {
  // [...]
};

module.exports = advancedResults
```

Dessa maneira podemos passar um model a ser utilizado e o alvo do populate para dentro da nossa função, isso é semelhante ao que já foi visto antes [aqui](../fcc-javascript-algorithms/functionalProgramming.md).

Pra usar esse middleware temos que ir ao router, importá-lo e adicionar às rotas que queremos com o model e onde devemos realizar o populate se necessário for.

:)
