// Resolução da autentificação semelhante a estruturada nos exercícios do dia 22.4
// source: https://github.com/guilherme-ac-fernandes/trybe-exercicios/tree/exercicios/22.5/03-back-end/bloco-22-introducao-ao-desenvolvimento-web-com-node.js/dia-04-express-http-com-nodejs/exercise-03

const express = require('express');
const rescue = require('express-rescue');
const validateProductName = require('./validateProductName');
const validateInfo = require('./validateInfo');
const authentication = require('./authentication');
const generateToken = require('./generateToken');

const app = express();
app.use(express.json());

app.use(authentication)

app.post('/sales',
  validateProductName,
  validateInfo,
  (_req, res) => {
  return res.status(201).json({
    message: "Venda cadastrada com sucesso",
  });
});

app.post('/signup', rescue((req, res) => {
    const { email, password, firstName, phone } = req.body;
    const users = [email, password, firstName, phone];
    if (users.includes(undefined)) {
      return res.status(401).json({ message: 'Missing Fields' });
    }
    return res.status(200).json({ token: generateToken() });
}));

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});