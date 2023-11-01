const UserModel = require("../../models/User");

module.exports = async function getUsers(req, res) {
  try {
    const users = await UserModel.find({});

    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server" });
  }
};
