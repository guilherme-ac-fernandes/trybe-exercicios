const CepModels = require('../models/CepModels');
const Joi = require('joi');

const userSchema = Joi.object({
  cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  logradouro: Joi.string().not().empty().required(),
  bairro: Joi.string().not().empty().required(),
  localidade: Joi.string().not().empty().required(),
  uf: Joi.string().not().empty().required().length(2),
});

const findAddressByCep = async (cepInput) => {
  if (!cepInput) {
    return { error: { code: "invalidData", message: "CEP não informado" } };
  }
  const CEP_REGEX = /^\d{5}-?\d{3}$/;
  if (!cepInput.match(CEP_REGEX)) {
    return { error: { code: "invalidData", message: "CEP inválido" } };
  }

  const cep = await CepModels.getOneCep(cepInput);
  if (cep === null) {
    return { error: { code: "notFound", message: "CEP não encontrado" } };
  }
  return { code: 200, cep };
};

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existingCep = await CepModels.getOneCep(cep);
  if (existingCep !== null) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
  const { error } = userSchema.validate({ cep, logradouro, bairro, localidade, uf });
  if (error) {
    return { error: { code: "invalidData", message: error.details[0].message } };
  }
  return CepModels.createCep({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  createCep,
};
