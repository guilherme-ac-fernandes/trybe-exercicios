const express = require('express');
const validateProductName = require('./validateProductName');
const validateInfo = require('./validateInfo');

const app = express();
app.use(express.json());

app.post('/sales',
  validateProductName,
  validateInfo,
  (_req, res) => {
  return res.status(201).json({
    message: "Venda cadastrada com sucesso",
  });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});