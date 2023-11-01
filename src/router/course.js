const express = require("express");
const getCourse = require("../controller/Course/getCourse");
const getCourses = require("../controller/Course/getCourses");
const createCourse = require("../controller/Course/createCourse");
const deleteCourse = require("../controller/Course/deleteCourse");
const updateCourse = require("../controller/Course/deleteCourse");

const courseRouter = express.Router();

// get
courseRouter.get("/", getCourses);

courseRouter.get("/:courseId", getCourse);

// post
courseRouter.post("/", createCourse);

// delete
courseRouter.delete("/:courseId", deleteCourse);

// put
courseRouter.delete("/:courseId", updateCourse);

module.exports = courseRouter;
