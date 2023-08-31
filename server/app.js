require("dotenv").config();
require("./config/mongo").connectToDB();

const express = require("express");
const cors = require("cors");

const ownerApiRouter = require("./routes/owner-api");
const userApiRouter = require("./routes/user-api");

const app = express();
app.use([express.json(), cors()]);
app.use("/owner-api", ownerApiRouter);
app.use("/user-api", userApiRouter);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
