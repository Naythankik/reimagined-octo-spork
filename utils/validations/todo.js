const Joi = require("joi");

const validateTodo = (data) => {
  const todo = Joi.object({
    title: Joi.string().required(),
    task: Joi.string().required(),
    valid: Joi.date().required(),
  });

  return todo.validate(data);
};

module.exports = validateTodo;
