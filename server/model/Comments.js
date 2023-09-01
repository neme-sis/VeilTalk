const mongoose = require("mongoose");

const EachComment = new mongoose.Schema({
  comment_id: { type: String, required: true, unique: true },
  comment: { type: String, required: true },
  name: { type: String },
  timestamp: { type: Number },
});

const Comments = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  comments: { type: EachComment, default: [] },
});

module.exports = mongoose.model("veiltalk-comments", Comments);
