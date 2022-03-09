// Exercício de Fixação - HOF

// Função para avaliar se ganhou oou perdeu
const checkNumber = (number1, number2) => (number1 === number2) ? 'Parabéns você ganhou' : 'Tente novamente';

// Função para gerar número aleatório de 1 a 5
const randomNumber = (number, func) => {
  // Documentação; https://www.w3schools.com/js/js_random.asp
  const random = Math.floor(Math.random() * 5) + 1;
  let string = `
  Resultado: ${func(number, random)}
  Número informado: ${number}
  Número sorteado: ${random}`
  return console.log(string);
}

randomNumber(4, checkNumber);
randomNumber(2, checkNumber);
randomNumber(5, checkNumber);