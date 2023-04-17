const { default: mongoose, model } = require("mongoose");
const bcrypt = require("bcrypt");

const User = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    telephone: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

User.pre("save", function (next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

User.methods.comparePassword = function (password) {
  const check = bcrypt.compareSync(password, this.password);
  return check;
};

module.exports = mongoose.model("user", User);
