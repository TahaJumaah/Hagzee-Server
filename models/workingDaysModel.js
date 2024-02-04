const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workingDaySchema = new Schema({
  workingDay: { type: Date, required: true },
  isWorkingDay: { type: Boolean, required: true },
  dayStart: { type: Number, required: true },
  dayEnd: { type: Number, required: true },
});

const workingDays = mongoose.model("workingDays", workingDaySchema);

module.exports = workingDays;
