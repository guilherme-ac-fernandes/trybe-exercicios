const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Testes no Service', () => {
  describe('1. Insere um novo filme no BD', () => {
    describe('quando o payload informado não é válido', async () => {
      const payloadMovie = {};
  
      it('retorna um boolean', async () => {
        const response = await MoviesService.create(payloadMovie);
        expect(response).to.be.a('boolean');
      });
  
      it('o boolean contém "false"', async () => {
        const response = await MoviesService.create(payloadMovie);
        expect(response).to.be.equal(false);
      });
  
    });
  
    describe('quando é inserido com sucesso', async () => {
      const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
  
      before(() => {
        const ID_EXAMPLE = 1;
        sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE });
      });
  
      after(() => MoviesModel.create.restore());
  
      it('retorna um objeto', async () => {
        const response = await MoviesService.create(payloadMovie);
        expect(response).to.be.a('object');
      });
  
      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesService.create(payloadMovie);
        expect(response).to.have.a.property('id');
      });
  
    });
  });

  describe('2. Busca apenas um filme no BD por seu ID', () => {
    
    describe('caso de falha', () => {
      before(async () => {
        const execute = [[]];
        sinon.stub(connection, 'execute').resolves(execute);
      });

      after(() => connection.execute.restore());

      it('retorna null passando um id inválido', async () => {
        const response = await MoviesService.findById('a');
        expect(response).to.be.equal(null);
      });

      it('retorna null passando um id válido e não existente', async () => {
        const response = await MoviesService.findById(1);
        expect(response).to.be.equal(null);
      });

    });

    describe('caso de sucesso', () => {
      before(async () => {
        const execute = [[{
          id: 1,
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }]];
        sinon.stub(connection, 'execute').resolves(execute);
      });
    
      after(async () => connection.execute.restore());
  
      it('retorna um objeto', async () => {
        const response = await MoviesService.findById(1);
        expect(response).to.be.a('object');
      });
  
      it('retorna um objeto com 4 chaves', async () => {
        const response = await MoviesService.findById(1);
        expect(response).to.be.not.empty;
        expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
      });
    });
    
  });
});
