const readline = require('readline-sync');

const calculatorFatorial = (number) => {
  let sum = 1;
  for (let i = sum; i <= number; i += 1) {
    sum *= i;
  }
  return sum;
};

const executeFunction = () => {
  const NUMBER = readline.questionInt('Qual número deseja ver o fatorial (maior que 0)?');

  if (NUMBER < 1) {
    console.log('Número inválido');
    return;
  }

  const NUMBER_FAT = calculatorFatorial(NUMBER);
  console.log(`${NUMBER}! = ${NUMBER_FAT}`);
  console.log('-------------------------------');
}

executeFunction();