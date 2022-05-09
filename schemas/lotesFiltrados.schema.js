const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const coords = Joi.string()
const loteId = Joi.number().integer();

const createLoteFiltradoSchema = Joi.object({
  name: name.required(),
  coords: coords.required(),
  loteId: loteId.required(),
});

const updateLoteFiltradoSchema = Joi.object({
  name: name,
  coords: coords
});

const getLoteFiltradoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createLoteFiltradoSchema, updateLoteFiltradoSchema, getLoteFiltradoSchema }
