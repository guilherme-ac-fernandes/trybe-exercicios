// Resolução baseada no gabarito no course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-camada-de-servico-e-arquitetura-rest-e-restful/arquitetura-de-software-camada-de-model-gabarito/solutions/49f1b0c1-ad03-4f1f-baa7-1dd063d28ea1/conteudos/78846e40-4640-48ab-9675-4043ce9f852a?use_case=calendar

const express = require('express');
const middlewares = require('./middlewares');
const Users = require('./models/User');

const app = express();
app.use(express.json());

const PORT = 3001;

app.post('/user', middlewares.createUser);
app.get('/user', middlewares.getAllUsers);
app.get('/user/:id', middlewares.getUserById);
app.put('/user/:id', middlewares.updateUserById);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});