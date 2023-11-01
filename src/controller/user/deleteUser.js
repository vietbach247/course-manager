const userModel = require("../../models/User");

module.exports = async function (req, res) {
  try {
    const userId = req.params.userId;
    const user = await userModel.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await userModel.deleteOne({ _id: userId });
    return res.status(200).json({ userId });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error " });
  }
};
