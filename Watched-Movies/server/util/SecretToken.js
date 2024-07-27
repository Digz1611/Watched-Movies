// File: utils/SecretToken.js
// Load environment variables from the .env file
require("dotenv").config();

// Import the jsonwebtoken library for creating and verifying JWTs
const jwt = require("jsonwebtoken");

// Function to create a secret token (JWT) using a user ID
module.exports.createSecretToken = (id) => {
  // Log the token key to verify it's correctly loaded from .env
  console.log("Token Key:", process.env.TOKEN_KEY);

  // Create and return a JWT with the user ID as the payload
  // The token is signed using the TOKEN_KEY from .env and set to expire in 3 days
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // Token expiration time in seconds (3 days)
  });
};
