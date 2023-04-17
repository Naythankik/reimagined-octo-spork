const { default: mongoose } = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connection is working");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connection;
