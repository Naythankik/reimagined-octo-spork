const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();
const connect = require("./config/connection");
const { auth, user } = require("./src/routes/");

connect();

const PORT = process.env.PORT || 2000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todo/auth", auth);
app.use("/api/todo/user", user);

app.listen(PORT, (req, res) => {
  console.log(`App is running on ${PORT}`);
});
