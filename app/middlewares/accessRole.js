const ApiError = require('../errors/apiError');

module.exports = {

    // donner l'accès des aux routes destinées au momers seulement
    accessMomer(req, res, next) {
        const { user } = req;
        const { role } = user;

        if (role !== 'momer') {
            throw new ApiError('You are not a momer', { statusCode: 404 });
        }

        next();
    },

    // donner l'accès des aux routes destinées au musicos seulement
    accessMusicos(req, res, next) {
        const { user } = req;
        const { role } = user;

        if (role !== 'musicos') {
            throw new ApiError('You are not a musicos', { statusCode: 404 });
        }

        // on passe la suite au controller
        next();
    },
};
