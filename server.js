// Dependencies
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 3000;

// Database connection

// Express app setup
const app =  express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("*", cors());

// Setup routes

// Homepage
app.get('/', (req, res) => {
    res.send("Hello.");
});

// Get users
app.get('/user', (req, res) => {
    res.send("Listing all users.")
})

// Run app (Listen on port)
app.listen(port, () => {
    console.log(`The app is running on port ${port}.`);
});
