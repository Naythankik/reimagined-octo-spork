const { default: mongoose } = require("mongoose");

const Todo = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    task: {
      type: String,
    },
    progress: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", Todo);
