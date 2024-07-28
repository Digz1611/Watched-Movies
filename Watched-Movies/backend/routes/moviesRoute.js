import express from 'express';
import { Movie } from '../models/movieModel.js';

const router = express.Router();

// Route for Save a new Movie
router.post("/", async (request, response) => {
    try {
        if (!request.body.title ||
            !request.body.director ||
            !request.body.releaseDate ||
            !request.body.review
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, director, releaseDate, review',
            });
        }
        const newMovie = new Movie({
            title: request.body.title,
            director: request.body.director,
            releaseDate: request.body.releaseDate,
            review: request.body.review,
            userId: request.body.userId
        });

        const movie = await Movie.create(newMovie);
        return response.status(201).send(movie);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All Movies from database
router.get('/user/:userId', async (request, response) => {
    try {
        const movies = await Movie.find({ userId: request.params.userId });

        return response.status(200).json({
            count: movies.length,
            data: movies
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route for Get One Movie from database by id
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const movie = await Movie.findById(id);

        return response.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});


// Route for Update a Movie
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.director ||
            !request.body.releaseDate ||
            !request.body.review
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, director, releaseDate',
            });
        }

        const { id } = request.params;

        const result = await Movie.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Movie not found' });
        }
        return response.status(200).send({ message: 'Movie updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for deleting a movie
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Movie.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Movie Not Found' });
        }

        return response.status(200).send({ message: 'Movie Deleted Succesfully' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;