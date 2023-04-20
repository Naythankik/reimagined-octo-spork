const {
  userValidation,
  loginValidation,
} = require("../../utils/validations/user");
const User = require("../model/user");

const jwt = require("jsonwebtoken");

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
  const { error, value } = loginValidation(req.body);

  if (error) {
    res.status(400).send({
      success: false,
      message: error.details[0].message,
    });
    return;
  }

  const { email, password } = value;

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

    const payload = jwt.sign({ user: user.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    if (payload) {
      res.cookie("user", payload, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
    }

    res.status(200).send({
      success: true,
      message: "Authentication successful",
    });
  } catch (error) {
    throw new Error(error.message);
  }
  return;
};

const logout = async (req, res) => {
  try {
    const { user } = req.payload;

    if (!user) {
      res.status(401).send({ success: false, message: "no token is found" });
    } else {
      res.clearCookie("user", {
        httpOnly: true,
      });
    }

    res
      .status(200)
      .send({ success: false, message: "user logged out successfully" });
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
  }
  return;
};

module.exports = {
  createAUser,
  loginAUser,
  logout,
};
