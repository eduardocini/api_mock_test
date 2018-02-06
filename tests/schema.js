'use strict';

const Joi = require('joi');

const companySchema = Joi.object({
  id: Joi.number().integer().positive().required().options({
    convert: false
  }),
  companyName: Joi.string().required(),
  address: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().max(2).required(),
});

const employeeSchema = Joi.object({
  id: Joi.number().integer().positive().required().options({
    convert: false
  }),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  job: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  allocated: Joi.boolean().required(),
})

module.exports = {
  companySchema,
  employeeSchema
}