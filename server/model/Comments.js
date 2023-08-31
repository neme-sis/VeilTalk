const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
  user_id: { type: String, required: true },
  comments: { type: Array, default: [] },
});

module.exports = mongoose.model("veiltalk-comments", Comments);