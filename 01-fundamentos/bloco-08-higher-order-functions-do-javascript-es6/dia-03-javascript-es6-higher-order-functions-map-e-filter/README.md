## JavaScript ES6 - Higher Order Functions - map e filter

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

Requisito 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA.

```
function formatedBookNames() {
  // escreva seu código aqui
}
```

####  Atividade de fixação 2:
> Crie o arquivo `script-02.js` e realize o seguinte requisito:

Requisito 1 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

```
function nameAndAge() {
  // escreva seu código aqui
}
```

####  Atividade de fixação 3:
> Crie o arquivo `script-03.js` e realize o seguinte requisito:

Requisito 1 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

```
function fantasyOrScienceFiction() {
  // escreva seu código aqui
}
```

####  Atividade de fixação 4:
> Crie o arquivo `script-04.js` e realize o seguinte requisito:

Requisito 1 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

```
function oldBooksOrdered() {
  // escreva seu código aqui
}
```

####  Atividade de fixação 5:
> Crie o arquivo `script-05.js` e realize o seguinte requisito:

Requisito 1 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

```
function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
}
```


####  Atividade de fixação 6:
> Crie o arquivo `script-06.js` e realize o seguinte requisito:

Requisito 1 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

```
function oldBooks() {
  // escreva seu código aqui
}
``` 

####  Atividade de fixação 7:
> Crie o arquivo `script-07.js` e realize o seguinte requisito:

Requisito 1 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

* Dica: cada inicial termina com um ponto.

```
function authorWith3DotsOnName() {
  // escreva seu código aqui
}
```


