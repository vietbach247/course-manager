const { Schema, model } = require("mongoose");
const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Course", Course);
