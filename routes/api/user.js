// @file    ./routes/api/user.js

// Setup user routes dependencies
const express = require("express")
const router = express.Router()
const User = require("./../../models/User")

// GET -------------------------------------------------------------------------
// @route   GET /user
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
    // Get all users from the User model, using the find() method.
    User.find({firstName: "A"})
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            console.log("No users found!", err)
        })
});

// GET -------------------------------------------------------------------------
// @route   GET /user/:id
// @desc    Get a user by id
// @access  Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(404).json({
                "message": "User not found!"
            })
            console.log("User not found!", err)
        })
})

// POST ------------------------------------------------------------------------
// @route   POST /user
// @desc    Create a new user
// @access  Public
router.post('/', (req, res) => {
    // check if body is empty
    if (!req.body) {
        return res.status(400).json({
            "message": "Body is empty!"
        })
    }

    // Create a new user document
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        bio: req.body.bio,
        accessLevel: req.body.accessLevel
    })

    // Save new user document
    newUser.save()
        .then(user => {
            // Send back 201 status, and user object
            res.status(201).json(user)
        })
        .catch(err => {
            res.json(500).json({
                "message": "failed creating a user!"
            })
            console.log("failed creating a user!", err)
        })
})

// PUT -------------------------------------------------------------------------
// @route   PUT /user/:id
// @desc    Update a user by id
// @access  Public
router.put("/:id", (req, res) => {
    // check if body is empty
    if (!req.body) {
        return res.status(400).json({
            "message": "body is empty!"
        })
    }

    // Update the user using the user model
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed updating user",
                error: err
            })
            console.log("Failed updating a user", err)
        })
})

// DELETE ----------------------------------------------------------------------
// @route   DELETE /user/:id
// @desc    Delete a user by id
// @access  Public
router.delete("/:id", (req, res) => {
    if(!req.params.id) {
        return res.status(400).json({
            message: "missing user id!"
        })
    }

    // Delete the user using User model
    User.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({
                message: "user deleted"
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "failed deleting user",
                error: err
            })
            console.log("Failed deleting user", err)
        })

})

module.exports = router