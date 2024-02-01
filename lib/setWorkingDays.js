const nextMonth = require("./nextMonth");
// takes the returned calendar month from the create function, then takes a day index value, and switches its "isWorkingDay" value between true and false.
function setWorkingDays(dayIndex) {
  const nextMonthDays = nextMonth();
  nextMonthDays[dayIndex].isWorkingDay = !nextMonthDays[dayIndex].isWorkingDay;
  return nextMonthDays;
}

module.exports = setWorkingDays;
