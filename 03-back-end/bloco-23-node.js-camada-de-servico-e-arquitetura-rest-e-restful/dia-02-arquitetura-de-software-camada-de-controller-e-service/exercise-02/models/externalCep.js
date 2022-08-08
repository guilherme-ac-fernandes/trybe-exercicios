const axios = require('axios');

module.exports = async (cepInput) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cepInput}/json/`);
  if (!response.data) return null;
  const address = response.data;
  return address;
};
