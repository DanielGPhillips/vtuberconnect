const { AuthenticationError } = require('apollo-server-express');

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.SECRET;

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split('Bearer')[1];
        if (token) {
            try {
                const user = jwt.verify(token, secret);
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired token');
            }
        }
        throw new Error("Authentication toke must be 'Bearer [token]");
    }
    throw new Error('Authorization header must be provided');
};