const express = require("express");
const ownerApiRouter = express.Router();

const registerUser = require("../controllers/owner-side-controllers/registerUser");
const getComments = require("../controllers/owner-side-controllers/getComments");
const getAllInfo = require("../controllers/owner-side-controllers/getAllInfo");

ownerApiRouter.route("/register-user").post(registerUser);
ownerApiRouter.route("/comments").get(getComments);
ownerApiRouter.route("/all-info").get(getAllInfo);

module.exports = ownerApiRouter;
