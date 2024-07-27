// // File: index.js
// import express from 'express';
// import { PORT, mongoDBURL } from './config.js';
// import mongoose from 'mongoose';
// import moviesRoutes from './routes/moviesRoute.js';
// import cors from 'cors';


// dotenv.config();

// const app = express();

// // Middleware for parsing request body
// app.use(express.json());

// // Middleware for handling CORS POLICY
// app.use(cors());

// app.get("/", (request, response) => {
//     console.log(request);
//     return response.status(234).send('Welcome to This Thing');
// });

// app.use('/movies', moviesRoutes);

// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log('App connected to database');
//         app.listen(PORT, () => {
//             console.log(`APP is listening on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });
    



// // File: index.js
// import express from 'express';
// import dotenv from 'dotenv';
// import { PORT, mongoDBURL } from './config.js';
// import mongoose from 'mongoose';
// import moviesRoutes from './routes/moviesRoute.js';
// import cors from 'cors';

// dotenv.config();

// const app = express();

// // Middleware for parsing request body
// app.use(express.json());

// // Middleware for handling CORS POLICY
// app.use(cors());

// app.get("/", (request, response) => {
//     console.log(request);
//     return response.status(234).send('Welcome to This Thing');
// });

// app.use('/movies', moviesRoutes);

// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log('App connected to database');
//         app.listen(PORT, () => {
//             console.log(`APP is listening on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });




import express, { response } from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import moviesRoutes from './routes/moviesRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// // Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://locaLhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to This Thing');
});

app.use('/movies' , moviesRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`APP is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
