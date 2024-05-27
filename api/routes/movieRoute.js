const express = require("express");
const router = express.Router();
const Movie = require("../models/movieModel.js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../verifyToken.js");

// create movie
router.post("/", verifyTokenAndAdmin, async (request, response) => {
    const newMovie = new Movie(request.body);

    try {
        const movie = await newMovie.save();
        response.status(201).json(movie);
    } catch (error) {
        response.status(500).json(error);
    }
})

// update movie
router.put("/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(request.params.id, {
            $set: request.body
        }, {new: true});
        response.status(200).json(updatedMovie);
    } catch (error) {
        response.status(500).json(error);
    }
})

// Delete movie
router.delete("/:id", verifyTokenAndAdmin, async (request, response) => {
    try {
      await Movie.findByIdAndDelete(request.params.id);
      response.status(200).json("Movie has been deleted");
    } catch (error) {
      response.status(500).json(error); 
    }
})

// get movie
router.get("/find/:id", verifyTokenAndAuthorization, async (request, response) => {
    try {
      const movie = await Movie.findById(request.params.id);
      response.status(200).json(movie);
    } catch (error) {
      response.status(500).json(error);
    }
})

// get random movie
router.get("/random", verifyTokenAndAuthorization, async (request, response) => {
    const type = request.query.type;
    let movie;

    try {
        if ( type === "series" )
        {
            movie = await Movie.aggregate([
                { $match: {isSeries: true} },
                { $sample: {size: 1}}
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: {isSeries: false} },
                { $sample: {size: 1}}
            ]);
        }
        response.status(200).json(movie);
    } catch (error) {
        response.status(500).json(error);
    }
})

// get all movies
router.get("/", verifyTokenAndAdmin, async (request, response) => {
    try {
      const movies = await Movie.find();
      response.status(200).json(movies.reverse());
    } catch (error) {
      response.status(500).json(error);
    }
})

module.exports = router;