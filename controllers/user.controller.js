const express = require('express');
const User = require('../models/user.model');

const router = express.Router();
 
router.post('/', async (req, res) => {
    const createdUser = await User.create(req.body);
    res.status(201).json(createdUser);
});

router.get("/", async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
})

module.exports = router;
