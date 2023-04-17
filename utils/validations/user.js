const Joi = require("joi");

const userValidation = (body) => {
  const user = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    telephone: Joi.string().length(11).required(),
    email: Joi.string().email().required(),
    gender: Joi.string().required(),
    password: Joi.string().required(),
  });

  return user.validate(body);
};

module.exports = userValidation;
