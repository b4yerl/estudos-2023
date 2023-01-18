const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.get('/api/whoami', (req, res) => {
  // Acessando o header podemos encontrar as infos solicitadas
  const obj = {
    ipaddress: req.ip,
    language:req.headers['accept-language'],
    software: req.headers['user-agent']
  };

  res.json(obj);
})


app.listen(PORT, () => console.log(`Listening on por ${PORT}`));