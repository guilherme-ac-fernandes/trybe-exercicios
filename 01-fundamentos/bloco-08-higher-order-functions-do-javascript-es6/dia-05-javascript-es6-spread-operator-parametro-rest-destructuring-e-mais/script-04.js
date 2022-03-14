const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// Criar a função filterPeople para retornar todas as pessoas australianas que nasceram no século XX

// Resolução com filter:
const filterPeopleHOF = (array) => {
  return array.filter((element) => element.nationality === 'Australian' && element.bornIn > 1900 && element.bornIn < 2000)
};

console.log('Resolução com HOF:');
console.log(filterPeopleHOF(people));
console.log('-----------------------------------------------');

// Resolução com object destructuring:
const filterPeople = (array) => {
  const arrayFilter = [];
  array.forEach((element) => {
    const {bornIn, nationality} = element;
    if (nationality === 'Australian' && bornIn > 1900 && bornIn < 2000) {
      arrayFilter.push(element)
    }
  })
  return arrayFilter;
};

console.log('Resolução com Object destructuring + forEach:');
console.log(filterPeople(people));
