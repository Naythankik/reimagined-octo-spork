const validateTodo = require("../../utils/validations/todo");
const Todo = require("../model/task");

const getAll = async (req, res) => {
  try {
    const list = await Todo.find();

    res.status(200).send({ success: true, message: list });
    return;
  } catch (error) {
    throw new Error(error);
    return;
  }
};

const createTodo = async (req, res) => {
  const { error, value } = validateTodo(req.body);

  if (error) {
    res.status(400).send({ success: false, message: error.details[0].message });
    return;
  }

  try {
    value.valid = Date.now() + 1000 * 60 * 60 * 3;

    await Todo.create(value);

    res
      .status(200)
      .send({ success: true, message: "list created successfully" });
  } catch (error) {
    throw new Error(error);
  }
  return;
};

const finishedTask = async (req, res) => {
  try {
    const { id, checked } = req.body;

    const update = await Todo.findByIdAndUpdate(id, {
      progress: checked,
    });

    if (update) {
      res.status(200).send({ success: true, message: "success" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
  return;
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.body;

    const renoved = await Todo.findByIdAndDelete(id);

    if (renoved) {
      res.status(200).send({ success: true, message: "success" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
  return;
};

module.exports = { getAll, createTodo, finishedTask, deleteTask };
