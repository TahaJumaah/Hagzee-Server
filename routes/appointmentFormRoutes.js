const express = require("express");
const router = express.Router();
const appointmentFormController = require("../controllers/client/addAppointment");
const cors = require("cors");

router.get("/:provider/book", cors(), appointmentFormController.get);
router.post("/:provider/book", appointmentFormController.post);

module.exports = router;
