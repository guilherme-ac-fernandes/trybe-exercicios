const connection = require('./connection')

const formatCep = (cepInput) => {
  const CEP_REGEX = /^\d{5}-\d{3}$/;
  if (CEP_REGEX.test(cepInput)) return cepInput;
  return cepInput.replace(/(\d{5})(\d{3})/, '$1-$2');
}

const updateCepObject = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep), logradouro, bairro, localidade, uf,
})

const getAllCep = async () => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps';
  const [ceps] = await connection.execute(query);
  return ceps;
};

const getOneCep = async (cepInput) => {
  const treatedCep = cepInput.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const [cep] = await connection.execute(query, [treatedCep]);
  if (cep.length === 0) return null;
  return updateCepObject(cep[0]);
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  const cepWithoutTrace = cep.replace('-', '');
  const [result] = await connection.execute(query, [cepWithoutTrace, logradouro, bairro, localidade, uf]);
  return { id: result.insertId, cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getAllCep,
  getOneCep,
  createCep,
}