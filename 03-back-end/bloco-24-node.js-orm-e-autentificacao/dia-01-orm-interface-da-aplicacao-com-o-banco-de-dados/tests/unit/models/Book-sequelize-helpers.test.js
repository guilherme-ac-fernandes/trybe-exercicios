// Resolução proveniente do gabarito presente no course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/back-end-orm-gabarito/solutions/cdcfb935-05cb-491b-bf35-0e6668986849/gabarito-dos-exercicios/8deb0c5e-cc39-4053-8d55-5f8272a4ca61?use_case=calendar

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../models/Book');

describe('O model de Book', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});