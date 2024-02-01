require("dotenv").config();
const express = require("express");
const app = express();
const appointmentFormGetRouter = require("./routes/appointmentFormRoutes");
const cors = require("cors");
const workingDays = require("./lib/nextMonth");
const setWorkingDays = require("./lib/setWorkingDays");
setWorkingDays;

// Middleware to have access to the request's body.
app.use(cors());
app.use(express.json());

app.use(appointmentFormGetRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

console.log(workingDays([4, 2, 0]));
