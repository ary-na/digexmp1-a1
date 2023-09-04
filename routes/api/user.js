// File name: user.js
// User routes
const express = require("express");
const router = express.Router();
const User = require("./../../models/User");

// GET - get all users
router.get('/', (req, res) => {
    // Get all users from the User model, using the find() method.
    User.find({firstName: "A"})
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            console.log("No users found!", err);
        })
});

module.exports = router;