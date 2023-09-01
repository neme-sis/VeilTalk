const Comments = require("../../model/Comments");
const {
  successResponse,
  errorResponse,
} = require("../../helper/defaultResponse");

const getComments = async (req, res) => {
  const { user_id } = req.query;

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
    const response = commentsForTheUser._doc;
    return res.status(200).json(successResponse(response));
  } catch (err) {
    res.status(400).json(errorResponse("", "", err.message));
  }
};

module.exports = getComments;
