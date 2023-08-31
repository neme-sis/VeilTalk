const mongoose = require("mongoose");

const Owner = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  user_name: { type: String, default: null, required: true },
  email: { type: String },
});

module.exports = mongoose.model("veiltalk-users", Owner);
