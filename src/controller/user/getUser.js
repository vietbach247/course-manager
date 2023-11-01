const UserModel = require("../../models/User");

module.exports = async function getUser(req, res) {
  try {
    const userId = req.params.userId;

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};
