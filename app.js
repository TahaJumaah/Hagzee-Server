require("dotenv").config();
const express = require("express");
const app = express();
const appointmentFormGetRouter = require("./routes/appointmentFormRoutes");
const cors = require("cors");
const populateProvider = require("./routes/workingDaysRoutes");
const populateProviderDates = require("./controllers/ours/populateProviderDates");
// Middleware to have access to the request's body.
app.use(cors());
app.use(express.json());

app.use(appointmentFormGetRouter);
app.use(populateProvider);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// populateProviderDates("2024-03-03", 90, true, 9, 18);
