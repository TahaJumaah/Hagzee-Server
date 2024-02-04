//
const mongoose = require("mongoose");
const appointment = require("../../models/appointmentModel");
const connectDB = require("../../lib/connectDB");
const CreateAppointment = require("../../lib/client/CreateAppointment");
async function appointmentFormGet(req, res, next) {
  connectDB(req.params.provider, "admin", "7727987");
  res.json(await appointment.find());
  console.log("Got a get request");
}

// Gets the request parameters as JSON, changes them from Strings into the appropriate type defined in the DB Model, then calls CreateAppointment().
async function appointmentFormPost(req, res, next) {
  connectDB(req.params.provider, process.env.username, process.env.password);
  CreateAppointment(
    req.body.bookee_name,
    Number(req.body.bookee_number),
    Number(req.body.age),
    new Date(req.body.date)
  );

  res.json(await appointment.find());
}

const appointmentFormController = new Object({
  get: appointmentFormGet,
  post: appointmentFormPost,
});
module.exports = appointmentFormController;
