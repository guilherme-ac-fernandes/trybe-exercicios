// Resolução proveniente do gabarito presente no course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/back-end-orm-gabarito/solutions/cdcfb935-05cb-491b-bf35-0e6668986849/gabarito-dos-exercicios/8deb0c5e-cc39-4053-8d55-5f8272a4ca61?use_case=calendar

const { expect } = require('chai');
const { Book } = require('../../../models');

describe('O model de Book', () => {
  it('possui a propriedade "title"', () => {
    const book = new Book();
    expect(book).to.have.property('title');
  });

  it('possui a propriedade "author"', () => {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('possui a propriedade "pageQuantity"', () => {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });

  it('possui a propriedade "publisher"', () => {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
});