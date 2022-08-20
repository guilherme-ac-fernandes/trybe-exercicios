require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    console.log(payload);
    req.user = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    next(err);
  }
};