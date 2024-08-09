const express = require("express");
const router = express.Router();
const path = require("path");
const apiController = require("../controllers/apiController");

router.get("/", apiController.getApi);
router.get("/game_person/:id", apiController.getPerson);

module.exports = router;