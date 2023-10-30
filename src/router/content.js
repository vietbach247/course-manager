const express = require("express");

const contentRouter = express.Router();

contentRouter.get("/", function (req, res) {
  res.send("Hello content!");
});

contentRouter.get("/detail", function (req, res) {
  res.send("Hello  content detail!");
});

module.exports = contentRouter;
