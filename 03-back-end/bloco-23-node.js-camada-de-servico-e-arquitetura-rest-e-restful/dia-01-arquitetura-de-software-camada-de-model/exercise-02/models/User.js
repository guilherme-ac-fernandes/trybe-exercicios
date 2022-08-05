const connection = require('./connection');
const Joi = require('joi');

const userSchema = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

const formatUser = ({
  id,
  first_name: firstName,
  last_name: lastName,
  email }) => {
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

const getAll = async () => {
  const query = 'SELECT id, first_name, last_name, email FROM users';
  const [users] = await connection.execute(query);
  return users.map(formatUser);
};

const create = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  return await connection
    .execute(query, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

const findById = async (userId) => {
  const query = 'SELECT id, first_name, last_name, email FROM users WHERE id = ?';
  const [user] = await connection.execute(query, [userId]);
  return user.map(formatUser);
}

const updateById = async (id, { firstName, lastName, email, password }) => {
  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;';
  await connection.execute(query, [firstName, lastName, email, password, id]);
  return findById(id);
}

const isValid = (userData) => userSchema.validate(userData);

module.exports = {
  formatUser,
  getAll,
  create,
  findById,
  updateById,
  isValid,
};
