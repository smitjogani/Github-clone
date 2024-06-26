const express = require('express');
const passport = require('passport');
require('dotenv').config();

const router = express.Router();

router.get("/github", passport.authenticate('github', { scope: ['user:email'] }),);

router.get("/github/callback", passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL +'/login' }),
    function (req, res) {
        res.redirect(process.env.CLIENT_BASE_URL);
    });

module.exports = router;