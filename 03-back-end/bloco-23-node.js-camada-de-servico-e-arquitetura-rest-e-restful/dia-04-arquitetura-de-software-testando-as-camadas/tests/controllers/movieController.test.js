const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesController = require('../../controllers/movieController');

describe('Teste no Controller', () => {
  describe('1. Ao chamar o controller de create', () => {
    describe('quando o payload informado não é válido', async () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.body = {};
        response.status = sinon.stub().returns(response);
        response.send = sinon.stub().returns();
        sinon.stub(MoviesService, 'create').resolves(false);
      });
  
      after(() => MoviesService.create.restore());
  
      it('é chamado o status com o código 400', async () => {
        await MoviesController.create(request, response);
        expect(response.status.calledWith(400)).to.be.equal(true);
      });
  
      it('é chamado o send com a mensagem "Dados inválidos"', async () => {
        await MoviesController.create(request, response);
        expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
      });
  
    });
  
    describe('quando é inserido com sucesso', async () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.body = {
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };
  
        response.status = sinon.stub().returns(response);
        response.send = sinon.stub().returns();
        sinon.stub(MoviesService, 'create').resolves(true);
      });
  
      after(() => MoviesService.create.restore());
  
      it('é chamado o status com o código 201', async () => {
        await MoviesController.create(request, response);
        expect(response.status.calledWith(201)).to.be.equal(true);
      });
  
      it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
        await MoviesController.create(request, response);
        expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
      });
  
    });
  });

  describe('2. Ao chamar o controller de findById', () => {
    describe('caso de falha', () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.params = { id: '1' };
  
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(MoviesService, 'findById').resolves(false);
      });
  
      after(() => MoviesService.findById.restore());

      it('é chamado o status com o código 404 - Not Found', async () => {
        await MoviesController.findById(request, response);
        expect(response.status.calledWith(404)).to.be.equal(true);
      });

      it('o json tem a mensagem "Filme não encontrado."', async () => {
        await MoviesController.findById(request, response);
        expect(response.json.calledWith({
          message: 'Filme não encontrado.',
        })).to.be.equal(true);
      });

    });

    describe('caso de sucesso', () => {
      const response = {};
      const request = {};
      const MOVIE = {
        id: 1,
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
  
      before(() => {
        request.params = { id: '1' };
  
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        sinon.stub(MoviesService, 'findById').resolves(MOVIE);
      });
  
      after(() => MoviesService.findById.restore());

      it('é chamado o status com o código 200 - OK', async () => {
        await MoviesController.findById(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('o json tem todos os dados do filme indicado', async () => {
        await MoviesController.findById(request, response);
        expect(response.json.calledWith(MOVIE)).to.be.equal(true);
      });

    });
  });
});
