// file /server/validations/schemas
const Joi = require('joi');

const password = Joi.string()
  .trim()
  .regex(/^[\sa-zA-Z0-9]+$/, 'letters, numbers, spaces')
  .min(8)
  .max(30)
  .required();
const email = Joi.string()
  .trim()
  .email()
  .required();
const CustName = Joi.string()
  .trim()
  .min(2)
  .max(30)
  .required();

module.exports = {
  options: {
    abortEarly: false,
    convert: false,
    allowUnknown: false,
    stripUnknown: true
  },
  signup: Joi.object().keys({
    CustName,
    password,
    email
  })
};
