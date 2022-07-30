const authentication = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || authorization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido!' });
    }
    return next();
  } catch (err) {
    return res.status(500).end();
  }
};

module.exports = authentication;