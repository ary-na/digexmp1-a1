// File name: user.js

// User routes
const express = require("express")
const router = express.Router()
const User = require("./../../models/User")

// GET - get all users ---------------------------------------------
// endpoint = /user
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

// GET - get a single user by id -----------------------------------
// endpoint = /user/:id
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

// POST - create new user ------------------------------------------
// endpoint = /user
router.post('/', (req, res) => {
    // check if body is empty
    if (!req.body) {
        return res.status(404).json({
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
                "message": "Failed creating a user!"
            })
            console.log("Failed creating a user!", err)
        })
})

// PUT - update user by id -----------------------------------------
// end point = /user/:id

// DELETE - delete a user by id ------------------------------------
// endpoint = /user/:id

module.exports = router