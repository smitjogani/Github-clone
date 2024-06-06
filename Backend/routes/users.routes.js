const express = require('express');

const router = express.Router();
const userController = require("../controllers/user.controller.js")

router.get("/profile/:username", userController.getUSerProfile)

module.exports = router;