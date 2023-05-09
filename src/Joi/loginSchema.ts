import Joi from 'joi';

export default Joi.object({
  username: Joi
    .string()
    .alphanum()
    .required()
    .label('username'),
  password: Joi
    .string()
    .alphanum()
    .required()
    .label('password'),
}).messages({
  'any.required': '{{#label}} is required',
});