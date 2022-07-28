// Resolução baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/mocha-chai-e-sinon-testes-de-back-end-com-nodejs/solutions/081b6bbf-43f2-42b9-b7b0-d061197a7b5c/gabarito-dos-exercicios/24453805-b6b5-4a86-886c-b2f246b99355?use_case=calendar

const fs = require('fs');

const whiteFile = (fileName, fileContent) => {
  fs.writeFileSync(`${__dirname}/${fileName}`, fileContent);
  return 'ok';
};

module.exports = { whiteFile };