// File: models/movieModel.js
import mongoose from 'mongoose';

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        director: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Number,
            required: true,
        },
        review: {
            type: Number,
            required: true,
        },
        userId: mongoose.Schema.Types.ObjectId,
    },
    {
        timestamps: true,
    }
);

export const Movie = mongoose.model('Movie', movieSchema);
