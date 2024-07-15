import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const createSecretToken = (id) => {
  console.log("Token Key:", process.env.TOKEN_KEY); // Log to verify the key
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
