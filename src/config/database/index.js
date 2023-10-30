const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://vietbach:vietbach@bach.ffr2ytt.mongodb.net/"
      );
      console.log("Thanhf cong")
  } catch (error) {
    console.log(error);
      console.log("that bai")
  }
};
module.exports = dbConnect;
