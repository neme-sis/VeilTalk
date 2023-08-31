const express = require("express");
const ownerApiRouter = express.Router();

const registerUser = require("../controllers/owner-side-controllers/registerUser");
const getComments = require("../controllers/owner-side-controllers/getComments");
const getAllInfo = require("../controllers/owner-side-controllers/getAllInfo");
const getUser = require("../controllers/owner-side-controllers/getUser");

ownerApiRouter.route("/register-user").post(registerUser);
ownerApiRouter.route("/comments").get(getComments);
ownerApiRouter.route("/all-info").get(getAllInfo);
ownerApiRouter.route("/user").get(getUser);

module.exports = ownerApiRouter;
