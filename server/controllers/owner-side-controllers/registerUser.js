const Owner = require("../../model/Owner");
const {
  successResponse,
  errorResponse,
} = require("../../helper/defaultResponse");

const { v4 } = require("uuid");
const Comments = require("../../model/Comments");

const registerUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name)
    return res.status(400).json(errorResponse("", "", "Name is required"));

  const user_id = v4();
  let userData = { user_name: name, user_id };
  if (email) userData.email = email;

  try {
    const owner = await Owner.create(userData);
    const comments = await Comments.create({ user_id });
    const response = { ...owner._doc, ...comments._doc };
    res.status(200).json(successResponse(response));
  } catch (err) {
    res.status(400).json(errorResponse("", "", err.message));
  }
};

module.exports = registerUser;
