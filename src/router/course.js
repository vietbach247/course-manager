const express = require("express");

const courseRouter = express.Router();

courseRouter.get("/", function (req, res) {
  res.send("Hello course!");
});

courseRouter.get("/detail", function (req, res) {
  res.send("Hello course detail!");
});

module.exports = courseRouter;
