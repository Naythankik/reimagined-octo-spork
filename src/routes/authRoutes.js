const express = require("express");
const { createAUser, loginAUser } = require("../controllers/userController");

const router = express.Router();

router.route("/").post(loginAUser);
router.route("/create-user").post(createAUser);

module.exports = router;
