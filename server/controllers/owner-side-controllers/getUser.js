const { errorResponse, successResponse } = require("../../helper/defaultResponse");
const Owner = require("../../model/Owner");

const getUser = async (req, res) => {
  const { user_id } = req.query;

  if (!user_id)
    return res.status(400).json(errorResponse("", "", "User ID is required"));
  try {
    const owner = await Owner.findOne({
      user_id,
    });
    if (!owner)
      return res.status(400).json(errorResponse("", 400, "User not found"));
    const response = { ...owner._doc };
    return res.status(200).json(successResponse(response));
  } catch (err) {
    res.status(400).json(errorResponse("", 400, err.message));
  }
};

module.exports = getUser;
