const express = require('express');
const app = express();
const PORT = 3000;

// Simplesmente devolve o index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// Quando não temos route parameters envia a data atual
app.get('/api', (req, res) => {
  const currentDate = new Date();
  const unixTime = Number(currentDate);

  res.json({unix: unixTime, utc: currentDate.toUTCString()});
})

app.get('/api/:dateQuery', (req, res) => {
    let queryDate = req.params.dateQuery;
    
    // Caso não tenha caracteres especiais, tenta converter a data para um Number
    if(!(/\W/.test(req.params.dateQuery))) queryDate = Number(queryDate);
    const currentDate = new Date(queryDate);
    const unixTime = Number(currentDate);

    // Valida a data gerada pelo constructor e envia de acordo
    if(currentDate == 'Invalid Date') res.json({ error: "Invalid Date" });
    else res.json({ unix: unixTime, utc: currentDate.toUTCString() });
})

app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });
