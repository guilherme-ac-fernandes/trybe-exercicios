// Arquivo com a função que sera submetida aos testes
function techList(array, name = 'Lucas') {
  // Explicação da utlização do sort para ordenar as string obtida na postagem da Banesa Guaderrama
  // source: https://dev.to/banesag/sorting-arrays-of-strings-in-javascript-2g11
  array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  let techArray = [];
  for (let i = 0; i < array.length; i += 1) {
    techArray.push({
      tech: array[i],
      name: name,
    });
  }
  return techArray;
}

module.exports = techList;
