const express = require("express");
const router = express.Router();
const cors = require("cors");
const populateProvider = require("../controllers/ours/populateProviderDates");
const getWorkingDays = require("../controllers/client/getWorkingDays");
router.get("/:provider/populate", cors(), populateProvider);
router.get("/:provider", cors(), getWorkingDays);

module.exports = router;
