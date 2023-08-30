// Server
// Dependencies-----------------------------------------------------

require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3000;

// Database connection------------------------------------------------

// Express app setup
const app =  express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("*", cors());

// Setup routes--------------------------------------------------------

// Homepage
app.get('/', (req, res) => {
    res.send("Hello.");
});

// User
const userRouter = require("./routes/user");
app.use('/user', userRouter);

// Auth
const authRouter = require("./routes/auth");
app.use('/auth', authRouter);

// Run app (Listen on port)-------------------------------------------
app.listen(port, () => {
    console.log(`The app is running on port ${port}.`);
});
