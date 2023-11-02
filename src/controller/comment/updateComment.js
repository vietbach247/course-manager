const commentModel = require("../../models/Comment");

module.exports = async function (req, res) {
  try {
    const commentId = req.params.commentId;

    console.log(commentId);

    const data = req.body;

    const comment = await commentModel.findOne({ _id: commentId });

    console.log(comment);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    await commentModel.updateOne({ _id: commentId }, data);

    return res.status(200).json({ commentId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error " });
  }
};
