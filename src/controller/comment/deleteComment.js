const commentModel = require("../../models/Comment");

module.exports = async function (req, res) {
  try {
    const commentId = req.params.commentId;
    const comment = await commentModel.findOne({ _id: commentId });

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    await commentModel.deleteOne({ _id: commentId });
    return res.status(200).json({ commentId });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error " });
  }
};
