## JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

Utilize o código a seguir para realização das atividades:

```
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

// Adicione o código do exercício aqui:
```

####  Atividade de fixação 1:
> Crie o arquivo `script-01.js` e realize o seguinte requisito:

Requisito 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

```
function authorBornIn1947() {
  // escreva aqui o seu código
}
```

####  Atividade de fixação 2:
> Crie o arquivo `script-02.js` e realize o seguinte requisito:

Requisito 1 - Retorne o nome do livro de menor nome.

```
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
```

####  Atividade de fixação 3:
> Crie o arquivo `script-03.js` e realize o seguinte requisito:

Requisito 1 - Encontre o primeiro livro cujo nome possui 26 caracteres.

```
function getNamedBook() {
  // escreva seu código aqui
}
```

####  Atividade de fixação 4:
> Crie o arquivo `script-04.js` e realize o seguinte requisito:

Requisito 1 - Ordene os livros por data de lançamento em ordem decrescente.

```
function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
}
```

####  Atividade de fixação 5:
> Crie o arquivo `script-05.js` e realize o seguinte requisito:

Requisito 1 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

```
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
}
```

####  Atividade de fixação 6:
> Crie o arquivo `script-06.js` e realize o seguinte requisito:

Requisito 1 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

```
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
}
```

####  Atividade de fixação 7:
> Crie o arquivo `script-07.js` e realize o seguinte requisito:

Requisito 1 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

```
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
}
```

