require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

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
})

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  const payload = { username, admin: false };

  if(username === 'admin' && password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }

  if(username === 'admin' && password === 's3nh4S3gur4???') {
    payload.admin = true;
  }

  const { error } = loginSchema.validate({ username, password });
  if (error !== undefined) return next(error);

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  return res.status(200).json({ token });
};
