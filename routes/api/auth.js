// @file    ./routes/api/auth.js

// Setup dependencies for auth routes.
const express = require("express");
const router = express.Router();

// POST ------------------------------------------------------------------------
// @route   POST /signin
// @desc    Sign in
// @access  Public
router.post('/signin', (req, res) => {
    res.send("Auth > Sign in route!");
});

// GET -------------------------------------------------------------------------
// @route   GET /validate
// @desc    Validate sign in
// @access  Public
router.get('/validate', (req, res) => {
    res.send("Auth > Validate route!");
});

// Export the router object as a module.
module.exports = router;