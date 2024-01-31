const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    bookee_name: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    age: { type: Number, required: true },
    appointment_date: { type: Date },
  },
  { timestamps: true }
);

const appointment = mongoose.model("appointment", appointmentSchema);

module.exports = appointment;
