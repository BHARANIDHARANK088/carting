const express = require("express");
const router = express.Router();
const List = require("../models/listModel.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../verifyToken.js");

// create list
router.post("/", verifyTokenAndAdmin, async (request, response) => {
    const newList = new List(request.body);

    try {
        const list = await newList.save();
        response.status(201).json(list);
    } catch (error) {
        response.status(500).json(error);
    }
})

// delete
router.delete("/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
      await List.findByIdAndDelete(request.params.id);
      response.status(200).json("List has been deleted");
    } catch (error) {
      response.status(500).json(error); 
    }
})

// get
router.get("/", verifyTokenAndAuthorization, async (request, response) => {
    const typeQuery = request.query.type;
    const genreQuery = request.query.genre;

    let list = [];
    try {
      if (typeQuery)
      {
        if ( genreQuery )
        {
          list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: typeQuery, genre: genreQuery } }]);
        }
        else
        {
          list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: typeQuery } }]);
        }
      } 
      else
      {
        list = await List.aggregate([{ $sample: { size: 10 } }]);
      }
      response.status(200).json(list);
    } catch (error) {
      response.status(500).json(error); 
    }
})

module.exports = router;