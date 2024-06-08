const passport = require('passport');
require('dotenv').config()
const gitHubStrategy = require('passport-github2').Strategy;


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(new gitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/github"
},
    function (accessToken, refreshToken, profile, done) {
        console.log(profile);
    }
));