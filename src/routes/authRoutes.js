const express = require("express");
const {
  createAUser,
  loginAUser,
  logout,
} = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

const router = express.Router();

router.route("/").post(loginAUser);
router.route("/logout").get(authentication, logout);
router.route("/create-user").post(createAUser);

module.exports = router;
