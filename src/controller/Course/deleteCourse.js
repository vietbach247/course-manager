const courseModel = require("../../models/Course");

module.exports = async function (req, res) {
  try {
    const courseId = req.params.courseId;
    const course = await courseModel.findOne({ _id: courseId });

    if (!course) {
      return res.status(404).json({
        message: "course not found",
      });
    }

    await courseModel.deleteOne({ _id: courseId });
    return res.status(200).json({ courseId });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error " });
  }
};
