// Exercício de Fixação - HOF

// Função para criar objeto do novo funcionário - fornece nome e criar email
// Utilização do .join proveniente da resolução do course da trybe
// source: https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-introducao-a-higher-order-functions-gabarito/solutions/bc8c308b-213f-484a-97ec-9b551170c458/conteudos/a147dc13-ec19-4f9d-845b-3381af148264?use_case=calendar
const objectEmployees = (name) => {
  const email = `${name.toLowerCase().split(' ').join('_')}@trybe.com`;
  return {name, email};
}

// Função
const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'), 
  }
  return employees;
};

console.log(newEmployees(objectEmployees));
