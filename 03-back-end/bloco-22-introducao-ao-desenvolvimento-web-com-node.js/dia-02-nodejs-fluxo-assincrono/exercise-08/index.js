// Resolução baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/nodejs-fluxo-assincrono-gabarito/solutions/d879167c-aac1-4dea-9a81-08d2f5de4d20/fixando-os-aprendizados/50ce1f32-ab2d-48e9-82ae-331dfdf90c10?use_case=calendar

const fs = require('fs').promises;
const readline = require('readline-sync');


const fizzBuzzPromise = async () => {
  const NUMBER = readline.questionInt('Digite um número maior que 0? ');

  return new Promise ((resolve, reject) => {
    if(NUMBER % 3 === 0) return resolve("Fizz");
    if(NUMBER % 5 === 0) return resolve("Buzz");
    if(NUMBER % 3 === 0 && NUMBER % 5 === 0) return resolve("FizzBuzz");
    reject(new Error(`Número ${NUMBER} não é múltiplo de 3 e/ou 5`));
  });
};

const execute = () => {
  fizzBuzzPromise()
    .then((data) => console.log(data))
    .catch((err) => console.error(`ERRO: ${err.message}`));
}

execute();
