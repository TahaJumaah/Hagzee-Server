const AppointmentModel = require("../models/appointmentModel");

async function CreateAppointment(
  bookee_name,
  phone_number,
  age,
  appointment_date
) {
  const appointmentDetails = new AppointmentModel({
    bookee_name: bookee_name,
    phone_number: phone_number,
    age: age,
    appointment_date: appointment_date,
  });

  await appointmentDetails.save();
}

module.exports = CreateAppointment;
