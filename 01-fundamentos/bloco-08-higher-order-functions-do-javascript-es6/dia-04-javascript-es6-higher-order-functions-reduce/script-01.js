// Trasnformar matriz em um array
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Resolução com forEach
function flattenForEach(array) {
  const arrayFlatten = [];
  array.forEach(element => {
    element.forEach((element2) => {
      arrayFlatten.push(element2)
    });
  });
  return arrayFlatten;
}

console.log(flattenForEach(arrays));

// Resolução com reduce
function flattenReduce(array) {
  // Resolução e uso do método .concat proveniente do course da Trybe
  // source: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-higher-order-functions-reduce-gabarito/solutions/227114f0-f321-4cd5-b6be-80ae423b17d8/exercicios/fe5a684c-0b13-46bc-9a54-14b299c04bd7?use_case=calendar
  // Documentação .concat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
  return array.reduce((acc, element) => acc.concat(element), []); // [] após a função é para iniciar o acumulador como sendo um array vazio
}

console.log(flattenReduce(arrays));