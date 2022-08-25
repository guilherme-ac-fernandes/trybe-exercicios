const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (!user) throw Error;
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao salvar o usuário no banco', error: err.message,
    });
  }
};

// Resolução proveniente do course da Trybe
// source: https://app.betrybe.com/course/back-end/nodejs-orm-autenticacao/testando-apis-com-testes-de-integracao-gabarito/solutions/4bd24e75-2a97-4c25-ba36-a2e26e2a912e/gabarito-dos-exercicios/db1a6e27-7995-46c1-a912-524605a34a98?use_case=calendar
// module.exports = async (req, res) => {
//   try {
//     const id = Number(req.params.id);
//     const user = await User.findOne({ where: { id } });
//     if (!user) throw Error;
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json({
//       message: 'Erro ao buscar usuários no banco', error: err.message,
//     });
//   }
// };