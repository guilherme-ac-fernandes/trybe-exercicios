const calc50 = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || 
      typeof num2 !== 'number' || 
      typeof num3 !== 'number') {
        reject(new Error('Informe apenas números'));
    }
    const resultado = (num1 + num2) * num3;
    if (resultado < 50) {
      reject(new Error('Valor muito baixo'));
    }
    resolve(resultado);
  });
};

calc50(1, 6, 10)
  .then((result) => console.log(`sucesso: ${result}`))
  .catch((err) => console.log(`Erro: ${err.message}`));

calc50(1, 6, 2)
  .then((result) => console.log(`Sucesso: ${result}`))
  .catch((err) => console.log(`Erro: ${err.message}`));

calc50(1, 6, '10')
  .then((result) => console.log(`Sucesso: ${result}`))
  .catch((err) => console.log(`Erro: ${err.message}`));