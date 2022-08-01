// Resolução da verificação da data baseada no gabarito presente na course da Trybe
// source: https://app.betrybe.com/course/back-end/introducao-ao-desenvolvimento-web-com-nodejs/express-middlewares-gabarito/solutions/95b7c14d-06b4-4c29-8f0d-825cd974806c/gabarito-dos-exercicios-de-fixacao/7325aff4-1c56-43b2-9405-db9c16c3e17f?use_case=calendar

module.exports = (req, res, next) => {
  const { infos } = req.body;
  if (!infos) {
    return res.status(400).json({
      message: "O campo infos é obrigatório",
    });
  }
  const { saleDate, warrantyPeriod } = infos;
  if (!saleDate) {
    return res.status(400).json({ message:
      "O campo saleDate é obrigatório",
    });
  }
  if (!saleDate.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i)) {
    return res.status(400).json({
      message: "O campo saleDate não é uma data válida",
    });
  }
  if (!warrantyPeriod) {
    return res.status(400).json({
      message: "O campo warrantyPeriod é obrigatório",
    });
  }
  if (warrantyPeriod < 1 || warrantyPeriod > 3) {
    return res.status(400).json({
      message: "O campo warrantyPeriod precisa estar entre 1 e 3",
    });
  }
  next();
};