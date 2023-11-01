const Course = require("../../models/Course");
const courseModel = require("../../models/Course");

module.exports = async function (req, res) {
  try {
    const courseId = req.params.courseId;
    const data = req.body;

    const course = await cModel.findOne({ _id: courseId });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    await courseModel.updateOne({ _id: courseId }, data);

    return res.status(200).json({ courseId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error " });
  }
};
