const express = require("express");

const userRouter = express.Router();

userRouter.get("/", function (req, res) {
  res.send("Hello user!");
});

userRouter.get("/detail", function (req, res) {
    res.send("Hello  uesr detail!");
  });

module.exports = userRouter;
