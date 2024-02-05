const mongoose = require("mongoose");
const workingDayModel = require("../../models/workingDaysModel");
const connectDB = require("../../lib/connectDB");

async function getWorkingDays(req, res, next) {
  connectDB(req.params.provider, process.env.username, process.env.password);
  const workingDays = await workingDayModel
    .find({
      workingDay: { $lt: "2024-02-07T00:00:00.000Z" },
    })
    .exec();
  console.log("Got a working days GET request");
  res.json(workingDays);
}

module.exports = getWorkingDays;
