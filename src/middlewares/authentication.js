const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const { user } = req.cookies;
    const token = user;

    try {
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

      if (!verifyToken) {
        res.status(401).send({ success: false, message: "token has expired" });
        return;
      }
      req.payload = verifyToken;
      next();
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
      return;
    }
  } catch (error) {
    res.status(400).send({ success: false, message: error.message });
    return;
  }
  return;
};

module.exports = authentication;
