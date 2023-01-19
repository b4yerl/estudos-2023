const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const dns = require('dns');
const urlModule = require('url');

// Configurações básicas
const PORT = 3000;
mongoose.connect('mongodb://localhost:27017');

// Criando o schema e o Model para nossos documents lá no mongo
const urlSchema = new mongoose.Schema({
  url: { type: String }
});

const Url = mongoose.model('Url', urlSchema);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

/*
  Apesar do nosso Schema ter apenas o campo da URL, o MongoDB gera um ObjectId para cada
  document que entra na collection. A ideia é usar esse id para referenciar a URL armazenada.
*/
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/api/shorturl', validateUrl, (req, res) => {
  const newUrl = new Url({
    url: req.body.url
  })
  
  newUrl.save((err, data) => {
    if(err) console.log(err);
    res.json({ original_url: data.url, short_url: data._id.toHexString() });
  })
})

/*
  Como a versão encurtada da URL é o ObjectID do document no MongoDB, basta fazer a busca pelo id
  e redirecionar o usuário pra URL salva.
*/
app.get('/api/shorturl/:urlId', (req, res) => {
  const objectId = req.params.urlId;
  
  Url.findById({ _id: objectId}, (err, data) => {
      if(err) res.send('invalid url');
      else res.redirect(data.url);
    })
  })
  
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  
  /*
    Essa função atua como middleware para verificar se a URL inserida é válida ou não,
    para isso ela primeiro checa o formato da URL inserida para posteriormente checar o hostname
    com o dns.lookup
  */
  function validateUrl(req, res, next) {
    const parsedUrl = urlModule.parse(req.body.url);
    if(parsedUrl.slashes === true) {
      dns.lookup(parsedUrl.hostname, (err, ok) => {
        if(err) res.json({ error: 'invalid url' });
        else next()
      })
    }
    else res.json({ error: 'invalid url' });
  }
