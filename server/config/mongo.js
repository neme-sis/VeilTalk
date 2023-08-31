const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "veiltalk",
};

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, options);
    console.log("Database connected");
  } catch (err) {
    console.log("Connection to db failed");
  }
};

module.exports = { connectToDB };
