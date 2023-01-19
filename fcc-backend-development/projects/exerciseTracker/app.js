const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Configuração básica
const app = express();
const PORT = 3000;
app.use(express.static('public'))
mongoose.connect('mongodb://localhost:27017');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// Gerando os schemas das nossas 2 entidades
const exerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: Date,
  userId: String
});

const userSchema = new mongoose.Schema({
  username: String
});

// Models
const Exercise = mongoose.model('Exercise', exerciseSchema);
const User = mongoose.model('User', userSchema);

/* ROUTES:
  [ x ] POST /api/users -- cria o user e retorna o document com _id 
  [ x ] POST /api/users/:_id/exercises -- cria um exercicio e retorna o document, caso não haja input de data usa a atual
  [ x ] GET  /api/users -- retorna uma array com todos os users
  [ x ] GET  /api/users/:_id/logs -- Retorna o user e um array com todos os exercicios dele
  [ x ] GET  /api/users/:_id/logs?[from][&to][&limit] -- pode usar query string pra filtrar intervalo de datas e limite de respostas
*/
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas para POST e GET no /api/users
app.post('/api/users', (req, res) => {
  const newUser = new User({
    username: req.body.username
  });

  newUser.save((err, userData) => {
    if(err) res.send('ERROOOOOORRRR');
    else res.json({
      username: userData.username,
      _id: userData._id.toHexString()
    })
  })
});

app.get('/api/users', (req, res) => {
  const users = User.find({})
    .select({ __v: 0 }) 
    .exec((err, data) => {
      if(err) res.send('error');
      else res.json(data);
  });
})

app.post('/api/users/:id/exercises', (req, res) => {
  // Gera o objeto do tipo Date conforme especificado
  if(!req.body.date) req.body.date = new Date();
  else req.body.date = new Date(req.body.date);

  const findUser = User.findById({ _id: req.params.id}, (err, user) => {
    if(err) res.send('user not found');
    const newExercise = new Exercise({
      username: user.username,
      description: req.body.description,
      duration: req.body.duration,
      date: req.body.date,
      userId: req.params.id
    });
 
    newExercise.save((err, data) => {
      if(err) return console.log(err);

      // Formata a resposta da forma solicitada
      else res.json({
        username: user.username,
        description: data.description,
        duration: data.duration,
        date: data.date.toDateString(),
        _id: user._id
      })
    })
  })
});

app.get('/api/users/:id/logs', (req, res) => {
  // Define um filtro inicial basico pro find
  let filter = {
    userId: req.params.id
  };

  // Caso haja um filtro na query ele adiciona ao objeto filter
  if(req.query.from && req.query.to) {
    filter.date = { $gt: req.query.from, $lt: req.query.to };
  }
  const userLog = Exercise.find(filter)
                  .select({ __v: 0, username: 0, userId: 0, _id: 0})
                  // Usa um short-circuit, caso não haja um limit eu passo o maior inteiro possível no JS
                  .limit(req.query.limit || Number.MAX_SAFE_INTEGER)
                  .exec((err, logs) => {
                    if(err) res.json({ error: 'invalid user' })
                    else User.findById({ _id: req.params.id }, (err, userData) => {
                      if(err) res.json({ error: 'invalid user' });
                      else {
                        // Esse map serve para garantir a entrega da duration no tipo Number
                        // e para formatar a data
                        logs = logs.map(doc => {
                          return {
                            description: doc.description,
                            duration: Number(doc.duration),
                            date: doc.date.toDateString()
                          }
                        });
                        res.json({
                          username: userData.username,
                          count: logs.length,
                          id: userData._id,
                          log: logs
                        })
                      }
                    })
                  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
