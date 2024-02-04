const express = require("express");
const router = express.Router();
const cors = require("cors");
const populateProvider = require("../controllers/ours/populateProviderDates");
router.get("/:provider/populate", cors(), populateProvider);

module.exports = router;
