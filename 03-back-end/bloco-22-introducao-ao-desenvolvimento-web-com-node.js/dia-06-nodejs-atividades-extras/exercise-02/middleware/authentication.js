// Aplicação Regex de números ou letras proveniente do gabarito no course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/atividades-solucoes-propostas/solutions/24c41754-4ce1-4b52-931a-56a736e56587/solucoes-propostas-das-atividades/e772825b-3445-4443-a197-39b8b52e4f3d?use_case=calendar

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization
    || !authorization.match(/^[a-zA-Z0-9]{12}$/)) {
    return res.status(401).json({ message: "invalid token" });
  }
  next();
};

module.exports = authentication;