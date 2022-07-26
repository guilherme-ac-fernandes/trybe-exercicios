const readline = require('readline-sync');

const avaliator = (inputUser) => {
  console.log('------------------------------------------');
  console.log(`Número ${inputUser} foi escolhido, será que acertou?`);
  return Math.floor(Math.random() * 10);
};

const executeFunction = () => {
  console.log('Jogo da Adivinhação');
  const NUMBER = readline.questionInt('Informe um número de 1 a 10? ');

  const random = avaliator(NUMBER);
  setTimeout(() => {
    if (NUMBER === random) {
      console.log('Parabéns, número correto!');
    }
    console.log(`Opa, não foi dessa vez. O número era ${random}`);
    console.log('------------------------------------------');
    const DE_NOVO = readline.question('Deseja jogar novamente (s/n)?');
  if (DE_NOVO === 's') {
    executeFunction();
  }
  }, 3000);
}

executeFunction();