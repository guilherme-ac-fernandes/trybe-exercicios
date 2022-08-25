require('dotenv').config();
const jwt = require('jsonwebtoken');

const { User } = require('../models');
const secret = process.env.SECRET;

function checkUserId(id, req, res, next) {
  if (Number(id) !== Number(req.params.userId)) {
    return res.status(401).json({
      message: 'Acesso negado',
    });
  }
  next();
}

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ message: 'Token não encontrado ou informado' });
  }
  try {
    const { id } = jwt.verify(token, secret);
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(401).json({
        message: 'Erro ao procurar usuário do token.',
      });
    }
    checkUserId(id, req, res, next);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};