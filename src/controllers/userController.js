const userValidation = require("../../utils/validations/user");
const User = require("../model/user");

const createAUser = async (req, res) => {
  const { error, value } = userValidation(req.body);

  if (error) {
    res.status(400).send({ success: false, message: error.message });
    return;
  }

  await User.create(value);
  res.status(200).send({ success: true, message: "user created successfully" });
  try {
  } catch (error) {
    throw new Error(error.message);
  }
  return;
};

const loginAUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send({ success: false, message: "no user found" });
      return;
    }

    const check = await user.comparePassword(password);

    if (!check) {
      res
        .status(404)
        .send({ success: false, message: "password is incorrect" });
      return;
    }
    return;
  } catch (error) {
    throw new Error(error.message);
  }
  return;
};

module.exports = {
  createAUser,
  loginAUser,
};
