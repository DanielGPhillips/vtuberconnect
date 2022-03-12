const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.SECRET;
const expiration = '2h';

module.exports = 
  generateToken= function (user) {
    const payload = { id: user.id, email:user.email, username: user.username}
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  };
