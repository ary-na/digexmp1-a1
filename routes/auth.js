// File name: auth.js
// Auth routes
const express = require("express");
const router = express.Router();

// POST - Sign in route
router.post('/signin', (req, res) => {
    res.send("Auth > Sign in route!");
});

// Get - Validate route
router.get('/validate', (req, res) => {
    res.send("Auth > Validate route!");
});

module.exports = router;