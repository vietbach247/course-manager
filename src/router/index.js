const express = require("express");
const userRouter = require("./user");
const courseRouter = require("./course");
const contentRouter = require("./content");

const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello api!");
});

router.use("/users", userRouter);

router.use("/courses", courseRouter);

router.use("/contents", contentRouter);

module.exports = router;
