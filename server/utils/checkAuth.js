const { AuthenticationError } = require('apollo-server-express');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.SECRET;
const expiration = '24h';

module.exports = (context) => {
    const authHeader = context.headers.authorization;
    if (authHeader) {
        const token = authHeader.split('Bearer')[1];
        if (token) {
            try {
                const user = jwt.verify(token, secret, expiration);
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired token');
            }
        }
        throw new Error("Authentication toke must be 'Bearer [token]");
    }
    throw new Error('Authorization header must be provided');
};