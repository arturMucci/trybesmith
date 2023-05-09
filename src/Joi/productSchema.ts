import Joi from 'joi';

export default Joi.object({
  name: Joi
    .string()
    .min(3)
    .required()
    .label('name'),
  amount: Joi
    .string()
    .min(3)
    .required()
    .label('amount'),
}).messages({
  'any.required': '{{#label}} is required',
  'any.string': '{{#label}} must be a string',
  'any.min': '{{#label}} must be at least {{#limit}} characters long',
});