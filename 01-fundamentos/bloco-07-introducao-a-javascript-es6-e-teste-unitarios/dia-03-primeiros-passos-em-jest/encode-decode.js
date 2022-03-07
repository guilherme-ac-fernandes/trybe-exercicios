// Arquivos com as funções que serão submetidas aos testes
function encode(string) {
  let stringCode = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      stringCode += '1';
    } else if (string[i] === 'e') {
      stringCode += '2';
    } else if (string[i] === 'i') {
      stringCode += '3';
    } else if (string[i] === 'o') {
      stringCode += '4';
    } else if (string[i] === 'u') {
      stringCode += '5';
    } else {
      stringCode += string[i];
    }
  }
  return stringCode;
}

function decode(string) {
  let stringCode = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      stringCode += 'a';
    } else if (string[i] === '2') {
      stringCode += 'e';
    } else if (string[i] === '3') {
      stringCode += 'i';
    } else if (string[i] === '4') {
      stringCode += 'o';
    } else if (string[i] === '5') {
      stringCode += 'u';
    } else {
      stringCode += string[i];
    }
  }
  return stringCode;
}

module.exports = {encode, decode};
