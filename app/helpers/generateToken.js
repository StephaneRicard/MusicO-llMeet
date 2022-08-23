const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    generateAccessToken(user) {
        const secret = process.env.ACCESS_TOKEN_SECRET || 'passphrase';
        const jwtExpires = parseInt(process.env.JWT_EXPIRES, 10);
        return jwt.sign({ user }, secret, { expiresIn: jwtExpires });
    },

};
