const { errorResponse } = require("../helper/defaultResponse");
const Owner = require("../model/Owner");

const checkToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).json(errorResponse(null, 403, "No token provided!"));

  const userToken = await Owner.findOne({ token });
  if (!userToken || userToken._doc.token !== token)
    return res.status(401).json(errorResponse(null, 401, "Unauthorized!"));

  next();
};

module.exports = checkToken;
