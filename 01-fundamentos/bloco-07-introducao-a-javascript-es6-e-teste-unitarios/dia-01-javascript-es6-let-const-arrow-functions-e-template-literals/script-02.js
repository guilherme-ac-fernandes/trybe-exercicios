// Criar função que ordene array em ordem crescente 
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// A forma como se dispõe as entradas da propriedade .sort foi baseada na resolução do exercício no course da Trybe
// source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-parte-1/solutions/81c644e5-1f1b-467a-89a2-909bcc625c8a/gabarito-dos-exercicios/a28fa634-61a2-440a-a32a-8fd1aca67fc9?use_case=calendar
function sortArray (array) {
  const arraySort = array.sort((a, b) => a - b);
  return arraySort;
}

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Resolução em apenas uma linha
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);