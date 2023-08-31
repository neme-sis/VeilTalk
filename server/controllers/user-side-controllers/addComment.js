const Comments = require("../../model/Comments");
const {
  successResponse,
  errorResponse,
} = require("../../helper/defaultResponse");

const addComment = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id)
    return res.status(400).json(errorResponse("", "", "User ID is required"));
  try {
    const commentsForTheUser = await Comments.findOne({
      user_id,
    });
    if (!commentsForTheUser)
      return res
        .status(400)
        .json(errorResponse("", "", "Comments not found for the user"));

    const comment_id = v4();
    await Comments.findOneAndUpdate(
      { user_id },
      { $push: { comment_id, comment: req.body.comment } }
    );
    return res.status(200).json(successResponse("Comment added successfully"));
  } catch (err) {
    res.status(400).json(errorResponse("", "", err.message));
  }
};

module.exports = addComment;