const passport = require('passport');

const gitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config()

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new gitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRETS,
    callbackURL: "/api/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        console.log(profile);
    }
));