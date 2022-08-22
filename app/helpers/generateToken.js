const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.ACCESS_TOKEN_SECRET || 'passphrase';

module.exports = {

    generateAccessToken(user) {
        return jwt.sign({ user }, secret, { expiresIn: '1800s' });
    },

};
