const express = require("express");
const { getTopCustomers } = require("../controller/customerController");
const router = express.Router();

router.get("/topCustomers", getTopCustomers);

module.exports = router;
