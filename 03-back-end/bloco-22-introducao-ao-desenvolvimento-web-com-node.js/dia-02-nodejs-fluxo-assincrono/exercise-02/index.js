const { calc50 } = require('./calc50');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

calc50(randomNumber(), randomNumber(), randomNumber())
  .then((result) => console.log(`Sucesso: ${result}`))
  .catch((err) => console.log(`Erro: ${err.message}`));