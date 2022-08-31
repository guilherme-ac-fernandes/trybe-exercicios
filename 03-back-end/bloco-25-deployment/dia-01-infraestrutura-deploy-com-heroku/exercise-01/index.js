require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  return res.send('Está vivo!!!');
});

app.listen(port, () => console.log(`Ouvindo na porta ${port}...`));