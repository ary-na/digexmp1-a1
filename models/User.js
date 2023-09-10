// @file    ./models/User.js

// Setup dependencies to create the user model.
const mongoose = require("mongoose");
const schema = mongoose.Schema;
require("mongoose-type-email");
const stream = require("stream");

// Create schema ---------------------------------------------------------------
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    accessLevel: {
        type: Number,
        required: true
    }
}, {timestamps: true});

// Create mongoose model -------------------------------------------------------
const userModel = mongoose.model("User", userSchema, "users");

// Export the User model as a module.
module.exports = userModel;