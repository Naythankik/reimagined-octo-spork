const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();
const connect = require("./config/connection");
const { auth, user } = require("./src/routes/");
const authentication = require("./src/middlewares/authentication");

connect();

const PORT = process.env.PORT || 2000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/todo/auth", auth);
app.use("/api/todo/user", authentication, user);

app.listen(PORT, (req, res) => {
  console.log(`App is running on ${PORT}`);
});
