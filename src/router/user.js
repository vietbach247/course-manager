const express = require("express");
const getUser = require("../controller/user/getUser");
const getUsers = require("../controller/user/getUsers");
const createUser = require("../controller/user/createUser");
const updateUser = require("../controller/user/updateUser");
const deleteUser = require("../controller/user/deleteUser");

const userRouter = express.Router();

// get là lấy dữ liệu
userRouter.get("/", getUsers);
userRouter.get("/:userId", getUser);

// post là thêm dữ liệu
userRouter.post("/", createUser);

// put là sửa dữ liệu
userRouter.put("/:userId", updateUser);

// delete là xóa dữ liệu
userRouter.delete("/:userId", deleteUser);

module.exports = userRouter;
