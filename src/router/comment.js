const express = require("express");
const getComments = require("../controller/comment/getComments");
const getComment = require("../controller/comment/getComment");

const commentRouter = express.Router();

commentRouter.get("/", getComments);

commentRouter.get("/detail", getComment);

module.exports = commentRouter;
