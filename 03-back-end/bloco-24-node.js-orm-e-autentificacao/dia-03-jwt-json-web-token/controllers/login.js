require('dotenv').config();
const Joi = require('joi');
const UserService = require('../services/UserService');

const loginSchema = Joi.object({
  username: Joi.string().min(1).alphanum().required().messages({
    'string.empty': 'username é obrigatório',
    'string.min': 'username deve ter no mínimo {#limit} caracteres',
    'any.required': 'username é obrigatório'
  }), 
  password:  Joi.string().min(5).required().messages({
    'string.empty': 'password é obrigatório',
    'string.min': 'password deve ter no mínimo {#limit} caracteres',
    'any.required': 'password é obrigatório'
  }),
});

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = loginSchema.validate({ username, password });
  if (error !== undefined) return next(error);

  const { error: serviceError, token } = await UserService.login(username, password);

  if (serviceError && serviceError.code === 'invalidCredentials') {
    return next({ statusCode: 401, message: serviceError.message });
  }

  if (serviceError) {
    return next(serviceError);
  }

  return res.status(200).json({ token });
};
