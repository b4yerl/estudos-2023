const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/copa-do-brasil', (req, res) => {
  const cdb = [
    {
      id: 1,
      ano: 1993,
    },
    {
      id: 2,
      ano: 1996,
    },
    {
      id: 3,
      ano: 2000,
    },
    {
      id: 4,
      ano: 2003,
    },
    {
      id: 5,
      ano: 2017,
    },
    {
      id: 6,
      ano: 2018,
    }
  ];

  res.json(cdb);
})

app.listen(port, () => console.log('listening on port ' + port));