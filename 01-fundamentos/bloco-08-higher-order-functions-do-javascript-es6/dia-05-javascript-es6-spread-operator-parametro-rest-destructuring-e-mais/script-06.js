// Criar função toObject que transforma os array com as informações de carros em um objeto (array destructuring e abbreviation object literal)
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// Resolução inicial
const toObject = (array) => {
  const [nome, marca, ano] = array;
  return {
    nome,
    marca,
    ano,
  }
};

console.log('Primeira Resolução:');
console.log('Palio:', toObject(palio));
console.log('Shelby Cobra:', toObject(shelbyCobra));
console.log('Chiron:', toObject(chiron));
console.log('----------------------------------------------');

// Resolução proveniente do course da trybe
// source: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-spread-operator-parametro-rest-destructuring-e-mais-gabarito/solutions/d2ca44c6-661b-4b03-b833-389063ba208e/conteudo/7cb74a4a-6977-470c-835d-cd0cb449d521?use_case=calendar
const toObject2 = ([nome, marca, ano]) => ({nome, marca, ano});

console.log('Segunda Resolução:');
console.log('Palio:', toObject2(palio));
console.log('Shelby Cobra:', toObject2(shelbyCobra));
console.log('Chiron:', toObject2(chiron));
