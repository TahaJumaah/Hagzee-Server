const mongoose = require("mongoose");
const workingDaysModel = require("../../models/workingDaysModel");
const connectDB = require("../../lib/connectDB");


// Gets a request to a :Provider, with a URL query of 
// "month", this month is then changed into a date
//  added and subtracted for the range of the correct length.

async function getWorkingDays(req, res, next) {
  const queryMonth = new Date(`2024-${req.query.month}-01`)
  const 
  const queryMonthUpperRange = new Date(`2024-${req.query.month}-01`)
  connectDB(req.params.provider, process.env.username, process.env.password);
  const workingDays = await workingDaysModel
    .find({$and:[
      {workingDay: {$gt: queryMonth}},{workingDay:{$lt:queryMonth}}
    ]})
    .exec();
  console.log(queryMonthUpperRange);
  console.log(req.params)
  console.log(req.query)
  res.json(workingDays);
}

module.exports = getWorkingDays;
