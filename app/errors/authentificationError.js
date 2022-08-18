const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // eslint-disable-next-line prefer-destructuring
            token = req.headers.authorization.split(' ')[1];
            // Verify the token
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            // Get user from token
            require.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorisez');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized token');
    }
});

module.export = {
    protect,
};
