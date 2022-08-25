const Users = require('./Users.json');

const mockCreate = (Instance, data) => {
  if(!data){
    return;
  }
  const newData = data;
  if(!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

// Resolução do mockFindOne proveniente do course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/testando-apis-com-testes-de-integracao-gabarito/solutions/4bd24e75-2a97-4c25-ba36-a2e26e2a912e/gabarito-dos-exercicios/db1a6e27-7995-46c1-a912-524605a34a98?use_case=calendar
const mockFindOne = (Instance, where) => {
  if(!where){
    return Instance[0];
  }
  const entries = Object.entries(where);
  let result;
  entries.forEach(entry => {
    const [key, value] = [entry[0], entry[1]];

    const index = Instance
      .findIndex(item => !!item[key] && item[key] === value);
    if(index !== -1){
      result = Instance[index];
    }
  });
  return result;
};

// Função de mock presente no Live Lectures da Trybe - Referente a aula do dia 24.4
// source: https://github.com/tryber/sd-020-a-live-lectures/blob/lecture/24.4/node-jwt-base-project/tests/mock/models/index.js
// const mockFindOne = (Instance, where) => {
//   if (!where) {
//         return Instance[0];
//   }
//   const whereFields = Object.keys(where);
//   const result = Instance.filter(item => {
//     const onlyMatch = whereFields.map( key => item[key] === where[key]);
//     return onlyMatch.filter(v=>v).length === whereFields.length;
//   });
//   return result[0];
// }

const User = {
  create: async (data) => mockCreate(Users, data),
  findAll: async () => Users,
  findByPk: async () => Users.filter(({ id }) => id === 1 )[0],
  findOne: async ({ where }) => mockFindOne(Users, where),
};

module.exports = {
  User,
};