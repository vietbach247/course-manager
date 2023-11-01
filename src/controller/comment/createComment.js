const commentModel = require("../../models/Comment");

module.exports = async function (req, res) {
  const data = req.body;

  const comment = await commentModel.findOne({ email: data?.email });

  if (comment) {
    return res.status(400).send({
      message: "Comment exists",
    });
  }

  const newComment = await commentModel.create(data);

  return res.json(newComment);
};
