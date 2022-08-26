// vérification du token pour les routes ou le user doit être connecté
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

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
            next();
        });
    },
};
