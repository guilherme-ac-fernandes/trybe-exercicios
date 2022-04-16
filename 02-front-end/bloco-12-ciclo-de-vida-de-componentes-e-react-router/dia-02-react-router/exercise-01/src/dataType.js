import data from './data';

// Seleciona todos os typos do array
const typesMap = data.map((element) => element.type)

// Resolução para remover valores duplicados do array proveniente do site Dev.to
// link: https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
const types = typesMap.filter((element, index) => {
  return typesMap.indexOf(element) === index
})

export default types;
