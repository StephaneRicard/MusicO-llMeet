const debug = require('debug')('app: test');

module.exports = {

    // donner l'accès des aux routes destinées au momers seulement
    accessMomer(req, res, next) {
        const { role } = req.user;
        debug(role);

        if (role !== 'momer') {
            throw new Error('Not Authorized');
        }

        next();
    },

    // donner l'accès des aux routes destinées au musicos seulement
    accessMusicos(req, res, next) {
        const { role } = req.user;
        debug(role);

        if (role !== 'musicos') {
            throw new Error('Not Authorized');
        }

        // on passe la suite au controller
        next();
    },
};
