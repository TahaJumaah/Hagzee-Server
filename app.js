require("dotenv").config();
const express = require("express");
const app = express();
const appointmentFormGetRouter = require("./routes/appointmentFormRoutes");
const cors = require("cors");

// Middleware to have access to the request's body.
app.use(cors());
app.use(express.json());

app.use(appointmentFormGetRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
