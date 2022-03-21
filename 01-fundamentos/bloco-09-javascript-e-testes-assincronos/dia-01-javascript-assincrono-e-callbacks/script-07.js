// Função assíncrona que transforma as letras de uma palavra em letras maiúsculas
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = uppercase;
