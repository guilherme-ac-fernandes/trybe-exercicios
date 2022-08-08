const rescue = require('express-rescue');
const CepServices = require('../services/CepServices');

const pong = rescue((_req, res) => {
  res.status(200).json({ message: "pong!" })
});

const findCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const cepResponse = await CepServices.findAddressByCep(cep);
  if (cepResponse.error) {
    return next(cepResponse.error);
  }
  return res.status(200).json(cepResponse);
});

const createCep = rescue(async (req, res, next) => {
  const newCep = await CepServices.createCep(req.body);
  if (newCep.error) {
    return next(newCep.error);
  }
  return res.status(201).json(newCep);
});

module.exports = {
  pong,
  findCep,
  createCep,
}
