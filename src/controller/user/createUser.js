const userModel = require("../../models/User");

module.exports = async function (req, res) {
  try {
    const data = req.body;

    const user = await userModel.findOne({ email: data?.email });

    if (user) {
      return res.status(400).send({
        message: "User exists",
      });
    }

    const newUser = await userModel.create(data);

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error " });
  }
};
