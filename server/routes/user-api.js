const express = require("express");
const addComment = require("../controllers/user-side-controllers/addComment");
const userApiRouter = express.Router();

userApiRouter.route("/comment").post(addComment);

module.exports = userApiRouter;
