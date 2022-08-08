const connection = require('./connection');

const getBairroId = async (bairro, localidade, uf) => {
  const querySelect = 'SELECT * FROM bairros WHERE bairro = ?';
  const queryInsert = 'INSERT INTO bairros (bairro, localidade, uf) VALUES (?, ?, ?)';
  const [result] = await connection.execute(querySelect, [bairro]);

  if (!result.length) {
    const [{ insertId }] = await connection.execute(queryInsert, [bairro, localidade, uf]);
    return insertId;
  }
  return result[0].id;
};

module.exports = getBairroId;