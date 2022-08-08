// Resolução baseada no gabarito no course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-camada-de-servico-e-arquitetura-rest-e-restful/arquitetura-de-software-camada-de-controller-e-service-gabarito/solutions/8cb2f7e4-3073-4b3c-ac82-d1f994872a59/conteudos/e0d676e1-d116-4095-bcfa-2c88b4475760?use_case=calendar

require('dotenv').config();
const express = require('express');

const Controllers = require('./controllers/CepControllers');
const Middlewares = require('./middlewares');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get('/ping', Controllers.pong);
app.get('/cep/:cep', Controllers.findCep);
app.post('/cep', Controllers.createCep);

app.use(Middlewares.error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});