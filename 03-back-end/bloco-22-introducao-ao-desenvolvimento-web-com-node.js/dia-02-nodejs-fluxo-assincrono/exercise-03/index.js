const { calc50 } = require('./calc50');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const execute = async () => {
  try {
    const resultado = await calc50(randomNumber(), randomNumber(), randomNumber());
    console.log(`Sucesso: ${resultado}`);
  } catch (error) {
    console.log(`Erro: ${error.message}`);
  }
}

execute();