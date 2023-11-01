const express = require("express");
const getCourse = require("../controller/Course/getCourse");
const getCourses = require("../controller/Course/getCourses");

const courseRouter = express.Router();

courseRouter.get("/", getCourses);

courseRouter.get("/detail", getCourse);

module.exports = courseRouter;
