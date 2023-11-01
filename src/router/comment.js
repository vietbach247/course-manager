const express = require("express");
const getComments = require("../controller/comment/getComments");
const getComment = require("../controller/comment/getComment");
const createComment = require("../controller/comment/createComment");
const deleteComment = require("../controller/comment/deleteComment");
const updateComment = require("../controller/comment/updateComment");

const commentRouter = express.Router();

//get
commentRouter.get("/", getComments);

commentRouter.get("/detail", getComment);
// post
commentRouter.post("/", createComment);

// delete
commentRouter.delete("/:CommentId", deleteComment);

// put
commentRouter.delete("/:CommentId", updateComment);
module.exports = commentRouter;
