const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Retornar o númeto de vezes que o A maiúscula ou minúscula aparecem
function containsA(array) {
  const aLetter = array.reduce((acc, curr) => {
    curr.split('').forEach((element) => (element === 'A' || element === 'a') ? acc += 1 : acc);
    return acc
  }, 0);
  
  const aUpper = array.reduce((acc, curr) => {
    curr.split('').forEach((element) => (element === 'A') ? acc += 1 : acc);
    return acc
  }, 0);

  return `
  Número total de letras A = ${aLetter}
  Letras A maiúsculas = ${aUpper}
  Letras A minúsculas = ${aLetter - aUpper}`;
}

console.log(containsA(names));
