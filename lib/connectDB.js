const mongoose = require("mongoose");
const DbStatus = require("./DbStatus");
async function connectDB(dataBase, userName, passWord) {
  DbStatus;
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: dataBase,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
