const express = require("express");
const Matches = require("../models/matches");
const router = express.Router();
const {
  getMatches,
  postMatches,
} = require("../controllers/matches.controller");

router.get("/", getMatches);

router.post("/", postMatches);

module.exports = router;
