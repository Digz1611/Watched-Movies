const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGO_URL, PORT, TOKEN_KEY } = process.env;

console.log("MONGO_URL:", MONGO_URL);
console.log("PORT:", PORT);
console.log("TOKEN_KEY:", TOKEN_KEY);

mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);
