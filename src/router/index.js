const express = require("express");
const userRouter = require("./user");
const courseRouter = require("./course");
const commentRouter = require("./comment");

const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello api!");
});

router.use("/users", userRouter);

router.use("/courses", courseRouter);

router.use("/comment", commentRouter);

module.exports = router;
