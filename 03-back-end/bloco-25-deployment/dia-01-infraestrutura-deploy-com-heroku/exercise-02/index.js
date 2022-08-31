require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT || 3001;
const { MESSAGE } = process.env

app.get('/', (_req, res) => {
  return res.send(MESSAGE);
});

app.listen(port, () => console.log(`Ouvindo na porta ${port}...`));