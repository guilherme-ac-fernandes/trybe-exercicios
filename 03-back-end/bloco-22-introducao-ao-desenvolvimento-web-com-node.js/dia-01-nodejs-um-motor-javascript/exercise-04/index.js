// Resolução baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/nodejs-introducao-gabarito/solutions/1d93757c-274c-4d89-8950-4fe1415ce425/gabarito-dos-exercicios/a86a3980-6971-4795-9eb3-acc6e60dd697?use_case=calendar
const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', path: './imc.js' },
  { name: 'Calcular velocidade média', path: './velocidade.js' },
  { name: 'Jogo de adivinhação', path: './sorteio.js' },
];

const escolhendoScript = () => {
  console.log('Scripts: ');
  const SCRIPTS_NAME = scripts.map(({ name }, index) => console.log(`${index + 1}. - ${name}`));
  console.log('------------------------------------------');
  const SCRIPT = readline.questionInt('Qual script deseja executar (Digite o número)?');

  return scripts[SCRIPT - 1];
};

const executeFunction = () => {
  const scriptParaExecutar = escolhendoScript();
  if (!scriptParaExecutar) {
    return console.log('Número inválido. Saindo');
  }
  console.log('');
  console.log(`Bem vindo ao Script: ${scriptParaExecutar.name}`);
  console.log('------------------------------------------');
  require(scriptParaExecutar.path);
}

executeFunction();

