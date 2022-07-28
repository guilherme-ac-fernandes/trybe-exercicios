const numberStatus = (number) => {
  if (typeof number !== 'number') return "o valor deve ser um número";
  if (number > 0) return "positivo";
  if (number < 0) return "negativo";
  return "neutro";
}

module.exports = { numberStatus };
