// Criar a função swap - dado um array de 3 elementos, trocar o primeiro com o último em apenas uma linha (array destructuring)

// Resolução inicial
const myList = [1, 2, 3];

const swap = (array) => [array[0], array[1], array[2]] = [array[2], array[1], array[0]];

console.log('Primeira Resolução:');
console.log(swap(myList));
console.log('----------------------------------------------');

// Resolução proveniente do course da trybe
// source: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-spread-operator-parametro-rest-destructuring-e-mais-gabarito/solutions/d2ca44c6-661b-4b03-b833-389063ba208e/conteudo/7cb74a4a-6977-470c-835d-cd0cb449d521?use_case=calendar
const myList2 = [1, 2, 3];

const swap2 = ([a, b, c]) => [c, b, a];

console.log('Segunda Resolução:');
console.log(swap2(myList2));
