const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);
const server = require('../api/app');

const FAKE_USER = require('./mock/models/Users.json');

describe('Testes de autenticação em /api/login', () => {
  let loginResponse;
  const user = FAKE_USER[0];

  describe('Ao não passar um token', async () => {
    before(async () => {
      loginResponse = await chai
      .request(server)
      .post("/api/login")
      .set({});
    });
    
    const MESSAGE_WITHOUT_LOGIN_INFO = 'É necessário usuário e senha para fazer login';
    it(`retorna um erro com status 401 e mensagem ${MESSAGE_WITHOUT_LOGIN_INFO}`, () => {
      expect(loginResponse).to.have.status(401);
      expect(loginResponse.body.message)
        .to.be.equal(MESSAGE_WITHOUT_LOGIN_INFO);
    });
  });
});
