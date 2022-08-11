// Contém duas soluções, sendo uma resolução proveniente do course da Trybe
// source:  https://app.betrybe.com/course/back-end/nodejs-camada-de-servico-e-arquitetura-rest-e-restful/arquitetura-de-software-testando-as-camadas-gabarito/solutions/cb414f7a-270c-4528-9105-608b8e757114/gabarito-dos-exercicios/2591c7c8-debf-4f27-bc1f-7b66455d24b4?use_case=calendar

const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Testes no Model', () => {
  describe('1. Insere um novo filme no BD', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
  
    before(async () => {
      const execute = [{ insertId: 1 }];
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => connection.execute.restore());
  
    describe('quando é inserido com sucesso', async () => {

      it('retorna um objeto', async () => {
        const response = await MoviesModel.create(payloadMovie);
        expect(response).to.be.a('object');
      });
  
      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesModel.create(payloadMovie);
        expect(response).to.have.a.property('id');
      });
  
    });
  });
  
  describe('2. Retorna o filme informado presente no BD', () => {
  
    describe('quando não tem o filme no id informado', async () => {
  
      before(async () => {
        const execute = [[]];
        sinon.stub(connection, 'execute').resolves(execute);
      });
    
      after(async () => connection.execute.restore());
  
      it('retorna null', async () => {
        const response = await MoviesModel.findById(1);
        expect(response).to.be.equal(null);
      });

    });
  
    describe('quando tem o filme no id informado', async () => {
      // Solução Inicial
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
        const response = await MoviesModel.findById(1);
        expect(response).to.be.a('object');
      });
  
      it('retorna um objeto com 4 chaves', async () => {
        const response = await MoviesModel.findById(1);
        expect(response).to.be.not.empty;
        expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
      });

    });

    describe('quando existe um filme com o ID informado', () => {
      // Solução da Trybe
      before(() => {
        sinon.stub(MoviesModel, 'findById')
          .resolves(
            {
              id: 1,
              title: 'Example Movie',
              directedBy: 'Jane Dow',
              releaseYear: 1999,
            }
          );
      });
  
      after(() => MoviesModel.findById.restore());
  
      it('retorna um objeto', async () => {
        const response = await MoviesModel.findById(1);
        expect(response).to.be.an('object');
      });
  
      it('o objeto não está vazio', async () => {
        const response = await MoviesModel.findById(1);
        expect(response).to.be.not.empty;
      });
  
      it('tal objeto possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
        const item = await MoviesModel.findById(1);
        expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy');
      });
    });
  
  });
});
