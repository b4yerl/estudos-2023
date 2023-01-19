const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer()
const PORT = 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

// Sim, é só isso
app.post('/api/upload', upload.single('upfile'), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));