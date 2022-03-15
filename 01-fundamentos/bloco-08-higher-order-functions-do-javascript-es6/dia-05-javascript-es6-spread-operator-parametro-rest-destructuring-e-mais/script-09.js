// A partir de um objeto de array com as estações do ano (contendo os meses), retorna um array com todos os meses do ano (object destructuring e spread operator)
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const objetoToArray = ({spring, summer, autumn, winter}) => {
  return [...spring,  ...summer, ...autumn, ...winter]
};

console.log('Meses do ano (hemisfério norte):', objetoToArray(yearSeasons));
