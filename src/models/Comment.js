const { Schema, model } = require("mongoose");
const Comment = new Schema(
  {
   comment : { type: String, required: true },
   image : { type: String, required: true }, 
  },
  {
    timestamps: true,
  }
);
module.exports = model("Comment", Comment);
