# MongoDB and Mongoose

### Install and Set Up Mongoose

Primeira coisa que precisamos logo de cara é importar o mongoose pro nosso app.js. Outro passo necessário é configurar a variável de ambiente MONGO_URI, seu valor é a URI do nosso cluster lá no MongoDB.

Para concluir a conexão do mongoose com o nosso banco usamos o seguinte:
> mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

### Create a Model

Antes de mais nada precisamos de um schema. Cada schema aponta uma MongoDB collection. É o schema que define o formato dos documentos daquela collection, sendo os blocos que constroem os Models. Um model nos permite criar instancias dos nosso objetos, os documentos.

Em servidores reais as interações com o banco ocorrem através de handler functions. Essas handler functions são executadas quando algo ocorre, como o acesso a um endpoint.

#### [Introduction to Mongoose for MongoDB](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

Vamos passar por aqui antes para esclarecer as coisas e voltamos na sequência.

Mongoose é um ODM (Object Data Modeling) para MongoDB e Node.js. Ele gerencia as relações entre dados, entrega validação de schema e traduz objetos em código para suas representações no MongDB.

MongoDB é um database de documentos NoSQL. Com ele podemos armazenar documentos JSON e a estrutura desses documentos pode variar não sendo rígida como em um banco SQL. Essa é uma das vantagens de se usar NoSQL já que isso acelera o desenvolvimento da aplicação e reduz a complexidade.

Alguns termos específicos são utilizados aqui e vamos esclarecer tudo:
- Collections são o equivalente às tabelas nos banco relacionais. Elas podem guardar multiplos documentos JSON.
- Documents são o equivalente às linhas de uma tabela SQL.
- Fields ou atributos são as colunas de uma tabela SQL.
- Schema: mesmo o Mongo sendo schema-less, um schema mongoose é o formato do documento que será forçado a ser obedecido na camada da aplicação.
- Models são os constructors que usam um schema parar criar instâncias dos documents.

Um model do mongoose é um wrapper do schema do mongoose. O schema define a estrutura do documento, valores padrão, validators, etc. Já o model provê a interface para o database criar, consultar, atualizar e deletar registros.

O primeiro passo pra chegar no model é referenciar o mongoose com o require. Na sequência definimos o schema, para isso usamos o seguinte:
> let newSchema = new mongoose.Schema({ key: TYPE })

Alguns dos tipos permitidos no schema são: String, Array, Boolean, Buffer, Date, Mixed, Number, ObjectId. Desses, Mixed e ObjectId são definidos no "require('mongoose').Schema.Types".

Por fim criamos o model com:
> const ModelName = mongoose.model('ModelName', newSchema);
[...]

#### FIM DA SAIDINHA TEMPORÁRIA

### Create and Save a Record of a Model

Para criar e salvar uma instância do nosso model, usamos primeiro uma função que recebe done. dentro dela declaramos um novo objeto seguindo as regras impostas pelo schema e na sequência salvamos com:
> obj.save((err, data) => {
> if(err) return console.log(err)
> done(null, data) })

### Create Many Records with model.create()

As vezes precisaremos criar várias instâncias de um model, por exemplo quando alimentamos nosso database com dados iniciais. Model.create() recebe um array de objetos e os salva no DB.

### Use model.find(), model.findOne() and model.findById() to Search Your Database

Na seu uso mais simples Model.find() recebe um document de consulta (um objeto JSON) e uma callback. Retorna um array de matches.

Com o Model.findOne() temos somente um document no retorno e não um array. Sendo assim é especialmente útil quando buscamos propriedades que formam definidas como sendo únicas.

O campo _id é adicionado automaticamente pelo MongoDB quando salvamos um document e é settado para um alfanumérico único. Como a busca pelo _id é muito frequente o Mongoose já disponibiliza um método único para isso.

### Perform Classic Updates by Running Find, Edit, then Save

Antes esse processo era o necessário para editar um document. Mongoose tem um método dedicado para o updating: Model.update() que está atrelado ao mongo driver. Consegue editar vários documents que estejam em certo critério, mas não os envia de volta, apenas uma 'status message'. Além do mais torna dificil a validação pois conversa direto com o mongo driver.

Podemos então encontrar com o findById, atualizar o data dentro da callback e dar um save no data mesmo.

### Perform New Updates on a Document Using model.findOneAndUpdate()

Versões recentes do Mongoose tem métodos para simplificar a atualização de documentos. Algumas features avançadas se comportam diferente com esses métodos então a forma clássica ainda é útil.

### Delete One Document Using model.findByIdAndRemove or Many with model.remove()

Funcionando de forma parecida com os updates a ideia é a mesma, encontrar um registro e agora remover, tudo isso só com o .findByIdAndRemove ou findOneAndRemove.

Para remover vários usamos o Model.remove().

### Chain Search Query Helpers to Narrow Search Results

Se não entregarmos uma callback para algum método como o Model.find(), a query não é executada. Ao invés disso podemos armazenar essa query em uma variável para uso posterior. Esse tipo de objeto nos permite construir queries maiores encadeando várias delas.

A busca no banco só ocorre quando usamos o .exec() e passamos a callback.