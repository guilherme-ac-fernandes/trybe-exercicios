// Resolução baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/mocha-chai-e-sinon-testes-de-back-end-com-nodejs/solutions/081b6bbf-43f2-42b9-b7b0-d061197a7b5c/gabarito-dos-exercicios/24453805-b6b5-4a86-886c-b2f246b99355?use_case=calendar

const sinon = require('sinon');
const { expect } = require('chai');
const fs = require('fs');
const { whiteFile } = require('../writeFile');

describe('Avaliar se a escrita foi realizada', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('com sucesso', () => {
    it('ao realizar a escrita do arquivo retorne uma string', () => {
      expect(whiteFile('arquivo.txt', 'Conteúdo maravilhoso')).to.be.a('string');
    });

    it('ao realizar a escrita do arquivo retorna a resposta default', () => {
      expect(whiteFile('arquivo.txt', 'Conteúdo maravilhoso')).to.be.equals('ok');
    });
  });  
});