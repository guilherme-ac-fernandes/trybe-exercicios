const readline = require('readline-sync');

const calculatorImc = (peso, altura) => {
  console.log('-------------------------------');
  console.log(`Com ${peso}kg e ${altura}cm`);
  return (peso / ((altura/100) ** 2)).toFixed(2);
};

const statusImc = (imc) => {
  if (imc <= 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
  }
  if (imc > 18.5 && imc < 24.9) {
    console.log('Situação: Peso normal');
  }
  if (imc > 25 && imc < 29.9) {
    console.log('Situação: Acima do peso (sobrepeso)');
  }
  if (imc > 30 && imc < 34.9) {
    console.log('Situação: Obesidade Grau I');
  }
  if (imc > 35 && imc < 39.9) {
    console.log('Situação: Obesidade Grau II');
  }
  if (imc > 40) {
    console.log('Situação: Obesidade Grau III e IV');
  }
};

const executeFunction = () => {
  const PESO_KG = readline.questionFloat('Qual seu peso (em Kg)? ');
  const ALTURA_CM = readline.questionFloat('Qual sua altura (em cm)? ');

  const imc = calculatorImc(PESO_KG, ALTURA_CM);
  console.log(`IMC = ${imc}`);
  statusImc(imc);
  console.log('-------------------------------');
}

executeFunction();