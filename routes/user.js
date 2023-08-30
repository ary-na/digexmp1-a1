// User routes
const express = require("express");
const router = express.Router();

// GET - get all users
router.get('/', (req, res) => {
    const users = [
        {
            _id:1,
            firstName: "John",
            lastName:"Smith",
            email: "jsmith@curtin.edu.au"
        },
        {
            _id:2,
            firstName: "Arian",
            lastName:"West",
            email: "awest@curtin.edu.au"
        }
    ];
    res.json(users);
});

module.exports = router;