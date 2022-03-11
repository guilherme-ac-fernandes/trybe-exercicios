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

// Encontrar nome do livro escrito pelo autor que começa com três iniciais
function authorWith3DotsOnName(array) {
  // Utilização do .test (Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
  // Resolução com auxílio do Mateus Santos (colega de sala da Trybe e Tiago Quadros (Instrutor))
  // Expressões Regulares (Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#escrevendo_um_padrão_de_expressão_regular)
  // ^ => referência para testar condição no início
  // . => qualquer caracter
  // \ => faz referência que o próximo caracter é especial e não deve ser interpretado de forma literal
  // return array.find((element) => /^.\. .\. .\./.test(element.author.name)).name;

  // Utilização de .match (Documentação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
  return array.find((element) => element.author.name.match(/^.\. .\. .\./)).name;
};

console.log(authorWith3DotsOnName(books));
