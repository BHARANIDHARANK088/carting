const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../verifyToken.js");
const bcrypt = require("bcrypt");

// Update user
router.put("/:id", verifyTokenAndAuthorization, async (request, response) => {
    if ( request.body.password )
    {
        const salt = await bcrypt.genSalt(10);
        request.body.password = await bcrypt.hash(request.body.password, salt);
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(request.params.id, {
            $set: request.body
        }, {new: true});
        response.status(200).json(updatedUser);
    } catch (error) {
        response.status(500).json(error);
    }
})

// Delete user
router.delete("/:id", verifyTokenAndAuthorization, async (request, response) => {
    try {
      await User.findByIdAndDelete(request.params.id);
      response.status(200).json("User has been deleted");
    } catch (error) {
      response.status(500).json(error); 
    }
})

// get user
router.get("/find/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
      const user = await User.findById(request.params.id);
      const { password, ...info } = user._doc;
      response.status(200).json(info);
    } catch (error) {
      response.status(500).json(error);
    }
})

// get all users
router.get("/", verifyTokenAndAdmin, async (request, response) => {
    // newly created user
    const query = request.query.new;
    try {
      // const users = await User.find();
      const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
      response.status(200).json(users);
    } catch (error) {
      response.status(500).json(error);
    }
})

// get user stats
router.get("/stats", verifyTokenAndAdmin, async (request, response) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
              $project: {
                month: { $month: "$createdAt" }
              }
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
        ])
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json(error);
    }
})

module.exports = router;