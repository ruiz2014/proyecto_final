const express = require("express");
const router = express.Router();
// const multer = require("multer");
const path = require("path");
const shopController = require("../controllers/shopController");

router.get("/", shopController.getAllProducts);

module.exports = router;