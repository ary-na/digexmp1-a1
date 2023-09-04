// File name: server.js

// Dependencies ----------------------------------------------------
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3000;

// Database connection ---------------------------------------------
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("db connected!");
    }, err => {
        console.log("db connection failed!", err);
    });

// Express app setup -----------------------------------------------
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("*", cors());

// Setup routes ----------------------------------------------------

// - Homepage route
app.get('/', (req, res) => {
    res.send("Hello.");
});

// - User route
const userRouter = require("./routes/api/user");
app.use('/user', userRouter);

// - Auth route
const authRouter = require("./routes/api/auth");
app.use('/auth', authRouter);

// Run app (Listen on port) ----------------------------------------
app.listen(port, () => {
    console.log(`The app is running on port ${port}.`);
});
