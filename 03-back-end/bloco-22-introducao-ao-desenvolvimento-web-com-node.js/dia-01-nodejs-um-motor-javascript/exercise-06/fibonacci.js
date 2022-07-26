// Resolução baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/nodejs-introducao-gabarito/solutions/1d93757c-274c-4d89-8950-4fe1415ce425/gabarito-dos-exercicios/a86a3980-6971-4795-9eb3-acc6e60dd697?use_case=calendar
const readline = require('readline-sync');

const calculatorFibonacci = (number) => {
  const fib = [];
  let a = 1;
  let b = 1;

  for (let n = number; n > 0; n -= 1) {
    if (b) fib.push(b);
    const temp = a;
    a += b;
    b = temp;
  }
  return fib;
};

const executeFunction = () => {
  const NUMBER = readline.questionInt('Deseja ver a sequência fibonacci até qual elemento?');

  if (NUMBER < 1) {
    console.log('Número inválido');
    return;
  }

  const NUMBER_FIB = calculatorFibonacci(NUMBER);
  console.log(`Fibonacci: ${NUMBER_FIB.join(', ')}, ...`);
}

executeFunction();