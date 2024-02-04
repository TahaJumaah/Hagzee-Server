const mongoose = require("mongoose");
const connectDB = require("../../lib/connectDB");

function populateProviderDates(
  startDate,
  nOfDays,
  isWorkingDay,
  dayStart,
  dayEnd
) {
  const workingDays = [
    {
      workingDate: "",
      isWorkingDay: "",
      dayStart: "",
      dayEnd: "",
    },
  ];

  startDate = new Date(startDate);
  const newstartDate = new Date(startDate);
  for (let index = 0; index <= nOfDays; index++) {
    if (index === 0) {
      workingDays[0].workingDate = newstartDate;
      workingDays[0].isWorkingDay = isWorkingDay;
      workingDays[0].dayStart = dayStart;
      workingDays[0].dayEnd = dayEnd;
    } else {
      workingDays.push({
        workingDate: new Date(startDate.setDate(startDate.getDate() + 1)),
        isWorkingDay: isWorkingDay,
        dayStart: dayStart,
        dayEnd: dayEnd,
      });
    }
  }
  if (!startDate || !nOfDays) {
    return "Please Provide Data from Function";
  }
  return workingDays;
}

async function populateProvider(req, res, next) {
  connectDB(req.params.provider, process.env.username, process.env.password);
  // if (!req.body.startDate || !req.body.nOfDays) {
  //   res.json("please provide");
  // }

  res.json(
    populateProviderDates(
      req.body.startDate,
      req.body.nOfDays,
      req.body.isWorkingDay,
      req.body.dayStart,
      req.body.dayEnd
    )
  );
}

module.exports = populateProvider;
