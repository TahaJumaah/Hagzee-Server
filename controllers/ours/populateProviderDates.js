const connectDB = require("../../lib/connectDB");
const mongoose = require("mongoose");
const workingDaysModel = require("../../models/workingDaysModel");
function populateProviderDates(
  startDate,
  nOfDays,
  isWorkingDay,
  dayStart,
  dayEnd
) {
  if (!startDate || !nOfDays) {
    return "Please provide a startDate and nOfDays";
  }
  const workingDays = [
    {
      workingDay: "",
      isWorkingDay: "",
      dayStart: "",
      dayEnd: "",
    },
  ];

  startDate = new Date(startDate);
  const newstartDate = new Date(startDate);
  for (let index = 0; index <= nOfDays; index++) {
    if (index === 0) {
      workingDays[0].workingDay = newstartDate;
      workingDays[0].isWorkingDay = isWorkingDay;
      workingDays[0].dayStart = dayStart;
      workingDays[0].dayEnd = dayEnd;
    } else {
      workingDays.push({
        workingDay: new Date(startDate.setDate(startDate.getDate() + 1)),
        isWorkingDay: isWorkingDay,
        dayStart: dayStart,
        dayEnd: dayEnd,
      });
    }
  }
  return workingDays;
}

async function populateProvider(req, res, next) {
  connectDB(req.params.provider, process.env.username, process.env.password);
  const comingDates = populateProviderDates(
    req.body.startDate,
    req.body.nOfDays,
    req.body.isWorkingDay,
    req.body.dayStart,
    req.body.dayEnd
  );
  // res.json(comingDates);
  const datestoDB = await workingDaysModel.insertMany(comingDates);
  res.json(datestoDB);
}

module.exports = populateProvider;
