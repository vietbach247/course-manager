const commentModel = require("../../models/Comment");

module.exports = async function (req, res) {
  const data = req.body;

  const newComment = await commentModel.create(data);

  return res.json(newComment);
};
