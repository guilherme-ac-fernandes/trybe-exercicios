const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Função para comparar anos de nascimento (true - se forem diferentes)
function authorUnique(array) {
  let nameYear= [];
  array.forEach((element) => {
    nameYear.push({
      name: element.author.name,
      birthYear: element.author.birthYear,
    });
  });
  let year;
  let result = [];
  nameYear.forEach((element) => {
    year = element.birthYear;
    nameYear.forEach((element2) => {
      if (year === element2.birthYear && element.name !== element2.name) {
        result.push(false)
      }
      result.push(true)
    })
  })
  // console.log(result); // Vai conter dois false - mostrando que dois nasceram no mesmo ano e retornar false na linha de baixo
  return console.log(result.every((element) => element === true));
};

authorUnique(books);
