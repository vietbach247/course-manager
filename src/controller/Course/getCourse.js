const courseModel = require("../../models/Course");

module.exports = async function getcourse(req, res) {
  try {
    const courseId = req.params.courseId;

    const course = await courseModel.findOne({ _id: courseId });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json(course);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};
