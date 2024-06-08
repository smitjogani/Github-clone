const express = require('express');
const cors = require('cors')
const passport = require('passport');
const session = require('express-session');

require("./passport/github.auth.js");

const userRoutes = require("./routes/users.routes.js");
const exploreRoutes = require("./routes/explore.routes.js");
const authRoutes = require("./routes/auth.routes.js");

const dbConnection = require('./Config/db.js');

const app = express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(3000, () => {
    console.log("Server has been started");

    dbConnection.mongodbConnection();
})

