const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register user
router.post("/register", async (request, response) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(request.body.password, salt);

    const newUser = new User({
        username: request.body.username,
        email: request.body.email,
        password: hashedPassword
    });

    try {
        const user = await newUser.save();
        response.status(201).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
})

// login user
router.post("/login", async (request, response) => {
    try {
        const user = await User.findOne({email: request.body.email});
        if ( !user )
        {
            return response.status(401).json("User doesn't exist");
        }

        const validateUser = await bcrypt.compare(request.body.password, user.password);
        if ( !validateUser )
        {
            return response.status(400).json("Wrong password");
        }

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin
        }, 
            process.env.JWT_KEY,
            {expiresIn: "3d"}
        )
        
        const { password, ...info } = user._doc;

        response.status(200).json({...info, accessToken});

    } catch (error) {
        response.status(500).json(error);
    }
})

module.exports = router;