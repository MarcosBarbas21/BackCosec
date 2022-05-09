const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const coords = Joi.string()
const userId = Joi.number().integer();

const createLoteSchema = Joi.object({
  name: name.required(),
  coords: coords.required(),
  userId: userId.required(),
});

const updateLoteSchema = Joi.object({
  name: name,
  coords: coords
});

const getLoteSchema = Joi.object({
  id: id.required(),
});

module.exports = { createLoteSchema, updateLoteSchema, getLoteSchema }
