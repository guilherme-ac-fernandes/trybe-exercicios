const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const { User } = require('../models');
const server = require('../api/app');
const { User: userMock }  = require('./mock/models');

chai.use(chaiHttp);

const { expect } = chai;

const FAKE_USER = require('./mock/models/Users.json');

describe('Testes de autenticação em /api/users/:id', () => {
  let loginResponse;

  before(() => {
    sinon.stub(User, 'findByPk')
      .callsFake(userMock.findByPk);
  });

  after(() => {
    User.findByPk.restore();
  });

  // it('A requisição POST /api/users deve realizar a criação do usuário', async () => {
  //   loginResponse = await chai
  //     .request(server)
  //     .post("/api/users")
  //     .send({
  //       username: FAKE_USER[0].username,
  //       password: FAKE_USER[0].password
  //     });

  //   expect(loginResponse).to.have.status(201);
  //   expect(loginResponse.body.message)
  //     .to.be.equal('Novo usuário criado com sucesso');
  // });

  it('A requisição POST /api/login deve retornar os dados esperados', async () => {
    loginResponse = await chai
      .request(server)
      .post("/api/login")
      .send({
        username: FAKE_USER[0].username,
        password: FAKE_USER[0].password
      });

    expect(loginResponse).to.have.status(200);
    expect(loginResponse.body).to.have.property("token");
  });

  it('Através do token recebido, deve ser possível realizar uma requisição com sucesso em /api/users/:id', async () => {
    const { token } = loginResponse.body;

    const userResponse = await chai
      .request(server)
      .get("/api/users/1")
      .set('authorization', token);
    
    expect(userResponse).to.have.status(200);
    expect(userResponse.body).to.contain(FAKE_USER[0]);
  });

  it('Sem a utilização do token, a resposta para mesma requisição deve receber status de "Não encontrado"', async () => {
    const userResponse = await chai
      .request(server)
      .get("/api/users/1");

    expect(userResponse).to.have.status(400);
    expect(userResponse.body.message)
      .to.be.equal('Token não encontrado ou informado');
  });


});

// Resolução proveniente do course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/testando-apis-com-testes-de-integracao-gabarito/solutions/4bd24e75-2a97-4c25-ba36-a2e26e2a912e/gabarito-dos-exercicios/db1a6e27-7995-46c1-a912-524605a34a98?use_case=calendar
// describe('Testes de autenticação em /api/users/:id', () => {
//   let loginResponse;

//   before(async () => {
//     sinon.stub(User, 'findOne')
//       .callsFake(userMock.findOne);
//   });

//   after(async () => {
//     User.findOne.restore();
//   });

//   it('A requisição POST /api/login deve retornar os dados esperados', async () => {
//     loginResponse = await chai
//       .request(server)
//       .post("/api/login")
//       .send({
//         username: FAKE_USER[0].username,
//         password: FAKE_USER[0].password
//       });

//     expect(loginResponse).to.have.status(200);
//     expect(loginResponse.body).to.have.property("token");
//   });

//   it('Através do token recebido, deve ser possível realizar uma requisição com sucesso em /api/users/:id', async () => {
//     const { token } = loginResponse.body;

//     const userResponse = await chai
//       .request(server)
//       .get("/api/users/1")
//       .set('authorization', token);

//       console.log(token, userResponse.status);

//     expect(userResponse).to.have.status(200);
//     expect(userResponse.body).to.contain(FAKE_USER[0]);
//   });

//   it('Sem a utilização do token, a resposta para mesma requisição deve receber status de "Não encontrado"', async () => {
//     const userResponse = await chai
//       .request(server)
//       .get("/api/users/1");

//     expect(userResponse).to.have.status(400);
//     expect(userResponse.body.message)
//       .to.be.equal('Token não encontrado ou informado');
//   });
// });