const express = require("express");

const {
  getAll,
  createTodo,
  finishedTask,
  deleteTask,
} = require("../controllers");

const router = express.Router();

router
  .route("/")
  .get(getAll)
  .post(createTodo)
  .put(finishedTask)
  .delete(deleteTask);

module.exports = router;
