const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vietbach:vietbach@bach.ffr2ytt.mongodb.net/courses"
    );
    console.log("Connected db");
  } catch (error) {
    console.log(error);
    console.log("Not connect db");
  }
};
module.exports = dbConnect;
