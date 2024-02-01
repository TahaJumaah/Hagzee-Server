function nextMonth(dayIndex) {
  const nextMonth = [];
  for (let index = 0; index < 5; index++) {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + index);
    nextMonth.push(
      new Object({
        day: nextDay,
        isWorkingDay: true,
        workingHours: "",
      })
    );
  }
  function nextHours() {
    const now = new Date();
    const nowHour = now.getHours();
    console.log(`the Now hour of the now is ${nowHour}`);
  }
  nextHours();

  if (dayIndex) {
    dayIndex.forEach((element) => {
      nextMonth[element].isWorkingDay = !nextMonth[element].isWorkingDay;
      console.log(`switched day with the index of ${dayIndex}`);
    });
  }
  return nextMonth;
}

module.exports = nextMonth;
