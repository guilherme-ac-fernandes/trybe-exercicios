const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Requisito 1
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

// Requisito 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` });
});

// Requisito 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) < 18) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  return res.status(200).json({ message: `Hello, ${name}!` });
});

//Requisito 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res.status(200).json({ 
    message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});