const { numberStatus } = require('../numberStatus');
const { expect } = require('chai');

describe('Avaliar retorno do número', () => {
  describe('caso de sucesso', () => {
    it('se a função retorna uma string ao ter uma parâmetro tipo número', () => {
      expect(numberStatus(8)).to.be.a('string');
    });
    it('se for quando o número é 5', () => {
      expect(numberStatus(5)).to.be.equal('positivo');
    });
    it('se for quando o número é -5', () => {
      expect(numberStatus(-5)).to.be.equal('negativo');
    });
    it('se for igual a zero', () => {
      expect(numberStatus(0)).to.be.equal('neutro');
    });
  });

  describe('caso de falha', () => {
    it('se a função retorna uma string ao ter uma parâmetro tipo string', () => {
      expect(numberStatus('G')).to.be.a('string');
    });
    it('se o parâmetro não for um número', () => {
      expect(numberStatus('G')).to.be.equal('o valor deve ser um número');
    });
  });
  
});
