const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();

function printYearMonthDay() {
  console.log(currentYear);
  console.log(currentMonth);
  console.log(currentDay);
}

module.exports = printYearMonthDay;
