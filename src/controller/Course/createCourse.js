const courseModule = require("../../models/Course");

module.exports = async function (req, res) {
  try {
    const data = req.body;
    console.log(data);
    const course = await courseModule.findOne({ name: data?.name });

    if (course) {
      return res.status(400).send({
        message: "course exists",
      });
    }
    const newCourse = await courseModule.create(data);
    return res.json(newCourse);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error " });
  }
};
