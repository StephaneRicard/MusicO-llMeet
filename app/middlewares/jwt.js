/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const debug = require('debug')('app:jwt');

module.exports = {
    authenticateToken(req, res, next) {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.sendStatus(401);
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json(err);
            }
            req.user = user;
            debug(user);
            next();
        });
    },
};
