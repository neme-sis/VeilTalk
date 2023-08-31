const Comments = require("../../model/Comments");
const Owner = require("../../model/Owner");
const {
  successResponse,
  errorResponse,
} = require("../../helper/defaultResponse");

const getAllInfo = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id)
    return res.status(400).json(errorResponse("", "", "User ID is required"));
  try {
    const commentsForTheUser = await Comments.findOne({
      user_id,
    });
    const owner = await Owner.findOne({
      user_id,
    });
    if (!user)
      return res.status(400).json(errorResponse("", "", "User not found"));
    if (!commentsForTheUser)
      return res
        .status(400)
        .json(errorResponse("", "", "Comments not found for the user"));
    const response = { ...owner, ...commentsForTheUser._doc.comments };
    return res.status(200).json(successResponse(response));
  } catch (err) {
    res.status(400).json(errorResponse("", "", err.message));
  }
};

module.exports = getAllInfo;
