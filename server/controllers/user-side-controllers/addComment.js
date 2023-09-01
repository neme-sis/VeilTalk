const Comments = require("../../model/Comments");
const {
  successResponse,
  errorResponse,
} = require("../../helper/defaultResponse");
const { v4 } = require("uuid");
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  countries,
  names,
  starWars,
} = require("unique-names-generator");

const addComment = async (req, res) => {
  const { user_id, comment } = req.body;

  if (!user_id)
    return res.status(400).json(errorResponse("", "", "User ID is required"));
  if (!comment)
    return res.status(400).json(errorResponse("", "", "Comment is required"));
  try {
    const commentsForTheUser = await Comments.findOne({
      user_id,
    });
    if (!commentsForTheUser)
      return res
        .status(400)
        .json(errorResponse("", "", "Comments not found for the user"));

    const comment_id = v4();
    const name = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, countries, names, starWars],
      length: 2,
      separator: " ",
    });
    const timestamp = new Date().getTime();
    await Comments.findOneAndUpdate(
      { user_id },
      { $push: { comments: { comment_id, comment, name, timestamp } } }
    );
    return res.status(200).json(successResponse("Comment added successfully"));
  } catch (err) {
    res.status(400).json(errorResponse("", "", err.message));
  }
};

module.exports = addComment;
