const express = require("express");
const {
  getProducts,
  getTopSelligProducts,
} = require("../controller/productController");
const router = express.Router();

router.get("/", getProducts);
router.get("/topselling", getTopSelligProducts);

module.exports = router;
