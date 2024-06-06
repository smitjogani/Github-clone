const express = require('express');
const router = express.Router();
const exploreController = require("../controllers/explore.controller.js")

router.get("/repos/:language", exploreController.explorePopularRepos);

module.exports = router;